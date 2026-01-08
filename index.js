// Api key : 94961933
// // Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933
//  // or a spare key at ac26afe9

let result;

const loading = document.querySelector(".loading");
const moviesListEl = document.querySelector(".movie__list");
const input = document.querySelector("#search-input");

function searchMovies() {
  let searchTerm = input.value;
  if (!searchTerm.length > 0) {
    alert("Please enter a movie title to search.");
    return;
  }
  getMovies(searchTerm);
}

let moviesHTML = "";

async function showMovies(filter) {
  loading.classList.add("movies__loading");

  if (!result) {
    let result = await getMovies();
  }


  if (filter === "NEWEST_TO_OLDEST") {
    result.sort((a, b) => (b.Year) - (a.Year));
    // console.log("New");
  } else if (filter === "OLDEST_TO_NEWEST") {
    result.sort((a, b) => (a.Year) - (b.Year));
    // console.log("Old");
  }

  // SetTimeout here, to trigger the data to display after a wait. Need the timer to block the appearance of the data.
  setTimeout(() => {
    

    const moviesHTML = result.map((movie) => {
      return `<div class="movie__card--container">
         <img class="movie__card--img" src="${movie.Poster}" alt="">
         <h3>${movie.Title}</h3>
     <div class="movie__card--desc">
         <p>${movie.Year}</p>
     </div>
     <span class="tooltip" data-tooltip="Showtime Selection coming soon!">See Showtimes</span>

 </div>`;
    }).slice(0, 6)
      .join('');

      moviesListEl.innerHTML = moviesHTML;



  loading.classList.remove("movies__loading");
}, 3000);

}

showMovies();


async function sortMovies(event) {
  showMovies(event.target.value);
  
}


// setTimeout(()=> {
//   showMovies()
// })



// // Pulling up a random movie to suggest a watch... It works right now. I'll code up the landing for the result later.
// async function getRandomMovie(max) {

//  let random = Math.floor(Math.random() * max);
//  console.log(random)

//  let result = await fetch(
//     `https://www.omdbapi.com/?apikey=ac26afe9&s=dragon&page=${random}`//

//   )

// console.log(result)

//  let moviesChosen  =  await result.json();

//  let page = moviesChosen.Search[3];

// //  setTimeout(() => {
//   moviesListEl.innerHTML =
//     // suggestedMovieEl.innerHTML = page
//       // .map((info) => {

//          ` <div class="movie__card--container">
//                   <div class="movie__card">
//                   <img src=${page.Poster} class="movie__card--img">
//                     <h3>${page.Title}</h3>
//                       <span class="tooltip" data-tooltip="Showtime Selection coming soon!">See Showtimes</span>
//                   </div>
//                 </div>`;
//       // })
//       // .slice(0, 6)
//       // .join("");
// //  },2000)
// //  console.log(page[2].Title, page[2].Poster)
// console.log(page)

// }

// getRandomMovie(99)


// Re-written. I determined that I just want this function to just go get me an array of movies.  I'll write a new function that will display that (data/an array) on the screen, and allow me to filter.
async function getMovies(searchTerm) {

  loading.classList.add("movies__loading");
  // results.classList.add("movies__loading");
  moviesListEl.innerHTML = "";

  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTerm || "alone"}`
  );
  const moviesData = await movies.json();
  //   Had to drill down one more level through the omdbapi to expose the array.
  const allMovies = moviesData;
  result = moviesData.Search


}

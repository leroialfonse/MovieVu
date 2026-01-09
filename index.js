// Api key : 94961933
// // Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933
//  // or a spare key at ac26afe9

// Globals.
let result;

const loading = document.querySelector(".loading");
const moviesListEl = document.querySelector(".movie__list");
const input = document.querySelector("#search-input");
const warning = document.querySelector('.warning');




// Re-written. I determined that I just want this function to just go get me an array of movies.  I'll write a new function that will display that (data/an array) on the screen, and allow me to filter. Dont forget to call the function that actually shows movies. May need to consider some refactor... code is maybe a little WET right now.

async function getMovies(searchTerm) {

  
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTerm || "alone"}`
  );
  const moviesData = await movies.json();
  // console.log(moviesData)

  //   Had to drill down one more level through the omdbapi to expose the array.
  result = moviesData.Search
showMovies()

}


// Searching for movies with user input. Validating input recieved.
function searchMovies() {
  let searchTerm = input.value;
  if (!searchTerm.length > 0) {
    alert("Please Enter a Movie Title to Search.")
    return;
    
  }
  getMovies(searchTerm);
}


async function showMovies(filter) {
  // Checks if there's any data to display, and runs getMovies to fetch from the array and populate the front end if not.
  loading.classList.add("movies__loading"); 
  if (!result) {
    let result = await getMovies();
     
  }

// Filtering the movies by release year.
  if (filter === "NEWEST_TO_OLDEST") {
    result.sort((a, b) => (b.Year) - (a.Year));
    // console.log("New");
  } else if (filter === "OLDEST_TO_NEWEST") {
    result.sort((a, b) => (a.Year) - (b.Year));
    // console.log("Old");
  }


  // SetTimeout here, to trigger the data to display after a wait. Need the timer to block the appearance of the data.
  setTimeout(() => {


    // Rendering the API data to the page, by mapping through our array.
    const moviesHTML = result.map((movie) => {
      return `<div class="movie__card--container">
         <img class="movie__card--img" src="${movie.Poster}" alt="">
         <h3>${movie.Title}</h3>
     <div class="movie__card--desc">
         <p>${movie.Year}</p>
     </div>
     <span class="tooltip" data-tooltip="Showtime Selection coming soon!">See Showtimes</span>

 </div>`;
    }).slice(0, 6) // A slice to limit page results to 6.
      .join('');
      loading.classList.remove("movies__loading"); //Popping off the loading.
      moviesListEl.innerHTML = moviesHTML;
    }, 3000);
}
showMovies();


// Recieves teh search event info from the selector on the client side.
async function sortMovies(event) {
  showMovies(event.target.value);
  
}





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


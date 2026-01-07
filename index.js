// Api key : 94961933
// // Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933

let movies;

const moviesWrapper = document.querySelector(".movies");
const loading = document.querySelector(".loading");
const moviesListEl = document.querySelector(".movie__list");
const newEl = document.querySelector(".newPage");
const input = document.querySelector("#search-input");
const results = document.querySelector(".results");


function searchMovies() {
  let searchTerm = input.value;
  if (!searchTerm.length > 0) {
    alert("Please enter a movie title to search.");
    return;
  }
  getMovies(searchTerm);
}

async function getMovies(searchTerm) {
  loading.classList.add("movies__loading");
  results.classList.add("movies__loading");
  moviesListEl.innerHTML = "";
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=94961933&s=${searchTerm || "alone"}`
    // For cloning the repo.
    // `http://www.omdbapi.com/?apikey=94961933&s=${searchTerm || "alone"}`
  );
  const moviesData = await movies.json();
  //   Had to drill down one more level through the omdbapi to expose the array.
  const allMovies = moviesData.Search;
  // SetTimeout here, to trigger the data to display after a wait. Need the timer to block the appearance of the data. 
  setTimeout(() => {
    moviesListEl.innerHTML = allMovies
      .map((info) => {

        return ` <div class="movie__card--container">
                  <div class="movie__card">
                  <img src=${info.Poster} class="movie__card--img">
                    <h3>${info.Title}</h3>
                      <div class=movie__card--desc>
                        <p>${info.Year}</p>
                        <span class="tooltip" data-tooltip="Showtime Selection coming soon!">See Showtimes</span>
                      </div>
                  </div>
                </div>`;
      })
      .slice(0, 6)
      .join("");
    loading.classList.remove("movies__loading");
    results.classList.remove("movies__loading");
  }, 3000);

}


getMovies();

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
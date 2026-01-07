//   // // Api key : 94961933
//   // // Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933

//   let movies;

//   //   let moviesWrapper = document.querySelector('.movies');


//   // // async function main() {

//   // //   const moviesWrapper= document.querySelector('.movies')

//   // //     const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=alone,${searchTerm}`);
//   // //     const moviesData = await movies.json();
//   // //     //   Had to drill down one more level through the omdbapi to expose the array.
//   // //     const allMovies = moviesData.Search;
//   // //     // console.log(allMovies)

//   // //     const moviesListEl = document.querySelector('.movie-list');

//   // //     moviesListEl.innerHTML =


//   // //         allMovies.map((info) => movieHTML(info)
//   // //         ).slice(0,6).join('')
    
//   // // }

//   // // main();


//   async function secondary(searchTerm){
//     if (!searchTerm) {
//       const moviesWrapper = document.querySelector('.movies')
//       moviesWrapper.classList += ' books_loading'
//      await getMovies();

//       moviesWrapper.classList.remove('.books_loading')
//   }
//   else {
//     const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=${searchTerm}`);
//     const moviesData = await movies.json();
//     //   Had to drill down one more level through the omdbapi to expose the array.
//     const allMovies = moviesData.Search;
//     // console.log(allMovies)
    
//     const moviesListEl = document.querySelector('.movie-list');
    
//     moviesListEl.innerHTML =
    
//     allMovies.map((info) => {
      
//       return ` <div class="movie-card">
//                 <div class="movie-card__container">
//                 <img src=${info.Poster}>
//                   <h3>${info.Title}</h4>
//                     <p>${info.Year}</p>
//                 </div>
//               </div>`
// }).slice(0,6).join('')
  
//   }}

//   // secondary()

//     setTimeout(() => {
//       getMovies()
//     }, 6000)



//   function searchMovies(){
//     setTimeout(() => { 
//       searchTerm = document.querySelector('#search-input').value;
//           secondary(searchTerm)
//     }, 6000)
//   }





// async function getMovies(){


//   const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=alone`);
//   const moviesData = await movies.json();
//   //   Had to drill down one more level through the omdbapi to expose the array.
//   const allMovies = moviesData.Search;

//   const moviesListEl = document.querySelector('.movie-list');

//   moviesListEl.innerHTML =


//      allMovies.map((info) => {

//       return ` <div class="movie-card">
//                 <div class="movie-card__container">
//                 <img src=${info.Poster}>
//                   <h3>${info.Title}</h4>
//                     <p>${info.Year}</p>
//                 </div>
//               </div>`
// }).slice(0,6).join('')


// }

// getMovies();




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
    `http://www.omdbapi.com/?apikey=94961933&s=${searchTerm || "alone"}`
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
                      <p>${info.Year}</p>
                      <span class="tooltip" data-tooltip="Showtime Selection coming soon!">See Showtimes</span>
                  </div>
                </div>`;
      })
      .slice(0, 6)
      .join("");
    loading.classList.remove("movies__loading");
    results.classList.remove("movies__loading");
  }, 300000);

}


getMovies();

// // Pulling up a random movie to suggest a watch... It works right now. I'll code up the landing for the result later.
// async function getRandomMovie(max) {


//  let random = Math.floor(Math.random() * max);
//  console.log(random)

//  let result = await fetch(
//     `http://www.omdbapi.com/?apikey=ac26afe9&s=dragon&page=${random}`//

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
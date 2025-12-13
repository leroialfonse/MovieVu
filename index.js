// Api key : 94961933
// Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933

async function main() {

    const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=here`);
    const moviesData = await movies.json();
    //   Had to drill down one more level through the omdbapi to expose the array.
    const allMovies = moviesData.Search;
    // console.log(allMovies)

    const moviesListEl = document.querySelector('.movie-list');

    moviesListEl.innerHTML =


        allMovies.map((info) => movieHTML(info)
        ).join('')
   
}

main();



function searchMovies(e){
//   e.preventDefault

  searchTerm = document.querySelector('#search-input').value;
    secondary(searchTerm)

}

async function secondary(searchTerm){
     const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=${searchTerm}`);
    const moviesData = await movies.json();
    //   Had to drill down one more level through the omdbapi to expose the array.
    const allMovies = moviesData.Search;
    console.log(allMovies)

    const moviesListEl = document.querySelector('.movie-list');

    moviesListEl.innerHTML =


        allMovies.map((info) => movieHTML(info)
        ).join('')
}

function movieHTML(info) {
    return ` <div class="movie-card">
              <div class="movie-card__container">
              <img src=${info.Poster}>
                <h3>${info.Title}</h4>
                  <p>${info.Year}</p>
              </div>
            </div>`

}
  // Api key : 94961933
  // Api - OMDB : http://www.omdbapi.com/?i=tt3896198&apikey=94961933

  let movies;


  // async function main() {

  //   const moviesWrapper= document.querySelector('.movies')

  //     const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=alone,${searchTerm}`);
  //     const moviesData = await movies.json();
  //     //   Had to drill down one more level through the omdbapi to expose the array.
  //     const allMovies = moviesData.Search;
  //     // console.log(allMovies)

  //     const moviesListEl = document.querySelector('.movie-list');

  //     moviesListEl.innerHTML =


  //         allMovies.map((info) => movieHTML(info)
  //         ).slice(0,5).join('')
    
  // }

  // main();


  async function secondary(searchTerm){
      // const moviesWrapper = document.querySelector(".movies");
      // moviesWrapper.classList += ' movies__loading'
      // const movies = await searchMovies();
  //  moviesWrapper.classList.remove ('movies__loading');
    

    if (!searchTerm) {
      
      const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=alone`);

      const moviesData = await movies.json();
      //   Had to drill down one more level through the omdbapi to expose the array.
      const allMovies = moviesData.Search;
      // console.log(allMovies)
      
      const moviesListEl = document.querySelector('.movie-list');
      
      moviesListEl.innerHTML =
      
      
      allMovies.map((info) => movieHTML(info)
    ).slice(0,6).join('')
  }
  else {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=94961933&s=${searchTerm}`);
    const moviesData = await movies.json();
    //   Had to drill down one more level through the omdbapi to expose the array.
    const allMovies = moviesData.Search;
    // console.log(allMovies)
    
    const moviesListEl = document.querySelector('.movie-list');
    
    moviesListEl.innerHTML =
    
    allMovies.map((info) => movieHTML(info)
  ).slice(0,6).join('')
  }
  }
    secondary();

  function searchMovies(){
      searchTerm = document.querySelector('#search-input').value;
    return  new Promise((resolve) => {
        setTimeout(() => {
          resolve( 
          secondary(searchTerm)
          )
        }, 3000)
      })
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


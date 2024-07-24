const prompt = require("prompt-sync")();
const arrMovies = require("./arrMovies");

//Testar

function findMovie() {
  let option = prompt(`
        Digite:
        1. Buscar por título;
        2. Buscar por diretor;
        3. Buscar por ano;
        4. Buscar por gênero
        `);

  let movieFiltrado;

  if (option == "1") {
    let titleMovie = prompt("Título do fimlme: ");
    movieFiltrado = arrMovies.filter((movie) => movie.title == titleMovie);
  }

  if(option == "2"){
    let nameDirector = prompt("Nome do diretor: ")
    movieFiltrado = arrMovies.filter((movie) => movie.director == nameDirector);
  }

  if(option == "3"){
    let movieYear = prompt("Ano do filme: ")
    movieFiltrado = arrMovies.filter((movie) => movie.year == movieYear);
  }

  if(option == "4"){
    let movieGenre = prompt("Gênero do filme: ")
    movieFiltrado = arrMovies.filter((movie) => movie.genre == movieGenre)
  }
  for (var i = 0; i < movieFiltrado.length; i++){
    console.log(`Id: ${movieFiltrado[i].id}, Título: ${movieFiltrado[i].title}, Diretor: ${movieFiltrado[i].director}, Ano: ${movieFiltrado[i].year}, Gênero: ${movieFiltrado[i].genre}` )
  }
}

module.exports = findMovie
const arrMovies = require("./arrMovies");
const prompt = require("prompt-sync")();

function updateMovie() {
  const idChange = prompt("De qual id você quer alterar os dados? ");

  const i = arrMovies.findIndex((movie) => movie.id == idChange);
  if (i !== -1) {
    const question = prompt("Qual dado você quer alterar? ");
    if (question == "Titulo") {
      const newTitulo = prompt("Título: ");
      arrMovies[i].title = newTitulo;
    }

    if (question == "Diretor") {
      const newDirector = prompt("Diretor: ");
      arrMovies[i].director = newDirector;
    }

    if (question == "Ano") {
      const newYear = prompt("Ano: ");
      arrMovies[i].year = newYear;
    }

    if (question == "Genero"){
        newGenre = prompt(" Gênero: ")
        arrMovies[i].genre = newGenre
    }
  }
}

module.exports = updateMovie

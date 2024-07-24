const arrMovies = require("./arrMovies");
const prompt = require("prompt-sync")();

function addMovie() {
  let id = arrMovies.length + 1;
  let title = prompt("Título: ");
  let director = prompt("Diretor: ");
  let year = prompt("Ano: ");
  let genre = prompt("Gênero: ");

  const objectMovie = {   //Criando objeto literal
    id: id,
    title: title,
    director: director,
    year: year,
    genre: genre,
  };

  arrMovies.push(objectMovie);
}

module.exports = addMovie;

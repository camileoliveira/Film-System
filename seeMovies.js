const arrMovies = require("./arrMovies");

function seeMovies() {
  arrMovies.forEach((filme) => {
    console.log(
      `Id: ${filme.id}, Titulo: ${filme.title}, Diretor: ${filme.director}, Ano: ${filme.year}, Genero: ${filme.genre}`
    );
  });
}

module.exports = seeMovies

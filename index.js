const prompt = require("prompt-sync")();
const arrMovies = require("./arrMovies");
const seeMovies = require("./seeMovies");
const addMovie = require("./addMovie");
const updateMovie = require("./updateMovie");
const removeMovie = require("./removeMovie");
const findMovie = require("./findMovie");

function mainMenu() {
    option = prompt(`
      1. Listar filmes
      2. Adicionar novo filme
      3. Atualizar dados
      4. Remover filme
      5. Buscar
      6. Sair  
  `);
  
    while (option != "6") {
    if (option == "1") {
      seeMovies();
    }
    if (option == "2") {
      addMovie();
    }
    if (option == "3") {
      updateMovie();
    }
    if (option == "4") {
      removeMovie();
    }
    if (option == "5") {
      findMovie();
    }
    option = prompt(`
      1. Listar filmes
      2. Adicionar novo filme
      3. Atualizar dados
      4. Remover filme
      5. Buscar
      6. Sair  
  `);
  }
}
  mainMenu()


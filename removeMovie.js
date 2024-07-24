const prompt = require("prompt-sync")();
const arrMovies = require("./arrMovies")

function removeMovie(){
const idRemove = prompt("Id do filme que deseja remover: ")
const i = arrMovies.findIndex((movie) => movie.id == idRemove );
if(i !== -1){
    const confirm = prompt(`Tem certeza que deseja remover o id: ${idRemove} - filme: "${arrMovies[i].title}"? `)
    if(confirm.toLowerCase() == 'sim'){
        arrMovies.splice(i,1);
        console.log("Filme removido!")
    }
}
}

module.exports = removeMovie
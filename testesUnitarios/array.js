function encontrarIndice(array){
    let valorMaior = array[0], valorMenor = array[0];
    let indiceMaior = 0, indiceMenor = 0;
    
    for (let i = 1, len = array.length; i < len; i++){  // Armazena array.length antes
        if(array[i] > valorMaior){
            valorMaior = array[i];
            indiceMaior = i;
        }
        if(array[i] < valorMenor){
            valorMenor = array[i];
            indiceMenor = i;
        }
    }
    return {indiceMaior, indiceMenor};
}

let array = [100, 58, 66, 99, 1];
let { indiceMaior, indiceMenor } = encontrarIndice(array);

console.log("Maior índice:", indiceMaior);
console.log("Menor índice:", indiceMenor);

module.exports = encontrarIndice;

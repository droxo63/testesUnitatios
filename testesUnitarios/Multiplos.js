

function somaMultiplos() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 5 == 0 || i % 7 == 0) {
            console.log(i + " é múltiplo de 5 ou 7");
            soma += i;
        }
    }
    return soma;  // Retorna a soma
}

const resultado = somaMultiplos();
console.log("Soma dos múltiplos de 5 ou 7 abaixo de 1000:", resultado);


module.exports = somaMultiplos;
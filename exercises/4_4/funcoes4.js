
function VerificaQuantidadeCaracteres (array) {
    let maiorQuantidade = array[0];
    for (let indice in array) {
        if (maiorQuantidade.length < array[indice].length) {
            maiorQuantidade = array[indice];
        }
    }
    return maiorQuantidade;
}

console.log(VerificaQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
    


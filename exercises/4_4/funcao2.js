
function verificarMaior(arrayDeNumeros) {
    let indiceMaiorValor = 0;
    for(let indice in arrayDeNumeros){
       if(arrayDeNumeros[indiceMaiorValor] < arrayDeNumeros[indice]) {
            indiceMaiorValor = indice;
       }
    }
    return indiceMaiorValor;
}
console.log(verificarMaior([2, 3, 6, 7, 10, 1]));
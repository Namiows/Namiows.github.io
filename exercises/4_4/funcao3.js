
function verificarIndiceMenorValor(arrayDeNumeros) {
    let menorValor = 0;
    for(let indice in arrayDeNumeros) {
        if (arrayDeNumeros[menorValor] > arrayDeNumeros[indice]) {
            menorValor = indice;
        }
      }
      return menorValor;
}
console.log(verificarIndiceMenorValor([2, 4, 6, 7, 10, 0, -3]));


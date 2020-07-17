
function somaValores (numeros) {
    let somatorio = 0;

    for (let i = 1; i <= numeros; i += 1) {
        somatorio = somatorio + i; 
    }
    return somatorio;
}
console.log(somaValores([5]));

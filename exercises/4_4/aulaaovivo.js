function soma(valor1,valor2) {
    let soma = valor1 +valor2;
    return soma;
}
//let valorRetornado = soma(5, 10) console.log (valoRetornado) recebe o valor da function

function menorValor(valor1, valor2) {
    if(valor1 < valor2) {
        return "menor";
    }else if (valor1 === valor2) {
        return "igual";
    }else{
        return "maior";
    }
}
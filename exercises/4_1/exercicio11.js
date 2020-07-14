var salarioBruto = 2000.00;

var aliquotaINSS;
var aliquotaIR;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}
    else if(salarioBruto <= 2594.92) {
        aliquotaINSS = salarioBruto * 0.09;
    }
    else if(salarioBruto <= 5189.82) {
        aliquotaINSS = salarioBruto * 0.11;
    }
else{
    aliquotaINSS = 570.88;
}

var salario = salarioBruto - aliquotaIR;

if (salario <= 1903.98) {
    aliquotaIR = 0;
}
    else if (salario <= 2826.65) {
        aliquotaIR = salarioBruto * 0.075 - 142.80;
    }
    else if (salario <= 3751.05) {
        aliquotaIR = salario * 0.225 - 636.73;
    }
else {
    aliquotaIR = salario * 0.275 - 869.36;
};
    console.log("Salário líquido = " + salario - aliquotaIR);

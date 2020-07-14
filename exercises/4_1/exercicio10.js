let custoSemImposto = 150;
let valorVenda = 150;
let quantVendas = 1000;
let valorImposto = custoSemImposto*0.2;
let custoReal = custoSemImposto + valorImposto; 
let lucro = (valorVenda - custoReal)*quantVendas;

console.log(lucro);



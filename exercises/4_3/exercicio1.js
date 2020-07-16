
//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

//ler a quantidade de asteriscos
//imprimir n vezes os asteriscos na horizontal
//imprimir n vezes os astericos na vertical
let n = 5;
let indiceLinha;
let symbol = '*';
let InputLine = '';

for (let indiceLinha = 0; indiceLinha < n; indiceLinha += 1) {
    InputLine = InputLine + symbol;
};
for (indiceLinha = 0; indiceLinha < n; indiceLinha += 1) {
    console.log (InputLine);
};

       
//calcular o meio da matriz
//5 = 5/2 + 1 porque é numero impar
//definir a posicao de preenchimento

let n = 9;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
//controla o intervalo de preenchimento
let posicaoDireita = midOfMatrix;
let posicaoEsquerda = midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for(lineColumn = 1; lineColumn <= n; lineColumn += 1) {
        if(lineColumn > posicaoEsquerda && lineColumn < posicaoDireita) {
            lineInput = lineInput + symbol;
        }else {
            lineInput = lineInput + ' ';
        };
    };
    console.log(lineInput);
    lineInput = '';
    posicaoEsquerda--;
    posicaoDireita++;    
};



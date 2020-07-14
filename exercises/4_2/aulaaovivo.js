var numeros = []
//60opcoes 1 até 60
//escolha de no mínimo 6 números
//se acertar 4 números, voce recebe um valor pequeno
//se acertar 5 numeros, valor medio
//se acertar 6 numeros, JACKPOT
function retornaNumeroEntreUmESessenta() {
    return Math.ceil(math.random*60);
}

//local para armazenamento dos nossos nuúmeros
let firstPlay = [5, 18, 24, 34, 56, 57];
//array com numeros sorteados
let megaSenaNumbers = [];
let firstNumber = retornaNumeroEntreUmESessenta();
let secondNumber = retornaNumeroEntreUmESessenta();
let thirdNumber = retornaNumeroEntreUmESessenta();
let fourthNumber = retornaNumeroEntreUmESessenta();
let fifthNumber = retornaNumeroEntreUmESessenta();
let sixthNumber = retornaNumeroEntreUmESessenta();
megaSenaNumbers = firstNumber, secondNumber, thirdNumber,fourthNumber,fifthNumber, sixthNumber];

console.log(firstPlay);
console.log(megaSenaNumbers);


//verificar a quantidade de números acertados
//ter uma variavel que guarda a quantidade de números certos
//ter uma forma de comparar o dois arrays
numberOfHits = 0;

for (let posicao = 0; posicao < megaSenaNumbers.length; posicao+=1) {
    for(let posicaoSegundoarray = 0; posicaoSegundoarray < firstPlay.length; posicaoInterna += 1) {
        if (megaSenaNumbers[posicao] ===firstPlay[posicao]) {
            numberOfHits += 1;
        }
    }
}
console.log("Numeros Sorteados: " + megaSenaNumbers);
console.log("Números escolhidos: " + firstPlay);
console.log("Número de acertos: " + numberOfHits);

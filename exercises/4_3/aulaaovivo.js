//Queen attack
//quando uma peca poderá ser atacada ou não

//criar variáveis para guardar o local da rainha e da peça
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 7;
let posicaoPecaColuna = 7;

//falar que o atack é bem suscedido
let ataqueBemSucedido = false;
// verificar o ataque na horizontal
if (posicaoRainhaLinha === posicaoPecaLinha) {
    ataqueBemSucedido = true;
}

//verificar o ataque vertical
if (posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueBemSucedido = true;
}

//Verifica a Diagonal Superior direita
for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha + i;
    //linhaRainha => 5 6 7 8 9 10...
    let colunaRainha = posicaoRainhaColuna + i;
    //condicao de parada
    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    //tentativa de ataque teve ou nao efeito
    if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){

    ataqueBemSucedido = true;
    break;
}

//Diagonal Inferior direita

for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha - i;
    //linhaRainha => 5 6 7 8 9 10...
    let colunaRainha = posicaoRainhaColuna + i;
    //condicao de parada
    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }
    //tentativa de ataque teve ou nao efeito
    if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna);

    ataqueBemSucedido = true;
    break;
}
//diagonal susperior esquerda

for (let i = 1; i < 8; i += 1) {
    let linhaRainha = posicaoRainhaLinha + i;
    //linhaRainha => 5 6 7 8 9 10...
    let colunaRainha = posicaoRainhaColuna - i;
    //condicao de parada
    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    }

    //tentativa de ataque teve ou nao efeito
    if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){

    ataqueBemSucedido = true;
    break;
}
    //diagonal Inferior esquerda

for (let i = 1; i < 8; i += 1) {
     let linhaRainha = posicaoRainhaLinha - i;
     //linhaRainha => 5 6 7 8 9 10...
     let colunaRainha = posicaoRainhaColuna + i;
     //condicao de parada
     if (linhaRainha < 1 || colunaRainha > 8) {
         break;
     }
     //tentativa de ataque teve ou nao efeito
        if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna){
    
        ataqueBemSucedido = true;
        break;
       }
}


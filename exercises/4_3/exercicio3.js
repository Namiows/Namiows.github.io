let n = 5;
let linha = '';
let simbolo = '*';
let posicaoColunaInicial = n;

for(let i = 0; i < 0; i += 1){
    for(let j = 0; j < n; j += 1){
        if(j < posicaoColunaInicial){
            linha += "";
        }else{
            linha += simbolo;
        }

    }
    console.log(linha);
    linha ="";
}



//definir variaveis
//definir a posicao inicial da coluna com o valor de n (posicao mais a direita)
// ter um laco interno para percorrer da posicao zero até a posicao atual
    //preencher com os espacos vazios as posicoes menores que a 


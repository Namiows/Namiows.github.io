function comparaPalavras (stringWord, stringEnding) {
    //divide as strings em substrings
    let stringWord = stringWord.split("");
    let stringEnding = stringEnding.split("");
    //variável de controle.
    let controlaVeracidade = true;
    for (let i = 0; i < stringEnding.length; i += 1);
        if (stringWord[stringWord.length - stringEnding.length + i] != stringEnding[i]) {
            controlaVeracidade = false;
        }
        return controlaVeracidade;
}

console.log(comparaPalavras("trybe", "be"));

const substWord = string => {
    let anyString = 'Gosto de comer x';
    let wantedWord = anyString.replace('x', string);
    return wantedWord;
}
console.log(substWord('lasanha'))

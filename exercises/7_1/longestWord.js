const longestWord = phrase => {
  let words = phrase.split(' ');
  let largestLength = 0;
  let largestWord = '';

  for(let word of words) {
      if (word.length > largestLength) {
          largestLength = word.length
          largestWord = word
      }
  }
  return largestWord
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
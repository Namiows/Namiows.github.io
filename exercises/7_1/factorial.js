

function knowFactorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i += 1) {
      result = result*i;
    }

    return result;
}
console.log(knowFactorial(4));




let knowFactorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i += 1) {
    result = result*i;
  }
  return result;
}



const knowFactorial = num => {
  let result = 1;
  for (let index = 0; index <= num; index += 1) {
    result = result*i;
  }
  return result;
}
console.log(knowFactorial(4))

//RECURSIVA

const knowFactorial = num > 1? num * knowFactorial(num - 1) : 1
console.log(knowFactorial(4))
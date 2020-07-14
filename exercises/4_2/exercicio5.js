let array5 = [1, 10, 15, 30];
let gNumber = 0;

for (let i = 0; i < array5.length; i += 1) {
    if(array5[i] > gNumber){
        gNumber = array5[i];
    }
}
console.log(gNumber);
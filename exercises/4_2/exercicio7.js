let array7 = [10, 15, 20, 25, 30, 35, 70, 49];
let lnumber = 1000;

for (let i = 0; i < array7.length; i += 1) {
    if(array7[i] < lnumber){
        lnumber = array7[i];
    }
}

console.log(lnumber);

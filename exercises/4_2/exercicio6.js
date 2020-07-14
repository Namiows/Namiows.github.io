let array6 = [10, 15, 20, 25, 30, 35, 70, 49];
let odd = 0;

for(i = 0; i < array6.length; i += 1){
    if(array6[i] % 2 !== 0){
        odd += 1;
    }
}

if(array6[i] === 0){
    console.log("Nenhum valor impar encontrado");
} else{
    console.log(odd)
}
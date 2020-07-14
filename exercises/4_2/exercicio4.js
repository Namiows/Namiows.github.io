let array3 = [10, 15, 30, 40, 19];
let mediaAritmética = 0;

for (i = 0; i < array3.length; i+=1) {
    mediaAritmética += array3[i];
}
let total = mediaAritmética / array3.length;
console.log(total);
if(total>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor que 20");
}
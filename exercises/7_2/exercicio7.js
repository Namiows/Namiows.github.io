//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  const valueByNum = (obj,num) => Object.values(obj)[num];
  console.log(valueByNum(testObj,2));


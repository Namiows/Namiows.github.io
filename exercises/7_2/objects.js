const user = {
    name: 'Kesley',
    lastName: 'Lahoz',
    age: 28,
    respectfull: true
   };

//retorna keys sem os value

const showPropertiesAndValues = (user) => {
    const propertiesAndValues = Object.keys(user);
    //verifica no object.keys(user) qual a 
    for(i in propertiesAndValues) {
        console.log(`${propertiesAndValues[i]} : ${user[propertiesAndValues[i]]}`)
    }

};
console.log(`Usuario: `);
user.name = 'Nicolly'
user.naturalidade = 'sao paulo'
user.datadenascimento = "30/12/1992"
showPropertiesAndValues(user);


//entradas, propriedade + valor (retorna um array)

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue.length)
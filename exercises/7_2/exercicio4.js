//listar os valores de um objeto
const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

const listValue = (obj) => Object.values(obj);
console.log(listValue(países))
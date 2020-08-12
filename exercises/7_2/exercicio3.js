//Mostrar tamanho de um objeto
const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const size = (obj) => Object.keys(obj).length;
  console.log(size(países))
  
  
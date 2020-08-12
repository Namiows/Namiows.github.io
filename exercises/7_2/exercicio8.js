//Crie uma função que verifique se a entrada(chave e valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const check = (obj,key,value) => {
    //seleciona a entrada(propriedade+valor) do objeto e transforma em uma array de strings
  let array = Object.entries(obj);
  let found = false;
  //
  for(i in array) {
    if (array[i][0] === key && array[i][1] === value) found = true
  }
  return found;
}

console.log(check(lesson2,'professor','Carlos'))
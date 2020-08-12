//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

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
  //incluido todas os objetos e propriedades
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});

  const numberOfStudents = (obj) => {
      let amount = 0;
      //retorna o array de strings com os nomes das propriedades(keys), pois precisa selecionar aonde procurar. caso precisasse prcurar nos valores poderia incluir Object.values(obj)
      const array = Object.keys(obj);
      //verifica a existencia de uma propriedade chamada numeroEstudantes no array do passo anterior. 
      for(index in array) {
          //pega o valor da propriedade numeroEstudantes de um obeto, armazena em uma variavel e quando passa para o outro objeto, essa variavel vai SOMAR o value da propriedade com o dos prximos objetos.
          amount += obj[array[index]].numeroEstudantes;
      }
      return amount;
  }
  console.log(numberOfStudents(allLessons))

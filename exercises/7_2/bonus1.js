//Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5

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


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});


const studentsInMathClass = (obj) => {
    let amount = 0;
    let array = Object.values(obj)
    for (i in array) {
        if (obj[array[i]].materia === 'Matemática') {
            amount += obj[array[i]].numeroEstudantes;
        }
    }
    return amount;
}
console.log(studentsInMathClass(allLessons))

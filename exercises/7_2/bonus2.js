
//Crie uma função que deverá retornar um objeto que representa o relatório de uma professora, as aulas que ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


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


const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
        //se a posicao atual do array estiver em professor e esse for igual a name
      if (array[i].professor === name) {
        allLessons.push(array[i].materia)
        allStudent += array[i].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));
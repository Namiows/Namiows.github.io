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

  //inserir uma nova entrada em um objeto.

  const includingTurnInLesson2 = (obj, key, value) => {
    obj[key] = value
  };
  includingTurnInLesson2(lesson2,turno,'tarde');



  //mostrar somente as keys de um objeto
  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  const listingKeys = (obj) => Object.keys(obj);
  
  console.log(listingKeys(lesson1));
  
  //Mostrar o tamanho de um objeto

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  const showLength = (obj) => {
    Object.keys(obj).length;
    console.log(showLength(lesson1))
  }
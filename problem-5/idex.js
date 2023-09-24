function graduates(students) {
    let result = {};
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      let className = student.class;
  
      if (student.score > 75) {
        if (!result[className]) {
          result[className] = [];
        }
  
        let studentData = {
          name: student.name,
          score: student.score,
        };
  
        result[className].push(studentData);
      }
    }
  
    return result;
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  console.log(graduates([]));
  
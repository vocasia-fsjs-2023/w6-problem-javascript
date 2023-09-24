function highestScore(students) {
  // Code disini
    let result = {};
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
  
      // Mengecek apakah kelas sudah ada di objek result
      if (!result[student.class] || student.score > result[student.class].score) {
        result[student.class] = {
          name: student.name,
          score: student.score,
        };
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(highestScore([
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
  
  console.log(highestScore([
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
  
  console.log(highestScore([])); // {}
  
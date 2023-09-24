function graduates(students) {
  const result = {};

  for (const student of students) {
    if (student.score > 75) {
      const { name, score, class: className } = student;

      // Jika kelas belum ada dalam hasil, inisialisasi dengan array kosong
      if (!result[className]) {
        result[className] = [];
      }

      // Tambahkan informasi lulus ke kelas yang sesuai
      result[className].push({ name, score });
    }
  }

  return result;
}

// TEST CASES
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

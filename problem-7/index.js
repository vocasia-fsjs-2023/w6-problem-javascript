function highestScore(students) {
  // Membuat objek kosong untuk menyimpan hasil akhir
  let result = {};

  // Iterasi melalui setiap siswa dalam array students
  for (const student of students) {
    // Mendapatkan nama kelas, nama siswa, dan nilai siswa dari objek siswa saat ini
    const className = student.class;
    const studentName = student.name;
    const studentScore = student.score;

    // Memeriksa apakah kelas sudah ada dalam hasil atau jika nilai siswa saat ini lebih tinggi dari nilai yang ada dalam hasil
    if (!(className in result) || studentScore > result[className].score) {
      // Jika kelas belum ada dalam hasil atau nilai siswa saat ini lebih tinggi, tambahkan atau perbarui hasil untuk kelas tersebut
      result[className] = { name: studentName, score: studentScore };
    }
  }

  // Mengembalikan hasil akhir
  return result;
}

// TEST CASES
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

console.log(highestScore([]));

function graduates(students) {
  // Membuat objek kosong untuk menyimpan hasil lulusan
  const result = {};

  // Iterasi melalui array students
  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    // Cek apakah student lulus (score > 75)
    if (student.score > 75) {
      // Jika kelas belum ada dalam hasil, inisialisasi dengan array kosong
      if (!result[student.class]) {
        result[student.class] = [];
      }

      // Tambahkan student ke kelas yang sesuai dalam hasil
      //result[student.class] = object[array] yang digunakan untuk mengakses elemen dalam objek (dalam hal ini,
      //objek result) dengan menggunakan sebuah array (ekspresi lain) sebagai kunci or properti dinamis.
      //object adalah objek yang diakses, dan [array] mengindikasikan penggunaan array atau ekspresi lain sebagai 
      //kunci.

      result[student.class].push({ name: student.name, score: student.score });
    }
  }

  // Mengembalikan hasil lulusan dalam bentuk objek
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

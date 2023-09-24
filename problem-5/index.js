function graduates(students) {
  // Membuat objek hasil yang akan menyimpan daftar lulusan per kelas
  let result = {};

  // Iterasi melalui array students
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let className = student.class;

    // Mengecek apakah kelas sudah ada dalam objek hasil
    if (!result[className]) {
      result[className] = [];
    }

    // Jika nilai score lebih besar dari 75, tambahkan student ke kelas yang sesuai
    if (student.score > 75) {
      let studentInfo = {
        name: student.name,
        score: student.score,
      };
      result[className].push(studentInfo);
    }
  }

  return result;
}

// Contoh penggunaan
let students = [
  { name: 'Alfa', score: 80, class: 'A' },
  { name: 'Adi', score: 60, class: 'B' },
  { name: 'Sarah', score: 90, class: 'A' },
  { name: 'Tomi', score: 70, class: 'B' },
  { name: 'Rio', score: 85, class: 'A' },
];

let lulusan = graduates(students);
console.log(lulusan);

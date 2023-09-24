function generateTriangle(num) {
  let triangle = '';
  const maxRowLength = num * 2 - 1;

  for (let i = 1; i <= num; i++) {
    // Membuat string kosong untuk menyimpan setiap baris
    let row = '';

    // Menambahkan spasi sebelum karakter 'x' dan 'o'
    let spaces = Math.floor((maxRowLength - (i * 2 - 1)) / 2);
    row += ' '.repeat(spaces);

    // Menambahkan karakter 'x' dan 'o' sesuai dengan pola
    for (let j = 1; j <= i * 2 - 1; j++) {
      if (j % 2 === 1) {
        row += 'x';
      } else {
        row += 'o';
      }
    }

    // Menambahkan baris ke dalam segitiga
    triangle += row + '\n';
  }

  return triangle;
}

// Contoh penggunaan
let num1 = 3;
let num2 = 6;

console.log(generateTriangle(num1));
console.log(generateTriangle(num2));

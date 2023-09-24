let num = 6;

for (let i = 0; i < num; i++) {
  let row = '';

  // Membuat spasi sebelum karakter 'x'
  for (let j = 0; j < num - i - 1; j++) {
    row += ' ';
  }

  // Menambahkan karakter 'x' dan 'o' secara bergantian
  for (let k = 0; k < 2 * i + 1; k++) {
    if (k % 2 === 0) {
      row += 'x';
    } else {
      row += 'o';
    }
  }

  console.log(row);
}

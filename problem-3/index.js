let num = 3

// Tulis code dibawah sini.
for (let i = 0; i < num; i++) {
  let line = '';
  
  for (let j = 0; j < num - i - 1; j++) {
    line += ' ';
  }
  
  for (let k = 0; k < 2 * i + 1; k++) {
    if (k % 2 === 0) {
      line += 'x';
    } else {
      line += 'o';
    }
  }
  console.log(line);
}

console.log("");

let num1 = 6;
for (let i = 0; i < num1; i++) {
  let line = '';
  // Tambahkan spasi sebelum karakter 'x'
  for (let j = 0; j < num1 - i - 1; j++) {
    line += ' ';
  }
  
  for (let k = 0; k < 2 * i + 1; k++) {
    if (k % 2 === 0) {
      line += 'x';
    } else {
      line += 'o';
    }
  }
  console.log(line);
}

let num = 3

// Tulis code dibawah sini.
// dan console log hasil

for (let i = 1; i <= num; i++) {
  let row = '';
  
  for (let j = 1; j <= num - i; j++) {
    row += ' ';
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    if (k % 2 === 1) {
      row += 'x';
    } else {
      row += 'o';
    }
  }

  console.log(row);
}

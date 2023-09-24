let num = 6;

// Tulis code dibawah sini.
function generatePattern(num) {
  for (let a = 0; a < num; a++) {
    let row = "";

    // Tambahkan spasi sebelum karakter 'x'
    for (let j = 0; j <= num - a - 1; j++) {
      row += " ";
    }

    // Tambahkan karakter 'x' dan 'o' secara bergantian
    for (let k = 0; k < a * 2 + 1; k++) {
      if (k % 2 === 1) {
        row += "o";
      } else {
        row += "x";
      }
    }

    console.log(row);
  }
}
// dan console log hasil
console.log(generatePattern(num));

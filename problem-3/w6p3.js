let num = 3;

// Tulis code dibawah sini.
let output = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    output += ' ';
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    if (k % 2 === 0) {
      output += 'x';
    } else {
      output += 'o';
    }
  }

  output += '\n';
}

// dan console log hasil
console.log(output);

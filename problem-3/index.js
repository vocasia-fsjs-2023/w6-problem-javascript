let num = 3

// Tulis code dibawah sini.
let shefia = '';

for (let i = 1; i <= num; i++) {
  for (let j = num - i; j > 0; j--) {
    shefia += ' ';
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if (k % 2 === 0) {
      shefia += 'x';
    } else {
      shefia += 'o';
    }
  }
  shefia += '\n';
}

// dan console log hasil
console.log(shefia);
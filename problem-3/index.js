let num = 3

// Tulis code dibawah sini.
function generateTriangle(num) {
    // Loop untuk mengatur baris
    for (let i = 0; i < num; i++) {
      let baris = '';
  
      // Loop untuk mengatur kolom
      for (let j = 0; j < num - i - 1; j++) {

        baris += ' ';
      }
  
      // Loop menambah karakter 'x' dan 'o'
      for (let k = 0; k <= i * 2; k++) {
        if (k % 2 === 0) {
          baris += 'x';
        } else {
          baris += 'o';
        }
      }
      console.log(baris);
    }
  }

// dan console log hasil
generateTriangle(num);
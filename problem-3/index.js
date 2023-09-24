let num = 3

function generateTriangle(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
      // Buat string kosong untuk menyimpan baris saat ini
      let currentRow = '';
      
      // Tambahkan spasi untuk mendekatkan x ke kanan
      for (let j = 1; j <= num - i; j++) {
        currentRow += ' ';
      }
      
      // Tambahkan karakter 'x' dan 'o' secara bergantian
      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 1) {
          currentRow += 'x';
        } else {
          currentRow += 'o';
        }
      }
      
      // Tambahkan baris saat ini ke hasil
      result += currentRow + '\n';
    }
    return result;
  }
  
  // Contoh penggunaan
  let num1 = 3;
  let num2 = 6;
  
  console.log(generateTriangle(num1));
  console.log(generateTriangle(num2));
  
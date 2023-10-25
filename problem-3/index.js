let num = 3;

// Tulis code dibawah sini.
// dan console log hasil

function drawTriangle(num) {
    let triangle = '';
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num - i; j++) {
        triangle += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 1) {
          triangle += 'x';
        } else {
          triangle += 'o';
        }
      }
      triangle += '\n';
    }
    return triangle;
  }
  
  let result = drawTriangle(num);
  console.log(result);
  
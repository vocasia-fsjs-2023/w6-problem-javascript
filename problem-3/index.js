// Tulis code dibawah sini.
function triangle(num) {
    let output = '';
  
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num - i - 1; j++) {
        output += ' ';
      }
      for (let j = 0; j < i * 2 + 1; j++) {
        if ((i + j) % 2 === 0) {
          output += 'x';
        } else {
          output += 'o';
        }
      }
      output += '\n';
    }
  
    return output;
  }
  // Driver code
  let num = 3
  let pattern = triangle(num);
  console.log(pattern);

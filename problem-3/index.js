let num = 3
let num2 = 6;
// Tulis code dibawah sini.
// dan console log hasil
function segitiga(z) {
    let hasil = '';
  
    for (let r = 1; r <= z; r++) {
      let a = '';
  
      for (let c = 1; c <= z - r; c++) {
        a += ' ';
      }
  
      for (let m = 1; m <= 2 * r - 1; m++) {
        if (m % 2 === 0) {
            a += "o";
        } else {
            a += "x";
        }
    }
      
      
      hasil += a + '\n';
    }
  
    return hasil;
  }
  
 
  console.log(segitiga(num));
  console.log(segitiga(num2));
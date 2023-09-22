let num = 100;

function drawTriangle(num) {
  let itteration = 1;
  for (let i = num; i > 0; i--) {
    let rowString = "";

    for (let j = 0; j < i; j++) {
      rowString += " ";
    }

    for (let k = 0; k < itteration; k++) {
      if (k % 2 === 0) {
        rowString += "x";
      } else {
        rowString += "o";
      }
    }

    for (let j = 0; j < i; j++) {
      rowString += " ";
    }

    itteration += 2;
    console.log(rowString);
  }
}

console.log(drawTriangle(num));

// Tulis code dibawah sini.
// dan console log hasil
//    let rowString = "";
//    for (let index = 0; index < num * 2; index++) {
//      if (index - i >= 0 && index + i <= num * 2 - 1) {
//        rowString += "*";
//      } else {
//        rowString += " ";
//      }
//    }

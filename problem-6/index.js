function deepSum (arr) {
    // Code disini
    let hasil = 0;

  for (let r = 0; r < arr.length; r++) {
    const angka1 = arr[r];

    for (let o = 0; o < angka1.length; o++) {
      const angka2 = angka1[o];

      for (let m = 0; m < angka2.length; m++) {
        const nomor = angka2[m];

        if (typeof nomor === 'number') {
          hasil += nomor;
        }
      }
    }
  }

  return hasil === 0 ? 'No number' : hasil;
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number
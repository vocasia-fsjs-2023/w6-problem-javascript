function deepSum(arr) {
  // Inisialisasi variabel untuk menyimpan hasil penjumlahan
  let sum = 0;

  // Periksa jika array kosong
  if (arr.length === 0) {
    return 'No number';
  }

  // Iterasi melalui level 1 array dengan shift()
  while (arr.length > 0) {
    const level1 = arr.shift();
    
    // Iterasi melalui level 2 array dengan shift()
    while (level1.length > 0) {
      const level2 = level1.shift();
      
      // Iterasi melalui level 3 array dengan shift()
      while (level2.length > 0) {
        const num = level2.shift();
        
        // Tambahkan angka ke hasil penjumlahan
        sum += num;
      }
    }
  }

  return sum;
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

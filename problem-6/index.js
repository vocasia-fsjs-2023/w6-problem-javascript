function deepSum(arr) {
  // Inisialisasi variabel total untuk menyimpan jumlah
  let total = 0;

  // Fungsi rekursif untuk menjumlahkan elemen-elemen dalam array bersarang
  function sumNestedArray(nestedArr) {
    for (let i = 0; i < nestedArr.length; i++) {
      if (Array.isArray(nestedArr[i])) {
        // Jika elemen saat ini adalah array, panggil fungsi rekursif
        sumNestedArray(nestedArr[i]);
      } else {
        // Jika elemen saat ini adalah angka, tambahkan ke total
        total += nestedArr[i];
      }
    }
  }

  // Loop melalui setiap elemen dalam array utama
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Jika elemen saat ini adalah array bersarang, panggil fungsi rekursif
      sumNestedArray(arr[i]);
    } else {
      // Jika elemen saat ini adalah angka, tambahkan ke total
      total += arr[i];
    }
  }

  // Handle kasus array kosong
  if (total === 0) {
    return 'No number';
  }

  return total;
}

// TEST CASES
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

console.log(deepSum([])); // 'No number'

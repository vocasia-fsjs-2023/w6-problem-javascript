function cariMedian(arr) {
  const panjangArray = arr.length;
  const tengah = panjangArray >> 1;

  if (panjangArray % 2 === 0) {
    // Jika panjang array genap, median adalah rata-rata dua elemen tengah
    return (arr[tengah] + arr[tengah - 1]) / 2;
  } else {
    // Jika panjang array ganjil, median adalah elemen tengah
    return arr[tengah];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

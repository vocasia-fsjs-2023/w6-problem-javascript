function cariMedian(arr) {
  // Buat salinan array
  var sortedArr = arr.slice();
  
  // Tentukan panjang array
  var length = sortedArr.length;

  // Loop melalui array untuk mengurutkannya secara manual
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Tukar elemen jika diperlukan
        var temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }

  // Cek jika panjang array ganjil atau genap
  if (length % 2 === 1) {
    // Panjang array ganjil, median adalah elemen tengah
    return sortedArr[Math.floor(length / 2)];
  } else {
    // Panjang array genap, median adalah rata-rata dua elemen tengah
    var middle1 = sortedArr[length / 2 - 1];
    var middle2 = sortedArr[length / 2];
    return (middle1 + middle2) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

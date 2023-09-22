function cariMedian(arr) {
    // code disini
    const a = arr.slice().sort((a, b) => a - b);
  const angka = a.length;

  if (angka % 2 === 1) {
    // Jika panjang array ganjil, median adalah nilai tengah
    return a[Math.floor(angka / 2)];
  } else {
    // Jika panjang array genap, median adalah rata-rata dua nilai tengah
    const med = a[angka / 2 - 1];
    const med2 = a[angka / 2];
    return (med + med2) / 2;
  }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
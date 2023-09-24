function cariMedian(arr) {
    // code disini
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    var nilaiMedian = Math.floor(arr.length / 2);
  
    if (arr.length % 2 === 1) {
      return arr[nilaiMedian]; // Median untuk jumlah ganjil
    } else {
      return (arr[nilaiMedian - 1] + arr[nilaiMedian]) / 2; // Median untuk jumlah genap
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
function cariMedian(arr) {
    // code disini
    arr.sort((a, b) => a - b);
    const nilaiTengah = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
   
      return arr[nilaiTengah];
    } else {
      
      const middleValue1 = arr[nilaiTengah];
      const middleValue2 = arr[nilaiTengah - 1];
      return (middleValue1 + middleValue2) / 2;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
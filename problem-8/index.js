function cariMedian(arr) {
    // code disini
    const len = arr.length;
    const median =Math.floor(len/2)
    if (len % 2 === 1){
      return arr[median];
    }else {
      return ((arr[median-1] + arr[median])/2);
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
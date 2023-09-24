function cariMedian(arr) {
    // you can only write your code here!
        const panjang = arr.length;
        
        if (panjang % 2 === 0) {
          const tengah1 = arr[panjang / 2 - 1];
          const tengah2 = arr[panjang / 2];
          return (tengah1 + tengah2) / 2;
        }else {
             return arr[(panjang - 1) / 2];
        }

      };
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
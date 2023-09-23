function cariMedian(arr) {
  // code disini
  var length = arr.length;
  if (length % 2 === 1) {
    return arr[Math.floor(length / 2)];
  } else {
    var middle1 = arr[length / 2 - 1];
    var middle2 = arr[length / 2];
    return (middle1 + middle2) / 2;
  }
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
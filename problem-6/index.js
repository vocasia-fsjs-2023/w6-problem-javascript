function deepSum(arr) {
  let total = 0;

  function recursiveSum(array) {
    if (array.length === 0) {
      return;
    }
    const element = array.shift(); 
    if (Array.isArray(element)) {
      
      recursiveSum(element);
    } else if (typeof element === 'number') {
      
      total += element;
    }  
    recursiveSum(array);
  }  
  recursiveSum(arr);
  if (total === 0) {
    return 'No number';
  }

  return total;
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

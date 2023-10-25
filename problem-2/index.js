function ladder(word) {
//your code here
    let result = [];
    let letters = word.split('');
  
    for (let i = 0; i < letters.length; i++) {
      let row = letters.slice(0, letters.length - i);
      result.push(row);
    }
  
    return result;
  }
console.log(ladder('vocasia'));
//   [
//     [ 'v', 'o', 'c', 'a', 's', 'i', 'a' ],
//     [ 'v', 'o', 'c', 'a', 's', 'i' ],
//     [ 'v', 'o', 'c', 'a', 's' ],
//     [ 'v', 'o', 'c', 'a' ],
//     [ 'v', 'o', 'c' ],
//     [ 'v', 'o' ],
//     [ 'v'],
//   ]
function ladder(word) {
//your code here
const result = [];
  for (let i = 0; i < word.length; i++) {
    const a = [];
    for (let j = 0; j < word.length - i; j++) {
      a.push(word[j]);
    }
    result.push(a);
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
function ladder(word) {
//your code here
  let result = [];

  for (let i = 0; i < word.length; i++) {
    let baris = [];

    for (let j = 0; j < word.length - i; j++) {
      baris.push(word[j]);
    }

    result.push(baris);
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
function ladder(word) {
  //your code here
  const result = [];
  for (let a = 0; a < word.length; a++) {
    const k = [];
    for (let j = 0; j < word.length - a; j++) {
      k.push(word[j]);
    }
    result.push(k);
  }
  return result;
}

console.log(ladder("vocasia"));
//   [
//     [ 'v', 'o', 'c', 'a', 's', 'i', 'a' ],
//     [ 'v', 'o', 'c', 'a', 's', 'i' ],
//     [ 'v', 'o', 'c', 'a', 's' ],
//     [ 'v', 'o', 'c', 'a' ],
//     [ 'v', 'o', 'c' ],
//     [ 'v', 'o' ],
//     [ 'v'],
//   ]

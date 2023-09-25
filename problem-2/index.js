function ladder(word) {
//your code here
  const hasil = [];

  for (let i = word.length; i > 0; i--) {
    const row = [];

    for (let j = 0; j < i; j++) {
      row.push(word[j]);
    }

    result.push(row);
  }

  return hasil;
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
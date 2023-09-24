function ladder(word) {
  const hasil = [];
  const wordArray = word.split('');

  for (let i = 0; i < wordArray.length; i++) {
    const subArray = wordArray.slice(0, wordArray.length - i); 
    hasil.push(subArray); 
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

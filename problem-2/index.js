function ladder(word) {
//your code here
const hasil = [];
  for (let i = word.length; i >= 1; i--) {
    const barisBaru = [ ];
    for (let j = 0; j < i; j++) {
      barisBaru.push(word[j]);
    }
    hasil.push(barisBaru);
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
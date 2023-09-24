function ladder(word) {
  //your code here
  const ladders = [];

  let i = word.length;
  while (i > 0) {
    const newWord = word.slice(0, i);
    ladders.push(newWord.split(""));
    i--;
  }
  return ladders;
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

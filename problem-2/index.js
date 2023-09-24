function ladder(word) {
  const ladder = [];
  for (let i = 0; i < word.length; i++) {
    const step = [];
    for (let index = 0; index < word.length - i; index++) {
      step.push(word[index]);
    }
    ladder.push(step);
  }

  return ladder;
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

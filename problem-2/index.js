function ladder(word) {
    const result = [];
    const wordArray = [...word];
  
    for (let i = 0; i < wordArray.length; i++) {
      const currentRow = [];
      for (let j = 0; j < wordArray.length - i; j++) {
        currentRow.push(wordArray[j]);
      }
      result.push(currentRow);
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
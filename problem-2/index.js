function ladder(word) {
    const result = [];
    const len = word.length;
  
    for (let i = 0; i < len; i++) {
      const row = [];
      for (let j = 0; j < len - i; j++) {
        row.push(word[j]);
      }
      result.push(row);
    }
  
    return result;
  }
  
  // DRIVER CODE
  console.log(ladder('vocasia'));
  
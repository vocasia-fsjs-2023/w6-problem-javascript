function ladder(word) {
    //your code here
    const result = [];
      for (let i = word.length; i >= 1; i--) {
        const currentRow = [ ];
        for (let j = 0; j < i; j++) {
          currentRow.push(word[j]);
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
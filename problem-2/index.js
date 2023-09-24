function ladder(word) {
  const result = [];
  const letters = word.split('');
  
  for (let i = 0; i < letters.length; i++) {
    const subArray = letters.slice(0, letters.length - i);
    result.push(subArray);
  }
  
  return result;
}

console.log(ladder('vocasia'));

function ladder(word) {
//your code here
const result = [];
const wordLength = word.length;

for (let i = 0; i < wordLength; i++) {
    const row = [];
    for (let j = 0; j < wordLength - i; j++) {
    row.push(word[j]);
    }
    result.push(row);
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
function ladder(word) {
    var result = [];
    for (let i = 0; i < word.length; i++) {
        var row = [];
        for (let a = 0; a < word.length - i; a++) {
            row.push(word[a]);
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
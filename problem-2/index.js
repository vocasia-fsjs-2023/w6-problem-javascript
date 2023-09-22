function ladder(word) {
//your code here
 const kata = word.split(''); 
 const hasil = [];

 for (let r = kata.length; r > 0; r--){
    const kata2 = [];

    for (let o = 0; o < r; o++ ){
        kata2.push(kata[o]);
    }
    hasil.push(kata2)
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
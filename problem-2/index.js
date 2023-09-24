function ladder(word) {
    
const result = [];
const wLad = word.split(''); 
   
    for (let i = wLad.length; i > 0; i--){
        const der = [];
        
        for (let j = 0; j < i; j++ ){
            der.push(wLad[j]);
        }
        result.push(der)
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


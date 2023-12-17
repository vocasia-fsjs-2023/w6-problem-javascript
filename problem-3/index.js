let num = 3

// Tulis code dibawah sini.
// dan console log hasil
function segitiga(num) {
    for (let i = 0; i < num; i++) {
      let baris = '';
        for (let j = 0; j < num - i - 1; j++){
            baris += ' ';
        }
        for (let k = 0; k < i * 2 + 1; k++){
            if ( k % 2 === 1){
                baris += 'x';
            } else {
                baris += 'o';
            }
        }
        console.log(baris);
    }
}
segitiga(num);

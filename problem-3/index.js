let num = 3

// Tulis code dibawah sini.
let triangle = '';
for (let i=1;i<=num;++i) {
    let row = '';
    for (let j=1;j<=num - i; j++){
        row +=' ';
    }
    for (let h = 1;h <= 2 * i - 1;h++){
        if(h % 2 === 1){
            row += 'x';
        }else{
            row += 'o';
        }
    }
    triangle += row + '\n';
}
// dan console log hasil
console.log(triangle);
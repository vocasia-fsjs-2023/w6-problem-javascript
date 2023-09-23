let num = 6


// Tulis code dibawah sini.
// dan console log hasil
for (let i = 1; i <= num; i++) {
    let baris = '';
    for (let j = 1; j <= num - i; j++) {
        baris += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 0) {
            baris += 'o';
        } else {
            baris += 'x';
        }
    }
    console.log(baris);
}
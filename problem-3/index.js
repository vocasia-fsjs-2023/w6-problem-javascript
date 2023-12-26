function printTriangle(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
        // Membuat spasi di setiap baris
        for (let j = 1; j <= num - i; j++) {
            result += ' ';
        }

        // Membuat pola 'xox'
        for (let k = 1; k <= 2 * i - 1; k++) {
            result += (k % 2 === 1) ? 'x' : 'o';
        }

        // Pindah ke baris selanjutnya
        result += '\n';
    }

    return result;
}

// Contoh penggunaan
console.log(printTriangle(3));
console.log(printTriangle(6));

let num = 6;

// Tulis code dibawah sini.
function segitiga(n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            res += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            if (k % 2 === 0) {
                res += "x";
            } else {
                res += "o";
            }
        }
        res += "\n";
    }

    return res;
}

// dan console log hasil
console.log(segitiga(num));
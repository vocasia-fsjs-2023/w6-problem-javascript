function cariMedian(arr) {
    // Mengurutkan array
    arr.sort(function(a, b) {
        return a - b;
    });

    var tengah = Math.floor(arr.length / 2);

    // Jika jumlah elemen ganjil
    if (arr.length % 2 !== 0) {
        return arr[tengah];
    } else {
        // Jika jumlah elemen genap, hitung rata-rata dua elemen tengah
        return (arr[tengah - 1] + arr[tengah]) / 2;
    }
}

// Test cases
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

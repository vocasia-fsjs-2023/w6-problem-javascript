function ladder(word) {
    // Inisialisasi array kosong yang akan menyimpan tangga hasil
    let result = [];
  
    // Loop pertama untuk mengontrol berapa kali kita akan menambahkan baris ke result
    for (let i = 0; i < word.length; i++) {
      // Inisialisasi array kosong untuk setiap baris tangga
      let row = [];
  
      // Loop kedua untuk mengisi setiap baris dengan huruf-huruf dari kata input
      // Kami mengurangi panjang kata asli dengan i untuk memastikan huruf terakhir akan dihilangkan setiap kali kami menambahkan baris baru
      for (let j = 0; j < word.length - i; j++) {
        // Menambahkan huruf ke dalam baris saat ini
        row.push(word[j]);
      }
  
      // Menambahkan baris yang telah diisi ke dalam hasil
      result.push(row);
    }
  
    // Mengembalikan hasil tangga yang telah dibuat
    return result;
  }
  
  // Memanggil fungsi ladder dengan input 'vocasia' dan mencetak hasilnya
  console.log(ladder('vocasia'));
  
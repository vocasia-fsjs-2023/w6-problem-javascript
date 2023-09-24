function drawTriangle(num) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      
      // Tambahkan spasi untuk membuat segitiga rata kanan
      for (let j = 1; j <= num - i; j++) {
        row += ' ';
      }
      
      // Tambahkan 'x' dan 'o' sesuai dengan pola
      let countX = 0;
      let countO = 0;
      let k = 1;
      
      // Loop sampai kita mencapai panjang baris yang diinginkan
      while (k <= 2 * i - 1) {
        if (k % 2 === 0) {
          row += 'o';
          countO++;
        } else {
          row += 'x';
          countX++;
        }
        k++;
      }
  
      // Cetak baris dengan menggunakan proses mengubah string menjadi array
      let arrRow = '';
      for (let m = 0; m < row.length; m++) {
        if (countX > 0) {
          countX--;
        } else if (countO > 0) {
          arrRow += row[m];
          countO--;
        }
      }
  
      // Cetak baris yang sesuai dengan pola
      console.log(arrRow);
    }
  }
  
  let num = 6;
  drawTriangle(num);
  
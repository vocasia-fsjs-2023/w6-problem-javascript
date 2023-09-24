function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
  // Mengambil tahun sekarang
  const currentYear = new Date().getFullYear();
  
  // Loop melalui setiap elemen array
  for (let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, birthYear] = arr[i];
    let age = 'Invalid Birth Year';

    // Hitung umur jika birthYear valid
    if (birthYear) {
      age = currentYear - birthYear;
    }

    // Membuat objek literal
    const person = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age,
    };

    // Menampilkan data
    console.log(`${i + 1}. ${firstName} ${lastName}:`);
    console.log(person);
  }

  // Handle kasus array kosong
  if (arr.length === 0) {
    console.log('[]');
  }
}
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
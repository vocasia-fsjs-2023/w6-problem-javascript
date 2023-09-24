function changeMe(arr) {
    for (let i = 0; i < arr.length; i++) {
      let firstName = arr[i][0];
      let lastName = arr[i][1];
      let gender = arr[i][2];
      let birthYear = arr[i][3];
      let age;
  
      // Menghitung usia atau menandai sebagai 'Invalid Birth Year'
      if (birthYear === undefined || birthYear > new Date().getFullYear()) {
        age = 'Invalid Birth Year';
      } else {
        age = new Date().getFullYear() - birthYear;
      }
  
      // Membuat objek literal
      let person = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        age: age,
      };
  
      // Menampilkan hasil
      console.log(`${firstName} ${lastName}:`);
      console.log(person);
    }
  
    // Handle kasus jika array kosong
    if (arr.length === 0) {
      console.log('""');
    }
  }
  
  // TEST CASES
  changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male'],
  ]);
  
  
  changeMe([]);
  
  
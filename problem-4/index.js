function changeMe(arr) {
  // Mengambil tahun sekarang dengan menggunakan built-in Date object.
  var currentYear = new Date().getFullYear();
  
  // Iterasi melalui array 'arr' yang berisi data orang.
  for (var i = 0; i < arr.length; i++) {
    // Membuat objek 'person' untuk menyimpan informasi orang.
    var person = {};
    
    // Mengisi properti 'firstName', 'lastName', dan 'gender' dari data yang diberikan.
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];
    
    // Menghitung usia ('age') dengan mengurangkan tahun lahir dari tahun sekarang.
    // Jika tahun lahir tidak diisi atau lebih besar dari tahun sekarang, maka 'age' diatur ke 'Invalid Birth Year'.
    if (arr[i][3] === undefined || arr[i][3] > currentYear) {
      person.age = 'Invalid Birth Year';
    } else {
      person.age = currentYear - arr[i][3];
    }
    
    // Mencetak informasi orang ke konsol sesuai dengan format yang diminta.
    console.log((i + 1) + '. ' + person.firstName + ' ' + person.lastName + ':');
    console.log(person);
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

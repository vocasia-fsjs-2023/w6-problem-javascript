function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya

  var currentYear = new Date().getFullYear();

  for (var i = 0; i < arr.length; i++) {
    var p = {};

    p.firstName = arr[i][0];
    p.lastName = arr[i][1];
    p.gender = arr[i][2];

    if (arr[i][3]) {
      p.age = currentYear - arr[i][3];
    } else {
      p.age = 'Invalid Birth Year';
    }
    console.log((i + 1) + '. ' + p.firstName + ' ' + p.lastName + ':');
    console.log(p);
  }
  if (arr.length === 0) {
    console.log('""');
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
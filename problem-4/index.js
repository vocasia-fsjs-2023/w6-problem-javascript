function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  var year = 2020;

  for(var i = 0; i < arr.length; i++) {
    var person = {};

    var firstName = arr[i][0];
    var lastName = arr[i][1];
    var gender = arr[i][2];
    var birthYear = arr[i][3] || 'Invalid Birth Year';

    var age = birthYear === 'Invalid Birth Year' ? 'Invalid Birth Year' : year - birthYear;

    person.firstName = firstName;
    person.lastName = lastName;
    person.gender = gender;
    person.age = age;

    console.log(`${i + 1}. ${firstName} ${lastName}:`);
    console.log(person);

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
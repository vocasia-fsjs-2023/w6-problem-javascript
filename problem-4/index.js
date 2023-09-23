function changeMe(arr) {
  // you can only write your code here!
  var currentYear = new Date().getFullYear();

  for (var i = 0; i < arr.length; i++) {
    var person = {};
    person.firstName = arr[i][0];
    person.lastName = arr[i][1];
    person.gender = arr[i][2];

    if (arr[i][3]) {
      person.age = currentYear - arr[i][3];
    } else {
      person.age = 'Invalid Birth Year';
    }
    console.log((i + 1) + '. ' + person.firstName + ' ' + person.lastName + ':');
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
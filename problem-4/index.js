function changeMe(arr) {
  // you can only write your code here!
  let currentYear = new Date().getFullYear();

  for (let i = 0; i < arr.length; i++) {
    let firstName = arr[i][0];
    let lastName = arr[i][1];
    let gender = arr[i][2];
    let birthYear = arr[i][3];
    let age = 'Invalid Birth Year';

    if (birthYear && birthYear <= currentYear) {
      age = currentYear - birthYear;
    }

    let personData = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: age
    };

    console.log(`${firstName} ${lastName}:`);
    console.log(personData);
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


  
function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
    const currentYear = new Date().getFullYear();
  if (arr.length === 0) {
    console.log('""');
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const [firstName, lastName, gender, birthYear] = arr[i];
    let age;
    if (typeof birthYear === 'number' && birthYear <= currentYear) {
      age = currentYear - birthYear;
    } else {
      age = 'Invalid Birth Year';
    }
    const person = {
      firstName,
      lastName,
      gender,
      age,
    };
    console.log(`${firstName} ${lastName}:`);
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
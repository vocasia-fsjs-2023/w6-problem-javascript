function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
 const currentYear = new Date().getFullYear();

  
  for (let i = 0; i < arr.length; i++) {
    const data = arr[i];
    const firstName = data[0];
    const lastName = data[1];
    const gender = data[2];
    const birthYear = data[3];

    let age = 'Invalid Birth Year';
      
    if (birthYear && birthYear <= currentYear) {
      age = currentYear - birthYear;
    }
    
    console.log(`${firstName} ${lastName}: { firstName: '${firstName}', lastName: '${lastName}', gender: '${gender}', age: ${age} }`);
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

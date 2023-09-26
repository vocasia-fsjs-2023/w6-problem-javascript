function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
    let currentYear = new Date().getFullYear();
  
  for (let i = 0; i < arr.length; i++) {
    let obj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] ? currentYear - arr[i][3] : 'Invalid Birth Year'
};
       console.log(`${obj.firstName} ${obj.lastName}:`);
    console.log(obj);
  }
  
  // Handle empty array case
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

function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
      for (let i = 0; i < arr.length; i++) {
        let NamaOrang = {
          firstName: arr[i].shift() || 'First Name not provided',
          lastName: arr[i].shift() || 'Last Name not provided',
          gender: arr[i].shift() || 'Gender not provided',
          age: arr[i][0] ? new Date().getFullYear() - arr[i][0] : 'Invalid Birth Year',
        };
    
        console.log(`${i + 1}. ${NamaOrang.firstName} ${NamaOrang.lastName}:`);
        console.log(NamaOrang);
      }
    
      if (arr.length === 0) {
        console.log(" ");
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
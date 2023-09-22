function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
    let tahun = new Date().getFullYear();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let orang = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
    };

    if (arr[i][3] === undefined || arr[i][3] > tahun) {
      orang.age = 'Invalid Birth Year';
    } else {
      orang.age = tahun - arr[i][3];
    }

    result.push(orang);

    console.log(`${i + 1}. ${orang.firstName} ${orang.lastName}:`);
    console.log(orang);
  }

  if (arr.length === 0) {
    return '""';
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
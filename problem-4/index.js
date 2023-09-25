function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
      const currentYear = new Date().getFullYear();

  for (const person of arr) {
    const obj = {
      firstName: person[0],
      lastName: person[1],
      gender: person[2],
    };
    const birthYear = person[3] || null;
    const age = birthYear ? currentYear - birthYear : "Invalid Birth Year";
    if (obj.firstName === "Christ" && obj.lastName === "Evans" || obj.firstName === "Robert" && obj.lastName === "Downey") {
      const newArr = [...arr, obj];
      console.log(`${obj.firstName} ${obj.lastName}:
      {
        firstName: ${obj.firstName},
        lastName: ${obj.lastName},
        gender: ${obj.gender},
        age: ${age},
      }
    `);
    }
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
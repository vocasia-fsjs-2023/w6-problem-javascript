function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  const currentYear = 2019;

  for (let a = 0; a < arr.length; a++) {
    const person = arr[a];
    const firstName = person[0];
    const lastName = person[1];
    const gender = person[2];
    const birthYear = person[3];

    let age;
    if (!birthYear || birthYear > currentYear) {
      age = "Invalid Birth Year";
    } else {
      age = currentYear - birthYear;
    }

    console.log(`${firstName} ${lastName}:`, {
      firstName,
      lastName,
      gender,
      age,
    });
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
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

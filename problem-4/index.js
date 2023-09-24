function changeMe(arr) {
  function validateGender(str) {
    if (str.toLowerCase() === "male" || str.toLowerCase() === "female") {
      return str;
    }
    return "Invalid";
  }

  function validateBirthYear(year) {
    if (!year) {
      return "Invalid Birth Year";
    }

    if (year > new Date().getFullYear()) {
      return "Invalid Birth Year";
    }

    return new Date().getFullYear() - new Date(year).getFullYear();
  }

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] instanceof Array) {
      throw new Error("Invalid input at index " + i);
    }

    const person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: validateGender(arr[i][2] ?? ""),
      age: validateBirthYear(arr[i][3] ?? null),
    };

    console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
    console.log(person);
  }
}

// TEST CASES
console.log(
  changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
  ])
);
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
console.log(changeMe([])); // ""

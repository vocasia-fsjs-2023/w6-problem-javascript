function changeMe(arr) {
    // you can only write your code here!
    const tahunBaru = 2023;

    for (let i = 0; i < arr.length; i++) {
        let person = {};

        person.firstName = arr[i].shift(); 
        person.lastName = arr[i].shift();
        person.gender = arr[i].shift();   

        const tahunLahir = arr[i].shift(); 
        if (!tahunLahir || tahunLahir > tahunBaru) {
            person.age = 'Invalid Birth Year';
        } else {
            person.age = tahunBaru - tahunLahir;
        }

        console.log((i+1) + '. ' + person.firstName + ' ' + person.lastName + ':');
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

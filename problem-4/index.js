function changeMe(arr) {
  let tahunNow = new Date().getFullYear();
  
  if (arr.length === 0) {
    console.log('""');
    return;
  }
  
  for (let i = 0; i < arr.length; i++) {
    let personObj = {};
    personObj.firstName = arr[i][0];
    personObj.lastName = arr[i][1];
    personObj.gender = arr[i][2];
    
    if (arr[i][3]) {
      let age = tahunNow - arr[i][3];
      if (age >= 0) {
        personObj.age = age;
      } else {
        personObj.age = 'Invalid Birth Year';
      }
    } else {
      personObj.age = 'Invalid Birth Year';
    }
    
    console.log(${arr[i][0]} ${arr[i][1]}:, personObj);
  }
}

// Contoh penggunaan
let data = [
  ['Platinum', 'Fox', 'female', 1995],
  ['John', 'Doe', 'male', 2000]
];

changeMe(data);

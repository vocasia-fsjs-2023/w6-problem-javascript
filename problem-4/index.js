function changeMe(arr) {
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < arr.length; i++) {
        let person = arr[i];
        let personObj = {
            firstName: person[0],
            lastName: person[1],
            gender: person[2]
        };

        // Menentukan age
        if (person[3] && person[3] <= currentYear) {
            personObj.age = currentYear - person[3];
        } else {
            personObj.age = 'Invalid Birth Year';
        }

        // Menampilkan output
        console.log((i + 1) + '. ' + personObj.firstName + ' ' + personObj.lastName + ':');
        console.log(personObj);
    }

    if (arr.length === 0) {
        console.log('');
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);

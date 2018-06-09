const calculateGender = (users) => {
    const genderCount = {
        male: 0,
        female: 0,
    };
    users.map(user => {
        if (user.gender === "female") {
            genderCount.female++
        } else {
            genderCount.male++
        } 
    })
    return genderCount;
}

export {calculateGender}


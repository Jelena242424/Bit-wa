class User {
    constructor(name, email, photoSrc, dob, photoLarge, gender, last) {
        this.name = name;
        this.email = email;
        this.photoSrc = photoSrc;
        this.dob = dob;
        this.photoLarge = photoLarge;
        this.gender = gender;
        this.last = last;
    }

    hideEmail() {
        const emailArr = this.email.split("@");
        emailArr[0] = `${this.email.slice(0, 3)} ... ${this.email.slice(-3)}`;
        return emailArr.join("@");
    }
    formatDate() {
        let myDate = new Date(this.dob);
        let birthday = `${myDate.getDate()}.${myDate.getMonth()+1}.${myDate.getFullYear()}`;
        return birthday;
    }
    capitalLetter() {
        let myFirstName = this.name.charAt(0).toUpperCase()+this.name.slice(1);
        let myLastName = this.last.charAt(0).toUpperCase()+this.last.slice(1);
        let fullName = `${myFirstName} ${myLastName}`;
        return fullName;
    }
}

export  {User};
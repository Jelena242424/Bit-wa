class User {
    constructor(name, email, photoSrc, dob, photoLarge) {
        this.name = name;
        this.email = email;
        this.photoSrc = photoSrc;
        this.dob = dob;
        this.photoLarge = photoLarge;
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
}

export  {User};
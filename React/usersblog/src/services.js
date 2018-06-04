import User from './entities/User'
import { usersData } from "./data/data";

const getUsers = () => {

    const myUsers = usersData.map(user => {
        const name = `${user.name.title} ${user.name.first} ${user.name.last}`
        const email = user.email;
        const dob = user.dob.split(" ");
        const photoSrc = user.picture.thumbnail;
        const photoLarge = user.picture.large;
        return new User(name, email, photoSrc, dob[0], photoLarge)
    })
    return myUsers;
}

export default getUsers;
import { userEndPoint } from "../shared/userApi"
import {User} from './../entities/createUser'


const fetchUsers = () => {
    return fetch(userEndPoint)
        .then(response => {
            return response.json();
        })
        .then(usersData => {
            const myUsers = usersData.results.map(user => {
                const name = user.name.first
                const email = user.email;
                const dob = user.dob.split(" ");
                const photoSrc = user.picture.thumbnail;
                const photoLarge = user.picture.large;
                const gender = user.gender;
                const last = user.name.last;
                return new User(name, email, photoSrc, dob[0], photoLarge, gender)
            })
            return myUsers;
        })
}

export { fetchUsers }
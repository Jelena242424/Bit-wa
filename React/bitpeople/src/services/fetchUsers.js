import { userEndPoint } from "../shared/userApi"
import { User } from './../entities/createUser'
import { storageService } from "../shared/StorageService"


const fetchUsers = () => {
    if (storageService.has("allUsers")) {
        return loadUsers();
    }

    return fetch(userEndPoint)
        .then(response => {
            return response.json();
        }).then((users) => {
            storageService.save("allUsers", users);
            return adaptData(users);
        });
}

const loadUsers = () => {
    const myUsers = storageService.read("allUsers")
    
    return new Promise((resolve, reject) => {
        resolve(adaptData(myUsers))
    })
};

const adaptData = (users) => users.results.map(user => {
    const name = user.name.first
    const email = user.email;
    const dob = user.dob.split(" ");
    const photoSrc = user.picture.thumbnail;
    const photoLarge = user.picture.large;
    const gender = user.gender;
    const last = user.name.last;

    return new User(name, email, photoSrc, dob[0], photoLarge, gender, last)
})




export { fetchUsers }
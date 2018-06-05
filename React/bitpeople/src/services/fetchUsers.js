import { userEndPoint } from "../shared/userApi"

 const fetchUsers = () => {
    return fetch(userEndPoint)
        .then(function (response) {
            return response.json();
        })
}

export {fetchUsers}
const constants = {
    usersEndpoint: "http://api.github.com/search/users?q=dogs"
}

class User {
    constructor(id, username, photo) {
        this.id = id
        this.username = username
        this.photo = photo
    }
}

export const fetchUsers = () => {

    return fetch(constants.usersEndpoint)
        .then((response) => {
            return response.json();
        })
        .then((myResponse) => {
            const userListData = myResponse.items
            const userList = userListData.map((userData) => {
                const { id, avatar_url, login } = userData
                return new User(id, login, avatar_url)
            })
            return userList
        })
    }
    
    //     $.ajax(constants.usersEndpoint)
    //         .done(function (response) {
    //             const userListData = response.items
    //             const userList = userListData.map((userData) => {
    //                 const { id, avatar_url, login } = userData
    //                 return new User(id, login, avatar_url)
    //             })

    //             if (userList.length === 0) {
    //                 emptyHandler()
    //             } else {
    //                 doneHandler(userList)
    //             }

    //         })
    //         .fail((error) => {
    //             errorHandler(error)
    //         })
    // }



const dataModule = (function (request) {

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

    const fetchUsers = (doneHandler, emptyHandler, errorHandler) => {

        request(constants.usersEndpoint)
            .done(function (response) {

                const userListData = response.items

                const userList = userListData.map((userData) => {
                    const { id, avatar_url, login } = userData
                    return new User(id, login, avatar_url)
                })

                if (userList.length === 0) {
                    emptyHandler()
                } else {
                    doneHandler(userList)
                }

            })
            .fail((error) => {
                errorHandler(error)
            })
    }

    return {
        fetchUsers
    }

})(jQuery.get)

// UI module
const uiModule = (function ($) {

    const displayUsers = (userList) => {

        const $dataDiv = $('.data')

        userList.forEach(user => {
            const $userElement = createUserElement(user)
            $dataDiv.append($userElement)
        });

        // console.log(userList);
    }

    const createUserElement = (user) => {
        const { id, username, photo } = user;
        return $(`
            <div data-id="${id}" >
                <p>${username}</p>
                <img src="${photo}" width="50" height="50" alt="">
            </div>
            <hr>
        `)
    }

    const displayNoResults = () => {
        console.log("no results");
    }

    return {
        displayUsers,
        displayNoResults
    }
})(jQuery)

// Main controller
const mainController = (function (data, ui) {

    const onDoneHandler = (userList) => {
        ui.displayUsers(userList)
    }

    const onEmptyHandler = () => {
        ui.displayNoResults()
    }


    const init = () => {
        data.fetchUsers(onDoneHandler, onEmptyHandler)
    }

    return {
        init
    }

})(dataModule, uiModule)
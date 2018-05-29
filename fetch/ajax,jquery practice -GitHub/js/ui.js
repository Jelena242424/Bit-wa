

export const displayUsers = (userList) => {

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

export const displayNoResults = () => {
    console.log("no results");
}



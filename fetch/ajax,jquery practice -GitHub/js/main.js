import {displayUsers, displayNoResults} from './ui.js';
import {fetchUsers} from './data.js';

    const onDoneHandler = (userList) => {
        displayUsers(userList)
    }

    const onEmptyHandler = () => {
        displayNoResults()
    }


  export  const init = () => {
        fetchUsers()
        .then(onDoneHandler)
    }

 

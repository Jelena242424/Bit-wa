import { postsEndpoint } from './constants'

class APIService {

    get(path) {
        const requestUrl = path; 
        return fetch(requestUrl)
            .then(response => response.json())
    }
}

export const apiService = new APIService()



import { postsEndpoint } from "../shared/constants";
import { apiService } from "../shared/ApiService";
import { localStorageService } from "../shared/LocalStorage";
import {Post} from "../models/Post";

class PostService {

    fetchPosts() {
        const { adaptPosts } = this
        return apiService
            .get(postsEndpoint)
            .then((myData) => {
                const postsList = adaptPosts(myData)
                localStorageService.saveData("myPosts", postsList)
                return postsList;
            });
    }

    adaptPosts(postsList) {
        return postsList
            .map(posts => {
                const { title, body, userId, id } = posts
                return new Post(title, body, userId, id)
            });
    };

    loadPosts() {
        const myPosts = localStorageService.read("myPosts")
        return new Promise((resolve, reject) => {
            resolve(this.adaptPosts(myPosts))
        });
    };

}

export const postService = new PostService();



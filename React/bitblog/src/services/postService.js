import { postsEndpoint } from "../shared/constants";
import { authorsPosts } from "../shared/constants";
import { apiService } from "../shared/ApiService";
import { localStorageService } from "../shared/LocalStorage";
import { Post } from "../models/Post";

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
    };

    fetchAuthorsPosts(userId) {
        const { adaptUserPosts} = this
        return apiService
            .get(authorsPosts + userId)
            .then((myData) => {
                const authorAllPosts = adaptUserPosts(myData)
                localStorageService.saveData("authorPosts", authorAllPosts)
                return authorAllPosts
            });
    };

    adaptUserPosts(authorAllPosts) {
        return authorAllPosts
            .map(posts => {
                const { title, body, userId, id } = posts;
                return new Post(title, body, userId, id)
            });
    };

    adaptPosts(postsList) {
        return postsList
            .map(posts => {
                const { title, body, userId, id } = posts;
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



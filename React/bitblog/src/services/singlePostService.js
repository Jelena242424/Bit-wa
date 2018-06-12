import { singlePostEndpoint } from "../shared/constants";
import { apiService } from "../shared/ApiService";
import { localStorageService } from "../shared/LocalStorage";
import { Post } from "../models/Post";
import { postsEndpoint } from "../shared/constants";

class SinglePostService {

    fetchSinglePost(postId) {
        return apiService
            .get(singlePostEndpoint + postId)
            .then((mySinglePost) => {
                const singlePost = this.adaptSinglePost(mySinglePost)
                localStorageService.saveData("mySinglePost", singlePost)
                return singlePost
            });
    }

    createNewPost(newPost) {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return fetch(postsEndpoint, requestOptions);
    }

    adaptSinglePost(mySinglePost) {
        const title = mySinglePost.title;
        const body = mySinglePost.body;
        const userId = mySinglePost.userId;
        const id = mySinglePost.id;
        return new Post(title, body, userId, id)
    };

    loadSinglePost() {
        const mySinglePost = localStorageService.read("mySinglePost")
        return new Promise((resolve, reject) => {
            resolve(this.adaptSinglePost(mySinglePost))
        });
    };
};

export const singlePostService = new SinglePostService;
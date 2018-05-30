import {fetchData} from "./data.js";
import {displayPosts} from "./ui.js";

export const init = ()=> {
    fetchData().then(displayPosts);
};
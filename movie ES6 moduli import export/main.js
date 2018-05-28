import {addMovie} from './data.js';
import {getFormData, showMovieData} from './ui.js'

export const init = () => {
    
    document.querySelector(".add-movie").addEventListener("click", event => {
         const uiData = getFormData();
         const movie = addMovie(uiData);
         showMovieData(movie);
    })
};

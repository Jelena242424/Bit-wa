import {
    collectedData,
    clearInput,
    displayError,
    displayMovie,
    displayMovieLength
} from './ui.js';
import {
    store,
    isValid,
    createMovie,
    calculateMovieLength
} from './data.js';


const eventHandler = () => {
    const movieData = collectedData();

    const validationMessage = isValid(movieData.title, movieData.length, movieData.genre);
    if (!validationMessage) {
        displayError(validationMessage);
        return
    }

    const movie = createMovie(movieData.title, movieData.length, movieData.genre);
    displayMovie(movie);
    clearInput();
    displayMovieLength(calculateMovieLength());
}


export const init = () => {
    const addMovieBtn = document.querySelector("#button-movie");
    addMovieBtn.addEventListener("click", eventHandler)

}
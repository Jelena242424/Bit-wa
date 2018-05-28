
export const getFormData = () => {
    const titleElement = document.querySelector(".movie-title");
    const lengthElement = document.querySelector(".movie-length");
    const genreElement = document.querySelector(".movie-genre");

    const title = titleElement.value;
    const duration = parseInt(lengthElement.value);
    const genre = genreElement.value;

    const formInputData = {
        title,
        duration,
        genre
    };

    return formInputData;
};

export const showMovieData = (movie) => {
    const movieListElement = document.querySelector(".movie-list");
    movieListElement.innerHTML += `${movie.getData()} </br>`;
};

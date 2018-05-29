var titleInput = document.querySelector("#title");
var genreInput = document.querySelector("#genre");
var lengthInput = document.querySelector("#length");

export const collectedData = () => {

    var title = titleInput.value;
    var genre = genreInput.value;
    var length = lengthInput.value;

    return {
        title: title,
        genre: genre,
        length: length
    }
}

export const clearInput = () => {
    titleInput.value = "";
    genreInput.value = "";
    lengthInput.value = "";
}

export const displayError = () => {
    var validation = document.querySelector(".validation");
    validation.textContent = "Invalid input!";
}

export const displayMovie = (movie) => {
    var movieListUl = document.querySelector("#movie-list");
    var li = document.createElement("li");
    li.textContent = movie.getMovieInfo();
    movieListUl.appendChild(li);

}

export const displayMovieLength = (totalLength) => {
    var totalLengthDiv = document.querySelector("#total-length");
    totalLengthDiv.textContent = totalLength;

}



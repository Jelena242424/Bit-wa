export const store = {
    movies: []
}

class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;

    }
    getMovieInfo() {
        return `${this.title}, ${this.genre}`;
    }
}

export const isValid = (title, length, genre) => {

    if (!title || !length || !genre) {

        return false;
    }

    if (typeof length !== "string") {
        return false;
    }

    if (length > 400) {
        return false;
    }

    return true;
}

export const createMovie = (title, length, genre) => {
    var createdMovie = new Movie(title, length, genre);
    store.movies.push(createdMovie);
    return createdMovie;
}

//movieLength
export const calculateMovieLength = () => {
    var totalMovieLength = 0;
    store.movies.forEach(function (movie) {
        totalMovieLength += movie.length;
    })
    return totalMovieLength;
}




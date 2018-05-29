class Movie {
    constructor(title, genreObj, length) {
        this.title = title;
        this.genre = genreObj;
        this.length = length;
    }
    getData() {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    };
}

module.exports = Movie;
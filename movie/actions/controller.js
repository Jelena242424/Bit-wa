const Genre = require("../entities/genre");
const Movie = require("../entities/movie");
const Program = require("../entities/program");
const Festival = require("../entities/festival");

function createMovie(mTitle, mLength, genreName) {
    var genreObj = new Genre(genreName);
    // var movie = new Movie(movieTitle, new Genre(genreName), mLength);
    var movie = new Movie(mTitle, genreObj, mLength);

    return movie;
}

function createProgram(dateStr) {
    var date = new Date(dateStr);
    var program = new Program(date)
    return program;
}

function createFestival() {
    var weekendFestival = new Festival("Weekend festival");
    return weekendFestival;    
}

module.exports = {
    createMovie,
    createProgram,
    createFestival
} 
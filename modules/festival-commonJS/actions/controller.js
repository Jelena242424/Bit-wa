const Genre = require('../entities/Genre');
const Movie = require('../entities/Movie');
const Program = require('../entities/Program');
const Festival = require('../entities/Festival');

const createMovie = (mTitle, mLength, genreName) => {
    var genreObj = new Genre(genreName);
    // var movie = new Movie(movieTitle, new Genre(genreName), mLength);
    var movie = new Movie(mTitle, genreObj, mLength);

    return movie;
}

const createProgram = (dateStr) => {
    var date = new Date(dateStr);
    var program = new Program(date)
    return program;
}

const createFestival = (name) => {
    var festival = new Festival(name);
    return festival;
}
module.exports = {
    createMovie,
    createProgram,
    createFestival
}

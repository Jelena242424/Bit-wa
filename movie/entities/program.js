class Program {
    constructor (date) {
    this.date = date;
    this.listOfMovies = [];
    }
    getProgramDuration() {
        var programLength = 0;
        this.listOfMovies.forEach(function (movie) {
            programLength += movie.length;
        }, this);
    
        return programLength;
    };
    addMovie(movie) {
        this.listOfMovies.push(movie);
    };

    getData() {
        var date = this.date;
        var movies = this.listOfMovies;
        var programDuration = this.getProgramDuration();
        var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    
        var outputStr = dateStr + ", program duration " + programDuration + "min\n";
    
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            outputStr += "\t\t" + movie.getData() + "\n";
        }
    
        return outputStr;
    };
}

module.exports = Program;




class Festival{
    constructor (name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    addProgram(program) {
        this.listOfPrograms.push(program);
    };
    getMoviesCount() {
        var programs = this.listOfPrograms;
        var moviesCount = 0;
    
        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            moviesCount += program.listOfMovies.length;
        }
    
        return moviesCount;
    };
    getData() {
        var festivalName = this.name;
        var programs = this.listOfPrograms;
        var totalMovieCount = this.getMoviesCount();
    
        var outputStr = festivalName + " has " + totalMovieCount + " movie titles\n"
    
        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            outputStr += "\t" + program.getData();
        }
    
        return outputStr;
    };
};

module.exports = Festival;
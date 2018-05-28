'use strict';



(function () {
    

    /**
     * Returns the created Movie
     * @param {string} mTitle - The movie title
     * @param {number} mLength - The movie length in minutes
     * @param {string} genreName - The genre name
     */
    
    // Create movies
    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Towe", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");

    // Create programs
    var actionProgram = createProgram("Oct 28 2017");
    var comedyProgram = createProgram("Oct 29 2017");

    // Add action movies to action program
    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);

    // Add comedy movies to comedy program
    comedyProgram.addMovie(deadpool);

    // Create festival
 

    // Add programs to the festival 
    weekendFestival.addProgram(actionProgram);
    weekendFestival.addProgram(comedyProgram);

    // Output festival data 
    console.log(weekendFestival.getData());

})();
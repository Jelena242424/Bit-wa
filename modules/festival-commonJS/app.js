
const { createMovie, createProgram, createFestival } = require('./actions/controller');
// Create movies
const spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
const planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
const darkTower = createMovie("The Dark Towe", 95, "Western");
const deadpool = createMovie("Deadpool", 108, "Comedy");

// Create programs
const actionProgram = createProgram("Oct 28 2017");
const comedyProgram = createProgram("Oct 29 2017");

// Add action movies to action program
actionProgram.addMovie(spiderman);
actionProgram.addMovie(planetApes);
actionProgram.addMovie(darkTower);

// Add comedy movies to comedy program
comedyProgram.addMovie(deadpool);

// Create festival
const weekendFestival = createFestival("Weekend festival");
// Add programs to the festival 
weekendFestival.addProgram(actionProgram);
weekendFestival.addProgram(comedyProgram);

// Output festival data 
console.log(weekendFestival.getData());



const data= {
    movieList : []
};

class MakeMovie {
    constructor (title, duration, genre) {
        this.title= title;
        this.duration= duration;
        this.genre= genre;
    }

    getData() {
        return `${this.title} ${this.duration} ${this.genre}`;
    }
};

export const addMovie = ({title, duration, genre}) => {
    const movie = new MakeMovie (title, duration, genre);
    data.movieList.push(movie);
    return movie;
};



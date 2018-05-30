
class Show {
    constructor(name, image, id, summary = "", seasons = "", cast = "") {
        this.name = name;
        this.image = image;
        this.id = id;
        this.summary = summary;
        this.seasons = seasons;
        this.cast = cast;
    }
}


export const loadData = function () {

    const listRequestUrl = "http://api.tvmaze.com/shows";

    return fetch(listRequestUrl)
        .then((response) => {
            return response.json();
        })
        .then((listShows) => {
            const list = listShows;
            list.sort(function (curr, next) {
                const a = curr.rating.average;
                const b = next.rating.average;
                return b - a;
            });

            const reformedList50 = list.slice(0, 50).map(singleShowObj => {
                const show = new Show(singleShowObj.name, singleShowObj.image.medium, singleShowObj.id);
                return show;
            });

            return reformedList50;

        })
};


export const searchData = function (searchValue) {
    const searchUrl = `http://api.tvmaze.com/search/shows?q=${searchValue}`

    return fetch(searchUrl)
        .then((response) => {
            return response.json();
        })
        .then((list) => {
            return list
        });
};


export const fetchSingleShow = function (id) {
    const embeddedUrl = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
    return fetch(embeddedUrl)
        .then((response) => {
            return response.json();
        })
        .then((show) => {
             const showDetail = new Show(show.name, show.image.original, show.id, show.summary, show._embedded.seasons, show._embedded.cast);
             return showDetail;
        })
}



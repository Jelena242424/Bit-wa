
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


    export const loadData = function (doneHandler) {

        const listRequestUrl = "http://api.tvmaze.com/shows";
        fetch(listRequestUrl)
            .then(function(response) {
                return response.json();
            })

        $.ajax({
            url: "http://api.tvmaze.com/shows",
            method: "GET"
        }).done(function (listShows) {
            const list = listShows;
            list.sort(function (curr, next) {
                const a = curr.rating.average;
                const b = next.rating.average;
                return b - a;
            });

            const reformedList50 = list.slice(0, 50).map(singleShowObj => {
                const show = new Show(singleShowObj.name, singleShowObj.image.medium, singleShowObj.id);
                return show
            });
            
            doneHandler(reformedList50);
            //loadData je funkcija, koju je pozvao main controler. Ona preko ajaxa i druge logike daje rezultat reformedlist50.
            // Da bi smo podatke vratili mainu, potrebna nam je callback funkcija doneHandler, koja je preuzela podatke reformedlista50 i prosledio loadData.

        });
    };

    export const searchData = function (doneHandler) {
        const $searchInput = $("#search-field");
        const searchValue = $searchInput.val();
        $.ajax({
            url: `http://api.tvmaze.com/search/shows?q=${searchValue}`,
            method: "GET"
        }).done(function(list){
            doneHandler(list);
        })
    };


    export const fetchSingleShow = function (id, doneHandler) {
        $.ajax({
            url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
            method: "GET"
        }).done(function(show) {
            const showDetail = new Show(show.name, show.image.original, show.id, show.summary, show._embedded.seasons, show._embedded.cast);
            
            doneHandler(showDetail);
        });

    }




   export const showData = function (showList) {
        const $display = $(".display");
        let showListOnPage = "";
        for (let i = 0; i < showList.length; i++) {
            showListOnPage += (`<div class="show-card col-4" data-id='${showList[i].id}'>
                                <img src='${showList[i].image}'><p>${showList[i].name}<p></div>`);
        }
        $display.html(showListOnPage);
    }

    export const loadInfoPage = function(singleShowInfo) {
        const $showTitle= $(".show-title h1");
        $showTitle.text(singleShowInfo.name);
        const $displayImage = $(".detail-show-image");
        $displayImage.html(`<img src='${singleShowInfo.image}'>`);
        const $displayShowDetail = $(".show-detail-text");
        $displayShowDetail.html(singleShowInfo.summary);
    }

   export const loadSeasonsInfo = function(singleShowInfo) {
        const listOfSeasons = singleShowInfo.seasons;
        const $seasonsNumber = $(".season-number");
        $seasonsNumber.text(`Seasons (${listOfSeasons.length})`);
        const $displaySeasonDates = $(".seasons-dates");
        let showSeasonDatesOnPage = "";
        for (let i = 0; i < listOfSeasons.length; i++) {
            if (listOfSeasons[i].premiereDate) {
                showSeasonDatesOnPage += `<li>${listOfSeasons[i].premiereDate}  ${listOfSeasons[i].endDate}</li>`;
            } else {
                showSeasonDatesOnPage += `<li>TBO</li>`;
            }
        }
        $displaySeasonDates.html(showSeasonDatesOnPage);
    }

    export const loadCast = function(singleShowInfo) {
        const listOfCasts = singleShowInfo.cast;
        const $displayCast = $(".show-cast");
        let showCastOnPage = "";
        for (let i = 0; i < listOfCasts.length; i++) {
            showCastOnPage += `<li>${listOfCasts[i].person.name}</li>`;
        }
        $displayCast.html(showCastOnPage);
    }

   export const showDropdownData = function(list) {
        const $dropdownMenu = $(".dropdown-menu");
        let showSearch = "";
        if (list.length ===  0) {
            showSearch = `<span class="dropdown-item">No results found.</span>`;
        }
        for (let i = 0; i < list.length; i++) {
            showSearch += `<span class="dropdown-item" data-id="${list[i].show.id}">${list[i].show.name}</span>`;
            if (i > 9) {
                break;
            }
        }
        $dropdownMenu.html(showSearch);
    }


  
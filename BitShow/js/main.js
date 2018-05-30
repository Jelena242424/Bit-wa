import { loadData, searchData, fetchSingleShow } from './data.js'
import { showData, loadInfoPage, loadSeasonsInfo, loadCast, showDropdownData } from './ui.js'

function setUpEvent() {
    $(document).on('click', ".show-card, .dropdown-item", function () {
        // get id
        let $idValue = $(this).data("id");
        if (!$idValue) {
            return;
        }
        localStorage.setItem("id", $idValue);
        window.open('/showInfoPage.html', "_self");
    });
};

function setUpEventSearch() {
    $("#search-field").on("keyup", function () {
        const $searchInput = $("#search-field");
        const searchValue = $searchInput.val();
        searchData(searchValue)
            .then(showDropdownData);
    });
};

const id = localStorage.getItem("id");

export const initHome = ()=> {
    setUpEvent();
    setUpEventSearch();
    loadData().then(showData);
    // console.log(loadData())
};

export const initSingle = () => {
    setUpEventSearch();
    setUpEvent();
    fetchSingleShow(id)
        .then(singleShowInfo => {
            loadInfoPage(singleShowInfo);
            loadSeasonsInfo(singleShowInfo);
            loadCast(singleShowInfo);
        });

};







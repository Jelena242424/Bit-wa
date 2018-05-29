import { loadData, searchData, fetchSingleShow } from './data.js'
import { showData, loadInfoPage, loadSeasonsInfo, loadCast, showDropdownData} from './ui.js'

function setUpEvent () {
    $(document).on('click', ".show-card, .dropdown-item", function () {
        // get id
        let $idValue = $(this).data("id");
        if (!$idValue) {
            return;
        }
        // set to ls u data
        localStorage.setItem("id", $idValue);

        // redirect to single page
        window.open('/showInfoPage.html', "_self");
    });
};


function setUpEventSearch() {
    $("#search-field").on("keyup", function () {
        searchData(list => {
            showDropdownData(list);
        });
    });
}


const id = localStorage.getItem("id");
// // if(id) {
//    initSingle();
// } else { 
//     initHome();
// }

export const initHome = function () {
    setUpEvent();
    setUpEventSearch();
    loadData(showList => {
        showData(showList);
    });
};

export const initSingle = function () {
    setUpEventSearch();
    fetchSingleShow(id, singleShowInfo => {
        loadInfoPage(singleShowInfo);
        loadSeasonsInfo(singleShowInfo);
        loadCast(singleShowInfo);
    });
    
    // localStorage.removeItem("id");
}







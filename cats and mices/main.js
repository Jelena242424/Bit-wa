import { guineaPigs, cats } from "./data.js";
import { displayImage } from "./ui.js";


const eventHandler = (event) => {
    if (event.target.id === "cats") {
        $("#content").remove();
        const guinea = "guineaPigs";
        displayImage(guineaPigs, guinea, guinea)
    }
    else if (event.target.id === "guineaPigs") {
        $("#content").remove();
        const cat = "cats";
        displayImage(cats, cat, cat)
    }
}



export const init = () => {
    const name = "cats";
    displayImage(cats, name, name);
    $("body").on("click", eventHandler);

}

// const clickButton = () => {
//     $(".cat-img").hide();
//     $("#button-shift").on("click", 
//     function(){
//         $(".cat-img", ".guinea-img").toggle();
//     });
// }
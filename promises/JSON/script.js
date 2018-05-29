const p1 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml").done((response) => {
        const src = $(response).find("url").text();
        resolve(src);
    }).fail((reject) => {
        reject("First failed");
    })
})

const p2 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml").done((response) => {
        const src = $(response).find("url").text();
        resolve(src);
    }).fail((reject) => {
        reject("Second failed");
    })
})

const p3 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml").done((response) => {
        const src = $(response).find("url").text();
        resolve(src);
    }).fail((reject) => {
        reject("Third failed");
    })
})


Promise.all([p1, p2, p3]).then((responses) =>{

    responses.forEach((image) =>{

       const $imgDiv = $(".images");
       const $img = $("<img>");
       $img.attr("src", image);
       $imgDiv.append($img);
    })
}).catch((error) => {
    alert(error);
})
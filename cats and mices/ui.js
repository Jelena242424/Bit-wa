export const displayImage = (url, buttonText, id) => {

    const template = (`
        <div id="content">
        <button type='button' id='${id}'>${buttonText}</button>
        <img src="${url[Math.floor(Math.random() * 4)]}">
        </div>
        `);

    $(".template-img").append(template);
}


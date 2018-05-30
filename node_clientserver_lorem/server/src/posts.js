var loremIpsum = require('lorem-ipsum')

const makeTitle = () => {
    return loremIpsum({
        count: 3,
        units: 'words'
    });
}

const makeText = () => {
    return loremIpsum({
        count: 2,
        units: 'sentences'
    });
}

class MakePost {
    constructor(id, title, info) {
        this.id = id;
        this.title = title;
        this.info = info
    }
}
const makePosts = () => {
    const postsArray = [];
    for (let i = 0; i < 10; i++) {
        const post = new MakePost(i, makeTitle(), makeText());
        postsArray.push(post);
    }
    return postsArray;
}
module.exports = { makePosts }
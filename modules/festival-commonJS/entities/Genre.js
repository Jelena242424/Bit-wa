class Genre {
    constructor (genreName) {
        this.name = genreName;
    }

    getData() {
        var name = this.name;
        var firstIndex = 0;
        var lastIndex = name.length - 1
        var output = name.charAt(firstIndex) + name.charAt(lastIndex);
    
        return output.toUpperCase();
    }
}

module.exports = Genre;
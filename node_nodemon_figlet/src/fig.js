const figlet = require('figlet');



function createFiglet(msg) {
    return figlet.textSync(msg, {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
}

module.exports = {createFiglet}
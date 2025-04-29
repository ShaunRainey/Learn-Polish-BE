const db = require("../database/connection");

function selectPastTenseVerbs() {
    return db.query(`SELECT * FROM pastTenseVerbs;`);
}

module.exports = selectPastTenseVerbs;
const db = require("../database/connection");

function selectPastTenseVerbs() {
    return db.query(`SELECT * FROM pastTenseVerbs;`);
}

function selectPresentTenseVerbs() {
    return db.query(`SELECT * FROM presentTenseVerbs;`);
}

function selectConditionalTenseVerbs() {
    return db.query(`SELECT * FROM conditionalTenseVerbs;`);
}

module.exports = { selectPastTenseVerbs, selectPresentTenseVerbs, selectConditionalTenseVerbs };
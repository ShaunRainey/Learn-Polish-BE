const db = require("../database/connection");

function selectPastTenseVerbs() {
    return db.query(`SELECT * FROM pastTenseImpVerbs;`);
}

function selectPresentTenseVerbs() {
    return db.query(`SELECT * FROM presentTenseImpVerbs;`);
}

function selectConditionalTenseVerbs() {
    return db.query(`SELECT * FROM conditionalTenseImpVerbs;`);
}

module.exports = { selectPastTenseVerbs, selectPresentTenseVerbs, selectConditionalTenseVerbs };
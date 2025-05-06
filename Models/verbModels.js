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

function selectPastTensePerVerbs() {
    return db.query(`SELECT * FROM pastTensePerVerbs;`)
}

function selectFutureTensePerVerbs() {
    return db.query(`SELECT * FROM futureTensePerVerbs;`)
}

function selectConditionalTensePerVerbs() {
    return db.query(`SELECT * FROM conditionalTensePerVerbs;`)
}

module.exports = {
    selectPastTenseVerbs,
    selectPresentTenseVerbs,
    selectConditionalTenseVerbs,
    selectPastTensePerVerbs,
    selectFutureTensePerVerbs,
    selectConditionalTensePerVerbs
};
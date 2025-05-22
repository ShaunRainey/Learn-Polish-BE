const db = require("../database/connection");

function selectPastTenseVerbs(unit) {

    if (unit) {
        return db.query(`SELECT * FROM pastTenseImpVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM pastTenseImpVerbs;`);
}

function selectImpPastTenseVerbsById(id) {
    return db.query(`SELECT * FROM pastTenseImpVerbs WHERE verb_id = $1;`,[id])
}

function selectPresentTenseVerbs(unit) {
    
    if (unit) {
        return db.query(`SELECT * FROM presentTenseImpVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM presentTenseImpVerbs;`);
}

function selectImpPresentTenseVerbsById(id) {
    return db.query(`SELECT * FROM presentTenseImpVerbs WHERE verb_id = $1;`,[id])
}

function selectConditionalTenseVerbs(unit) {

    if (unit) {
        return db.query(`SELECT * FROM conditionalTenseImpVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM conditionalTenseImpVerbs;`);
}

function selectImpConditionalTenseVerbsById(id) {
    return db.query(`SELECT * FROM conditionalTenseImpVerbs WHERE verb_id = $1;`,[id])
}

function selectPastTensePerVerbs(unit) {

    if (unit) {
        return db.query(`SELECT * FROM pastTensePerVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM pastTensePerVerbs;`)
}

function selectPastTensePerVerbsById(id) {
    return db.query(`SELECT * FROM pastTensePerVerbs WHERE verb_id = $1;`,[id])
}

function selectFutureTensePerVerbs(unit) {

    if (unit) {
        return db.query(`SELECT * FROM futureTensePerVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM futureTensePerVerbs;`)
}

function selectFutureTensePerVerbsById(id) {
    return db.query(`SELECT * FROM futureTensePerVerbs WHERE verb_id = $1;`,[id])
}

function selectConditionalTensePerVerbs(unit) {

    if (unit) {
        return db.query(`SELECT * FROM conditionalTensePerVerbs WHERE unit = $1;`, [unit])
    }

    return db.query(`SELECT * FROM conditionalTensePerVerbs;`)
}

function selectConditionalTensePerVerbsById(id) {
    return db.query(`SELECT * FROM conditionalTensePerVerbs WHERE verb_id = $1;`,[id])
}

module.exports = {
    selectPastTenseVerbs,
    selectPresentTenseVerbs,
    selectConditionalTenseVerbs,
    selectPastTensePerVerbs,
    selectFutureTensePerVerbs,
    selectConditionalTensePerVerbs,
    selectImpPastTenseVerbsById,
    selectImpPresentTenseVerbsById,
    selectImpConditionalTenseVerbsById,
    selectPastTensePerVerbsById,
    selectFutureTensePerVerbsById,
    selectConditionalTensePerVerbsById
};
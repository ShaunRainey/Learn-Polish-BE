const db = require("../connection");
const format = require("pg-format");

function insertSentenceData(sentenceData) {
    const insertString = format(`INSERT INTO sentences(Unit, Topic, Polish, English) VALUES %L RETURNING *;`, sentenceData);
    return db.query(insertString)
}

function insertPastTenseData(verbData) {
    const insertString = format(`INSERT INTO pastTenseImpVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertPresentTenseData(verbData) {
    const insertString = format(`INSERT INTO presentTenseImpVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertConditionalTenseData(verbData) {
    const insertString = format(`INSERT INTO conditionalTenseImpVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertPastTensePerfectiveData(verbData) {
    const insertString = format(`INSERT INTO pastTensePerVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertFutureTensePerfectiveData(verbData) {
    const insertString = format(`INSERT INTO futureTensePerVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertConditionalTensePerfectiveData(verbData) {
    const insertString = format(`INSERT INTO conditionalTensePerVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

module.exports = {
    insertSentenceData,
    insertPastTenseData,
    insertPresentTenseData,
    insertConditionalTenseData,
    insertPastTensePerfectiveData,
    insertFutureTensePerfectiveData,
    insertConditionalTensePerfectiveData
}
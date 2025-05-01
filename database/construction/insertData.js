const db = require("../connection");
const format = require("pg-format");

function insertSentenceData(sentenceData) {
    const insertString = format(`INSERT INTO sentences(Unit, Topic, Polish, English) VALUES %L RETURNING *;`, sentenceData);
    return db.query(insertString)
}

function insertPastTenseData(verbData) {
    const insertString = format(`INSERT INTO pastTenseVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertPresentTenseData(verbData) {
    const insertString = format(`INSERT INTO presentTenseVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

function insertConditionalTenseData(verbData) {
    const insertString = format(`INSERT INTO conditionalTenseVerbs(Unit, Topic, Verb, Meaning, Conjugation, Ja, Ty, On_Ona, My, Wy, Oni_One) VALUES %L RETURNING *;`, verbData);
    return db.query(insertString)
}

module.exports = {insertSentenceData, insertPastTenseData, insertPresentTenseData, insertConditionalTenseData}
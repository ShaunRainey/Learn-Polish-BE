const db = require("../connection")

function createSentences() {
    return db.query(`CREATE TABLE sentences(
        sentence_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Polish VARCHAR(200),
        English VARCHAR(200)
        );`);
}

function createPastTenseVerbs() {
    return db.query(`CREATE TABLE pastTenseImpVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        );`);
}

function createPresentTenseVerbs() {
    return db.query(`CREATE TABLE presentTenseImpVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        );`);
}

function createConditionalTenseVerbs() {
    return db.query(`CREATE TABLE conditionalTenseImpVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        );`);
}

function createConditionalTensePerfectiveVerbs() {
    return db.query(`CREATE TABLE conditionalTensePerVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        )`)
}

function createFutureTensePerfectiveVerbs() {
    return db.query(`CREATE TABLE futureTensePerVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        )`)
}

function createPastTensePerfectiveVerbs() {
    return db.query(`CREATE TABLE pastTensePerVerbs(
        verb_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Verb VARCHAR(40),
        Meaning VARCHAR(40),
        Conjugation VARCHAR(40),
        Ja VARCHAR(100),
        Ty VARCHAR(100),
        On_Ona VARCHAR(100),
        My VARCHAR(100),
        Wy VARCHAR(100),
        Oni_One VARCHAR(100)
        )`)
}

module.exports = {
    createSentences,
    createPastTenseVerbs,
    createPresentTenseVerbs,
    createConditionalTenseVerbs,
    createConditionalTensePerfectiveVerbs,
    createFutureTensePerfectiveVerbs,
    createPastTensePerfectiveVerbs
}
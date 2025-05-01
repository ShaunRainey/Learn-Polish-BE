const db = require("./connection");
const format = require("pg-format");
const {
  Verbs_ImperfectiveData,
  Verbs_PerfectiveData,
  AdjectivesData,
  AdverbsData,
  NounsData,
  SentencesData,
  ConjunctionsData,
  PrepositionsData,
  DeterminersData,
  MiscData,
  ParticlesData,
  PronounsData,
  App_functionsData,
  ImperativeData,
  Nominative_MianownikData,
  Instrumental_NarzędnikData,
  Accusative_BiernikData,
  Genitive_DopełniaczData,
  Locative_MiejscownikData,
} = require("./data/index");
const { formatSentenceData , formatImperfectiveVerbData} = require("./utils")

function seed() {
    return db
        .query(`
            DROP TABLE IF EXISTS sentences;
            DROP TABLE IF EXISTS pastTenseVerbs;
            DROP TABLE IF EXISTS presentTenseVerbs;
            DROP TABLE IF EXISTS conditionalTenseVerbs;
            `)
        .then(() => {
            return Promise.all([
                createSentences(),
                createPastTenseVerbs(),
                createPresentTenseVerbs(),
                createConditionalTenseVerbs()
            ])
        })
        .then(() => {
            return formatSentenceData(SentencesData);
        })
        .then((newSentencesData) => {
            return insertSentenceData(newSentencesData)
        })
        .then(() => {
            return formatImperfectiveVerbData(Verbs_ImperfectiveData)
        })
        .then((newImperfectiveData) => {
            return Promise.all([
                insertPastTenseData(newImperfectiveData.formattedPastVerbs),
                insertPresentTenseData(newImperfectiveData.formattedPresentVerbs),
                insertConditionalTenseData(newImperfectiveData.formattedConditionalVerbs)
            ])
        })
}

function createSentences() {
    return db.query(`CREATE TABLE sentences(
        sentence_id SERIAL PRIMARY KEY,
        Unit FLOAT,
        Topic VARCHAR(40),
        Polish VARCHAR(200),
        English VARCHAR(200)
        );`);
}

function insertSentenceData(sentenceData) {
    const insertString = format(`INSERT INTO sentences(Unit, Topic, Polish, English) VALUES %L RETURNING *;`, sentenceData);
    return db.query(insertString)
}

function createPastTenseVerbs() {
    return db.query(`CREATE TABLE pastTenseVerbs(
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
    return db.query(`CREATE TABLE presentTenseVerbs(
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
    return db.query(`CREATE TABLE conditionalTenseVerbs(
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

module.exports = seed;

// seed()
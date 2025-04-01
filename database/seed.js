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
const { formatSentenceData } = require("./utils")

function seed() {
    return db
        .query("DROP TABLE IF EXISTS sentences")
        .then(() => {
            return createSentences()
        })
        .then(() => {
            return formatSentenceData(SentencesData);
        })
        .then((newData) => {
            return insertSentenceData(newData)
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

module.exports = seed;
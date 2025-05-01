const db = require("./connection");
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
const { formatSentenceData, formatImperfectiveVerbData } = require("./utils");
const { createSentences, createPastTenseVerbs, createPresentTenseVerbs, createConditionalTenseVerbs } = require("./construction/createTables");
const { insertSentenceData, insertPastTenseData, insertPresentTenseData, insertConditionalTenseData } = require("./construction/insertData");

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
            return Promise.all([
                formatSentenceData(SentencesData),
                formatImperfectiveVerbData(Verbs_ImperfectiveData)
            ])
        })
        .then((newData) => {
            return Promise.all([
                insertSentenceData(newData[0]),
                insertPastTenseData(newData[1].formattedPastVerbs),
                insertPresentTenseData(newData[1].formattedPresentVerbs),
                insertConditionalTenseData(newData[1].formattedConditionalVerbs)  
            ])
        })
}

module.exports = seed;
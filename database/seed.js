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
const { formatSentenceData, formatImperfectiveVerbData, formatPerfectiveVerbData, formatPronounData, formatPrepositionData } = require("./utils");
const { createSentences, createPastTenseVerbs, createPresentTenseVerbs, createConditionalTenseVerbs, createConditionalTensePerfectiveVerbs, createFutureTensePerfectiveVerbs, createPastTensePerfectiveVerbs, createPronouns, createPrepositions, createAdjectives } = require("./construction/createTables");
const { insertSentenceData, insertPastTenseData, insertPresentTenseData, insertConditionalTenseData, insertConditionalTensePerfectiveData, insertFutureTensePerfectiveData, insertPastTensePerfectiveData, insertPronouns, insertPrepositions } = require("./construction/insertData");

function seed() {
    return db
        .query(`
            DROP TABLE IF EXISTS sentences;
            DROP TABLE IF EXISTS pastTenseImpVerbs;
            DROP TABLE IF EXISTS presentTenseImpVerbs;
            DROP TABLE IF EXISTS conditionalTenseImpVerbs;
            DROP TABLE IF EXISTS conditionalTensePerVerbs;
            DROP TABLE IF EXISTS futureTensePerVerbs;
            DROP TABLE IF EXISTS pastTensePerVerbs;
            DROP TABLE IF EXISTS pronouns;
            DROP TABLE IF EXISTS prepositions;
            DROP TABLE IF EXISTS adjectives;
            `)
        .then(() => {
            return Promise.all([
                createSentences(),
                createPastTenseVerbs(),
                createPresentTenseVerbs(),
                createConditionalTenseVerbs(),
                createConditionalTensePerfectiveVerbs(),
                createFutureTensePerfectiveVerbs(),
                createPastTensePerfectiveVerbs(),
                createPronouns(),
                createPrepositions(),
                createAdjectives()
            ])
        })
        .then(() => {
            return Promise.all([
                formatSentenceData(SentencesData),
                formatImperfectiveVerbData(Verbs_ImperfectiveData),
                formatPerfectiveVerbData(Verbs_PerfectiveData),
                formatPronounData(PronounsData),
                formatPrepositionData(PrepositionsData)
            ])
        })
        .then((newData) => {
            return Promise.all([
                insertSentenceData(newData[0]),
                insertPastTenseData(newData[1].formattedPastVerbs),
                insertPresentTenseData(newData[1].formattedPresentVerbs),
                insertConditionalTenseData(newData[1].formattedConditionalVerbs), 
                insertPastTensePerfectiveData(newData[2].formattedPastVerbs),
                insertFutureTensePerfectiveData(newData[2].formattedFutureVerbs),
                insertConditionalTensePerfectiveData(newData[2].formattedConditionalVerbs),
                insertPronouns(newData[3]),
                insertPrepositions(newData[4])
            ])
        })
}

module.exports = seed;
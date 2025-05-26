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

function insertPronouns(pronounData) {
    const insertString = format(`INSERT INTO pronouns(category, noun, gender, singular_plural, meaning, nominative, accusative, instrumental, genitive, locative, dative) VALUES %L RETURNING *;`, pronounData);
    return db.query(insertString)
}

function insertPrepositions(prepositionData) {
    const insertString = format(`INSERT INTO prepositions(grammatical_case, preposition, meaning, examples, notes) VALUES %L RETURNING *;`, prepositionData);
    return db.query(insertString)
}

function insertAdjectives(adjectivesData) {
    const insertString = format(`INSERT INTO adjectives(base_adjective, meaning, gender, singular_plural, nominative, nominative_comparative, nominative_superlative, accusative_animate, accusative_inanimate, instrumental, genitive, locative, dative) VALUES %L RETURNING *;`, adjectivesData);
    return db.query(insertString)
}

function insertAdverbs(adverbsData) {
    const insertString = format(`INSERT INTO adverbs(adverb_category, adverb, meaning, example_1, translation_1, example_2, translation_2, example_3, translation_3) VALUES %L RETURNING *;`, adverbsData);
    return db.query(insertString)
}


module.exports = {
    insertSentenceData,
    insertPastTenseData,
    insertPresentTenseData,
    insertConditionalTenseData,
    insertPastTensePerfectiveData,
    insertFutureTensePerfectiveData,
    insertConditionalTensePerfectiveData,
    insertPronouns,
    insertPrepositions,
    insertAdjectives,
    insertAdverbs
}
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

function createPronouns() {
    return db.query(`CREATE TABLE pronouns(
        pronoun_id SERIAL PRIMARY KEY,
        category VARCHAR(40),
        noun VARCHAR(40),
        gender VARCHAR(40),
        singular_plural VARCHAR(40),
        meaning VARCHAR(40),
        nominative VARCHAR(40),
        accusative VARCHAR(40),
        instrumental VARCHAR(40),
        genitive VARCHAR(40),
        locative VARCHAR(40),
        dative VARCHAR(40)
        )`)
}

function createPrepositions() {
    return db.query(`CREATE TABLE prepositions(
        preposition_id SERIAL PRIMARY KEY,
        grammatical_case VARCHAR(40),
        preposition VARCHAR(40),
        meaning VARCHAR(40),
        examples VARCHAR(400),
        notes VARCHAR(400)
        )`)
}

function createAdjectives() {
    return db.query(`CREATE TABLE adjectives(
        adjective_id SERIAL PRIMARY KEY,
        base_adjective VARCHAR(40),
        meaning VARCHAR(40),
        gender VARCHAR(40),
        singular_plural VARCHAR(40),
        nominative VARCHAR(40),
        nominative_comparative VARCHAR(40),
        nominative_superlative VARCHAR(40),
        accusative_animate VARCHAR(40),
        accusative_inanimate VARCHAR(40),
        instrumental VARCHAR(40),
        genitive VARCHAR(40),
        locative VARCHAR(40),
        dative VARCHAR(40)
        )`)
}

function createAdverbs() {
    return db.query(`CREATE TABLE adverbs(
        adverb_id SERIAL PRIMARY KEY,
        adverb_category VARCHAR(40),
        adverb  VARCHAR(40),
        meaning  VARCHAR(200),
        example_1  VARCHAR(200),
        translation_1 VARCHAR(200),
        example_2  VARCHAR(200),
        translation_2 VARCHAR(200),
        example_3  VARCHAR(200),
        translation_3 VARCHAR(200)
        )`)
}

function createConjunctions() {
    return db.query(`CREATE TABLE conjunctions(
        conjunction_id SERIAL PRIMARY KEY,
        conjunction  VARCHAR(40),
        meaning  VARCHAR(200),
        example_1  VARCHAR(200),
        translation_1 VARCHAR(200),
        example_2  VARCHAR(200),
        translation_2 VARCHAR(200),
        example_3  VARCHAR(200),
        translation_3 VARCHAR(200)
        )`)
}

module.exports = {
    createSentences,
    createPastTenseVerbs,
    createPresentTenseVerbs,
    createConditionalTenseVerbs,
    createConditionalTensePerfectiveVerbs,
    createFutureTensePerfectiveVerbs,
    createPastTensePerfectiveVerbs,
    createPronouns,
    createPrepositions,
    createAdjectives,
    createAdverbs,
    createConjunctions
}
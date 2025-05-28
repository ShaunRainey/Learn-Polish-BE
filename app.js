const express = require('express');
const app = express();
const { getSentences, getSentencesById } = require("./Controllers/sentenceControllers");
const { getImpPastTenseVerbs, getImpPresentTenseVerbs, getImpConditionalTenseVerbs, getConditionalTensePerVerbs, getPastTensePerVerbs, getFutureTensePerVerbs, getImpPastTenseVerbsById, getImpPresentTenseVerbsById, getImpConditionalTenseVerbsById, getPastTensePerVerbsById, getFutureTensePerVerbsById, getConditionalTensePerVerbsById } = require("./Controllers/verbControllers")
const { getPronouns, getPronounsById, getPronounsByForm } = require("./Controllers/pronounControllers");
const { getPrepositions, getPrepositionsById } = require("./Controllers/prepositionControllers");
const { getAdjectives, getAdjectivesById, getAdjectivesByForm } = require("./Controllers/adjectiveControllers");
const { getAdverbs, getAdverbsById } = require("./Controllers/adverbControllers")
const { getConjunctions, getConjunctionsById } = require("./Controllers/conjunctionControllers")
const { getNouns, getNounsById, getNounsByForm } = require("./Controllers/nounControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);
app.get("/api/sentences/:id", getSentencesById);

app.get("/api/verbs/imperfective/pastTense", getImpPastTenseVerbs);
app.get("/api/verbs/imperfective/pastTense/:id", getImpPastTenseVerbsById);
app.get("/api/verbs/imperfective/presentTense", getImpPresentTenseVerbs);
app.get("/api/verbs/imperfective/presentTense/:id", getImpPresentTenseVerbsById);
app.get("/api/verbs/imperfective/conditionalTense", getImpConditionalTenseVerbs);
app.get("/api/verbs/imperfective/conditionalTense/:id", getImpConditionalTenseVerbsById);

app.get("/api/verbs/perfective/pastTense", getPastTensePerVerbs);
app.get("/api/verbs/perfective/pastTense/:id", getPastTensePerVerbsById);
app.get("/api/verbs/perfective/futureTense", getFutureTensePerVerbs);
app.get("/api/verbs/perfective/futureTense/:id", getFutureTensePerVerbsById);
app.get("/api/verbs/perfective/conditionalTense", getConditionalTensePerVerbs);
app.get("/api/verbs/perfective/conditionalTense/:id", getConditionalTensePerVerbsById);

app.get("/api/pronouns", getPronouns);
app.get("/api/pronouns/:id", getPronounsById);
app.get("/api/pronouns/form/:form", getPronounsByForm);

app.get("/api/prepositions", getPrepositions);
app.get("/api/prepositions/:id", getPrepositionsById);

app.get("/api/adjectives", getAdjectives);
app.get("/api/adjectives/:id", getAdjectivesById);
app.get("/api/adjectives/form/:form", getAdjectivesByForm);

app.get("/api/adverbs", getAdverbs);
app.get("/api/adverbs/:id", getAdverbsById);

app.get("/api/conjunctions", getConjunctions);
app.get("/api/conjunctions/:id", getConjunctionsById);

app.get("/api/nouns", getNouns);
app.get("/api/nouns/:id", getNounsById);
app.get("/api/nouns/form/:form", getNounsByForm);

//When running all tests, listener needs to be turned off to avoid errors
app.listen(9001, () => { 
    console.log("Big Brother is watching ... ")
})

app.use((err, req, res, next) => {
    console.log(err)
  const status = err.status || 500;
    const msg = err.msg || "server error";
    console.log(err.status)
    console.log(err.msg)
  res.status(status).send({ msg });
});

module.exports = app;
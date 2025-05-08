const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")
const { getImpPastTenseVerbs, getImpPresentTenseVerbs, getImpConditionalTenseVerbs, getConditionalTensePerVerbs, getPastTensePerVerbs, getFutureTensePerVerbs } = require("./Controllers/verbControllers")
const { getPronouns } = require("./Controllers/pronounControllers");
const { getPrepositions } = require("./Controllers/prepositionControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);

app.get("/api/verbs/imperfective/pastTense", getImpPastTenseVerbs);
app.get("/api/verbs/imperfective/presentTense", getImpPresentTenseVerbs);
app.get("/api/verbs/imperfective/conditionalTense", getImpConditionalTenseVerbs);

app.get("/api/verbs/perfective/pastTense", getPastTensePerVerbs);
app.get("/api/verbs/perfective/futureTense", getFutureTensePerVerbs);
app.get("/api/verbs/perfective/conditionalTense", getConditionalTensePerVerbs);

app.get("/api/pronouns", getPronouns);

app.get("/api/prepositions", getPrepositions);

//When running all tests, listener needs to be turned off to avoid errors
// app.listen(9001, () => { 
//     console.log("Big Brother is watching ... ")
// })

module.exports = app;
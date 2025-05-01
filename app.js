const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")
const { getImpPastTenseVerbs, getImpPresentTenseVerbs, getImpConditionalTenseVerbs } = require("./Controllers/verbControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);

app.get("/api/verbs/imperfective/pastTense", getImpPastTenseVerbs);
app.get("/api/verbs/imperfective/presentTense", getImpPresentTenseVerbs);
app.get("/api/verbs/imperfective/conditionalTense", getImpConditionalTenseVerbs);

app.listen(9001, () => {
    console.log("Big Brother is watching ... ")
})

module.exports = app;
const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")
const { getPastTenseVerbs, getPresentTenseVerbs, getConditionalTenseVerbs } = require("./Controllers/verbControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);

app.get("/api/verbs/pastTense", getPastTenseVerbs);
app.get("/api/verbs/presentTense", getPresentTenseVerbs);
app.get("/api/verbs/conditionalTense", getConditionalTenseVerbs);

app.listen(9001, () => {
    console.log("Big Brother is watching ... ")
})

module.exports = app;
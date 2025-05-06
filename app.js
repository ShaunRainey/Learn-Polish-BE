const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")
const { getImpPastTenseVerbs, getImpPresentTenseVerbs, getImpConditionalTenseVerbs, getPerConditionalTenseVerbs, getPerPastTenseVerbs, getPerFutureTenseVerbs } = require("./Controllers/verbControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);

app.get("/api/verbs/imperfective/pastTense", getImpPastTenseVerbs);
app.get("/api/verbs/imperfective/presentTense", getImpPresentTenseVerbs);
app.get("/api/verbs/imperfective/conditionalTense", getImpConditionalTenseVerbs);

// app.get("/api/verbs/perfective/pastTense", getPerPastTenseVerbs);
// app.get("/api/verbs/perfective/futureTense", getPerFutureTenseVerbs);
// app.get("/api/verbs/perfective/conditionalTense", getPerConditionalTenseVerbs);

app.listen(9001, () => {
    console.log("Big Brother is watching ... ")
})

module.exports = app;
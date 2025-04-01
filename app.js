const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")

app.use(express.json())

app.get('/api/healthcheck', (req, res) => {
    res.status(200).send("hello world")
})

app.get("/api/sentences", getSentences);

// app.listen(9001, () => {
//     console.log("Big Brother is watching ... ")
// })

module.exports = app;
const express = require('express');
const app = express();
const getSentences = require("./Controllers/sentenceControllers")

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get("/sentences", getSentences);

app.listen(9001, () => {
    console.log("Big Brother is watching ... ")
})
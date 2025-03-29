const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(9001, () => {
    console.log("Big Brother is watching ... ")
})
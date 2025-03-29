const selectSentences = require("../Models/sentenceModels")

function getSentences(req, res) {
    selectSentences().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = getSentences
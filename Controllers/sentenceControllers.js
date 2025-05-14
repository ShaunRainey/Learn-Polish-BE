const selectSentences = require("../Models/sentenceModels")

function getSentences(req, res, next) {
    selectSentences().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getSentencesById(req, res, next) {
    
}

module.exports = getSentences
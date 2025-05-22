const { selectSentences, selectSentencesById } = require("../Models/sentenceModels")
const { validateSentenceUnit } = require("../database/utils");

function getSentences(req, res, next) {

    const { unit } = req.query;

    if (!validateSentenceUnit(unit)) {
        return next({ status: 404, msg: "Invalid unit option" });
    }

    selectSentences(unit).then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getSentencesById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }
    
    selectSentencesById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })
}

module.exports = { getSentences, getSentencesById }


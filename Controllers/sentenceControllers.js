const { selectSentences, selectSentencesById } = require("../Models/sentenceModels")

function getSentences(req, res, next) {

    const { unit } = req.query;
    const acceptableUnits = [1.01, 1.02, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 2.01, 2.02, 2.03, 2.04, 2.05, 2.06, 2.07, 2.08, 2.09, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21, 2.22, 2.23, 2.24, 2.25, 2.26, 2.27, 2.28, 2.29, 2.30, 2.31, 2.32, 2.33, 2.34, 2.35, 2.36, 2.37, 2.38, 2.39, 3.01, 3.02, 3.03, 3.04, 3.05, 3.06, 3.07, 3.08, 3.09, 3.10, 3.11]
    
    if (unit && !acceptableUnits.includes(Number(unit))) {
        return next({ status: 404, msg: "Invalid unit option"});
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


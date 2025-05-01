const { selectPastTenseVerbs, selectPresentTenseVerbs , selectConditionalTenseVerbs } = require("../Models/verbModels")

function getPastTenseVerbs(req, res) {
    selectPastTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPresentTenseVerbs(req, res) {
    selectPresentTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getConditionalTenseVerbs(req, res) {
    selectConditionalTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getPastTenseVerbs, getPresentTenseVerbs, getConditionalTenseVerbs };
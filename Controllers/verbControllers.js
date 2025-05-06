const { selectPastTenseVerbs, selectPresentTenseVerbs , selectConditionalTenseVerbs, selectPastTensePerVerbs, selectFutureTensePerVerbs, selectConditionalTensePerVerbs } = require("../Models/verbModels")

function getImpPastTenseVerbs(req, res) {
    selectPastTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpPresentTenseVerbs(req, res) {
    selectPresentTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpConditionalTenseVerbs(req, res) {
    selectConditionalTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPastTensePerVerbs(req, res) {
    selectPastTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getFutureTensePerVerbs(req, res) {
    selectFutureTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getConditionalTensePerVerbs(req, res) {
    selectConditionalTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = {
    getImpPastTenseVerbs,
    getImpPresentTenseVerbs,
    getImpConditionalTenseVerbs,
    getPastTensePerVerbs,
    getFutureTensePerVerbs,
    getConditionalTensePerVerbs
};
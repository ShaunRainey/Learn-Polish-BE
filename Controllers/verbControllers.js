const { selectPastTenseVerbs, selectPresentTenseVerbs , selectConditionalTenseVerbs, selectPastTensePerVerbs, selectFutureTensePerVerbs, selectConditionalTensePerVerbs } = require("../Models/verbModels")

function getImpPastTenseVerbs(req, res, next) {
    selectPastTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpPresentTenseVerbs(req, res, next) {
    selectPresentTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getImpConditionalTenseVerbs(req, res, next) {
    selectConditionalTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPastTensePerVerbs(req, res, next) {
    selectPastTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getFutureTensePerVerbs(req, res, next) {
    selectFutureTensePerVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getConditionalTensePerVerbs(req, res, next) {
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
const { selectPastTenseVerbs, selectPresentTenseVerbs , selectConditionalTenseVerbs } = require("../Models/verbModels")

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

// function getPerPastTenseVerbs(req, res) {
//     return "hello"
// }
// function getPerFutureTenseVerbs(req, res) {
//     return "hello"
// }
// function getPerConditionalTenseVerbs(req, res) {
//     return "hello"
// }

module.exports = {
    getImpPastTenseVerbs,
    getImpPresentTenseVerbs,
    getImpConditionalTenseVerbs,
    // getPerPastTenseVerbs,
    // getPerFutureTenseVerbs,
    // getPerConditionalTenseVerbs
};
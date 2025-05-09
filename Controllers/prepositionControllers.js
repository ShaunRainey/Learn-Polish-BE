const { selectPrepositions, selectPrepositionsByCase } = require("../Models/prepositionModels")
const { capitaliseFirst } = require("../database/utils")

function getPrepositions(req, res) {
    selectPrepositions().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPrepositionsByCase(req, res, next) {
    const { grammaticalCase } = req.params;
    const capitalisedCase = capitaliseFirst(grammaticalCase);
    const acceptedValues = ["Genitive", "Instrumental", "Locative", "Accusative"];

    if (!acceptedValues.includes(capitalisedCase)) {
        return next({ status: 404, msg: "Ya dun fucked up" });
    }

    selectPrepositionsByCase(capitalisedCase)
        .then((data) => {
            res.status(200).send(data.rows);
        })
        .catch(next);
}

module.exports = { getPrepositions, getPrepositionsByCase }
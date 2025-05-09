const { selectPrepositions } = require("../Models/prepositionModels")
const { capitaliseFirst } = require("../database/utils")

function getPrepositions(req, res, next) {
    const { grammaticalCase } = req.query
    const capitalisedCase = capitaliseFirst(grammaticalCase);
    const acceptedValues = ["Genitive", "Instrumental", "Locative", "Accusative"];

    if (grammaticalCase && !acceptedValues.includes(capitalisedCase)) {
        return next({ status: 404, msg: "Ya dun fucked up"});
    }

    selectPrepositions(capitalisedCase).then((data) => {
        return res.status(200).send(data.rows)
    })
}


function getPrepositionsByID(req, res, next) {
    return "hello"
}

module.exports = { getPrepositions, getPrepositionsByID }
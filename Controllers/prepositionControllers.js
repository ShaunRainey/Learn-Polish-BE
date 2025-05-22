const { selectPrepositions, selectPrepositionsById } = require("../Models/prepositionModels")
const { capitaliseFirst } = require("../database/utils")

function getPrepositions(req, res, next) {
    
    const { grammaticalCase } = req.query;
    const capitalisedCase = grammaticalCase ? capitaliseFirst(grammaticalCase) : null;
    const acceptedValues = ["Genitive", "Instrumental", "Locative", "Accusative"];

    if (grammaticalCase && !acceptedValues.includes(capitalisedCase)) {
        return next({ status: 404, msg: "Invalid case option"});
    }

    selectPrepositions(capitalisedCase).then((data) => {
        return res.status(200).send(data.rows)
    })
}


function getPrepositionsById(req, res, next) {
    const { id } = req.params;
    
    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectPrepositionsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }

        return res.status(200).send(data.rows)
    })
}

module.exports = { getPrepositions, getPrepositionsById }
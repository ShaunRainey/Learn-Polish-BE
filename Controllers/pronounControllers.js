const { selectPronouns, selectPronounsById } = require("../Models/pronounModels")
const { capitaliseFirst } = require("../database/utils")

function getPronouns(req, res, next) {

    const { category } = req.query;
    const capitalisedCategory = category ? capitaliseFirst(category) : null;
    const acceptedValues = ["Personal", "Demonstrative", "Indefinite", "Interrogative", "Negative", "Possessive", "Reflexive", "Relative"]

    if (category && !acceptedValues.includes(capitalisedCategory)) {
        return next({ status: 404, msg: "Invalid category option"});
    }

    selectPronouns(capitalisedCategory).then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getPronounsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectPronounsById(id).then((data) => {

        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }

        return res.status(200).send(data.rows)
    })
}

module.exports = { getPronouns, getPronounsById }
const { selectPronouns, selectPronounsById, selectPronounsByForm } = require("../Models/pronounModels")
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

function getPronounsByForm(req, res, next) {
    const { form } = req.params;
    const acceptableForms = ["nominative", "accusative", "instrumental", "genitive", "locative", "vocative", "dative"];

    if (!acceptableForms.includes(form)) {
        return res.status(400).send("invalid url")
    }

    const { gender, singular_plural } = req.query;

    const acceptableGenders = ["Male", "Female", "Neuter", "Non-male", "None"];
    const acceptableNumbers = ["Singular", "Plural", "None"];

    if (gender && !acceptableGenders.includes(gender) ||
        singular_plural && !acceptableNumbers.includes(singular_plural)
    ) {
        return res.status(404).send("Invalid query data")
    }
    
    selectPronounsByForm({ form, gender, singular_plural }).then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getPronouns, getPronounsById, getPronounsByForm }
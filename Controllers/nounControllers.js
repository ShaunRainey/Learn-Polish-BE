const { selectNouns, selectNounsById, selectNounsByForm } = require("../Models/nounModels")

function getNouns(req, res, next) {

    const { gender, singular_plural } = req.query;

    const acceptableGenders = ["Male", "Female", "Neuter"];
    const acceptableNumbers = ["Singular", "Plural"];

    if (gender && !acceptableGenders.includes(gender) ||
        singular_plural && !acceptableNumbers.includes(singular_plural) 
    ) {
        return res.status(404).send("Invalid query data")
      }

    selectNouns({gender, singular_plural}).then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getNounsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectNounsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows)
    })
}

function getNounsByForm(req, res, next) {
    const { form } = req.params;
    const acceptableForms = ["nominative", "accusative", "instrumental", "genitive", "locative", "vocative", "dative"];

    if (!acceptableForms.includes(form)) {
        return res.status(400).send("invalid url")
    }

    const { gender, singular_plural } = req.query;

    const acceptableGenders = ["Male", "Female", "Neuter"];
    const acceptableNumbers = ["Singular", "Plural"];

    if (gender && !acceptableGenders.includes(gender) ||
        singular_plural && !acceptableNumbers.includes(singular_plural)
    ) {
        return res.status(404).send("Invalid query data")
    }
    
    selectNounsByForm({ form, gender, singular_plural }).then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getNouns, getNounsById, getNounsByForm}
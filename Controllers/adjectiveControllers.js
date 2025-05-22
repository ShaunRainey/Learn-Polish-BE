const { selectAdjectives, selectAdjectivesById, selectAdjectivesByForm } = require("../Models/adjectiveModels")

function getAdjectives(req, res, next) {

    const { gender, singular_plural } = req.query;

    const acceptableGenders = ["Male", "Female", "Neuter", "Non-male"];
    const acceptableNumbers = ["Singular", "Plural"];

    if (gender && !acceptableGenders.includes(gender) ||
        singular_plural && !acceptableNumbers.includes(singular_plural) 
    ) {
        return res.status(404).send("Invalid query data")
      }


    selectAdjectives({gender, singular_plural}).then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getAdjectivesById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectAdjectivesById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }

        return res.status(200).send(data.rows)
    })
}

function getAdjectivesByForm(req, res, next) {
    const { form } = req.params;
    const acceptableForms = ["nominative", "nominative_comparative", "nominative_superlative", "accusative_animate", "accusative_inanimate", "instrumental", "genitive", "locative", "dative"];

    if (!acceptableForms.includes(form)) {
        return res.status(400).send("invalid url")
    }

    const { gender, singular_plural } = req.query;

    const acceptableGenders = ["Male", "Female", "Neuter", "Non-male"];
    const acceptableNumbers = ["Singular", "Plural"];

    if (gender && !acceptableGenders.includes(gender) ||
        singular_plural && !acceptableNumbers.includes(singular_plural)
    ) {
        return res.status(404).send("Invalid query data")
    }
    
    selectAdjectivesByForm({ form, gender, singular_plural }).then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getAdjectives, getAdjectivesById, getAdjectivesByForm }
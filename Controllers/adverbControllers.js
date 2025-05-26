const { selectAdverbs, selectAdverbsById } = require("../Models/adverbModels")

function getAdverbs(req, res, next) {
    const { adverb_category } = req.query;
    const acceptableCategories = ["Adverbs of Affirmation or Negation", "Adverbs of Cause", "Adverbs of Degree", "Adverbs of Doubt", "Adverbs of Goal or Purpose", "Adverbs of Manner", "Adverbs of Place", "Adverbs of Time", "Modal Adverbs"]

    if (adverb_category && !acceptableCategories.includes(adverb_category)) {
        return res.status(404).send("Invalid query data")
      }

    selectAdverbs(adverb_category).then((data) => {
        return res.status(200).send(data.rows);
    })
}

function getAdverbsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectAdverbsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows);
    })
}

module.exports = { getAdverbs, getAdverbsById };



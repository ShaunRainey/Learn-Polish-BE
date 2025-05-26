const { selectAdverbs } = require("../Models/adverbModels")

function getAdverbs(req, res, next) {
    selectAdverbs().then((data) => {
        return res.status(200).send(data.rows);
    })
}

module.exports = { getAdverbs };
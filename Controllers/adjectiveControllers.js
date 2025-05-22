const { selectAdjectives } = require("../Models/adjectiveModels")

function getAdjectives(req, res, next) {
    selectAdjectives().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getAdjectives }
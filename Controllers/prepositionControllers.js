const { selectPrepositions } = require("../Models/prepositionModels")

function getPrepositions(req, res) {
    selectPrepositions().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getPrepositions }
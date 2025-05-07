const { selectPronouns } = require("../Models/pronounModels")

function getPronouns(req, res) {
    selectPronouns().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getPronouns }
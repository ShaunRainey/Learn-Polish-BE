const { selectNouns, selectNounsById } = require("../Models/nounModels")

function getNouns(req, res, next) {
    selectNouns().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getNounsById(req, res, next) {
    const { id } = req.params;
    selectNounsById(id).then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = { getNouns, getNounsById}
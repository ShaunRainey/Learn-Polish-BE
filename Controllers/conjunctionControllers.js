const { selectConjunction, selectConjunctionsById } = require("../Models/conjunctionModels");

function getConjunctions(req, res, next) {
    selectConjunction().then((data) => {
        return res.status(200).send(data.rows)
    })
}

function getConjunctionsById(req, res, next) {
    const { id } = req.params;

    if (Number.isNaN(Number(id))) {
        return next({ status: 400, msg: "invalid URL" })
    }

    selectConjunctionsById(id).then((data) => {
        if (data.rows.length === 0) {
            return next({ status: 404, msg: "invalid id number"})
        }
        return res.status(200).send(data.rows);
    })
}

module.exports = { getConjunctions, getConjunctionsById }
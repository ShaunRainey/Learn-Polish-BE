const selectPastTenseVerbs = require("../Models/verbModels")

function getPastTenseVerbs(req, res) {
    selectPastTenseVerbs().then((data) => {
        return res.status(200).send(data.rows)
    })
}

module.exports = getPastTenseVerbs;
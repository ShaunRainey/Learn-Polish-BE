const db = require("../database/connection")

function selectAdjectives() {
    return db.query(`SELECT * FROM adjectives;`)
}

module.exports = { selectAdjectives }
const db = require("../database/connection")

function selectPronouns() {
    return db.query(`SELECT * FROM pronouns;`)
}

module.exports = { selectPronouns }
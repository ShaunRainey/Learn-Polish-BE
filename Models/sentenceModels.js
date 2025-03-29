const db = require("../database/connection")

function selectSentences() {
    return db.query(`SELECT * FROM sentences;`)
}

module.exports = selectSentences
const db = require("../database/connection")

function selectSentences(unit) {
    if (unit) {
        return db.query(`SELECT * FROM sentences WHERE unit = $1;`, [unit])
    }
    return db.query(`SELECT * FROM sentences;`)
}

function selectSentencesById(id) {
    return db.query(`SELECT * FROM sentences WHERE sentence_id = $1;`, [id])
}

module.exports = { selectSentences, selectSentencesById }
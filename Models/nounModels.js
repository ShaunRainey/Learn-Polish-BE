const db = require("../database/connection");

function selectNouns() {
    return db.query(`SELECT * FROM nouns;`)
}

function selectNounsById(id) {
    return db.query(`SELECT * FROM nouns WHERE noun_id = $1;`, [id])
}

module.exports = { selectNouns, selectNounsById }
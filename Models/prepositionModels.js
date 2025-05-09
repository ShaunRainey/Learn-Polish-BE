const db = require("../database/connection");

function selectPrepositions() {
    return db.query(`SELECT * FROM prepositions;`)
}

function selectPrepositionsByCase(grammaticalCase) {
    return db.query(`SELECT * FROM prepositions WHERE grammatical_case = $1;`, [grammaticalCase])
}

module.exports = { selectPrepositions, selectPrepositionsByCase }
const db = require("../database/connection");

function selectPrepositions() {
    return db.query(`SELECT * FROM prepositions;`)
}

module.exports = { selectPrepositions }
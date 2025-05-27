const db = require("../database/connection");

function selectConjunction() {
    return db.query(`SELECT * FROM conjunctions`)
}

function selectConjunctionsById(id) {
    return db.query(`SELECT * FROM conjunctions WHERE conjunction_id = $1;`, [id])
}

module.exports = { selectConjunction, selectConjunctionsById }
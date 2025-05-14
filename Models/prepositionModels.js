const db = require("../database/connection");

function selectPrepositions(grammaticalCase) {
    if (grammaticalCase) {
        return db.query(`SELECT * FROM prepositions WHERE grammatical_case = $1;`, [grammaticalCase]);
    } else {
        return db.query(`SELECT * FROM prepositions;`);
    }
}

function selectPrepositionsById(id) {
    return db.query(`SELECT * FROM prepositions WHERE preposition_id= $1;`, [id])
}

module.exports = { selectPrepositions, selectPrepositionsById }
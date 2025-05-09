const db = require("../database/connection");

function selectPrepositions(grammaticalCase) {
    if (grammaticalCase) {
        return db.query(`SELECT * FROM prepositions WHERE grammatical_case = $1;`, [grammaticalCase]);
    } else {
        return db.query(`SELECT * FROM prepositions;`);
    }
}

module.exports = { selectPrepositions }
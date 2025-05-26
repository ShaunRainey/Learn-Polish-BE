const db = require("../database/connection");

function selectAdverbs() {
    return db.query(`SELECT * FROM adverbs`);
}

module.exports = { selectAdverbs };
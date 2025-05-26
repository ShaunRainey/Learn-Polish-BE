const db = require("../database/connection");

function selectAdverbs(adverb_category) {
    if (adverb_category) {
        return db.query(`SELECT * FROM adverbs WHERE adverb_category = $1;`,[adverb_category])
    }
    return db.query(`SELECT * FROM adverbs`);
}

function selectAdverbsById(id) {
    return db.query(`SELECT * FROM adverbs WHERE adverb_id = $1;`, [id])
}

module.exports = { selectAdverbs, selectAdverbsById };
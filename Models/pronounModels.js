const db = require("../database/connection")

function selectPronouns(category) {
    if (category) {
        return db.query(`SELECT * FROM pronouns WHERE category = $1;`,[category])
    } else {
        return db.query(`SELECT * FROM pronouns;`)
    }
}

function selectPronounsById(id) {
    return db.query(`SELECT * FROM pronouns WHERE pronoun_id = $1;`, [id])
}

module.exports = { selectPronouns, selectPronounsById }
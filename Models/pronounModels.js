const db = require("../database/connection")
const { buildWhereClause } = require("../database/utils");

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

function selectPronounsByForm({ form, gender, singular_plural }) {

    if (gender || singular_plural) {
        const { whereClause, values } = buildWhereClause({ gender, singular_plural });
        const query = `SELECT pronoun, meaning, singular_plural, gender, ${form} FROM pronouns ${whereClause};`
        return db.query(query, values);
    }

    return db.query(`SELECT pronoun, meaning, singular_plural, gender, ${form} FROM pronouns;`)
}

module.exports = { selectPronouns, selectPronounsById, selectPronounsByForm }
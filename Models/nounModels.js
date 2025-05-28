const db = require("../database/connection");
const { buildWhereClause } = require("../database/utils");

function selectNouns(filters) {

    const { whereClause, values } = buildWhereClause(filters);
    const query = `SELECT * FROM nouns ${whereClause};`;

    return db.query(query, values);
}

function selectNounsById(id) {
    return db.query(`SELECT * FROM nouns WHERE noun_id = $1;`, [id])
}

function selectAdjectivesByForm({ form, gender, singular_plural }) {

    if (gender || singular_plural) {
        const { whereClause, values } = buildWhereClause({ gender, singular_plural });
        const query = `SELECT base_noun, meaning, singular_plural, gender, ${form} FROM nouns ${whereClause};`
        return db.query(query, values);
    }

    return db.query(`SELECT base_noun, meaning, singular_plural, gender, ${form} FROM nouns;`)
}

module.exports = { selectNouns, selectNounsById, selectAdjectivesByForm }
const db = require("../database/connection");
const { buildWhereClause } = require("../database/utils");

function selectAdjectives(filters) {
    const { whereClause, values } = buildWhereClause(filters);
    const query = `SELECT * FROM adjectives ${whereClause};`;

    return db.query(query, values);
}

function selectAdjectivesById(id) {
    return db.query(`SELECT * FROM adjectives WHERE adjective_id = $1;`, [id])
}

function selectAdjectivesByForm({ form, gender, singular_plural }) {

    if (gender || singular_plural) {
        const { whereClause, values } = buildWhereClause({ gender, singular_plural });
        const query = `SELECT base_adjective, meaning, singular_plural, gender, ${form} FROM adjectives ${whereClause};`
        return db.query(query, values);
    }

    return db.query(`SELECT base_adjective, meaning, singular_plural, gender, ${form} FROM adjectives;`)
}

module.exports = { selectAdjectives, selectAdjectivesById, selectAdjectivesByForm }
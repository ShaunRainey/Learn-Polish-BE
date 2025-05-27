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

module.exports = { selectNouns, selectNounsById }
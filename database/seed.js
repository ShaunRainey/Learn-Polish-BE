const db = require("./connection");
const fs = require("fs");
const format = require("pg-format");

function seed() {
    return db
        .query("DROP TABLE IF EXISTS sentences")
        .then(() => {
            return createSentences()
        })
        .then(() => {
            return formatSentenceData();
        })
        .then((sentenceData) => {
            return insertSentenceData(sentenceData)
        })
}

function createSentences() {
    return db.query(`CREATE TABLE sentences(
        Unit FLOAT,
        Topic VARCHAR(40),
        Polish VARCHAR(200),
        English VARCHAR(200)
        );`);
}

// need to make formatSentenceData more generic, so that it returns multiple formatted values

function formatSentenceData() {
    const sentenceData = JSON.parse(fs.readFileSync(`database/data/Sentences.json`, "utf-8"));
    
    const formattedData = sentenceData.map((sentence) => {
        return [sentence.Unit, sentence.Topic, sentence.Polish, sentence.English];
    })

    return formattedData;
}

function insertSentenceData(sentenceData) {
    const insertString = format(`INSERT INTO sentences(Unit, Topic, Polish, English) VALUES %L RETURNING *;`, sentenceData);
    return db.query(insertString)
}

module.exports = seed;
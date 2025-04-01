const db = require("../database/connection");
const seed = require("../database/seed");

beforeAll(() => seed());
afterAll(() => db.end())

describe("seed", () => {

    describe("sentences table", () => {
        test("test that sentences table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'sentences');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        }) 
        test("ensure correct column headings within sentences table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'sentences'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['sentence_id', 'unit', 'topic', 'polish', 'english'])
                })
        })
    })
})
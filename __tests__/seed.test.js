const db = require("../database/connection");
const seed = require("../database/seed");

beforeAll(() => seed());
afterAll(() => db.end())

/* current tables:
conditionaltenseimpverbs
conditionaltenseperverbs
futuretenseperverbs
pasttenseimpverbs
pasttenseperverbs
presenttenseimpverbs
sentences 
*/

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

    describe("verbs tables", () => {
        test("test that conditionaltenseimpverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'conditionaltenseimpverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within conditionaltenseimpverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'conditionaltenseimpverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
        test("test that conditionaltenseperverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'conditionaltenseperverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within conditionaltenseperverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'conditionaltenseperverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
        test("test that futuretenseperverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'futuretenseperverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within futuretenseperverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'futuretenseperverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
        test("test that pasttenseimpverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'pasttenseimpverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within pasttenseimpverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'pasttenseimpverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
        test("test that pasttenseperverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'pasttenseperverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within pasttenseperverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'pasttenseperverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
        test("test that presenttenseimpverbs table exists", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'presenttenseimpverbs');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("ensure correct column headings within presenttenseimpverbs table", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'presenttenseimpverbs'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['verb_id', 'unit', 'topic', 'verb', 'meaning', 'conjugation', 'ja', 'ty', 'on_ona', 'my', 'wy', 'oni_one'])
                })
        })
    })

    describe("Pronouns table", () => {
        test("does it exist?", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'pronouns');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("does it have the correct columns?", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'pronouns'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name })
                    expect(newMap).toEqual(['pronoun_id', 'category', 'noun', 'gender', 'singular_plural', 'meaning', 'nominative', 'accusative', 'instrumental', 'genitive', 'locative', 'dative'])
                })
        })
    })
    
    describe("Prepositions table", () => {
        test("Does it exist?", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'prepositions');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("Does it have the correct columns?", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'prepositions'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name });
                    expect(newMap).toEqual(["preposition_id", "grammatical_case", "preposition", "meaning", "examples", "notes"])
                })
        })
    })

    describe("Adjectives table", () => {
        test("Does it exist?", () => {
            return db.query(`SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'adjectives');`)
                .then(({ rows: [{ exists }] }) => {
                    expect(exists).toBe(true)
                })
        })
        test("Does it have the correct columns?", () => {
            return db.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'adjectives'`)
                .then(({ rows }) => {
                    const newMap = rows.map((row) => { return row.column_name });
                    expect(newMap).toEqual(["adjective_id", "base_adjective", "meaning", "gender", "singular_plural", "nominative", "nominative_comparative", "nominative_superlative", "accusative_animate", "accusative_inanimate", "instrumental", "genitive", "locative", "dative"])
                })
        })
    })
})

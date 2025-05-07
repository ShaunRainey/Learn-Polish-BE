const db = require("../database/connection");
const seed = require("../database/seed");
const request = require("supertest");
const app = require("../app");

beforeAll(() => seed());
afterAll(() => db.end());

describe("healthcheck", () => {
    test("returns 200 happy from /api/healthcheck", () => {
        return request(app).get("/api/healthcheck").expect(200)
            .then((response)=>{expect(response.text).toBe("hello world")})
    })
})

describe("sentences endpoint", () => {
    test("status 200 from /api/sentences", () => {
        return request(app).get("/api/sentences").expect(200)
            .then(({ body }) => {
                body.forEach((sentence) => {
                    expect(sentence).toMatchObject({
                        sentence_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        polish: expect.any(String),
                        english: expect.any(String)
                    })
                })
            });
    })
})

describe("verb endpoints", () => {
    test("status 200 from /api/verbs/imperfective/pastTense", () => {
        return request(app).get("/api/verbs/imperfective/pastTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
    test("status 200 from /api/verbs/imperfective/presentTense", () => {
        return request(app).get("/api/verbs/imperfective/presentTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
    test("status 200 from /api/verbs/imperfective/conditionalTense", () => {
        return request(app).get("/api/verbs/imperfective/conditionalTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
    test("status 200 from /api/verbs/perfective/pastTense", () => {
        return request(app).get("/api/verbs/perfective/pastTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
    test("status 200 from /api/verbs/perfective/futureTense", () => {
        return request(app).get("/api/verbs/perfective/futureTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
    test("status 200 from /api/verbs/perfective/conditionalTense", () => {
        return request(app).get("/api/verbs/perfective/conditionalTense").expect(200)
            .then(({ body }) => {
                body.forEach((verb) => {
                    expect(verb).toMatchObject({
                        verb_id: expect.any(Number),
                        unit: expect.any(Number),
                        topic: expect.any(String),
                        verb: expect.any(String),
                        meaning: expect.any(String),
                        conjugation: expect.any(String),
                        ja: expect.any(String),
                        ty: expect.any(String),
                        on_ona: expect.any(String),
                        my: expect.any(String),
                        wy: expect.any(String),
                        oni_one: expect.any(String),
                    })
                })
            });
    })
})

describe("Pronouns endpoint", () => {
    test("responds with status 200", () => {
        return request(app).get("/api/pronouns").expect(200)
    })
    test("response has correct body", () => {
        return request(app).get("/api/pronouns").then(({body}) => {
            body.forEach((pronoun) => {
                expect(pronoun).toEqual({
                    pronoun_id:expect.any(Number),
                    category: expect.any(String),
                    noun: expect.any(String),
                    gender: expect.any(String),
                    singular_plural: expect.any(String),
                    meaning: expect.any(String),
                    nominative: expect.any(String),
                    accusative: expect.any(String),
                    instrumental: expect.any(String),
                    genitive: expect.any(String),
                    locative: expect.any(String),
                    dative: expect.any(String),
                })
            })
        })
    })
})
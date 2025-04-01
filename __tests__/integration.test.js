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
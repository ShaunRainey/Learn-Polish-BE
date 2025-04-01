const db = require("../../db/connection");
const seed = require("../../db/seed");

beforeAll(() => seed());
afterAll(() => db.end())
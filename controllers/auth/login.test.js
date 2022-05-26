const {describe, expect, it} = require('@jest/globals');
const request = require('supertest');
const app = require("../../app");


describe("login request", ()=> {
    it("status - 200", async function () {
            const response = await request(app)
                .post("/api/users/login")
                .send({email: "marta.malovana@gmail.com", password: "marta1"});
                expect(response.status).toBe(200);
    }, 15000);

    // expect(response.data.token).toBe(true);
    // expect(typeof response.data.user).toBe(object);
    // expect(response.data.user.length).toBe(2);
    // expect(response.data.user.email).toBe(true);
    // expect(typeof response.data.user.email).toBe(string);
    // expect(response.data.user.subscription).toBe(true);
    // expect(typeof response.data.user.subscription).toBe(string);
})
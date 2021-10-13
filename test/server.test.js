const request = require('supertest');

describe('request Express.js server app', () => {
    let server;

    beforeEach(() => {
        server = require('../src/server');
    });

    afterEach((done) => {
        server.close();
        done();
    });

    it('respond 200 on base path /', (done) => {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('respond 404 on invalid path', (done) => {
        request(server)
            .get('/invalid/path')
            .expect(404, done);
    });
});

var request = require('supertest');
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('../src/server.js');
    });
/*
    afterEach(function (done) {
        // server.close( done );
        done();
    });
*/
    it('responds to /', function (done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to /user', function (done) {
        request(server)
            .get('/user')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, function (err, res) {
                if (err) {
                    return done(err);
                }
                const callStatus = res.body.goodCall;

                // expect(callStatus, 'tester');

                // Done
                done();
            });

    });

    it('404 everything else', (done) => {
        console.log('test 404')
        request(server)
            .get('/non/existent')
            .expect(404, done);
    });
});

const request = require( 'supertest' );
const chai    = require( 'chai'      );

describe( 'Express.js server app', () => {
    let server;
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
            .expect(200, ( err, res ) => {
                if (err) {
                    return done(err);
                }
                const callStatus = res.body;

                chai.expect( callStatus ).to.deep.equal(
                    [
                        { name: "John Smith",    username: "jsmith"    },
                        { name: "Jane Williams", username: "jwilliams" },
                        { name: "Robert Brown",  username: "rbrown"    },
                    ]
                );

                done();
            } );

    });

    it('404 everything else', (done) => {
        console.log('test 404')
        request(server)
            .get('/non/existent')
            .expect(404, done);
    });
});

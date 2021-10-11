// TODO Auto-Release in GitHub
// TODO complete documentation for all items!
// TODO update to latest npm and Node.js ! Update Node.js versions in pipeline!
// TODO prune mocha tests - replace with jest and create test report
// TODO release only on event: main + tag v. on release branch. Pick version from github tag!
// TODO docker container? Dockerfile + docker-compose

// TODO test all targets local ??
// TODO cache npm install ??

const express = require( 'express' );

/** The host address to listen on incoming requests. */
const HOST = '0.0.0.0';
/** The port to listen on incoming requests. */
const PORT = 8181;

/** Stores the Express.js lib object. */
const server = express();

server.get( '/', ( req, res ) => {
    res.send( 'Hello World. This is the result from the base route.' );
} );
server.get( '/user', ( req, res ) => {
    const users = [
        { name: 'John Smith',    username: 'jsmith'    },
        { name: 'Jane Williams', username: 'jwilliams' },
        { name: 'Robert Brown',  username: 'rbrown'    },
    ];
    res.json( users );
} );

console.log( `Start Express.js server on http://${HOST}:${PORT}` );

// export listening server to outside modules
module.exports = server.listen( PORT, HOST );

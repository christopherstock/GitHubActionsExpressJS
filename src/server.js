const express = require( 'express' );

const PORT = 8181;
const HOST = '0.0.0.0';

const server = express();

server.get( '/', ( req, res ) => {
    res.send( 'Hello World. This is the result from the base route.' );
} );
server.get( '/user', ( req, res ) => {
    const users = [
        { name: "John Smith",    username: "jsmith"    },
        { name: "Jane Williams", username: "jwilliams" },
        { name: "Robert Brown",  username: "rbrown"    },
    ];
    res.json( users );
} );

console.log( `Start Express.js server on http://${HOST}:${PORT}` );

// export listening server to outside modules
module.exports = server.listen( PORT, HOST );

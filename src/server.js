const express = require( 'express' );

const startServer = ( PORT = 8181, HOST = '0.0.0.0' ) => {
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

    return server.listen( PORT, HOST );
};

const server = startServer();

// export server to outside modules
module.exports = server;

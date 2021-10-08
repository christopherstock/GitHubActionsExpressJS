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

    server.listen( PORT, HOST );

    console.log( `Server running on http://${HOST}:${PORT}` );

    return server;
};

startServer();

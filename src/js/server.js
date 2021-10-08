// console.log('Servus Express App!');
// 'use strict';

const express = require('express');

const PORT = 8181;
const HOST = '0.0.0.0';

// create Express.js app
const server = express();

// specify routes
server.get('/', (req, res) => {
    res.send( 'Hello World. This is the result from the base route.' );
});
server.get('/user', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        '[{name:"John Doe", username:"jdoe"}]'
    );
});

// start Express.js server
server.listen( PORT, HOST );

console.log( `Running on http://${HOST}:${PORT}` );

// TODO separate build/release artefact and GitHub release item to separate job! download artefact and release!
// TODO docker container? Dockerfile + docker-compose
// TODO Prune eslint Report job?

const express = require('express');

/** The host address to listen on incoming requests. */
const HOST = '0.0.0.0';
/** The port to listen on incoming requests. */
const PORT = 8181;

/** The Express.js server instance. */
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World. This is the result from the base route.');
});
server.get('/user', (req, res) => {
    const users = [
        {name: 'John Smith',    username: 'jsmith'},
        {name: 'Jane Williams', username: 'jwilliams'},
        {name: 'Robert Brown',  username: 'rbrown'},
    ];
    res.json(users);
});

console.log(`Start Express.js server on http://${HOST}:${PORT}`);

// export listening express.JS server instance for outside modules
module.exports = server.listen(PORT, HOST);

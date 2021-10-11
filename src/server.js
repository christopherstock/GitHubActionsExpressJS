// TODO release only on event: main + tag v. on release branch. Pick version from github tag!
// TODO docker container? Dockerfile + docker-compose
// TODO separate build/release artefact and GitHub release item to separate job?

// TODO rename 'public' directory?
// TODO cache npm install ??
// TODO remove supertest?
// TODO test all targets local ??

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

// export listening express.JS server instanceto outside modules
module.exports = server.listen(PORT, HOST);

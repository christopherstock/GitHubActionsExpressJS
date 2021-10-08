# GitHub Actions
This app will demonstrate a CI/CD setup with GitHub Actions.

# CI/CD Pipeline State
![Pipeline State](https://github.com/christopherstock/GitHubActionsExpressJS/actions/workflows/node.js.yml/badge.svg)

## Install
Install all Node.js packages for this project
```
npm install
```

## Run
```
npm start
```

## UI Tests
Open your browser on these two routes:
```
http://0.0.0.0:8181
http://0.0.0.0:8181/user
```

Or perform a request using **cURL**:
```
curl -v http://0.0.0.0:8181
curl -v http://0.0.0.0:8181/user
```

## Integration Tests
This will invoke the Mocha test runner and invoke all integration tests:
```
npm test
```

## Build Release Artefact
This will invoke **webpack** and create the app release bundle:
```
npm run webpack
```

# Possible additional targets?
```
"typedoc:generate": "typedoc --out doc --listInvalidSymbolLinks --name \"Coding Ninjas II - Back with a Vengeance, (c) 2020 Mayflower GmbH\" src/typescript",
"eslint:check": "eslint \"src/**/*.{ts,tsx}\"",
"test:jest-coverage": "jest --coverage"
```

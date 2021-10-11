# GitHub Actions
This app will demonstrate a CI/CD setup with GitHub Actions for an Express.js REST-Server application.

# CI/CD Pipeline State
![Pipeline State](https://github.com/christopherstock/GitHubActionsExpressJS/actions/workflows/node.js.yml/badge.svg)

___

# 1. npm Targets

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

## ESLint Code Inspection
This will invoke **eslint** on all app and test sources:
```
npm run eslint-scan
```

## JSDoc Code Documentation Generation
This will invoke **jsdoc** on all sources:
```
npm run jsdoc
```

## Build Release Artefact
This will invoke **webpack** and create the app release bundle:
```
npm run release
```
___

# 2. Docker

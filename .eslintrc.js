module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017
    },
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'jest': true,
    },
    rules: {
        'indent': [ 'error', 4 ],
        'quotes': [ 'error', 'single' ],
        'max-len': ['error', { 'code': 120 }]
    }
};

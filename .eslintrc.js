module.exports = {
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2017
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {

        "consistent-return": 2,
        "indent"           : [1, 4],
        "no-else-return"   : 1,
        "semi"             : [1, "always"],
        "space-unary-ops"  : 2,
/*
        camelcase: 'warn',
        complexity: 'off',
        // enable additional rules
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["warn", "single"],
        semi: ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
         "for-direction": "off",
 */
    }
};

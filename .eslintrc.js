module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "comma-dangle": ["error", "only-multiline"],
        "object-curly-spacing": ["error", "always"],
        "no-console": ["error", {allow: ["warn", "error"]}],
        "react/jsx-indent": [2, 2, {indentLogicalExpressions: true}],
        "eol-last": ["error", "always"]
    }
};
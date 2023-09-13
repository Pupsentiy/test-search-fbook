module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.json', './tsconfig.node.json']
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        '@typescript-eslint/strict-boolean-expressions': 'off',
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/display-name": "off",
        'react/jsx-props-no-spreading': 'warn',
        "@typescript-eslint/no-misused-promises": [2, {
            "checksVoidReturn": {
                "attributes": false
            }
        }],
        "max-len": [
            "error",
            {
                code: 100,
                ignoreComments: true,
            },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    }
}

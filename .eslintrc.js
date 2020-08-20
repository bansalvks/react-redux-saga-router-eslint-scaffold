module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    globals: {
        workbox: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: '16.3',
        },
        "import/resolver": {
            "alias": {
                "map": [
                    ["src", "./src"],
                ]
            },
            "extensions": [".js", ".scss", ".json"]
        }
    },
    env: {
        jest: true,
        jasmine: true,
        es6: true,
        browser: true,
        worker: true,
        node: true,
    },
    rules: {
        'global-require': 0,
        curly: [
            'error',
            'all',
        ],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'react/jsx-indent': [
            2,
            4,
        ],
        'react/jsx-indent-props': [
            2,
            4,
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                ],
            },
        ],
        'max-len': [
            'error',
            {
                code: 500,
                comments: 500,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: [
                    '_REDUX_DEVTOOLS_EXTENSION_COMPOSE_',
                    '_REDUX_DEVTOOLS_EXTENSION_',
                ],
            },
        ],
        'jsx-a11y/media-has-caption': [
            1,
            {
                audio: [
                    'Audio',
                ],
                video: [
                    'Video',
                ],
                track: [
                    'Track',
                ],
            },
        ],
        'jsx-a11y/aria-role': [
            2,
            {
                ignoreNonDOM: true,
            },
        ],
        'brace-style': [
            'error',
            'stroustrup',
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-console': 'off',
        'no-restricted-syntax': [
            'warn',
            {
                selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(debug|error|trace)$/]",
                message: 'Unexpected property on console object was called',
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                object: true,
                array: false,
            },
        ],
        'object-property-newline': [
            2,
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'array-bracket-newline': [
            2,
            {
                multiline: true,
                minItems: 1,
            },
        ],
        'array-element-newline': [
            2,
            {
                multiline: true,
                minItems: 1,
            },
        ],

        'react/jsx-max-props-per-line': [
            2,
            {
                maximum: 1,
            },
        ],
    },

};
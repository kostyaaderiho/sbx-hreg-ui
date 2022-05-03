const fs = require('fs');

const path = require('path');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
    env: {
        browser: true,
        jest: true
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'react-app/jest',
        'airbnb-typescript',
        'prettier',
        'plugin:storybook/recommended'
    ],
    plugins: ['import', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'comma-dangle': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'react/react-in-jsx-scope': 'off',
        'arrow-parens': [2, 'always'],
        'func-names': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-unresolved': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['parent', 'sibling'],
                    'index',
                    'type',
                    'object'
                ],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal'
                    },
                    {
                        pattern: '*.style',
                        group: 'object',
                        patternOptions: {
                            dot: true,
                            matchBase: true
                        }
                    }
                ],
                'newlines-between': 'always'
            }
        ]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                '~/*': ['./src/*']
            }
        }
    },
    parserOptions: {
        project: './tsconfig.json'
    }
};

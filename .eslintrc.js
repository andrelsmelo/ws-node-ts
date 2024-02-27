module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
      {
        files: ['*.ts'],
        parserOptions: {
          project: ['tsconfig.json'],
          createDefaultProgram: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended',
        ],
        plugins: ['@typescript-eslint/eslint-plugin'],
        rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': ['error'],
          'no-empty-function': 'off',
          '@typescript-eslint/no-empty-function': 'error',
          'no-console': ['error', { allow: ['warn', 'error'] }],
          'no-inline-comments': 'error',
          '@typescript-eslint/consistent-type-imports': 'error',
          '@typescript-eslint/ban-tslint-comment': 'error',
          '@typescript-eslint/ban-types': 'error',
        },
      },
    ],
  };
  
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     'standard',
//     'prettier'
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module'
//   },
//   plugins: [
//     '@typescript-eslint'
//   ],
//   rules: {
//   }
// }

module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  env: {
    browser: true,
    es2021: true
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        ecmaVersion: 12,
        sourceType: 'module'
      },
      extends: [
        'standard',
        'prettier',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case'
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {}
    }
  ]
};

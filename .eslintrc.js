module.exports = {
  "env": {
        "browser": true,
        "es6": true,
        "node": true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'vue/jsx-uses-vars': 2,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "no-param-reassign": 0,
    "linebreak-style": 0,
    "eol-last": 0,
    "no-bitwise": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    'no-console': 'off',
    "import/no-dynamic-require": 0,
    'import/no-extraneous-dependencies': 0,  
    "global-require": 0,
    "new-cap": [2, { "capIsNewExceptions": ["Deferred"] }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

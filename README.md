# nunjucks-render-loader

Nunjucks loader module for webpack

## Installation

```shell
npm install --save nunjucks-render-loader
```

## Usage

### webpack.config.js

```js
module: {
  rules: [
    {
      test: /\.njk$/,
      use: {
        loader: 'nunjucks-render-loader',
        options: {
          path: path.resolve(__dirname, 'src/views')
        }
      }
    }
  ]
},

plugins: [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './index.njk'
  })
]
```

## Options
- `path` - Relative path to templates. (default: process.cwd())

- `envOptions` - These are options provided for nunjucks Environment. More info [here](https://mozilla.github.io/nunjucks/api.html#configure). (default: {})

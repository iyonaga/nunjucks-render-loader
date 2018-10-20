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

## Tips

- ### Passing variables using HTML Webpack Plugin

#### webpack.config.js
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
    foo: 'bar',
    filename: 'index.html',
    template: './index.njk'
  })
]
```

#### index.njk
```html
<！DOCTYPE html>
<html>
  {% include "partials/_head.njk" %}
  <body>
    <％= htmlWebpackPlugin.options.foo ％>
  </body>
</html>
```

- ### Require images

```html
<！DOCTYPE html>
<html>
  {% include "partials/_head.njk" %}
  <body>
    <img src="<％= require('./img/image.jpg') ％>">
  </body>
</html>
```

## Options
- `path` - Relative path to templates. (default: process.cwd())

- `context` - Data to pass to the template. (default: {})

- `envOptions` - These are options provided for nunjucks Environment. More info [here](https://mozilla.github.io/nunjucks/api.html#configure). (default: {})

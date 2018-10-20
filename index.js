const loaderUtils = require('loader-utils');
const nunjucks = require('nunjucks');
const _ = require('lodash');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  const userOptions = loaderUtils.getOptions(this) || {};
  const defaultOptions = {
    path: process.cwd(),
    context: {}
  };

  const options = Object.assign(defaultOptions, userOptions);

  this.addContextDependency(options.path);

  const env = nunjucks.configure(options.path, options.envOptions);
  const templateString = env.renderString(content, options.context);

  // compile for HTML Webpack Plugin
  const result = _.template(templateString);

  return `
    module.exports = ${result}
  `;
};

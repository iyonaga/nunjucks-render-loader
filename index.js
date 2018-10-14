const loaderUtils = require('loader-utils');
const nunjucks = require('nunjucks');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  const userOptions = loaderUtils.getOptions(this) || {};
  const defaultOptions = {};
  const options = Object.assign(defaultOptions, userOptions);

  const env = nunjucks.configure(options.path, options.envOptions);

  this.addContextDependency(options.path);

  const result = env.renderString(content);

  return 'module.exports = ' + JSON.stringify(result);
};

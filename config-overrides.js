const reactAppRewired = require('react-app-rewired')
const path = require('path')


module.exports = function override(config, env) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [
        ...config.resolve.modules,
        path.resolve('./src'),
        'node_modules'
      ]
    }
  }
}

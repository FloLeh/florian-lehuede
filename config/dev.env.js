'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  USER_ID: '"user_gxjYjlIPqjhKpdvO1CGFf"',
  SERVICE_ID: '"site-perso"',
  TEMPLATE_ID: '"template_6wu143u"'
})

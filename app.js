'use strict';
/**
 * xl created at 2019-04-16 18:23:51
 *
 * app.js
 */

const mysql = require('./lib/mysql');

module.exports = app => {
  if (app.config.sequelize.app) mysql(app);
};

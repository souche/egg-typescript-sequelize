'use strict';
/**
 * xl created at 2019-04-16 18:23:51
 *
 * Agent
 */

const mysql = require('./lib/mysql');

module.exports = agent => {
  if (agent.config.sequelize.agent) mysql(agent);
};

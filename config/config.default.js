'use strict';

/**
 * default config
 * @member Config#sequelize
 * @property {Object} default - 通用配置
 */
exports.sequelize = {
  default: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      underscored: true,
    },
    timezone: '+08:00',
  },
  app: true,
  agent: false,
};

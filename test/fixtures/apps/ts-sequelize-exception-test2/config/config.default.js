'use strict';

exports.keys = '123456';

exports.sequelize = {
  clients: {
    test: {
      isAutoSync: false,
      port: '3306',
      host: '127.0.0.1',
      username: 'root',
      password: 'root',
      database: 'test',
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      storage: 'db/test-foo.sqlite',
      timezone: '+08:01',
      define: {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
      },
    },
  },
};

'use strict';
/**
 * xl created at 2019-04-16 18:23:51
 *
 * 创建 sequelize 实例
 */

const fs = require('fs');
const _ = require('lodash');
const assert = require('assert');
const path = require('path');
const originSequelize = require('sequelize-typescript');
const util = require('./util');

module.exports = app => {
  // 添加 Sequelize 原始对象
  // app.SequelizeTs = originSequelize.Sequelize;
  // 添加 sequelize 单例
  createClient(app);
};

function createClient(app) {
  app.sequelize = new Map();
  app.model = {};

  const config = app.config.sequelize;
  for (const key in config.clients) {
    const dbConfig = Object.assign(
      {},
      config.default,
      config.clients[key]
    );

    assert(dbConfig.username && dbConfig.host && dbConfig.database, `sequelize.clients.${key} 内 username, host, database 必填`);

    app.coreLogger.info('[blue-windy-sequelize] connecting %s@%s:%s/%s', dbConfig.username, dbConfig.host, dbConfig.port, dbConfig.database);

    // http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
    const client = new originSequelize.Sequelize(dbConfig);
    app.sequelize.set(key, client);
    app.beforeStart(async function() {
      // http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-method-authenticate
      await client.authenticate();
      await loadModel(app, client, _.assign({
        conn: key,
      }, dbConfig));
    });
  }
}

/**
 * 按照数据库加载 model
 * @param {Application} app - app 实例
 * @param {sequelize} client - 数据连接实例
 * @param {Object} config - 数据库配置
 */
async function loadModel(app, client, config) {
  const directory = path.join(app.baseDir, `app/model/${config.conn}`);
  const defaultModelMatch = (filename, member) => filename === member;
  const models = originSequelize.getModels([ directory ], defaultModelMatch);
  models.map(model => {
    // timestamps: true
    originSequelize.addOptions(model.prototype, { timestamps: true });

    // 字段驼峰 -> 下划线
    let attributes = originSequelize.getAttributes(model.prototype);
    attributes = util.modifyAttributes(attributes);

    originSequelize.setAttributes(model.prototype, attributes);
  });
  client.addModels(models);

  // 校验 conn 路径是否存在
  const exists = fs.existsSync(directory);
  if (!exists) {
    throw new Error(`指定的路径不存在 ${directory}`);
  }

  const stat = fs.statSync(directory);
  if (!stat.isDirectory()) {
    throw new Error(`指定的路径非目录 ${directory}`);
  }

  const target = app.model[config.conn] = {};

  const opt = Object.assign({}, {
    directory,
    target,
    typescript: app.loader.options.typescript,
    // initializer(model) {
    //   return model(app, client, target);
    // },
    call: false,
  });

  new app.loader.FileLoader(opt).load();

  // 查询现有数据库表
  // http://docs.sequelizejs.com/variable/index.html#static-variable-QueryTypes
  const tables = await client.query('show tables', {
    type: originSequelize.Sequelize.QueryTypes.SHOWTABLES,
  });

  // 进行表同步，非强制
  if (config.isAutoSync && config.isAutoSync === true) {
    await client.sync();
  }

  for (const key in target) {
    const tableName = target[key].tableName;
    // 如果表先前不存在，则更改表时间字段
    if (config.isAutoSync && tables.indexOf(tableName) === -1) {
      await util.modifyTimestamps(client, tableName);
    }
  }
}

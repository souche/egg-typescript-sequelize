# egg-typescript-sequelize

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-typescript-sequelize.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-typescript-sequelize
[travis-image]: https://img.shields.io/travis/souche-hero/egg-typescript-sequelize.svg?style=flat-square
[travis-url]: https://travis-ci.org/souche-hero/egg-typescript-sequelize
[codecov-image]: https://img.shields.io/codecov/c/github/souche-hero/egg-typescript-sequelize.svg?style=flat-square
[codecov-url]: https://codecov.io/github/souche-hero/egg-typescript-sequelize?branch=master
[david-image]: https://img.shields.io/david/souche-hero/egg-typescript-sequelize.svg?style=flat-square
[david-url]: https://david-dm.org/souche-hero/egg-typescript-sequelize
[snyk-image]: https://snyk.io/test/npm/egg-typescript-sequelize/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-typescript-sequelize
[download-image]: https://img.shields.io/npm/dm/egg-typescript-sequelize.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-typescript-sequelize


sequelize-typescript for Egg.js, more documentation please visit [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript).

## Install

```bash
$ npm i egg-typescript-sequelize --save
$ npm install --save mysql2 # For both mysql and mariadb dialects
```

## Features

- 模型字段自动小驼峰->下划线转换，如 birthArea -> birth_area
- 多数据库访问支持
- 数据库模型默认添加 createdAt, updatedAt 属性，参见：默认时间字段



## Usage & Configuration

- Enable plugin in config/plugin.js

```js
// {app_root}/config/plugin.js
exports.tsSequelize = {
  enable: true,
  package: 'egg-typescript-sequelize',
};
```

- ts config: please add [egg-ts-helper](https://github.com/whxaxes/egg-ts-helper) options below

```js
// {app_root}/tshelper.js
module.exports = {
  watchDirs: {
    // blue-windy-sequelize 配置
    model: require('egg-typescript-sequelize/tshelper'),
  }
}
```

- sequelize multiple connections config, more documentation please visit [sequelizejs](http://docs.sequelizejs.com/manual/usage.html#options)

```js
// {app_root}/config/config.default.js
exports.sequelize = {
  clients: {
    test: {
      database: 'test',
      dialect: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '',
      // Sync all defined models to the DB, default false.
      // isAutoSync: true,
    },
    test2: {
      database: 'test2',
      dialect: 'mysql',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '',
      // Sync all defined models to the DB, default false.
      // isAutoSync: true,
    },
  },
  // default config, dbconfig = Object.assign({}, default, dbconfig);
  default: {

  },
  // mount to app, default true
  // app: true,
  // mount to agent, default false
  // agent: true,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

Define models:
```js
// {app_root}/model/test/uset.ts
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import post from './post';

@Table
export default class user extends Model<user> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @Column({
    defaultValue: '',
  })
  nickName: string

  @HasMany(() => post)
  post: post[];
}

// {app_root}/model/test/post.ts

import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import user from './user';

@Table({
  timestamps: true,
})
export default class post extends Model<post> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number

  @Column
  name: string

  @ForeignKey(() => user)
  @Column
  user_id: number
}

```

Now you can use it in your controller:

```js
// app/controller/user.js
import { Controller } from 'egg';

export default class UserController extends Controller {
  async jpush() {
    const result = await this.app.model.test.user.findOne();
    // association query
    // const result = await app.model.test.user.findOne({ include: [ app.model.test.post ], where: { nick_name: 'xl' } });
    this.ctx.body = result;
  }
}

```
more documentation please visit [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript).

## Questions & Suggestions

Please open an issue [here](https://github.com/souche-hero/egg-typescript-sequelize/issues).

## License

[MIT](LICENSE)

/**
 * xl created at 2019-04-16 18:23:51
 */

import 'egg';
import { Sequelize, Model, SequelizeOptions } from 'sequelize-typescript';

/**
 * 连接实例 MAP
 */
interface Clients<V> {
  get(kye: String): V;
}

// egg 申明合并
declare module 'egg' {
  interface TsSequelizeModel {
    [propName: string]: typeof Model;
  }

  // extend app
  interface Application {
    sequelize: Clients<InstanceType<typeof Sequelize>>;
    model: TsSequelizeModel;
  }

  interface TsSequelizeOptions extends SequelizeOptions {
    isAutoSync?: boolean;
  }

  // extend your config
  interface EggAppConfig {
    sequelize?: {
      clients: {
        [index: string]: TsSequelizeOptions;
      }
      default: TsSequelizeOptions;
      // 是否加载到 app，默认 true
      app?: boolean;
      // 是否加载到 agent，默认 false
      agent?: boolean;
    },
  }
}

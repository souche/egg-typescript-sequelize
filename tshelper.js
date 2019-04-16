'use strict';
/**
 * xl created at 2019-04-16 18:23:51
 *
 */

module.exports = {
  path: 'app/model', // dir path
  pattern: '**/*.(ts|js)',
  framework: 'egg', // framework name
  interface: 'TsSequelizeModel', // interface name
  caseStyle: filename => {
    return filename.replace(
      /\_(\w)/g,
      (str, index) => {
        return index ? str.substr(-1).toUpperCase() : str;
      }
    );
  },
  interfaceHandle: val => `typeof ${val}`, // interfaceHandle
  trigger: [ 'add', 'unlink', 'change' ], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
};

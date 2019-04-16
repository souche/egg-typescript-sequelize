'use strict';
/**
 * xl created at 2019-04-16 18:23:51
 *
 * 工具类
 */

async function modifyTimestamps(database, tableName) {
  await database.query(
    `alter table \`${tableName}\` ` +
    'modify column `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT \'创建时间\',' +
    'modify column `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT \'更新时间\''
  );
}

/**
 *
 * @param {字段属性} attributes
 */
function modifyAttributes(attributes) {
  // camel -> underscore
  for (const key in attributes) {
    // if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
    //   continue;
    // }
    // if (
    //   (
    //     typeof attributes[key] === 'function' ||
    //     attributes[key].constructor.name !== 'Object'
    //   ) &&
    //     typeof key === 'string'
    // ) {
    //   attributes[key] = {
    //     type: attributes[key],
    //   };
    // }

    if (!attributes[key].field) {
      attributes[key].field = key.replace(/[A-Z]+/g, function(p0) {
        return '_' + p0.toLowerCase();
      });
    }
  }

  return attributes;
}

module.exports = {
  modifyTimestamps,
  modifyAttributes,
};

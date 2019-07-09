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

module.exports = {
  modifyTimestamps,
};

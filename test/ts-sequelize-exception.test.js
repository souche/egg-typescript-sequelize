'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('model dir is empty', () => {
  let app;
  before(async () => {
    try {
      app = mock.app({
        baseDir: 'apps/ts-sequelize-exception-test',
      });
      const ret = await app.ready();
      return ret;
    } catch (error) {
      assert(error.message.includes('指定的路径不存在'));
    }
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tsSequelize')
      .expect(200);
  });
});

describe('model dir is error', () => {
  let app;
  before(async () => {
    try {
      app = mock.app({
        baseDir: 'apps/ts-sequelize-exception-test2',
      });
      const ret = await app.ready();
      return ret;
    } catch (error) {
      assert(error.message.includes('指定的路径非目录'));
    }
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tsSequelize')
      .expect(200);
  });
});


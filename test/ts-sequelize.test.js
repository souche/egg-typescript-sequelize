'use strict';

const mock = require('egg-mock');
const assert = require('assert');
const originSequelize = require('sequelize-typescript');

describe('test/ts-sequelize.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ts-sequelize-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, tsSequelize')
      .expect(200);
  });

  it('sequelize init success', async () => {
    assert(app.model);
    assert(app.model.test);

    assert(app.sequelize);
    assert(app.sequelize.get('test') instanceof originSequelize.Sequelize);
  });

  it('sequelize model test', async () => {
    assert(app.model.test.user.tableName === 'user');
    assert(app.model.test.user.findOne);

    const data = await app.model.test.user.create({ name: 'node' });

    assert(data.name === 'node');

    const delNum = await app.model.test.user.destroy({ where: { name: 'node2' } });
    assert(delNum === 0);

    const delNum2 = await app.model.test.user.destroy({ where: { name: 'node' } });
    assert(delNum2 === 1);

    await app.model.test.user.create({ id: 2, name: 'souche' });
    await app.model.test.post.create({ user_id: 2, name: 'node' });
    const user = await app.model.test.user.findOne({ include: [ app.model.test.post ], where: { id: 2 } });
    assert(user.post[0].name === 'node');

    await app.model.test.post.destroy({ where: { user_id: 2 } });
    await app.model.test.user.destroy({ where: { id: 2 } });

    app.model.test.book.drop();
  });
});

describe('config.sequelize.app = false', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ts-sequelize-disable-test',
    });
    return app.ready();
  });
  after(() => app.close());

  it('should disable app work', () => {
    assert(!app.model);
  });
});

describe('sequelize isAutoSync = false', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/ts-sequelize-nosync-test',
    });
    return app.ready();
  });

  after(() => app.close());

  it('should Table not exist', async () => {
    try {
      await app.model.test.book.findOne();
    } catch (error) {
      assert(/Table .* doesn't exist/.test(error.message));
    }
  });
});

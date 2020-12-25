'use strict';

const mock = require('egg-mock');

describe('test/cos-sts.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/cos-sts-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, cosSts')
      .expect(200);
  });
});

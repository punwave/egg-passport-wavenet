'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-wavenet.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-wavenet-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportWavenet')
      .expect(200);
  });

  it('should GET /passport/wavenet redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/wavenet')
      .expect('Location', /^https:\/\/accounts.google.com\/o\/oauth2\/v2\/auth\?response_type=code&redirect_uri=http/)
      .expect(302);
  });

  it('should GET /passport/wavenet/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/wavenet/callback')
      .expect('Location', /^https:\/\/accounts.google.com\/o\/oauth2\/v2\/auth\?response_type=code&redirect_uri=http/)
      .expect(302);
  });
});

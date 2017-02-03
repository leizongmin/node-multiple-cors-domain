'use strict';

/**
 * multiple-cors-domain tests
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const expect = require('chai').expect;
const supertest = require('supertest');
const connect = require('connect');
const multipleCORSDomain = require('../');

describe('multiple-cors-domain', function () {

  describe('any = true', function () {
    it('http', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'http://example.com')
        .expect('Access-Control-Allow-Origin', 'http://example.com')
        .expect(200, done);
    });
    it('https', function (done) {
      const app = connect();
      app.use(multipleCORSDomain({
        any: true,
      }));
      app.use(function (req, res) {
        res.end('OK');
      });
      supertest(app)
        .get('/test')
        .set('Origin', 'https://example.com')
        .expect('Access-Control-Allow-Origin', 'https://example.com')
        .expect(200, done);
    });
  });

});

'use strict';

/**
 * multiple-cors-domain
 * Connect middleware that allow multiple CORS domain
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const assert = require('assert');
const parseURL = require('url').parse;

/**
 * Returns multiple-cors-domain middleware
 *
 * @param {Object} options
 *   - {Array} domain   a list of domains
 *   - {Boolean} any    allow any domain
 *   - {Object} headers additional headers
 */
function multipleCORSDomain(options) {

  assert(options, `missing options`);
  if (options.any) {
    assert(options.any === true, `invalid 'any' option: must be true`);
  } else {
    assert(Array.isArray(options.domain), `invalid 'domain' option: must be an array`);
    assert(options.domain.length > 0, `invalid 'domain' option: must have at least one item`);
  }

  function setAdditionalHeaders(res) {
    if (options.headers) {
      for (const name in options.headers) {
        res.setHeader(name, options.headers[name]);
      }
    }
  }

  if (options.any) {
    return function (req, res, next) {
      const origin = req.headers.origin;
      if (origin) {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Origin', origin);
        setAdditionalHeaders(res);
      }
      next();
    };
  }

  return function (req, res, next) {
    const origin = req.headers.origin;
    const info = parseURL(origin);
    if (origin && options.domain.indexOf(info.host) !== -1) {
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Origin', origin);
      setAdditionalHeaders(res);
    }
    next();
  };
}

module.exports = multipleCORSDomain;

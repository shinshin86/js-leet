'use strict';
const assert = require('assert');
const { getLeet } = require('../leet.js');

describe('leet', () => {
  describe('getLeet()', () => {
    it('Should return converted leet text', () => {
      assert.notEqual(getLeet('hello'), 'hello');
    });

    it('Should not converted leet if integer', () => {
      assert.equal(getLeet('1234567890'), '1234567890');
    });
  });
});

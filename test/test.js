'use strict';

const expect = require('chai').expect;

const addends = require('../app');

const array1 = [1,2,3,4,5,6,7];
const sum1 = 13;
const sum2 = 4;
const sum3 = 8;
const indArr1 = [5,6];
const indArr2 = [0,2];
const indArr3 = [0,6];

describe('tests for app.js', function() {
  it('should search an array for two integers which add up to a given integer and return the indices of those integers in an array', function() {
    expect(addends(array1, sum1)).to.eql(indArr1);
  });
  it('should search an array for two integers which add up to a given integer and return the indices of those integers in an array', function() {
    expect(addends(array1, sum2)).to.eql(indArr2);
  });
  it('should search an array for two integers which add up to a given integer and return the indices of those integers in an array', function() {
    expect(addends(array1, sum3)).to.eql(indArr3);
  });
});

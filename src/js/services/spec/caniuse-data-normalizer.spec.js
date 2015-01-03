/* global describe, it */
import chai from 'chai';
import caniuseDataNormalizer from '../caniuse-data-normalizer';

var assert = chai.assert;


describe('caniuseDataNormalizer API test', function() {

    it('should be an object with normalize function', function() {
        assert.isObject(caniuseDataNormalizer, 'module is not an object');
        assert.isFunction(caniuseDataNormalizer.normalize, 'module has not normalize function');
    });

});

describe('caniuseDataNormalizer crunching data test', function() {

});

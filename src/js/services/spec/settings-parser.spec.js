/* global describe, it, beforeEach, afterEach */

import chai from 'chai';
import SettingsParser from '../settings-parser';
import normalizdeCanIUseData from './caniuse-data-normalized.fixture';

var assert = chai.assert;


describe('SettingsParser API test', function() {

    it('should be a function that can be instantiated', function() {
        assert.isFunction(SettingsParser, 'module is not a function');
        assert.doesNotThrow(function() {
            new SettingsParser(normalizdeCanIUseData);
        }, 'module can not be instantiated');
    });

});

describe('SettingsParser instance test', function() {
    var settingsParser;

    beforeEach(function() {
        settingsParser = new SettingsParser(normalizdeCanIUseData);
    });

    afterEach(function() {
        settingsParser = null;
    });


    it('has a bunch of public methods', function() {
        assert.property(settingsParser, 'parse');
        assert.isFunction(settingsParser.parse);

        assert.property(settingsParser, 'stringify');
        assert.isFunction(settingsParser.stringify);
    });


    describe('parse method', function() {
        var parsed;

        beforeEach(function() {
            parsed = settingsParser.parse('>1%');
        });

        afterEach(function() {
            parsed = null;
        });


        it('Should return an object', function() {
            assert.isObject(parsed, 'parse method result is not an object');
        });

        it('Should return an object with arrays as a fields values', function() {
            Object.keys(parsed).forEach(function(key) {
                assert.isArray(parsed[key]);
            });
        });

        it('Should return an object with not empty arrays as a fields values', function() {
            Object.keys(parsed).forEach(function(key) {
                assert.notEqual(parsed[key].length, 0);
            });
        });

    });

});


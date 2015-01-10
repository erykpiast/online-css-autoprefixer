/* global describe, it, beforeEach, afterEach */

import chai from 'chai';
import caniuseDataNormalizer from '../caniuse-data-normalizer';
import canIUseData from './caniuse-data.fixture';

var assert = chai.assert;


describe('caniuseDataNormalizer API test', function() {

    it('should be an object with normalize function', function() {
        assert.isObject(caniuseDataNormalizer, 'module is not an object');
        assert.isFunction(caniuseDataNormalizer.normalize, 'module has not normalize function');
    });

});

describe('caniuseDataNormalizer normalizing data test', function() {
    var exampleData, normalizedData;

    beforeEach(function() {
        exampleData = JSON.parse(JSON.stringify(canIUseData));

        normalizedData = caniuseDataNormalizer.normalize(exampleData);
    });

    afterEach(function() {
        exampleData = normalizedData = null;
    });


    it('Should has browsers field', function() {
        assert.property(normalizedData, 'browsers');
        assert.isDefined(normalizedData.browsers);
    });

    it('Should browsers field contain popular browsers', function() {
        assert.property(normalizedData.browsers, 'chrome');
        assert.property(normalizedData.browsers, 'android');
    });

    it('Should omit some browsers like Opera Mini', function() {
        assert.notProperty(normalizedData.browsers, 'op_mini', 'normalized data contains unwanted data');
    });


    describe('browser entry', function() {
        var chrome, android, bb;

        beforeEach(function() {
            chrome = normalizedData.browsers['chrome'];
            android = normalizedData.browsers['android'];
            bb = normalizedData.browsers['bb'];
        });

        afterEach(function() {
            chrome = android = bb = null;
        });


        describe('versions field', function() {
            var chromeVersions, androidVersions, bbVersions;

            beforeEach(function() {
                chromeVersions = chrome.versions;
                androidVersions = android.versions;
                bbVersions = bb.versions;
            });

            afterEach(function() {
                chromeVersions = androidVersions = bbVersions = null;
            });


            it('Should splice future versions from versions array', function() {
                assert.notInclude(chromeVersions, '40');
                assert.notInclude(chromeVersions, '41');
                assert.notInclude(chromeVersions, '42');

                assert.notInclude(androidVersions, '32');
            });

            it('Should expand versions ranges', function() {
                assert.include(androidVersions, '4.2');
                assert.include(androidVersions, '4.3');
                assert.include(androidVersions, '4.4.3');
                assert.include(androidVersions, '4.4.4');
            });

            it('Should sort versions from the latest to the oldest', function() {
                assert.equal(chromeVersions[0], '39');
                assert.equal(chromeVersions[chromeVersions.length - 1], '4');

                assert.equal(androidVersions[0], '37');
                assert.equal(androidVersions[androidVersions.length - 1], '2.1');

                assert.equal(bbVersions[0], '10');
                assert.equal(bbVersions[bbVersions.length - 1], '7');
            });

        });


        describe('popularity field', function() {
            var chromeVersions, androidVersions, bbVersions;
            var chromePopularity, androidPopularity, bbPopularity;

            beforeEach(function() {
                chromeVersions = chrome.versions;
                androidVersions = android.versions;
                bbVersions = bb.versions;

                chromePopularity = chrome.popularity;
                androidPopularity = android.popularity;
                bbPopularity = bb.popularity;
            });

            afterEach(function() {
                chromeVersions = androidVersions = bbVersions = null;

                chromePopularity = androidPopularity = bbPopularity = null;
            });


            it('Should be an object with numeric field for each version', function() {
                chromeVersions.forEach(function(version) {
                    assert.property(chromePopularity, version);
                    assert.isNumber(chromePopularity[version]);
                });

                androidVersions.forEach(function(version) {
                    assert.property(androidPopularity, version);
                    assert.isNumber(androidPopularity[version]);
                });

                bbVersions.forEach(function(version) {
                    assert.property(bbPopularity, version);
                    assert.isNumber(bbPopularity[version]);
                });
            });

        });


        describe('future field', function() {

            it('Should set future collection if browsers has future versions', function() {
                assert.isArray(chrome.future);
                assert.sameMembers(chrome.future, [ '40', '41' ]);
            });

            it('Should sort future collection from newest to oldest', function() {
                assert.equal(chrome.future[0], '41');
                assert.equal(chrome.future[1], '40');
            });

            it('Should not set future collection if browsers has no future version', function() {
                assert.isUndefined(bb.future);
                assert.isUndefined(android.future);
            });

        });


        describe('minor field', function() {

            it('Should not set minor flag for browsers like Chrome or Android Browser', function() {
                assert.equal(chrome.minor, false, 'major browser has minor flag');
                assert.equal(android.minor, false, 'major browser has minor flag');
            });

            it('Should set minor flag for browsers like BlackBerry Browser', function() {
                assert.equal(bb.minor, true, 'minor browser has no minor flag');
            });

        });

    });

});


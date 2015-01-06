/* global describe, it, beforeEach, afterEach */

import chai from 'chai';
import caniuseDataNormalizer from '../caniuse-data-normalizer';

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
        exampleData = {
            updated: 123456789,
            agents: {
                'chrome': {
                    browser: 'Chrome',
                    abbr: 'Chr.',
                    type: 'desktop',
                    'usage_global': {
                        '4': 0.013434,
                        '5': 0.013434,
                        '6': 0.020151,
                        '7': 0.013434,
                        '8': 0.013434,
                        '9': 0.006717,
                        '10': 0.020151,
                        '11': 0.107472,
                        '12': 0.033585,
                        '13': 0.026868,
                        '14': 0.020151,
                        '15': 0.026868,
                        '16': 0.020151,
                        '17': 0.013434,
                        '18': 0.033585,
                        '19': 0.020151,
                        '20': 0.020151,
                        '21': 0.167925,
                        '22': 0.094038,
                        '23': 0.033585,
                        '24': 0.053736,
                        '25': 0.040302,
                        '26': 0.06717,
                        '27': 0.087321,
                        '28': 0.080604,
                        '29': 0.20151,
                        '30': 0.161208,
                        '31': 0.698568,
                        '32': 0.221661,
                        '33': 0.651549,
                        '34': 0.476907,
                        '35': 0.926946,
                        '36': 1.27623,
                        '37': 15.7312,
                        '38': 12.3929,
                        '39': 0.13434,
                        '40': 0.120906,
                        '41': 0,
                        '42': 0
                    },
                    versions: [
                        '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
                        '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'
                    ]
                },
                'android': {
                    browser: 'Android Browser',
                    abbr: 'And.',
                    type: 'mobile',
                    'usage_global': {
                        '2.1': 0,
                        '2.2': 0.00831376,
                        '2.3': 0.191216,
                        '3': 0.00623532,
                        '4': 0.421923,
                        '4.1': 1.24152,
                        '4.2-4.3': 1.8602,
                        '4.4': 2.36873,
                        '4.4.3-4.4.4': 0.773179,
                        '37': 0
                    },
                    versions: [
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        null, null, null, null, null, null, null, null,
                        '2.1', '2.2', '2.3', '3', '4', '4.1', '4.2-4.3', '4.4', '4.4.3-4.4.4', '37',
                        null, null, null
                    ]
                },
                'op_mini': {
                    browser: 'Opera Mini',
                    abbr: 'O.Mini',
                    type: 'mobile',
                    'usage_global': {
                        '5.0-8.0': 2.81805
                    },
                    versions: [
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        '5.0-8.0',
                        null, null, null
                    ]
                },
                'bb': {
                    browser: 'Blackberry Browser',
                    abbr: 'BB',
                    type: 'mobile',
                    'usage_global': {
                        7: 0.0878202,
                        10: 0
                    },
                    versions: [
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        '7',
                        '10',
                        null, null, null
                    ]
                }
            }
        };

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

            it('Should set future flag if browsers has future versions', function() {
                assert.equal(chrome.future, true);
            });

            it('Should not set future flag if browsers has no future version', function() {
                assert.equal(bb.future, false);
                assert.equal(android.future, false);
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


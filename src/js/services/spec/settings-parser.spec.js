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
            parsed = settingsParser.parse('> 1%');
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

        it('Should return an object with arrays filled with strings', function() {
            Object.keys(parsed).forEach(function(key) {
                parsed[key].forEach(function(value) {
                    assert.isString(value);
                });
            });
        });


        describe('parsing', function() {

            describe('popularity matcher', function() {

                beforeEach(function() {
                    parsed = settingsParser.parse('> 1%');
                });


                it('Should return correct browsers', function() {
                    assert.sameMembers(Object.keys(parsed), [ 'chrome', 'firefox', 'ie', 'ios_saf', 'android' ]);
                });

                it('Should return correct browsers versions', function() {
                    assert.sameMembers(parsed.chrome, [ '36', '37', '38' ]);
                    assert.sameMembers(parsed.firefox, [ '32', '33' ]);
                    assert.sameMembers(parsed.ie, [ '8', '9', '10', '11' ]);
                    assert.sameMembers(parsed['ios_saf'], [ '8.1', '8', '7.1', '7.0' ]);
                    assert.sameMembers(parsed.android, [ '4.1', '4.4' ]);
                });

            });


            describe('last matcher', function() {

                beforeEach(function() {
                    parsed = settingsParser.parse('last 2 versions');
                });


                it('Should return all major browsers', function() {
                    assert.sameMembers(Object.keys(parsed), [ 'chrome', 'firefox', 'ie', 'ios_saf', 'android', 'safari', 'opera' ]);
                });

                it('Should return correct browsers versions', function() {
                    assert.sameMembers(parsed.chrome, [ '38', '39' ]);
                    assert.sameMembers(parsed.firefox, [ '33', '34' ]);
                    assert.sameMembers(parsed.ie, [ '10', '11' ]);
                    assert.sameMembers(parsed['ios_saf'], [ '8', '8.1' ]);
                    assert.sameMembers(parsed.android, [ '4.4.4', '37' ]);
                    assert.sameMembers(parsed.safari, [ '7.1', '8' ]);
                    assert.sameMembers(parsed.opera, [ '25', '26' ]);
                });

            });


            describe('last by browser matcher', function() {

                it('Should return only specified browser', function() {
                    parsed = settingsParser.parse('last 2 Firefox versions');
                    assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                    parsed = settingsParser.parse('last 2 Chrome versions');
                    assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                    parsed = settingsParser.parse('last 2 IE versions');
                    assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                    parsed = settingsParser.parse('last 2 iOS versions');
                    assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                    parsed = settingsParser.parse('last 2 Android versions');
                    assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                    parsed = settingsParser.parse('last 2 Safari versions');
                    assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                    parsed = settingsParser.parse('last 2 Opera versions');
                    assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                });

                it('Should return correct browsers versions', function() {
                    parsed = settingsParser.parse('last 2 Firefox versions');
                    assert.sameMembers(parsed.firefox, [ '33', '34' ]);

                    parsed = settingsParser.parse('last 2 Chrome versions');
                    assert.sameMembers(parsed.chrome, [ '38', '39' ]);

                    parsed = settingsParser.parse('last 2 IE versions');
                    assert.sameMembers(parsed.ie, [ '10', '11' ]);

                    parsed = settingsParser.parse('last 2 iOS versions');
                    assert.sameMembers(parsed['ios_saf'], [ '8', '8.1' ]);

                    parsed = settingsParser.parse('last 2 Android versions');
                    assert.sameMembers(parsed.android, [ '4.4.4', '37' ]);

                    parsed = settingsParser.parse('last 2 Safari versions');
                    assert.sameMembers(parsed.safari, [ '7.1', '8' ]);

                    parsed = settingsParser.parse('last 2 Opera versions');
                    assert.sameMembers(parsed.opera, [ '25', '26' ]);
                });

            });


            describe('older than matcher', function() {

                describe('not equal', function() {

                    it('Should return only specified browser', function() {
                        parsed = settingsParser.parse('Firefox < 7');
                        assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                        parsed = settingsParser.parse('Chrome < 7');
                        assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                        parsed = settingsParser.parse('IE < 7');
                        assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                        parsed = settingsParser.parse('iOS < 7');
                        assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                        parsed = settingsParser.parse('Android < 4.1');
                        assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                        parsed = settingsParser.parse('Safari < 7');
                        assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                        parsed = settingsParser.parse('Opera < 10.6');
                        assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                    });

                    it('Should return only versions lower than specified', function() {
                        parsed = settingsParser.parse('Firefox < 7');
                        assert.sameMembers(parsed.firefox, [ '2', '3', '3.5', '3.6', '4', '5', '6' ]);

                        parsed = settingsParser.parse('Chrome < 7');
                        assert.sameMembers(parsed.chrome, [ '4', '5', '6' ]);

                        parsed = settingsParser.parse('IE < 7');
                        assert.sameMembers(parsed.ie, [ '6', '5.5' ]);

                        parsed = settingsParser.parse('iOS < 7');
                        assert.sameMembers(parsed['ios_saf'], [ '6.1', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0', '3.2' ]);

                        parsed = settingsParser.parse('Android < 4.1');
                        assert.sameMembers(parsed.android, [ '4', '3', '2.3', '2.2', '2.1' ]);

                        parsed = settingsParser.parse('Safari < 7');
                        assert.sameMembers(parsed.safari, [ '3.1', '3.2', '4', '5', '5.1', '6', '6.1' ]);

                        parsed = settingsParser.parse('Opera < 10.6');
                        assert.sameMembers(parsed.opera, [ '10.5', '10.1', '10.0', '9.6', '9.5' ]);
                    });

                });


                describe('equal', function() {

                    it('Should return only specified browser', function() {
                        parsed = settingsParser.parse('Firefox <= 28');
                        assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                        parsed = settingsParser.parse('Chrome <= 36');
                        assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                        parsed = settingsParser.parse('IE <= 10');
                        assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                        parsed = settingsParser.parse('iOS <= 7');
                        assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                        parsed = settingsParser.parse('Android <= 4.4');
                        assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                        parsed = settingsParser.parse('Safari <= 7');
                        assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                        parsed = settingsParser.parse('Opera <= 13');
                        assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                    });

                    it('Should return only versions lower and equal than specified', function() {
                        parsed = settingsParser.parse('Firefox <= 7');
                        assert.sameMembers(parsed.firefox, [ '2', '3', '3.5', '3.6', '4', '5', '6', '7' ]);

                        parsed = settingsParser.parse('Chrome <= 7');
                        assert.sameMembers(parsed.chrome, [ '4', '5', '6', '7' ]);

                        parsed = settingsParser.parse('IE <= 7');
                        assert.sameMembers(parsed.ie, [ '6', '5.5', '7' ]);

                        parsed = settingsParser.parse('iOS <= 7');
                        assert.sameMembers(parsed['ios_saf'], [ '6.1', '6.0', '5.1', '5.0', '4.3', '4.2', '4.1', '4.0', '3.2', '7.0' ]);

                        parsed = settingsParser.parse('Android <= 4.1');
                        assert.sameMembers(parsed.android, [ '4', '3', '2.3', '2.2', '2.1', '4.1' ]);

                        parsed = settingsParser.parse('Safari <= 7');
                        assert.sameMembers(parsed.safari, [ '3.1', '3.2', '4', '5', '5.1', '6', '6.1', '7' ]);

                        parsed = settingsParser.parse('Opera <= 10.6');
                        assert.sameMembers(parsed.opera, [ '10.5', '10.1', '10.0', '9.6', '9.5', '10.6' ]);
                    });

                });

            });


            describe('direct matcher', function() {

                describe('current versions', function() {

                    it('Should return only specified browser', function() {
                        parsed = settingsParser.parse('Firefox 28');
                        assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                        parsed = settingsParser.parse('Chrome 30');
                        assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                        parsed = settingsParser.parse('IE 8');
                        assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                        parsed = settingsParser.parse('iOS 7.0');
                        assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                        parsed = settingsParser.parse('Android 4.4.3');
                        assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                        parsed = settingsParser.parse('Safari 7');
                        assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                        parsed = settingsParser.parse('Opera 12.1');
                        assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                    });

                    it('Should return correct browsers versions', function() {
                        parsed = settingsParser.parse('Firefox 28');
                        assert.sameMembers(parsed.firefox, [ '28' ]);

                        parsed = settingsParser.parse('Chrome 30');
                        assert.sameMembers(parsed.chrome, [ '30' ]);

                        parsed = settingsParser.parse('IE 8');
                        assert.sameMembers(parsed.ie, [ '8' ]);

                        parsed = settingsParser.parse('iOS 7.0');
                        assert.sameMembers(parsed['ios_saf'], [ '7.0' ]);

                        parsed = settingsParser.parse('Android 4.4.3');
                        assert.sameMembers(parsed.android, [ '4.4.3' ]);

                        parsed = settingsParser.parse('Safari 7');
                        assert.sameMembers(parsed.safari, [ '7' ]);

                        parsed = settingsParser.parse('Opera 12.1');
                        assert.sameMembers(parsed.opera, [ '12.1' ]);
                    });

                });


                describe('future versions', function() {

                    it('Should return only specified browser', function() {
                        parsed = settingsParser.parse('Firefox 37');
                        assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                        parsed = settingsParser.parse('Chrome 41');
                        assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                        parsed = settingsParser.parse('IE 12');
                        assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                        parsed = settingsParser.parse('iOS 9.0');
                        assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                        parsed = settingsParser.parse('Android 39');
                        assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                        parsed = settingsParser.parse('Safari 9');
                        assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                        parsed = settingsParser.parse('Opera 28');
                        assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                    });

                    it('Should return the first future version when browser has future versions', function() {
                        parsed = settingsParser.parse('Firefox 37');
                        assert.sameMembers(parsed.firefox, [ '37' ]);

                        parsed = settingsParser.parse('Chrome 41');
                        assert.sameMembers(parsed.chrome, [ '41' ]);

                        parsed = settingsParser.parse('Opera 28');
                        assert.sameMembers(parsed.opera, [ '28' ]);
                    });

                    it('Should return the last current version when browser has not numeric future versions', function() {
                        parsed = settingsParser.parse('IE 12');
                        assert.sameMembers(parsed.ie, [ '11' ]);

                        parsed = settingsParser.parse('iOS 9.0');
                        assert.sameMembers(parsed['ios_saf'], [ '8.1' ]);

                        parsed = settingsParser.parse('Android 39');
                        assert.sameMembers(parsed.android, [ '37' ]);

                        parsed = settingsParser.parse('Safari 9');
                        assert.sameMembers(parsed.safari, [ '8' ]);
                    });

                });


                describe('unreleased versions', function() {

                    describe('extremely old', function() {

                        it('Should return only specified browser', function() {
                            parsed = settingsParser.parse('Firefox 0');
                            assert.sameMembers(Object.keys(parsed), [ 'firefox' ], 'object contains browser(s) different than firefox');

                            parsed = settingsParser.parse('Chrome 0');
                            assert.sameMembers(Object.keys(parsed), [ 'chrome' ], 'object contains browser(s) different than chrome');

                            parsed = settingsParser.parse('IE 0');
                            assert.sameMembers(Object.keys(parsed), [ 'ie' ], 'object contains browser(s) different than ie');

                            parsed = settingsParser.parse('iOS 0');
                            assert.sameMembers(Object.keys(parsed), [ 'ios_saf' ], 'object contains browser(s) different than ios_saf');

                            parsed = settingsParser.parse('Android 0');
                            assert.sameMembers(Object.keys(parsed), [ 'android' ], 'object contains browser(s) different than android');

                            parsed = settingsParser.parse('Safari 0');
                            assert.sameMembers(Object.keys(parsed), [ 'safari' ], 'object contains browser(s) different than safari');

                            parsed = settingsParser.parse('Opera 0');
                            assert.sameMembers(Object.keys(parsed), [ 'opera' ], 'object contains browser(s) different than opera');
                        });

                        it('Should return the first future version', function() {
                            parsed = settingsParser.parse('Firefox 0');
                            assert.sameMembers(parsed.firefox, [ '2' ]);

                            parsed = settingsParser.parse('Chrome 0');
                            assert.sameMembers(parsed.chrome, [ '4' ]);

                            parsed = settingsParser.parse('IE 0');
                            assert.sameMembers(parsed.ie, [ '5.5' ]);

                            parsed = settingsParser.parse('iOS 0');
                            assert.sameMembers(parsed['ios_saf'], [ '3.2' ]);

                            parsed = settingsParser.parse('Android 0');
                            assert.sameMembers(parsed.android, [ '2.1' ]);

                            parsed = settingsParser.parse('Safari 0');
                            assert.sameMembers(parsed.safari, [ '3.1' ]);

                            parsed = settingsParser.parse('Opera 0');
                            assert.sameMembers(parsed.opera, [ '9.5' ]);
                        });

                    });

                });

            });


            describe('Firefox ESR matcher', function() {

                beforeEach(function() {
                    parsed = settingsParser.parse('Firefox ESR');
                });


                it('Should return only Firefox 31', function() {
                    assert.sameMembers(Object.keys(parsed), [ 'firefox' ]);
                    assert.sameMembers(parsed.firefox, [ '31' ]);
                });

            });


            describe('multiple matchers', function() {

                beforeEach(function() {
                    parsed = settingsParser.parse('> 1%, last 2 versions, Firefox ESR, Opera 12.1');
                });


                it('Should return correct browsers', function() {
                    assert.sameMembers(Object.keys(parsed), [ 'chrome', 'firefox', 'ie', 'ios_saf', 'android', 'safari', 'opera' ]);
                });

                it('Should return correct browsers versions', function() {
                    assert.sameMembers(parsed.chrome, [ '39', '38', '37', '36' ]);
                    assert.sameMembers(parsed.firefox, [ '34', '33', '32', '31' ]);
                    assert.sameMembers(parsed.ie, [ '11', '10', '9', '8' ]);
                    assert.sameMembers(parsed['ios_saf'], [ '8.1', '8', '7.1', '7.0' ]);
                    assert.sameMembers(parsed.android, [ '37', '4.4.4', '4.4', '4.1' ]);
                    assert.sameMembers(parsed.safari, [ '8', '7.1' ]);
                    assert.sameMembers(parsed.opera, [ '26', '25', '12.1' ]);
                });

            });


            describe('aliases', function() {

                describe('last by browser matcher', function() {

                    it('should return the same data for all firefox aliases', function() {
                        var fullNameData = settingsParser.parse('last 2 Firefox versions');
                        var alias1Data = settingsParser.parse('last 2 FF versions');
                        var alias2Data = settingsParser.parse('last 2 Fx versions');

                        assert.deepEqual(fullNameData, alias1Data);
                        assert.deepEqual(fullNameData, alias2Data);
                    });

                    it('should return the same data for all Internet Explorer aliases', function() {
                        var fullNameData = settingsParser.parse('last 2 IE versions');
                        var alias1Data = settingsParser.parse('last 2 Explorer versions');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all iOS Safari aliases', function() {
                        var fullNameData = settingsParser.parse('last 2 iOS_Saf versions');
                        var alias1Data = settingsParser.parse('last 2 iOS versions');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all BlackBerry Browser aliases', function() {
                        var fullNameData = settingsParser.parse('last 2 BB versions');
                        var alias1Data = settingsParser.parse('last 2 BlackBerry versions');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                });


                describe('older or equal matcher', function() {

                    it('should return the same data for all firefox aliases', function() {
                        var fullNameData = settingsParser.parse('Firefox <= 30');
                        var alias1Data = settingsParser.parse('FF <= 30');
                        var alias2Data = settingsParser.parse('Fx <= 30');

                        assert.deepEqual(fullNameData, alias1Data);
                        assert.deepEqual(fullNameData, alias2Data);
                    });

                    it('should return the same data for all Internet Explorer aliases', function() {
                        var fullNameData = settingsParser.parse('IE <= 11');
                        var alias1Data = settingsParser.parse('Explorer <= 11');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all iOS Safari aliases', function() {
                        var fullNameData = settingsParser.parse('iOS_Saf <= 7.1');
                        var alias1Data = settingsParser.parse('iOS <= 7.1');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all BlackBerry Browser aliases', function() {
                        var fullNameData = settingsParser.parse('BB <= 10');
                        var alias1Data = settingsParser.parse('BlackBerry <= 10');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                });


                describe('newer or equal matcher', function() {

                    it('should return the same data for all firefox aliases', function() {
                        var fullNameData = settingsParser.parse('Firefox >= 30');
                        var alias1Data = settingsParser.parse('FF >= 30');
                        var alias2Data = settingsParser.parse('Fx >= 30');

                        assert.deepEqual(fullNameData, alias1Data);
                        assert.deepEqual(fullNameData, alias2Data);
                    });

                    it('should return the same data for all Internet Explorer aliases', function() {
                        var fullNameData = settingsParser.parse('IE >= 11');
                        var alias1Data = settingsParser.parse('Explorer >= 11');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all iOS Safari aliases', function() {
                        var fullNameData = settingsParser.parse('iOS_Saf >= 7.1');
                        var alias1Data = settingsParser.parse('iOS >= 7.1');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all BlackBerry Browser aliases', function() {
                        var fullNameData = settingsParser.parse('BB >= 10');
                        var alias1Data = settingsParser.parse('BlackBerry >= 10');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                });


                describe('direct matcher', function() {

                    it('should return the same data for all firefox aliases', function() {
                        var fullNameData = settingsParser.parse('Firefox 30');
                        var alias1Data = settingsParser.parse('FF 30');
                        var alias2Data = settingsParser.parse('Fx 30');

                        assert.deepEqual(fullNameData, alias1Data);
                        assert.deepEqual(fullNameData, alias2Data);
                    });

                    it('should return the same data for all Internet Explorer aliases', function() {
                        var fullNameData = settingsParser.parse('IE 11');
                        var alias1Data = settingsParser.parse('Explorer 11');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all iOS Safari aliases', function() {
                        var fullNameData = settingsParser.parse('iOS_Saf 7.1');
                        var alias1Data = settingsParser.parse('iOS 7.1');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                    it('should return the same data for all BlackBerry Browser aliases', function() {
                        var fullNameData = settingsParser.parse('BB 10');
                        var alias1Data = settingsParser.parse('BlackBerry 10');

                        assert.deepEqual(fullNameData, alias1Data);
                    });

                });

            });


            describe('error handling', function() {

                it('Should throw error when empty requirement is passed', function() {
                    assert.throws(function() {
                        settingsParser.parse('');
                    }, /^unknown requirements/);
                });

                it('Should throw error when unknown requirement is passed', function() {
                    assert.throws(function() {
                        settingsParser.parse('old browsers');
                    }, /^unknown requirements/);
                });

                it('Should throw error when unknown browser is passed', function() {
                    assert.throws(function() {
                        settingsParser.parse('last 2 Aurora versions');
                    }, /^unknown browser/);
                });

                it('Should throw error when unknown browser version is passed', function() {
                    assert.throws(function() {
                        settingsParser.parse('iOS 7.1.1');
                    }, /^unknown browser version/);
                });

            });

        });

    });

});

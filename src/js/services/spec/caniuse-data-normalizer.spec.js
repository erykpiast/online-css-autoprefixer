/* global describe, it, beforeEach */

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
    var exampleData;

    beforeEach(function() {
        exampleData = {
            updated: 123456789,
            agents: {
                'chrome': {
                    browser: 'Chrome',
                    abbr: 'Chr.',
                    type: 'desktop',
                    usage_global: {
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
                    usage_global: {
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
                    usage_global: {
                        '5.0-8.0': 2.81805
                    },
                    versions: [
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                        '5.0-8.0',
                        null, null, null
                    ]
                }
            }
        };
    });

});

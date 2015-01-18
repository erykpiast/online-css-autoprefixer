/* global describe, it, beforeEach, afterEach */

import { assert } from 'chai';

import stringifySettings from '../stringify-settings';

describe('stringifySettings API', function() {
    
    it('Should be a function', function() {
        assert.isFunction(stringifySettings);
    });

});

describe('stringifySettings stringifying', function() {
    var settings;
    var string;


    afterEach(function() {
        settings = null;
        string = null;
    });


    describe('versions comparison', function() {

        describe('older', function() {

            beforeEach(function() {
                settings = {
                    versionComparison: {
                        firefox: {
                            olderThan: {
                                equal: false,
                                version: 28
                            }
                        }
                    }
                };

                string = stringifySettings(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Firefox < 28'.toLowerCase()
                );
            });

        });


        describe('older or equal', function() {

            beforeEach(function() {
                settings = {
                    versionComparison: {
                        firefox: {
                            olderThan: {
                                equal: true,
                                version: 28
                            }
                        }
                    }
                };

                string = stringifySettings(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Firefox <= 28'.toLowerCase()
                );
            });

        });


        describe('newer', function() {
            
            beforeEach(function() {
                settings = {
                    versionComparison: {
                        chrome: {
                            newerThan: {
                                equal: false,
                                version: 10
                            }
                        }
                    }
                };

                string = stringifySettings(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Chrome > 10'.toLowerCase()
                );
            });

        });


        describe('newer or equal', function() {
            
            beforeEach(function() {
                settings = {
                    versionComparison: {
                        chrome: {
                            newerThan: {
                                equal: true,
                                version: 10
                            }
                        }
                    }
                };

                string = stringifySettings(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Chrome >= 10'.toLowerCase()
                );
            });

        });

    });


    describe('multiple matchers', function() {

        beforeEach(function() {
            settings = {
                popularity: {
                    global: 1
                },
                lastVersions: {
                    all: 2
                },
                direct: [
                    'Firefox ESR',
                    'Opera 12.1'
                ]
            };

            string = stringifySettings(settings);
        });


        it('Should return correct string', function() {
            assert.sameMembers(
                string.split(',').map((req) => req.trim()),
                '> 1%, last 2 versions, Firefox ESR, Opera 12.1'.split(',').map((req) => req.trim())
            );
        });

    });

});
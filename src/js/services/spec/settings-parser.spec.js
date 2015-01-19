/* global describe, it, beforeEach, afterEach */

import { assert } from 'chai';

import settingsParser from '../settings-parser';

describe('settingsParser API', function() {

    it('Should have parse method', function() {
        assert.isFunction(settingsParser.parse);
    });

    it('Should have stringify method', function() {
        assert.isFunction(settingsParser.stringify);
    });

});

describe('settingsParser.stringify test', function() {
    var settings;
    var string;


    afterEach(function() {
        settings = null;
        string = null;
    });


    describe('popularity matcher', function() {

        describe('global', function () {

            beforeEach(function() {
                settings = {
                    popularity: {
                        global: 1
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    '> 1%'.toLowerCase()
                );
            });

        });


        describe('country', function () {

            beforeEach(function() {
                settings = {
                    popularity: {
                        US: 5
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    '> 5% in US'.toLowerCase()
                );
            });

        });


        describe('multiple targets', function () {

            beforeEach(function() {
                settings = {
                    popularity: {
                        global: 1,
                        US: 5,
                        UK: 10
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.sameMembers(
                    string.toLowerCase().split(',').map((req) => req.trim()),
                    '> 1%, > 5% in US, > 10% in UK'.toLowerCase().split(',').map((req) => req.trim())
                );
            });

        });

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

                string = settingsParser.stringify(settings);
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

                string = settingsParser.stringify(settings);
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

                string = settingsParser.stringify(settings);
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

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Chrome >= 10'.toLowerCase()
                );
            });

        });


        describe('multiple browsers', function() {

            beforeEach(function() {
                settings = {
                    versionComparison: {
                        chrome: {
                            newerThan: {
                                equal: true,
                                version: 10
                            }
                        },
                        firefox: {
                            olderThan: {
                                equal: false,
                                version: 30
                            }
                        }
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.sameMembers(
                    string.toLowerCase().split(',').map((req) => req.trim()),
                    'Chrome >= 10, Firefox < 30'.toLowerCase().split(',').map((req) => req.trim())
                );
            });

        });


        describe('multiple comparisons for one browser', function() {

            beforeEach(function() {
                settings = {
                    versionComparison: {
                        chrome: {
                            newerThan: {
                                equal: true,
                                version: 10
                            },
                            olderThan: {
                                equal: false,
                                version: 20
                            }
                        }
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.sameMembers(
                    string.toLowerCase().split(',').map((req) => req.trim()),
                    'Chrome >= 10, Chrome < 20'.toLowerCase().split(',').map((req) => req.trim())
                );
            });

        });

    });


    describe('last versions matcher', function() {

        describe('all', function () {
            beforeEach(function() {
                settings = {
                    lastVersions: {
                        all: 2
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'last 2 versions'.toLowerCase()
                );
            });
        });


        describe('by browser', function() {

            beforeEach(function() {
                settings = {
                    lastVersions: {
                        firefox: 2
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'last 2 Firefox versions'.toLowerCase()
                );
            });

        });


        describe('multiple matchers', function() {

            beforeEach(function() {
                settings = {
                    lastVersions: {
                        all: 2,
                        firefox: 4,
                        ie: 1
                    }
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.sameMembers(
                    string.toLowerCase().split(',').map((req) => req.trim()),
                    'last 2 versions, last 4 Firefox versions, last 1 IE versions'.toLowerCase().split(',').map((req) => req.trim())
                );
            });

        });

    });


    describe('direct matcher', function() {

        describe('single', function() {
            beforeEach(function() {
                settings = {
                    direct: [
                        'Chrome 30'
                    ]
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.equal(
                    string.toLowerCase(),
                    'Chrome 30'.toLowerCase()
                );
            });
        });


        describe('multtple', function() {
            beforeEach(function() {
                settings = {
                    direct: [
                        'Firefox ESR',
                        'Opera 12.1'
                    ]
                };

                string = settingsParser.stringify(settings);
            });


            it('Should return correct string', function() {
                assert.sameMembers(
                    string.toLowerCase().split(',').map((req) => req.trim()),
                    'Firefox ESR, Opera 12.1'.toLowerCase().split(',').map((req) => req.trim())
                );
            });
        });

    });


    describe('mixed matchers', function() {

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

            string = settingsParser.stringify(settings);
        });


        it('Should return correct string', function() {
            assert.sameMembers(
                string.toLowerCase().split(',').map((req) => req.trim()),
                '> 1%, last 2 versions, Firefox ESR, Opera 12.1'.toLowerCase().split(',').map((req) => req.trim())
            );
        });

    });

});

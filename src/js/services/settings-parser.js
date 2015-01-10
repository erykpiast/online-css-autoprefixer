import uniq from 'lodash.uniq';
import groupBy from 'lodash.groupby';
import mapValues from 'map-values';


class SettingsParser {
    constructor(data) {
        this._data = data;

        this._aliases = {
            fx: 'firefox',
            ff: 'firefox',
            ios: 'ios_saf',
            explorer: 'ie',
            blackberry: 'bb',
            explorermobile: 'ie_mob',
            operamini: 'op_mini',
            operamobile: 'op_mob',
            chromeandroid: 'and_chr',
            firefoxandroid: 'and_ff'
        };

        this._requirements = {
            lastVersions: {
                regexp: /^last (\d+) versions?$/i,
                select: function(versions) {
                    return this._browsers(
                        (data) => data.minor ? [] : data.versions.slice(0, versions)
                    );
                }
            },
            lastByBrowser: {
                regexp: /^last (\d+) (\w+) versions?$/i,
                select: function(versions, browser) {
                    var data = this._byName(browser);

                    return data.versions.slice(0, versions).map((browserVersion) => [ data.name, browserVersion ].join(' '));
                }
            },
            globalStatistics: {
                regexp: /^> (\d+(\.\d+)?)%$/,
                select: function(popularity) {
                    return this._browsers(
                        (data) => data.minor ? [] : data.versions.filter((version) => data.popularity[version] > popularity)
                    );
                }
            },
            newerThan: {
                regexp: /^(\w+) (>=?)\s*([\d\.]+)/,
                select: function(browser, sign, version) {
                    var data = this._byName(browser);
                    var version = parseFloat(version, 10);
                    var filter;

                    if(sign === '>') {
                        filter = ((browserVersion) => browserVersion > version);
                    } else if(sign === '>=') {
                        filter = ((browserVersion) => browserVersion >= version);
                    }

                    return data.versions.filter(filter).map((browserVersion) => [ data.name, browserVersion ].join(' '));
                }
            },
            olderThan: {
                regexp: /^(\w+) (<=?)\s*([\d\.]+)/,
                select: function(browser, sign, version) {
                    var data = this._byName(browser);
                    var version = parseFloat(version, 10);
                    var filter;

                    if(sign === '<') {
                        filter = ((browserVersion) => browserVersion < version);
                    } else if(sign === '<=') {
                        filter = ((browserVersion) => browserVersion <= version);
                    }

                    return data.versions.filter(filter).map((browserVersion) => [ data.name, browserVersion ].join(' '));
                }
            },
            esr: {
                regexp: /^(firefox|ff|fx) esr$/i,
                select: function() {
                    return [ 'firefox 31' ];
                }
            },
            direct: {
                regexp: /^(\w+) ([\d\.]+)$/,
                select: function(browser, version) {
                    var data = this._byName(browser);
                    var version = parseFloat(version, 10);

                    var last = (data.future && !isNaN(parseFloat(data.future[0], 10)) ? parseFloat(data.future[0], 10) : parseFloat(data.versions[0], 10));
                    var first = parseFloat(data.versions[data.versions.length - 1], 10);


                    if(version > last) {
                        version = last;
                    } else if(version < first) {
                        version = first;
                    }

                    return [ [ data.name, version ].join(' ') ];
                }
            }
        };
    }

    parse(requirements) {
        requirements = requirements.split(',');

        var selected = [ ];

        requirements.forEach(function(requirement) {
            Object.keys(this._requirements).forEach(function(reqName) {
                var req = this._requirements[reqName];
                var match = requirement.match(req.regexp);

                if(match) {
                    selected = selected.concat(req.select.apply(this, match.slice(1)));

                    return;
                }
            }, this);
        }, this);

        return mapValues(
            groupBy(
                uniq(selected).map((browserWithVersion) => ({
                    browser: browserWithVersion.split(' ')[0],
                    version: browserWithVersion.split(' ')[1]
                })),
                'browser'
            ),
            (browserVersions) => browserVersions.map(
                (browserVersion) => browserVersion.version
            )
        );
    }

    stringify(/*obj*/) {
        return '> 1%, last 2 versions, Firefox ESR, Opera 12.1';
    }

    _browsers(criteria) {
        var selected = [ ];

        Object.keys(this._data.browsers).forEach(function(browserName) {
            var browserData = this._data.browsers[browserName];

            selected = selected.concat(
                criteria(browserData).map((browserVersion) => [ browserName, browserVersion ].join(' '))
            );
        }, this);

        return selected;
    }

    _byName(name) {
        name = name.toLowerCase();
        name = this._aliases[name] || name;
        var data = this._data.browsers[name];

        data.name = name;

        return data;
    }
}


export default SettingsParser;
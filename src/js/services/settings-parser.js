import mapValues from 'map-values';
import lodash from 'lodash';


// Browsers, which interested for Autoprefixer
var names = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'ie', 'bb', 'android' ];

// Browsers, that will be used in "last 2 version" and same selections
var major = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'android', 'ie', 'ie_mob' ];

// Normalize Can I Use versions array
function normalize(array) {
    return array.reverse().filter((i) => i);
}

// Expand versions intervals from Can I Use
function interval(array) {
    var result = [];

    array.forEach(function(interval) {
        var splited = interval.split('-').sort().reverse();
        var sub = splited.map(function(part) {
            return [ part, interval, splited.length ];
        });

        result  = result.concat(sub);
  });

  return result;
}

// Convert Can I Use data to Autoprefixer’s
function convert(data, name) {
    var future = normalize(data.versions.slice(-3, -1));
    var versions = interval(normalize(data.versions.slice(0, -4)));

    return {
        minor: major.indexOf(name) === -1,
        future: !!future.length,
        versions: versions.map((version) => version[0]),
        popularity: versions.map((version) => data['usage_global'][version[1]] / version[2])
    };
}


class SettingsParser {
    constructor(data) {
        this._data = {
            updated: data.updated,
            browsers: mapValues(lodash.pick(data.agents, names), convert)
        };

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
                        (data) => data.minor ? [] : data.versions.filter((version, i) => data.popularity[i] > popularity)
                    );
                }
            },
            newerThan: {
                regexp: /^(\w+) (>=?)\s*([\d\.]+)/,
                select: function(browser, sign, version) {
                    var data = this._byName(browser);
                    var version = parseFloat(version);
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
                    var version = parseFloat(version);
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
                    var version = parseFloat(version);

                    var last = data.future ? data.future[0] : data.versions[0];
                    var first = data.versions[data.versions.length - 1];

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
                    selected = selected.concat(req.select.apply(this, match.slice(1, -1)));

                    return;
                }
            }, this);
        }, this);

        return lodash.uniq(selected);
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
import each from 'lodash.foreach';
import groupBy from 'lodash.groupby';
import mapValues from 'map-values';
import browserslist from 'browserslist';
import compareVersions from 'version-compare.js';


// @function parse - convert browserlist pattern to the list of browsers
// @access public
// @param {string} string - browserlist pattern to parse
// @return {object} parsed browserlist pattern
//     @property {array} parsed[browser] - array of versions for browser
//         @property {string} parsed[browser][version] - version of the browser that match the pattern
export function parse (string) {
    return mapValues(
        groupBy(
            browserslist(string).map((browser) => ({
                browser: browser.split(' ')[0],
                version: browser.split(' ')[1].split('-').reverse()[0]
            })),
            'browser'
        ),
        (browserVersions) => browserVersions.map(
            (browserVersion) => browserVersion.version
        ).sort(compareVersions)
    );
}


/* @function stringify - convert settings object to browserlist pattern
 * @access public
 * @param {object} settings - settings object
 *     @property {object} [settings.popularity = undefined] - popularity matcher
 *         @property {number} settings.popularity[country | 'global'] - popularity for country or entire world
 *     @property {object} [settings.lastVersions = undefined] - last versions matcher
 *         @property {number} settings.lastVersions[browser | 'all'] - number of last version for specific browser or for all browsers
 *     @property {array} [settings.versionComparison = undefined] - older than or never than matchers
 *         @property {object} settings.versionComparison[browser] - version comparison entities for the browser
 *             @property {object} [settings.versionComparison[browser].newerThan = undefined] - newer than matcher
 *                 @property {boolean} settings.versionComparison[browser].newerThan.equal - true if greater or equal
 *                 @property {string} settings.versionComparison[browser].newerThan.version - version to compare with
 *             @property {object} [settings.versionComparison[browser].olderThan = undefined] - older than matcher
 *                 @property {boolean} settings.versionComparison[browser].olderThan.equal - true if lower or equal
 *                 @property {string} settings.versionComparison[browser].olderThan.version - version to compare with
 *     @property {array} [settings.newerThan = undefined] - newer (or equal) than matcher
 *         @property {number} settings.newerThan[browser] - browser chosen by newerThan matcher
 *     @property {array} [settings.direct = undefined] - direct matcher
 *         @property {number} settings.direct[browser] - browser chosen by direct matcher (includes ESR matcher)
 *         
 * @return {string} browserlist pattern
 */
export function stringify (settings) {
    var autoprefixerConfig = [ ];

    each(settings, function(setting, settingName) {
        switch(setting ? settingName : null) {
            case 'popularity':
                each(setting, function(popularity, country) {
                    autoprefixerConfig.push([
                        '>',
                        popularity + '%',
                        (country !== 'global' ? 'in ' + country : undefined)
                    ].filter(part => !!part).join(' '));
                });
            break;
            case 'lastVersions':
                each(setting, function(versions, browser) {
                    autoprefixerConfig.push([
                        'last',
                        versions,
                        (browser !== 'all' ? browser : undefined),
                        'versions'
                    ].filter(part => !!part).join(' '));
                });
            break;
            case 'versionComparison':
                each(setting, function(comparisons, browser) {
                    each(comparisons, function(comparison, comparisonName) {
                        autoprefixerConfig.push([
                            browser,
                            ({
                                olderThan: comparison.equal ? '<=' : '<',
                                newerThan: comparison.equal ? '>=' : '>'
                            })[comparisonName],
                            comparison.version
                        ].join(' '));
                    });
                });
            break;
            case 'direct':
                autoprefixerConfig = autoprefixerConfig.concat(setting);
            break;
            default:
        }
    });

    return autoprefixerConfig.join(',');
}


/* @function destringify - convert Autoprefixer configuration string to settings object
 * @access public
 * @param {string} autoprefixerConfig - browserlist pattern
 * @returns {object} settings - settings object
 *     @property {object} [settings.popularity = undefined] - popularity matcher
 *         @property {number} settings.popularity[country | 'global'] - popularity for country or entire world
 *     @property {object} [settings.lastVersions = undefined] - last versions matcher
 *         @property {number} settings.lastVersions[browser | 'all'] - number of last version for specific browser or for all browsers
 *     @property {array} [settings.versionComparison = undefined] - older than or never than matchers
 *         @property {object} settings.versionComparison[browser] - version comparison entities for the browser
 *             @property {object} [settings.versionComparison[browser].newerThan = undefined] - newer than matcher
 *                 @property {boolean} settings.versionComparison[browser].newerThan.equal - true if greater or equal
 *                 @property {string} settings.versionComparison[browser].newerThan.version - version to compare with
 *             @property {object} [settings.versionComparison[browser].olderThan = undefined] - older than matcher
 *                 @property {boolean} settings.versionComparison[browser].olderThan.equal - true if lower or equal
 *                 @property {string} settings.versionComparison[browser].olderThan.version - version to compare with
 *     @property {array} [settings.newerThan = undefined] - newer (or equal) than matcher
 *         @property {number} settings.newerThan[browser] - browser chosen by newerThan matcher
 *     @property {array} [settings.direct = undefined] - direct matcher
 *         @property {number} settings.direct[browser] - browser chosen by direct matcher (includes ESR matcher)
 */
export function destringify (autoprefixerConfig) {
    var settings = { };
    
    autoprefixerConfig
        .split(',')
        .map((part) => part.trim())
        .forEach(function(part) {
            each(browserlist.queries, function(query, queryName) {
                var match = part.match(query.regexp);
                
                if(!match) {
                    return;
                }
                
                match = match.slice(1);
                
                switch(queryName) {
                    case 'globalStatistics':
                    case 'countryStatistics':
                        if(!settings.hasOwnProperty('popularity')) {
                            settings.popularity = { };
                        }
                    case 'globalStatistics':
                        settings.popularity.global = match[0];
                    break;
                    case 'countryStatistics':
                        settings.popularity[match[1]] = match[0];
                    break;
                    case 'lastVersions':
                    case 'lastByBrowser':
                        if(!settings.hasOwnProperty('lastVersions')) {
                            settings.lastVersions = { };
                        }
                    case 'lastVersions':
                        settings.lastVersions.all = match[0];
                    break;
                    case 'lastByBrowser':
                        settings.lastVersions[match[1]] = match[0];
                    break;
                    case 'versions':
                        if(!settings.hasOwnProperty('versionComparison')) {
                            settings.versionComparison = { };
                        }
                        
                        if(!settings.versionComparison.hasOwnProperty(match[0])) {
                            settings.versionComparison[match[0]] = { };
                        }
                        
                        let browser = settings.versionComparison[match[0]];
                        
                        if(match[1] === '<') {
                            browser.olderThan = {
                                version: match[2],
                                equal: match[1].indexOf('=') !== -1
                            };
                        } else if(match[1] === '>') {
                            browser.newerThan = {
                                version: match[2],
                                equal: match[1].indexOf('=') !== -1
                            };
                        }
                    break;
                    case 'esr':
                        
                    break;
                    case 'direct':
                        
                    break;
                }
            });
        });

    return settings;
}
import each from 'lodash.foreach';
import browserslist from 'browserslist';


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
    var browserslistPattern = [ ];

    each(settings, function(setting, settingName) {
        switch(setting ? settingName : null) {
            case 'popularity':
                each(setting, function(popularity, country) {
                    browserslistPattern.push([
                        '>',
                        popularity + '%',
                        (country !== 'global' ? 'in ' + country : undefined)
                    ].filter(part => !!part).join(' '));
                });
            break;
            case 'lastVersions':
                each(setting, function(versions, browser) {
                    browserslistPattern.push([
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
                        browserslistPattern.push([
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
                each(setting, function(versions, browser) {
                    versions.forEach(function(version) {
                        browserslistPattern.push(`${browser} ${version}`);
                    });
                });
            break;
            default:
        }
    });

    return browserslistPattern.join(',');
}


/* @function parse - convert Autoprefixer configuration string to settings object
 * @access public
 * @param {string} browserslistPattern - browserlist pattern
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
export function parse (browserslistPattern) {
    var settings = { };
    
    browserslistPattern
        .split(',')
        .map((part) => part.trim())
        .forEach(function(part) {
            each(browserslist.queries, function(query, queryName) {
                var match = part.match(query.regexp);
                
                if(!match) {
                    return;
                }
                
                match = match.slice(1);
                
                switch(queryName) {
                    case 'globalStatistics': 
                    case 'countryStatistics': {
                        let [ popularity, country ] = match;

                        country = country || 'global';

                        if(!settings.hasOwnProperty('popularity')) {
                            settings.popularity = { };
                        }

                        settings.popularity[country] = parseFloat(popularity, 10);    
                    } break;
                    case 'lastVersions':
                    case 'lastByBrowser': {
                        let [ lastVersions, browser ] = match;

                        browser = (browser ?
                            browserslist.byName(browser).name :
                            'all'
                        );

                        if(!settings.hasOwnProperty('lastVersions')) {
                            settings.lastVersions = { };
                        }

                        settings.lastVersions[browser] = parseInt(lastVersions, 10);
                    } break;
                    case 'versions': {
                        let [ browser, sign, version ] = match;

                        let key;
                        if(sign[0] === '<') {
                            key = 'olderThan';
                        } else if(sign[0] === '>') {
                            key = 'newerThan';
                        }

                        if(!key) {
                            return;
                        }

                        if(!settings.hasOwnProperty('versionComparison')) {
                            settings.versionComparison = { };
                        }

                        browser = browserslist.byName(browser).name;
                        
                        if(!settings.versionComparison.hasOwnProperty(browser)) {
                            settings.versionComparison[browser] = { };
                        }

                        settings.versionComparison[browser][key] = {
                            version: version,
                            equal: sign.indexOf('=') !== -1
                        };
                    } break;
                    case 'esr':
                    case 'direct': {
                        let [ browser, version ] = (queryName === 'esr' ?
                            // hardcoded version, uuuu
                            // TODO: make pull request to browserslist repository and expose this value
                            'firefox esr'.split(' ') :
                            query.select.apply(browserslist, match)[0].split(' ')
                        );
                        
                        // take last part from versions range
                        version = version.split('-').reverse()[0];

                        if(!settings.hasOwnProperty('direct')) {
                            settings.direct = { };
                        }

                        if(!settings.direct.hasOwnProperty(browser)) {
                            settings.direct[browser] = [ ];
                        }

                        settings.direct[browser].push(version);
                    } break;
                }
            });
        });

    return settings;
}

export default { stringify, parse };
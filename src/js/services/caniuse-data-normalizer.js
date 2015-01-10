import mapValues from 'map-values';
import pick from 'lodash.pick';
import indexBy from 'lodash.indexby';


/**
 * @variable names - browsers, which interested for Autoprefixer
 * @access private
 * @type {Array}
 */
var names = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'android', 'ie', 'bb' ];

/**
 * @variable names - browsers, that will be used in "last 2 version" and same selections
 * @access private
 * @type {Array}
 */
var major = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'android', 'ie', 'ie_mob' ];


/**
 * @function normalizeVersions - normalize versions array
 * @access private
 * @param  {array} versionsArray - array of versions from Can I Use database
 * @return {array} array of versions with reversed order (the newest first) and no null values
 */
function normalizeVersions(versionsArray) {
    return versionsArray.reverse().filter((i) => i);
}


/**
 * @function expandVersionRanges - replace versions ranges with multiple version entries
 * @param  {array} versionsArray - array of versions from Can I Use database
 * @return {array} array of versions entries
 *     @property {array} versionsArray[n] - entry for version n
 *         @property {array} versionsArray[n][0] - version number
 *         @property {array} versionsArray[n][1] - range that was containing the version
 *         @property {array} versionsArray[n][2] - number of versions in range
 */
function expandVersionRanges(versionsArray) {
    var result = [];

    versionsArray.forEach(function(range) {
        var splitedRange = range.split('-').sort().reverse();
        var sub = splitedRange.map(function(version) {
            return [ version, range, splitedRange.length ];
        });

        result  = result.concat(sub);
  });

  return result;
}


/**
 * @function normalizeBrowser - normalize single browser entry
 * @param  {object} data - single browser description
 *     @property {string} data.browser - name of the browser (IE, Firefox, Chrome, Safari, iOS Safari)
 *     @property {string} data.abbr - name of the browser (IE, Firefox, Chr., Saf., iOS)
 *     @property {string,enum} data.type - browser device type (desktop or mobile)
 *     @property {object} data.usage_global - market share of each version of the browser
 *         @property {number} data.usage_global[m] - market share of version (or versions range) m, percentage value
 *     @property {array} data.versions - array of versions of the browser
 *         @property {number} data.versions[m] - version (or versions range) for era m (eras are defined in data.eras)
 *     @property {string} data.prefix - CSS prefix for the browser, we are not interested in that
 * @param  {string} name - browser symbol
 * 
 * @return {object} normalized browser entry
 *     @property {boolean} data.minor - true if browser symbol is not contained by major collection
 *     @property {string} data.future - true if browser has future versions
 *     @property {array} data.versions - versions of the browser
 *         @property {string} data.versions[n] - number of version n from the latest
 *     @property {array} data.popularity - array of popularity of each version of the browser
 *         @property {number} data.popularity[n] - popularity of version n from the latest
 */
function normalizeBrowser(data, name) {
    var future = normalizeVersions(data.versions.slice(-3, -1));
    var versions = expandVersionRanges(normalizeVersions(data.versions.slice(0, -3)));

    return {
        minor: major.indexOf(name) === -1,
        future: (future.length ? future : undefined),
        versions: versions.map((version) => version[0]),
        popularity: indexBy(
            versions.map((version) => data['usage_global'][version[1]] / version[2]), 
            (popularity, index) => versions[index][0]
        )
    };
}


/**
 * @function normalize - convert data from Can I Use database to more friendly format
 * @access public
 * @param  {object} data - data from Can I Use database
 *     @property {number,milliseconds} data.updated - timestamp indicated the last update of the data
 *     @property {object} data.agents - collection of data describing browsers
 *         @property {object} data.agents[n] - description of the browser with symbol n
 *             @property {string} data.agents[n].browser - name of the browser (IE, Firefox, Chrome, Safari, iOS Safari)
 *             @property {string} data.agents[n].abbr - name of the browser (IE, Firefox, Chr., Saf., iOS)
 *             @property {string,enum} data.agents[n].type - browser device type (desktop or mobile)
 *             @property {object} data.agents[n].usage_global - market share of each version of the browser
 *                 @property {number} data.agents[n].usage_global[m] - market share of version (or versions range) m, percentage value
 *             @property {array} data.agents[n].versions - array of versions of the browser
 *                 @property {number} data.agents[n].versions[m] - version (or versions range) for era m (eras are defined in data.eras)
 *             @property {string} data.agents[n].prefix - CSS prefix for the browser, we are not interested in that
 *     @property {object} data.eras - eras of browsers versions; e0 is current version, e1 the next one and e-1 previous one
 *         @property {string} data.eras[n] - description of era with symbol n
 *
 * @return {object} converted data
 *     @property {number,milliseconds} data.updated - timestamp indicated the last update of the data
 *     @property {object} data.browsers - collection of data describing browsers with symbol form names variable
 *         @property {boolean} data.browsers[n].minor - true if browser symbol is not contained by major collection
 *         @property {string} data.browsers[n].future - true if browser has future versions
 *         @property {array} data.browsers[n].versions - versions of the browser
 *             @property {string} data.browsers[n].versions[m] - number of version m from the latest
 *         @property {array} data.browsers[n].popularity - array of popularity of each version of the browser
 *             @property {number} data.browsers[n].popularity[m] - popularity of version m from the latest
 * 
 */
function normalize(data) {
    return {
        updated: data.updated,
        browsers: mapValues(pick(data.agents, names), normalizeBrowser)
    };
}


export default {
    normalize: normalize
};
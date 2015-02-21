import groupBy from 'lodash.groupby';
import mapValues from 'map-values';
import browserslist from 'browserslist';
import compareVersions from 'version-compare.js';


export default { parse };

/* @function parse - returns the list of browsers based on browserslist pattern
 *    list is grouped by browser name!
 * @access public
 * @param {string} string - browserlist pattern to parse
 * @return {object} list of browsers
 *     @property {array} parsed[browser] - versions of the browser that matches the pattern
 *        @property {string} parsed[browser][version] - version of the browser that matches the pattern
 */
export function parse (string) {
    return mapValues(
        groupBy(
            browserslist(
                // erase whitespace between comas, browserslist doesn't like them
                string
                    .split(',')
                    .map((req) => req.trim())
                    .join(',')
            )
            .map((browser) => ({
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
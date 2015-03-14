import groupBy from 'lodash.groupby';
import mapValues from 'map-values';
import browserslist from 'browserslist';
import compareVersions from 'version-compare.js';
import each from 'lodash.foreach';
import xhr from 'xhr';


/**
 * @function parse - returns the list of browsers based on browserslist pattern
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


/**
 * @function loadStatisticsFor - ensures that regional usage statistics are available
 * @access public
 * @param {string} regionName - region to check and download eventually
 * @return {Promise} resolves when data for all regions are available
 */
export function loadStatisticsFor(regionName) {
    if(browserslist.usage.hasOwnProperty(regionName)) {
        return Promise.resolve();
    } else {
        return new Promise((resolve, reject) => {
            xhr(`https://rawgit.com/Fyrd/caniuse/master/region-usage-json/${regionName}.json`, (err, resp, body) => {
                if(err) {
                    return reject(err);
                }

                try {
                    resolve(JSON.parse(body));
                } catch(err) {
                    return reject(err);
                }
            });
        }).then((regionalUsage) => {
            var target = browserslist.usage[regionName] = { };

            each(regionalUsage.data, (browserVersions, browserName) => {
                each(browserVersions, (popularity, browserVersion) => {
                    target[`${browserName} ${browserVersion}`] = popularity;
                });
            });

            return target;
        });
    }
}

export default { parse, loadStatisticsFor };
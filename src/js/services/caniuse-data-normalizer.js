import mapValues from 'map-values';
import pick from 'lodash.pick';


// Browsers, which interested for Autoprefixer
var names = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'ie', 'bb', 'android' ];

// Browsers, that will be used in "last 2 version" and same selections
var major = [ 'firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'android', 'ie', 'ie_mob' ];

// Normalize Can I Use versions array
function normalizeVersions(array) {
    return array.reverse().filter((i) => i);
}

// Expand versions intervals from Can I Use
function expandVersionIntervals(array) {
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
function normalizeBrowser(data, name) {
    var future = normalizeVersions(data.versions.slice(-3, -1));
    var versions = expandVersionIntervals(normalizeVersions(data.versions.slice(0, -4)));

    return {
        minor: major.indexOf(name) === -1,
        future: !!future.length,
        versions: versions.map((version) => version[0]),
        popularity: versions.map((version) => data['usage_global'][version[1]] / version[2])
    };
}


function normalize(data) {
    return {
        updated: data.updated,
        browsers: mapValues(pick(data.agents, names), normalizeBrowser)
    };
}


export default {
    normalize: normalize
};
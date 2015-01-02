(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/app.js":[function(require,module,exports){
"use strict";
var $__cyclejs__,
    $__views_47_input_46_view__,
    $__intents_47_input_46_intent__,
    $__models_47_input_46_model__,
    $__views_47_output_46_view__,
    $__models_47_output_46_model__,
    $__views_47_settings_46_view__,
    $__intents_47_settings_46_intent__,
    $__models_47_settings_46_model__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var InputView = ($__views_47_input_46_view__ = require("./views/input.view"), $__views_47_input_46_view__ && $__views_47_input_46_view__.__esModule && $__views_47_input_46_view__ || {default: $__views_47_input_46_view__}).default;
var InputIntent = ($__intents_47_input_46_intent__ = require("./intents/input.intent"), $__intents_47_input_46_intent__ && $__intents_47_input_46_intent__.__esModule && $__intents_47_input_46_intent__ || {default: $__intents_47_input_46_intent__}).default;
var InputModel = ($__models_47_input_46_model__ = require("./models/input.model"), $__models_47_input_46_model__ && $__models_47_input_46_model__.__esModule && $__models_47_input_46_model__ || {default: $__models_47_input_46_model__}).default;
var OutputView = ($__views_47_output_46_view__ = require("./views/output.view"), $__views_47_output_46_view__ && $__views_47_output_46_view__.__esModule && $__views_47_output_46_view__ || {default: $__views_47_output_46_view__}).default;
var OutputModel = ($__models_47_output_46_model__ = require("./models/output.model"), $__models_47_output_46_model__ && $__models_47_output_46_model__.__esModule && $__models_47_output_46_model__ || {default: $__models_47_output_46_model__}).default;
var SettingsView = ($__views_47_settings_46_view__ = require("./views/settings.view"), $__views_47_settings_46_view__ && $__views_47_settings_46_view__.__esModule && $__views_47_settings_46_view__ || {default: $__views_47_settings_46_view__}).default;
var SettingsIntent = ($__intents_47_settings_46_intent__ = require("./intents/settings.intent"), $__intents_47_settings_46_intent__ && $__intents_47_settings_46_intent__.__esModule && $__intents_47_settings_46_intent__ || {default: $__intents_47_settings_46_intent__}).default;
var SettingsModel = ($__models_47_settings_46_model__ = require("./models/settings.model"), $__models_47_settings_46_model__ && $__models_47_settings_46_model__.__esModule && $__models_47_settings_46_model__ || {default: $__models_47_settings_46_model__}).default;
Cycle.createRenderer('.autoprefixer__view-container--input').inject(InputView);
Cycle.circularInject(InputModel, InputView, InputIntent);
Cycle.createRenderer('.autoprefixer__view-container--output').inject(OutputView);
OutputModel.inject(InputIntent);
OutputView.inject(OutputModel);
Cycle.createRenderer('.autoprefixer__view-container--settings').inject(SettingsView);
SettingsModel.inject(SettingsIntent);
SettingsView.inject(SettingsModel);


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/app.js
},{"./intents/input.intent":"/home/eryk/online-css-autoprefixer/src/js/intents/input.intent.js","./intents/settings.intent":"/home/eryk/online-css-autoprefixer/src/js/intents/settings.intent.js","./models/input.model":"/home/eryk/online-css-autoprefixer/src/js/models/input.model.js","./models/output.model":"/home/eryk/online-css-autoprefixer/src/js/models/output.model.js","./models/settings.model":"/home/eryk/online-css-autoprefixer/src/js/models/settings.model.js","./views/input.view":"/home/eryk/online-css-autoprefixer/src/js/views/input.view.js","./views/output.view":"/home/eryk/online-css-autoprefixer/src/js/views/output.view.js","./views/settings.view":"/home/eryk/online-css-autoprefixer/src/js/views/settings.view.js","cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/path-browserify/index.js":[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/process/browser.js"}],"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/add-event.js":[function(require,module,exports){
var DataSet = require("data-set")

module.exports = addEvent

function addEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        ds[type] = handler
    } else if (Array.isArray(events)) {
        if (events.indexOf(handler) === -1) {
            events.push(handler)
        }
    } else if (events !== handler) {
        ds[type] = [events, handler]
    }
}

},{"data-set":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/dom-delegator.js":[function(require,module,exports){
var globalDocument = require("global/document")
var DataSet = require("data-set")
var createStore = require("weakmap-shim/create-store")

var addEvent = require("./add-event.js")
var removeEvent = require("./remove-event.js")
var ProxyEvent = require("./proxy-event.js")

var HANDLER_STORE = createStore()

module.exports = DOMDelegator

function DOMDelegator(document) {
    if (!(this instanceof DOMDelegator)) {
        return new DOMDelegator(document);
    }

    document = document || globalDocument

    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.allocateHandle =
    function allocateHandle(func) {
        var handle = new Handle()

        HANDLER_STORE(handle).func = func;

        return handle
    }

DOMDelegator.transformHandle =
    function transformHandle(handle, broadcast) {
        var func = HANDLER_STORE(handle).func

        return this.allocateHandle(function (ev) {
            broadcast(ev, func);
        })
    }

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];
        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }

        this.globalListeners[eventName] = listeners;
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    this.events[eventName]++;

    if (this.events[eventName] !== 1) {
        return
    }

    var listener = this.rawEventListeners[eventName]
    if (!listener) {
        listener = this.rawEventListeners[eventName] =
            createHandler(eventName, this)
    }

    this.target.addEventListener(eventName, listener, true)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    if (this.events[eventName] === 0) {
        throw new Error("already unlistened to event.");
    }

    this.events[eventName]--;

    if (this.events[eventName] !== 0) {
        return
    }

    var listener = this.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    this.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, delegator) {
    var globalListeners = delegator.globalListeners;
    var delegatorTarget = delegator.target;

    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []

        if (globalHandlers.length > 0) {
            var globalEvent = new ProxyEvent(ev);
            globalEvent.currentTarget = delegatorTarget;
            callListeners(globalHandlers, globalEvent)
        }

        findAndInvokeListeners(ev.target, ev, eventName)
    }
}

function findAndInvokeListeners(elem, ev, eventName) {
    var listener = getListener(elem, eventName)

    if (listener && listener.handlers.length > 0) {
        var listenerEvent = new ProxyEvent(ev);
        listenerEvent.currentTarget = listener.currentTarget
        callListeners(listener.handlers, listenerEvent)

        if (listenerEvent._bubbles) {
            var nextTarget = listener.currentTarget.parentNode
            findAndInvokeListeners(nextTarget, ev, eventName)
        }
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null) {
        return null
    }

    var ds = DataSet(target)
    // fetch list of handler fns for this event
    var handler = ds[type]
    var allHandler = ds.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function callListeners(handlers, ev) {
    handlers.forEach(function (handler) {
        if (typeof handler === "function") {
            handler(ev)
        } else if (typeof handler.handleEvent === "function") {
            handler.handleEvent(ev)
        } else if (handler.type === "dom-delegator-handle") {
            HANDLER_STORE(handler).func(ev)
        } else {
            throw new Error("dom-delegator: unknown handler " +
                "found: " + JSON.stringify(handlers));
        }
    })
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

function Handle() {
    this.type = "dom-delegator-handle"
}

},{"./add-event.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/add-event.js","./proxy-event.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/proxy-event.js","./remove-event.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/remove-event.js","data-set":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/index.js","global/document":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/global/document.js","weakmap-shim/create-store":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/weakmap-shim/create-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/index.js":[function(require,module,exports){
var Individual = require("individual")
var cuid = require("cuid")
var globalDocument = require("global/document")

var DOMDelegator = require("./dom-delegator.js")

var versionKey = "12"
var cacheKey = "__DOM_DELEGATOR_CACHE@" + versionKey
var cacheTokenKey = "__DOM_DELEGATOR_CACHE_TOKEN@" + versionKey
var delegatorCache = Individual(cacheKey, {
    delegators: {}
})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "select", "submit", "touchcancel",
    "touchend", "touchstart", "unload"
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var document = opts.document || globalDocument

    var cacheKey = document[cacheTokenKey]

    if (!cacheKey) {
        cacheKey =
            document[cacheTokenKey] = cuid()
    }

    var delegator = delegatorCache.delegators[cacheKey]

    if (!delegator) {
        delegator = delegatorCache.delegators[cacheKey] =
            new DOMDelegator(document)
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}

Delegator.allocateHandle = DOMDelegator.allocateHandle;
Delegator.transformHandle = DOMDelegator.transformHandle;

},{"./dom-delegator.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/dom-delegator.js","cuid":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/cuid/dist/browser-cuid.js","global/document":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/global/document.js","individual":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/individual/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/cuid/dist/browser-cuid.js":[function(require,module,exports){
/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) + 
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (typeof module !== 'undefined') {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/create-hash.js":[function(require,module,exports){
module.exports = createHash

function createHash(elem) {
    var attributes = elem.attributes
    var hash = {}

    if (attributes === null || attributes === undefined) {
        return hash
    }

    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i]

        if (attr.name.substr(0,5) !== "data-") {
            continue
        }

        hash[attr.name.substr(5)] = attr.value
    }

    return hash
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/index.js":[function(require,module,exports){
var createStore = require("weakmap-shim/create-store")
var Individual = require("individual")

var createHash = require("./create-hash.js")

var hashStore = Individual("__DATA_SET_WEAKMAP@3", createStore())

module.exports = DataSet

function DataSet(elem) {
    var store = hashStore(elem)

    if (!store.hash) {
        store.hash = createHash(elem)
    }

    return store.hash
}

},{"./create-hash.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/create-hash.js","individual":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/individual/index.js","weakmap-shim/create-store":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/create-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/create-store.js":[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js":[function(require,module,exports){
module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/global/document.js":[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/individual/index.js":[function(require,module,exports){
(function (global){
var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/weakmap-shim/create-store.js":[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/weakmap-shim/hidden-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/weakmap-shim/hidden-store.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/proxy-event.js":[function(require,module,exports){
var inherits = require("inherits")

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this._bubbles = false;
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

ProxyEvent.prototype.startPropagation = function () {
    this._bubbles = true;
}

function MouseEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
}

inherits(KeyEvent, ProxyEvent)

},{"inherits":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/inherits/inherits_browser.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/remove-event.js":[function(require,module,exports){
var DataSet = require("data-set")

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        return
    } else if (Array.isArray(events)) {
        var index = events.indexOf(handler)
        if (index !== -1) {
            events.splice(index, 1)
        }
    } else if (events === handler) {
        ds[type] = null
    }
}

},{"data-set":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/create-element.js":[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/create-element.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/diff.js":[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vtree/diff.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/h.js":[function(require,module,exports){
var h = require("./virtual-hyperscript/index.js")

module.exports = h

},{"./virtual-hyperscript/index.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/index.js":[function(require,module,exports){
var diff = require("./diff.js")
var patch = require("./patch.js")
var h = require("./h.js")
var create = require("./create-element.js")

module.exports = {
    diff: diff,
    patch: patch,
    h: h,
    create: create
}

},{"./create-element.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/create-element.js","./diff.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/diff.js","./h.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/h.js","./patch.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/patch.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/create-hash.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/create-hash.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/index.js"][0].apply(exports,arguments)
},{"./create-hash.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/create-hash.js","individual":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/individual/index.js","weakmap-shim/create-store":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/weakmap-shim/create-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/individual/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/individual/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/weakmap-shim/create-store.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/create-store.js"][0].apply(exports,arguments)
},{"./hidden-store.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/data-set/node_modules/weakmap-shim/hidden-store.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/camelize/index.js":[function(require,module,exports){
module.exports = function(obj) {
    if (typeof obj === 'string') return camelCase(obj);
    return walk(obj);
};

function walk (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (isDate(obj) || isRegex(obj)) return obj;
    if (isArray(obj)) return map(obj, walk);
    return reduce(objectKeys(obj), function (acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
}

function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_,x) {
        return x.toUpperCase();
    });
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/string-template/index.js":[function(require,module,exports){
var nargs = /\{([0-9a-zA-Z]+)\}/g
var slice = Array.prototype.slice

module.exports = template

function template(string) {
    var args

    if (arguments.length === 2 && typeof arguments[1] === "object") {
        args = arguments[1]
    } else {
        args = slice.call(arguments, 1)
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result

        if (string[index - 1] === "{" &&
            string[index + match.length] === "}") {
            return i
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null
            if (result === null || result === undefined) {
                return ""
            }

            return result
        }
    })
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/xtend/mutable.js":[function(require,module,exports){
module.exports = extend

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/typed.js":[function(require,module,exports){
var camelize = require("camelize")
var template = require("string-template")
var extend = require("xtend/mutable")

module.exports = TypedError

function TypedError(args) {
    if (!args) {
        throw new Error("args is required");
    }
    if (!args.type) {
        throw new Error("args.type is required");
    }
    if (!args.message) {
        throw new Error("args.message is required");
    }

    var message = args.message

    if (args.type && !args.name) {
        var errorName = camelize(args.type) + "Error"
        args.name = errorName[0].toUpperCase() + errorName.substr(1)
    }

    extend(createError, args);
    createError._name = args.name;

    return createError;

    function createError(opts) {
        var result = new Error()

        Object.defineProperty(result, "type", {
            value: result.type,
            enumerable: true,
            writable: true,
            configurable: true
        })

        var options = extend({}, args, opts)

        extend(result, options)
        result.message = template(message, options)

        return result
    }
}


},{"camelize":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/camelize/index.js","string-template":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/string-template/index.js","xtend/mutable":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/node_modules/xtend/mutable.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/global/document.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/node_modules/global/document.js"][0].apply(exports,arguments)
},{"min-document":"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/is-object/index.js":[function(require,module,exports){
module.exports = isObject

function isObject(x) {
    return typeof x === "object" && x !== null
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/x-is-array/index.js":[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/patch.js":[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/patch.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/apply-properties.js":[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, props, previous, propName);
        } else if (isHook(propValue)) {
            propValue.hook(node,
                propName,
                previous ? previous[propName] : undefined)
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else if (propValue !== undefined) {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, props, previous, propName) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vhook.js","is-object":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/is-object/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/create-element.js":[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/handle-thunk.js","../vnode/is-vnode.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js","../vnode/is-vtext.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vtext.js","../vnode/is-widget.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js","./apply-properties":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/apply-properties.js","global/document":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/global/document.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/dom-index.js":[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/patch-op.js":[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, bIndex) {
    var children = []
    var childNodes = domNode.childNodes
    var len = childNodes.length
    var i
    var reverseIndex = bIndex.reverse

    for (i = 0; i < len; i++) {
        children.push(domNode.childNodes[i])
    }

    var insertOffset = 0
    var move
    var node
    var insertNode
    for (i = 0; i < len; i++) {
        move = bIndex[i]
        if (move !== undefined && move !== i) {
            // the element currently at this index will be moved later so increase the insert offset
            if (reverseIndex[i] > i) {
                insertOffset++
            }

            node = children[move]
            insertNode = childNodes[i + insertOffset] || null
            if (node !== insertNode) {
                domNode.insertBefore(node, insertNode)
            }

            // the moved element came from the front of the array so reduce the insert offset
            if (move < i) {
                insertOffset--
            }
        }

        // element at this index is scheduled to be removed so increase insert offset
        if (i in bIndex.removes) {
            insertOffset++
        }
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        console.log(oldRoot)
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js","../vnode/vpatch.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vpatch.js","./apply-properties":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/apply-properties.js","./create-element":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/create-element.js","./update-widget":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/update-widget.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/patch.js":[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/dom-index.js","./patch-op":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/patch-op.js","global/document":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/global/document.js","x-is-array":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/x-is-array/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vdom/update-widget.js":[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/data-set-hook.js":[function(require,module,exports){
var DataSet = require("data-set")

module.exports = DataSetHook;

function DataSetHook(value) {
    if (!(this instanceof DataSetHook)) {
        return new DataSetHook(value);
    }

    this.value = value;
}

DataSetHook.prototype.hook = function (node, propertyName) {
    var ds = DataSet(node)
    var propName = propertyName.substr(5)

    ds[propName] = this.value;
};

},{"data-set":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js":[function(require,module,exports){
var DataSet = require("data-set")

module.exports = DataSetHook;

function DataSetHook(value) {
    if (!(this instanceof DataSetHook)) {
        return new DataSetHook(value);
    }

    this.value = value;
}

DataSetHook.prototype.hook = function (node, propertyName) {
    var ds = DataSet(node)
    var propName = propertyName.substr(3)

    ds[propName] = this.value;
};

DataSetHook.prototype.unhook = function(node, propertyName) {
    var ds = DataSet(node);
    var propName = propertyName.substr(3);

    ds[propName] = undefined;
}

},{"data-set":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/data-set/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js":[function(require,module,exports){
module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/index.js":[function(require,module,exports){
var TypedError = require("error/typed")

var VNode = require("../vnode/vnode.js")
var VText = require("../vnode/vtext.js")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isHook = require("../vnode/is-vhook")
var isVThunk = require("../vnode/is-thunk")

var parseTag = require("./parse-tag.js")
var softSetHook = require("./hooks/soft-set-hook.js")
var dataSetHook = require("./hooks/data-set-hook.js")
var evHook = require("./hooks/ev-hook.js")

var UnexpectedVirtualElement = TypedError({
    type: "virtual-hyperscript.unexpected.virtual-element",
    message: "Unexpected virtual child passed to h().\n" +
        "Expected a VNode / Vthunk / VWidget / string but:\n" +
        "got a {foreignObjectStr}.\n" +
        "The parent vnode is {parentVnodeStr}.\n" +
        "Suggested fix: change your `h(..., [ ... ])` callsite.",
    foreignObjectStr: null,
    parentVnodeStr: null,
    foreignObject: null,
    parentVnode: null
})

module.exports = h

function h(tagName, properties, children) {
    var childNodes = []
    var tag, props, key, namespace

    if (!children && isChildren(properties)) {
        children = properties
        props = {}
    }

    props = props || properties || {}
    tag = parseTag(tagName, props)

    // support keys
    if ("key" in props) {
        key = props.key
        props.key = undefined
    }

    // support namespace
    if ("namespace" in props) {
        namespace = props.namespace
        props.namespace = undefined
    }

    // fix cursor bug
    if (tag === "input" &&
        "value" in props &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value)
    }

    var keys = Object.keys(props)
    var propName, value
    for (var j = 0; j < keys.length; j++) {
        propName = keys[j]
        value = props[propName]
        if (isHook(value)) {
            continue
        }

        // add data-foo support
        if (propName.substr(0, 5) === "data-") {
            props[propName] = dataSetHook(value)
        }

        // add ev-foo support
        if (propName.substr(0, 3) === "ev-") {
            props[propName] = evHook(value)
        }
    }

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props)
    }


    var node = new VNode(tag, props, childNodes, key, namespace)

    return node
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === "string") {
        childNodes.push(new VText(c))
    } else if (isChild(c)) {
        childNodes.push(c)
    } else if (Array.isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props)
        }
    } else if (c === null || c === undefined) {
        return
    } else {
        throw UnexpectedVirtualElement({
            foreignObjectStr: JSON.stringify(c),
            foreignObject: c,
            parentVnodeStr: JSON.stringify({
                tagName: tag,
                properties: props
            }),
            parentVnode: {
                tagName: tag,
                properties: props
            }
        })
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x)
}

function isChildren(x) {
    return typeof x === "string" || Array.isArray(x) || isChild(x)
}

},{"../vnode/is-thunk":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-thunk.js","../vnode/is-vhook":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vhook.js","../vnode/is-vnode":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js","../vnode/is-vtext":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vtext.js","../vnode/is-widget":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js","../vnode/vnode.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vnode.js","../vnode/vtext.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vtext.js","./hooks/data-set-hook.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/data-set-hook.js","./hooks/ev-hook.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/ev-hook.js","./hooks/soft-set-hook.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/hooks/soft-set-hook.js","./parse-tag.js":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/parse-tag.js","error/typed":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/error/typed.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/virtual-hyperscript/parse-tag.js":[function(require,module,exports){
var classIdSplit = /([\.#]?[a-zA-Z0-9_:-]+)/
var notClassId = /^\.|#/

module.exports = parseTag

function parseTag(tag, props) {
    if (!tag) {
        return "div"
    }

    var noId = !("id" in props)

    var tagParts = tag.split(classIdSplit)
    var tagName = null

    if (notClassId.test(tagParts[1])) {
        tagName = "div"
    }

    var classes, part, type, i
    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i]

        if (!part) {
            continue
        }

        type = part.charAt(0)

        if (!tagName) {
            tagName = part
        } else if (type === ".") {
            classes = classes || []
            classes.push(part.substring(1, part.length))
        } else if (type === "#" && noId) {
            props.id = part.substring(1, part.length)
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className)
        }

        props.className = classes.join(" ")
    }

    return tagName ? tagName.toLowerCase() : "div"
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/handle-thunk.js":[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-thunk.js","./is-vnode":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js","./is-vtext":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vtext.js","./is-widget":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-thunk.js":[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vhook.js":[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook && typeof hook.hook === "function" &&
        !hook.hasOwnProperty("hook")
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js":[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vtext.js":[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js":[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js":[function(require,module,exports){
module.exports = "1"

},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vnode.js":[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-thunk.js","./is-vhook":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vhook.js","./is-vnode":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js","./is-widget":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js","./version":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vpatch.js":[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vtext.js":[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/version.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vtree/diff.js":[function(require,module,exports){
var isArray = require("x-is-array")
var isObject = require("is-object")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var isHook = require("../vnode/is-vhook")
var handleThunk = require("../vnode/handle-thunk")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                clearState(a, patch, index)
                apply = patch[index]
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            }
        } else {
            clearState(a, patch, index)
            apply = patch[index]
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            clearState(a, patch, index)
            apply = patch[index]
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }
}

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var bChildren = reorder(aChildren, b.children)

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (bChildren.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, bChildren.moves))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b);
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true;
        }
    }

    return false;
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {

    var bKeys = keyIndex(bChildren)

    if (!bKeys) {
        return bChildren
    }

    var aKeys = keyIndex(aChildren)

    if (!aKeys) {
        return bChildren
    }

    var bMatch = {}, aMatch = {}

    for (var aKey in bKeys) {
        bMatch[bKeys[aKey]] = aKeys[aKey]
    }

    for (var bKey in aKeys) {
        aMatch[aKeys[bKey]] = bKeys[bKey]
    }

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen
    var shuffle = []
    var freeIndex = 0
    var i = 0
    var moveIndex = 0
    var moves = {}
    var removes = moves.removes = {}
    var reverse = moves.reverse = {}
    var hasMoves = false

    while (freeIndex < len) {
        var move = aMatch[i]
        if (move !== undefined) {
            shuffle[i] = bChildren[move]
            if (move !== moveIndex) {
                moves[move] = moveIndex
                reverse[moveIndex] = move
                hasMoves = true
            }
            moveIndex++
        } else if (i in aMatch) {
            shuffle[i] = undefined
            removes[i] = moveIndex++
            hasMoves = true
        } else {
            while (bMatch[freeIndex] !== undefined) {
                freeIndex++
            }

            if (freeIndex < len) {
                var freeChild = bChildren[freeIndex]
                if (freeChild) {
                    shuffle[i] = freeChild
                    if (freeIndex !== moveIndex) {
                        hasMoves = true
                        moves[freeIndex] = moveIndex
                        reverse[moveIndex] = freeIndex
                    }
                    moveIndex++
                }
                freeIndex++
            }
        }
        i++
    }

    if (hasMoves) {
        shuffle.moves = moves
    }

    return shuffle
}

function keyIndex(children) {
    var i, keys

    for (i = 0; i < children.length; i++) {
        var child = children[i]

        if (child.key !== undefined) {
            keys = keys || {}
            keys[child.key] = i
        }
    }

    return keys
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/handle-thunk.js","../vnode/is-thunk":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-thunk.js","../vnode/is-vhook":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vhook.js","../vnode/is-vnode":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vnode.js","../vnode/is-vtext":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-vtext.js","../vnode/is-widget":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/is-widget.js","../vnode/vpatch":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/vnode/vpatch.js","is-object":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/is-object/index.js","x-is-array":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/node_modules/x-is-array/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-intent.js":[function(require,module,exports){
"use strict";
'use strict';
var DataFlowNode = require('./data-flow-node');
var errors = require('./errors');
function createIntent() {
  var intent = DataFlowNode.apply({}, arguments);
  intent = errors.customInterfaceErrorMessageInInject(intent, 'Intent expects View to have the required property ');
  var originalArgs = arguments;
  intent.clone = function() {
    return createIntent.apply({}, originalArgs);
  };
  return intent;
}
module.exports = createIntent;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-intent.js
},{"./data-flow-node":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js","./errors":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-model.js":[function(require,module,exports){
"use strict";
'use strict';
var DataFlowNode = require('./data-flow-node');
var errors = require('./errors');
function createModel() {
  var model = DataFlowNode.apply({}, arguments);
  model = errors.customInterfaceErrorMessageInInject(model, 'Model expects Intent to have the required property ');
  var originalArgs = arguments;
  model.clone = function() {
    return createModel.apply({}, originalArgs);
  };
  return model;
}
module.exports = createModel;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-model.js
},{"./data-flow-node":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js","./errors":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-view.js":[function(require,module,exports){
"use strict";
'use strict';
var Rx = require('./../../../shims/rx.js');
var DataFlowNode = require('./data-flow-node');
var errors = require('./errors');
function getFunctionForwardIntoStream(stream) {
  return function forwardIntoStream(ev) {
    stream.onNext(ev);
  };
}
function replaceStreamNameWithForwardFunction(vtree, view) {
  if (typeof vtree === 'undefined') {
    return;
  }
  if (vtree && vtree.type === 'VirtualNode' && typeof vtree.properties !== 'undefined') {
    for (var key in vtree.properties) {
      if (vtree.properties.hasOwnProperty(key) && typeof key === 'string' && key.search(/^ev\-/) === 0) {
        var streamName = vtree.properties[key].value;
        if (view[streamName]) {
          vtree.properties[key].value = getFunctionForwardIntoStream(view[streamName]);
        } else if (typeof streamName === 'string') {
          throw new Error('VTree uses event hook `' + streamName + '` which should ' + 'have been defined in `events` array of the View.');
        }
      }
    }
  }
  if (Array.isArray(vtree.children)) {
    for (var i = 0; i < vtree.children.length; i++) {
      replaceStreamNameWithForwardFunction(vtree.children[i], view);
    }
  }
}
function checkEventsArray(view) {
  if (typeof view.events === 'undefined') {
    throw new Error('View must define `events` array with names of event streams');
  }
}
function checkVTree$(view) {
  if (typeof view.vtree$ === 'undefined' || typeof view.vtree$.subscribe !== 'function') {
    throw new Error('View must define `vtree$` Observable emitting virtual DOM elements');
  }
}
function throwErrorIfNotVTree(vtree) {
  if (vtree.type !== 'VirtualNode' || vtree.tagName === 'undefined') {
    throw new Error('View `vtree$` must emit only VirtualNode instances. ' + 'Hint: create them with Cycle.h()');
  }
}
function createView() {
  var view = DataFlowNode.apply({}, arguments);
  view = errors.customInterfaceErrorMessageInInject(view, 'View expects Model to have the required property ');
  checkEventsArray(view);
  checkVTree$(view);
  if (view.events) {
    for (var i = view.events.length - 1; i >= 0; i--) {
      view[view.events[i]] = new Rx.Subject();
    }
    delete view.events;
  }
  view.vtree$ = view.vtree$.map(function(vtree) {
    throwErrorIfNotVTree(vtree);
    replaceStreamNameWithForwardFunction(vtree, view);
    return vtree;
  }).shareReplay(1);
  ;
  try {
    view.vtree$.subscribe(function() {});
  } catch (err) {}
  var originalArgs = arguments;
  view.clone = function cloneView() {
    return createView.apply({}, originalArgs);
  };
  return view;
}
module.exports = createView;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-view.js
},{"./../../../shims/rx.js":"/home/eryk/online-css-autoprefixer/shims/rx.js","./data-flow-node":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js","./errors":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js":[function(require,module,exports){
"use strict";
'use strict';
var VirtualDOM = require('virtual-dom');
var Rx = require('./../../../shims/rx.js');
var DataFlowNode = require('./data-flow-node');
var DataFlowSource = require('./data-flow-source');
var DataFlowSink = require('./data-flow-sink');
var Renderer = require('./rendering').Renderer;
var PropertyHook = require('./property-hook');
var Cycle = {
  createDataFlowNode: function createDataFlowNode() {
    var args = arguments;
    function F() {
      return DataFlowNode.apply(this, args);
    }
    F.prototype = DataFlowNode.prototype;
    return new F();
  },
  createDataFlowSource: function createDataFlowSource() {
    var args = arguments;
    function F() {
      return DataFlowSource.apply(this, args);
    }
    F.prototype = DataFlowSource.prototype;
    return new F();
  },
  createDataFlowSink: function createDataFlowSink() {
    var args = arguments;
    function F() {
      return DataFlowSink.apply(this, args);
    }
    F.prototype = DataFlowSink.prototype;
    return new F();
  },
  createModel: require('./create-model'),
  createView: require('./create-view'),
  createIntent: require('./create-intent'),
  createRenderer: function createRenderer(container) {
    return new Renderer(container);
  },
  circularInject: function circularInject() {
    for (var i = arguments.length - 1; i >= 0; i--) {
      var current = arguments[i];
      var previous = arguments[(i - 1 >= 0) ? i - 1 : arguments.length - 1];
      if (typeof current === 'undefined' || typeof current.inject !== 'function') {
        throw new Error('Bad input. circularInject() expected a DataFlowNode as input');
      }
      if (current) {
        current.inject(previous);
      }
    }
  },
  vdomPropHook: function(fn) {
    return new PropertyHook(fn);
  },
  Rx: Rx,
  h: VirtualDOM.h
};
module.exports = Cycle;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js
},{"./../../../shims/rx.js":"/home/eryk/online-css-autoprefixer/shims/rx.js","./create-intent":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-intent.js","./create-model":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-model.js","./create-view":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/create-view.js","./data-flow-node":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js","./data-flow-sink":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-sink.js","./data-flow-source":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-source.js","./property-hook":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/property-hook.js","./rendering":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/rendering.js","virtual-dom":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js":[function(require,module,exports){
"use strict";
'use strict';
var Rx = require('./../../../shims/rx.js');
var errors = require('./errors');
var CycleInterfaceError = errors.CycleInterfaceError;
function replicate(source, subject) {
  if (typeof source === 'undefined') {
    throw new Error('Cannot replicate() if source is undefined.');
  }
  return source.subscribe(function replicationOnNext(x) {
    subject.onNext(x);
  }, function replicationOnError(err) {
    subject.onError(err);
    console.error(err);
  });
}
function checkInputInterfaceArray(inputInterface) {
  if (!Array.isArray(inputInterface)) {
    throw new Error('Expected an array as the interface of the input for \n' + 'the DataFlowNode.');
  }
}
function checkInputInterfaceOnlyStrings(inputInterface) {
  for (var i = inputInterface.length - 1; i >= 0; i--) {
    if (typeof inputInterface[i] !== 'string') {
      throw new Error('Expected strings as names of properties in the input interface');
    }
  }
}
function makeStubPropertiesFromInterface(inputStub, inputInterface) {
  for (var i = inputInterface.length - 1; i >= 0; i--) {
    inputStub[inputInterface[i]] = new Rx.Subject();
  }
}
function checkOutputObject(output) {
  if (typeof output !== 'object') {
    throw new Error('A DataFlowNode should always return an object.');
  }
}
function copyProperties(orig, dest) {
  for (var key in orig) {
    if (orig.hasOwnProperty(key)) {
      dest[key] = orig[key];
    }
  }
}
function replicateAll(input, stub) {
  for (var key in stub) {
    if (stub.hasOwnProperty(key)) {
      if (!input.hasOwnProperty(key)) {
        throw new CycleInterfaceError('Input should have the required property ' + key, String(key));
      }
      replicate(input[key], stub[key]);
    }
  }
}
function DataFlowNode() {
  var args = Array.prototype.slice.call(arguments);
  var definitionFn = args.pop();
  if (typeof definitionFn !== 'function') {
    throw new Error('DataFlowNode expects the definitionFn as the last argument.');
  }
  var interfaces = args;
  var inputStubs = interfaces.map(function() {
    return {};
  });
  var wasInjected = false;
  for (var i = interfaces.length - 1; i >= 0; i--) {
    checkInputInterfaceArray(interfaces[i]);
    checkInputInterfaceOnlyStrings(interfaces[i]);
    makeStubPropertiesFromInterface(inputStubs[i], interfaces[i]);
  }
  var output = definitionFn.apply(this, inputStubs);
  checkOutputObject(output);
  copyProperties(output, this);
  this.inject = function injectIntoDataFlowNode() {
    if (wasInjected) {
      console.warn('DataFlowNode has already been injected an input.');
    }
    for (var i = arguments.length - 1; i >= 0; i--) {
      replicateAll(arguments[i], inputStubs[i]);
    }
    wasInjected = true;
  };
  this.clone = function() {
    return DataFlowNode.apply({}, interfaces.concat([definitionFn]));
  };
  return this;
}
module.exports = DataFlowNode;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-node.js
},{"./../../../shims/rx.js":"/home/eryk/online-css-autoprefixer/shims/rx.js","./errors":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js"}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-sink.js":[function(require,module,exports){
"use strict";
'use strict';
function DataFlowSink(definitionFn) {
  if (arguments.length !== 1) {
    throw new Error('DataFlowSink expects only one argument: the definition function.');
  }
  if (typeof definitionFn !== 'function') {
    throw new Error('DataFlowSink expects the argument to be the definition function.');
  }
  definitionFn.displayName += '(DataFlowSink defFn)';
  this.inject = function injectIntoDataFlowSink() {
    return definitionFn.apply({}, arguments);
  };
  return this;
}
module.exports = DataFlowSink;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-sink.js
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-source.js":[function(require,module,exports){
"use strict";
'use strict';
function DataFlowSource(outputObject) {
  if (arguments.length !== 1) {
    throw new Error('DataFlowSource expects only one argument: the output object.');
  }
  if (typeof outputObject !== 'object') {
    throw new Error('DataFlowSource expects the constructor argument to be the ' + 'output object.');
  }
  for (var key in outputObject) {
    if (outputObject.hasOwnProperty(key)) {
      this[key] = outputObject;
    }
  }
  this.inject = function injectDataFlowSource() {
    throw new Error('A DataFlowSource cannot be injected. Use a DataFlowNode instead.');
  };
  return this;
}
module.exports = DataFlowSource;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-source.js
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js":[function(require,module,exports){
"use strict";
'use strict';
function CycleInterfaceError(message, missingMember) {
  this.name = 'CycleInterfaceError';
  this.message = (message || '');
  this.missingMember = (missingMember || '');
}
CycleInterfaceError.prototype = Error.prototype;
function customInterfaceErrorMessageInInject(dataFlowNode, message) {
  var originalInject = dataFlowNode.inject;
  dataFlowNode.inject = function() {
    try {
      originalInject.apply({}, arguments);
    } catch (err) {
      if (err.name === 'CycleInterfaceError') {
        throw new CycleInterfaceError(message + err.missingMember, err.missingMember);
      } else {
        throw err;
      }
    }
  };
  return dataFlowNode;
}
module.exports = {
  CycleInterfaceError: CycleInterfaceError,
  customInterfaceErrorMessageInInject: customInterfaceErrorMessageInInject
};


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/errors.js
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/property-hook.js":[function(require,module,exports){
"use strict";
'use strict';
function PropertyHook(fn) {
  this.fn = fn;
}
PropertyHook.prototype.hook = function() {
  this.fn.apply(this, arguments);
};
module.exports = PropertyHook;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/property-hook.js
},{}],"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/rendering.js":[function(require,module,exports){
"use strict";
'use strict';
var VDOM = {
  h: require('virtual-dom').h,
  diff: require('virtual-dom/diff'),
  patch: require('virtual-dom/patch')
};
var DOMDelegator = require('dom-delegator');
var DataFlowSink = require('./data-flow-sink');
var delegator = new DOMDelegator();
function isElement(o) {
  return (typeof HTMLElement === 'object' ? o instanceof HTMLElement : o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string');
}
function renderEvery(vtree$, domContainer) {
  domContainer.innerHTML = '';
  var rootNode = document.createElement('div');
  domContainer.appendChild(rootNode);
  return vtree$.startWith(VDOM.h()).bufferWithCount(2, 1).subscribe(function(buffer) {
    try {
      var oldVTree = buffer[0];
      var newVTree = buffer[1];
      if (typeof newVTree === 'undefined') {
        return;
      }
      rootNode = VDOM.patch(rootNode, VDOM.diff(oldVTree, newVTree));
    } catch (err) {
      console.error(err);
    }
  });
}
function Renderer(container) {
  var domContainer = (typeof container === 'string') ? document.querySelector(container) : container;
  if (typeof container === 'string' && domContainer === null) {
    throw new Error('Cannot render into unknown element \'' + container + '\'');
  } else if (!isElement(domContainer)) {
    throw new Error('Given container is not a DOM element neither a selector string.');
  }
  DataFlowSink.call(this, function injectIntoRenderer(view) {
    return renderEvery(view.vtree$, domContainer);
  });
  this.delegator = delegator;
}
Renderer.prototype = Object.create(DataFlowSink.prototype);
module.exports = {
  Renderer: Renderer,
  renderEvery: renderEvery,
  isElement: isElement,
  delegator: delegator
};


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/rendering.js
},{"./data-flow-sink":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/data-flow-sink.js","dom-delegator":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/dom-delegator/index.js","virtual-dom":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/index.js","virtual-dom/diff":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/diff.js","virtual-dom/patch":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/node_modules/virtual-dom/patch.js"}],"/home/eryk/online-css-autoprefixer/node_modules/es6ify/node_modules/traceur/bin/traceur-runtime.js":[function(require,module,exports){
(function (process,global){
(function(global) {
  'use strict';
  if (global.$traceurRuntime) {
    return;
  }
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $Object.defineProperties;
  var $defineProperty = $Object.defineProperty;
  var $freeze = $Object.freeze;
  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
  var $keys = $Object.keys;
  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
  var $toString = $Object.prototype.toString;
  var $preventExtensions = Object.preventExtensions;
  var $seal = Object.seal;
  var $isExtensible = Object.isExtensible;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var method = nonEnum;
  var counter = 0;
  function newUniqueString() {
    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
  }
  var symbolInternalProperty = newUniqueString();
  var symbolDescriptionProperty = newUniqueString();
  var symbolDataProperty = newUniqueString();
  var symbolValues = $create(null);
  var privateNames = $create(null);
  function isPrivateName(s) {
    return privateNames[s];
  }
  function createPrivateName() {
    var s = newUniqueString();
    privateNames[s] = true;
    return s;
  }
  function isShimSymbol(symbol) {
    return typeof symbol === 'object' && symbol instanceof SymbolValue;
  }
  function typeOf(v) {
    if (isShimSymbol(v))
      return 'symbol';
    return typeof v;
  }
  function Symbol(description) {
    var value = new SymbolValue(description);
    if (!(this instanceof Symbol))
      return value;
    throw new TypeError('Symbol cannot be new\'ed');
  }
  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(Symbol.prototype, 'toString', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    var desc = symbolValue[symbolDescriptionProperty];
    if (desc === undefined)
      desc = '';
    return 'Symbol(' + desc + ')';
  }));
  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
    var symbolValue = this[symbolDataProperty];
    if (!symbolValue)
      throw TypeError('Conversion from symbol to string');
    if (!getOption('symbols'))
      return symbolValue[symbolInternalProperty];
    return symbolValue;
  }));
  function SymbolValue(description) {
    var key = newUniqueString();
    $defineProperty(this, symbolDataProperty, {value: this});
    $defineProperty(this, symbolInternalProperty, {value: key});
    $defineProperty(this, symbolDescriptionProperty, {value: description});
    freeze(this);
    symbolValues[key] = this;
  }
  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
  $defineProperty(SymbolValue.prototype, 'toString', {
    value: Symbol.prototype.toString,
    enumerable: false
  });
  $defineProperty(SymbolValue.prototype, 'valueOf', {
    value: Symbol.prototype.valueOf,
    enumerable: false
  });
  var hashProperty = createPrivateName();
  var hashPropertyDescriptor = {value: undefined};
  var hashObjectProperties = {
    hash: {value: undefined},
    self: {value: undefined}
  };
  var hashCounter = 0;
  function getOwnHashObject(object) {
    var hashObject = object[hashProperty];
    if (hashObject && hashObject.self === object)
      return hashObject;
    if ($isExtensible(object)) {
      hashObjectProperties.hash.value = hashCounter++;
      hashObjectProperties.self.value = object;
      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
      $defineProperty(object, hashProperty, hashPropertyDescriptor);
      return hashPropertyDescriptor.value;
    }
    return undefined;
  }
  function freeze(object) {
    getOwnHashObject(object);
    return $freeze.apply(this, arguments);
  }
  function preventExtensions(object) {
    getOwnHashObject(object);
    return $preventExtensions.apply(this, arguments);
  }
  function seal(object) {
    getOwnHashObject(object);
    return $seal.apply(this, arguments);
  }
  freeze(SymbolValue.prototype);
  function isSymbolString(s) {
    return symbolValues[s] || privateNames[s];
  }
  function toProperty(name) {
    if (isShimSymbol(name))
      return name[symbolInternalProperty];
    return name;
  }
  function removeSymbolKeys(array) {
    var rv = [];
    for (var i = 0; i < array.length; i++) {
      if (!isSymbolString(array[i])) {
        rv.push(array[i]);
      }
    }
    return rv;
  }
  function getOwnPropertyNames(object) {
    return removeSymbolKeys($getOwnPropertyNames(object));
  }
  function keys(object) {
    return removeSymbolKeys($keys(object));
  }
  function getOwnPropertySymbols(object) {
    var rv = [];
    var names = $getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var symbol = symbolValues[names[i]];
      if (symbol) {
        rv.push(symbol);
      }
    }
    return rv;
  }
  function getOwnPropertyDescriptor(object, name) {
    return $getOwnPropertyDescriptor(object, toProperty(name));
  }
  function hasOwnProperty(name) {
    return $hasOwnProperty.call(this, toProperty(name));
  }
  function getOption(name) {
    return global.traceur && global.traceur.options[name];
  }
  function defineProperty(object, name, descriptor) {
    if (isShimSymbol(name)) {
      name = name[symbolInternalProperty];
    }
    $defineProperty(object, name, descriptor);
    return object;
  }
  function polyfillObject(Object) {
    $defineProperty(Object, 'defineProperty', {value: defineProperty});
    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
    $defineProperty(Object, 'freeze', {value: freeze});
    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
    $defineProperty(Object, 'seal', {value: seal});
    $defineProperty(Object, 'keys', {value: keys});
  }
  function exportStar(object) {
    for (var i = 1; i < arguments.length; i++) {
      var names = $getOwnPropertyNames(arguments[i]);
      for (var j = 0; j < names.length; j++) {
        var name = names[j];
        if (isSymbolString(name))
          continue;
        (function(mod, name) {
          $defineProperty(object, name, {
            get: function() {
              return mod[name];
            },
            enumerable: true
          });
        })(arguments[i], names[j]);
      }
    }
    return object;
  }
  function isObject(x) {
    return x != null && (typeof x === 'object' || typeof x === 'function');
  }
  function toObject(x) {
    if (x == null)
      throw $TypeError();
    return $Object(x);
  }
  function checkObjectCoercible(argument) {
    if (argument == null) {
      throw new TypeError('Value cannot be converted to an Object');
    }
    return argument;
  }
  function polyfillSymbol(global, Symbol) {
    if (!global.Symbol) {
      global.Symbol = Symbol;
      Object.getOwnPropertySymbols = getOwnPropertySymbols;
    }
    if (!global.Symbol.iterator) {
      global.Symbol.iterator = Symbol('Symbol.iterator');
    }
  }
  function setupGlobals(global) {
    polyfillSymbol(global, Symbol);
    global.Reflect = global.Reflect || {};
    global.Reflect.global = global.Reflect.global || global;
    polyfillObject(global.Object);
  }
  setupGlobals(global);
  global.$traceurRuntime = {
    checkObjectCoercible: checkObjectCoercible,
    createPrivateName: createPrivateName,
    defineProperties: $defineProperties,
    defineProperty: $defineProperty,
    exportStar: exportStar,
    getOwnHashObject: getOwnHashObject,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    isObject: isObject,
    isPrivateName: isPrivateName,
    isSymbolString: isSymbolString,
    keys: $keys,
    setupGlobals: setupGlobals,
    toObject: toObject,
    toProperty: toProperty,
    typeof: typeOf
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
(function() {
  'use strict';
  var path;
  function relativeRequire(callerPath, requiredPath) {
    path = path || typeof require !== 'undefined' && require('path');
    function isDirectory(path) {
      return path.slice(-1) === '/';
    }
    function isAbsolute(path) {
      return path[0] === '/';
    }
    function isRelative(path) {
      return path[0] === '.';
    }
    if (isDirectory(requiredPath) || isAbsolute(requiredPath))
      return;
    return isRelative(requiredPath) ? require(path.resolve(path.dirname(callerPath), requiredPath)) : require(requiredPath);
  }
  $traceurRuntime.require = relativeRequire;
})();
(function() {
  'use strict';
  function spread() {
    var rv = [],
        j = 0,
        iterResult;
    for (var i = 0; i < arguments.length; i++) {
      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
        throw new TypeError('Cannot spread non-iterable object.');
      }
      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
      while (!(iterResult = iter.next()).done) {
        rv[j++] = iterResult.value;
      }
    }
    return rv;
  }
  $traceurRuntime.spread = spread;
})();
(function() {
  'use strict';
  var $Object = Object;
  var $TypeError = TypeError;
  var $create = $Object.create;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
  var $getPrototypeOf = Object.getPrototypeOf;
  var $__0 = Object,
      getOwnPropertyNames = $__0.getOwnPropertyNames,
      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
  function superDescriptor(homeObject, name) {
    var proto = $getPrototypeOf(homeObject);
    do {
      var result = $getOwnPropertyDescriptor(proto, name);
      if (result)
        return result;
      proto = $getPrototypeOf(proto);
    } while (proto);
    return undefined;
  }
  function superConstructor(ctor) {
    return ctor.__proto__;
  }
  function superCall(self, homeObject, name, args) {
    return superGet(self, homeObject, name).apply(self, args);
  }
  function superGet(self, homeObject, name) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor) {
      if (!descriptor.get)
        return descriptor.value;
      return descriptor.get.call(self);
    }
    return undefined;
  }
  function superSet(self, homeObject, name, value) {
    var descriptor = superDescriptor(homeObject, name);
    if (descriptor && descriptor.set) {
      descriptor.set.call(self, value);
      return value;
    }
    throw $TypeError(("super has no setter '" + name + "'."));
  }
  function getDescriptors(object) {
    var descriptors = {};
    var names = getOwnPropertyNames(object);
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      descriptors[name] = $getOwnPropertyDescriptor(object, name);
    }
    var symbols = getOwnPropertySymbols(object);
    for (var i = 0; i < symbols.length; i++) {
      var symbol = symbols[i];
      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
    }
    return descriptors;
  }
  function createClass(ctor, object, staticObject, superClass) {
    $defineProperty(object, 'constructor', {
      value: ctor,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (arguments.length > 3) {
      if (typeof superClass === 'function')
        ctor.__proto__ = superClass;
      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
    } else {
      ctor.prototype = object;
    }
    $defineProperty(ctor, 'prototype', {
      configurable: false,
      writable: false
    });
    return $defineProperties(ctor, getDescriptors(staticObject));
  }
  function getProtoParent(superClass) {
    if (typeof superClass === 'function') {
      var prototype = superClass.prototype;
      if ($Object(prototype) === prototype || prototype === null)
        return superClass.prototype;
      throw new $TypeError('super prototype must be an Object or null');
    }
    if (superClass === null)
      return null;
    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
  }
  function defaultSuperCall(self, homeObject, args) {
    if ($getPrototypeOf(homeObject) !== null)
      superCall(self, homeObject, 'constructor', args);
  }
  $traceurRuntime.createClass = createClass;
  $traceurRuntime.defaultSuperCall = defaultSuperCall;
  $traceurRuntime.superCall = superCall;
  $traceurRuntime.superConstructor = superConstructor;
  $traceurRuntime.superGet = superGet;
  $traceurRuntime.superSet = superSet;
})();
(function() {
  'use strict';
  if (typeof $traceurRuntime !== 'object') {
    throw new Error('traceur runtime not found.');
  }
  var createPrivateName = $traceurRuntime.createPrivateName;
  var $defineProperties = $traceurRuntime.defineProperties;
  var $defineProperty = $traceurRuntime.defineProperty;
  var $create = Object.create;
  var $TypeError = TypeError;
  function nonEnum(value) {
    return {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    };
  }
  var ST_NEWBORN = 0;
  var ST_EXECUTING = 1;
  var ST_SUSPENDED = 2;
  var ST_CLOSED = 3;
  var END_STATE = -2;
  var RETHROW_STATE = -3;
  function getInternalError(state) {
    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
  }
  function GeneratorContext() {
    this.state = 0;
    this.GState = ST_NEWBORN;
    this.storedException = undefined;
    this.finallyFallThrough = undefined;
    this.sent_ = undefined;
    this.returnValue = undefined;
    this.tryStack_ = [];
  }
  GeneratorContext.prototype = {
    pushTry: function(catchState, finallyState) {
      if (finallyState !== null) {
        var finallyFallThrough = null;
        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
          if (this.tryStack_[i].catch !== undefined) {
            finallyFallThrough = this.tryStack_[i].catch;
            break;
          }
        }
        if (finallyFallThrough === null)
          finallyFallThrough = RETHROW_STATE;
        this.tryStack_.push({
          finally: finallyState,
          finallyFallThrough: finallyFallThrough
        });
      }
      if (catchState !== null) {
        this.tryStack_.push({catch: catchState});
      }
    },
    popTry: function() {
      this.tryStack_.pop();
    },
    get sent() {
      this.maybeThrow();
      return this.sent_;
    },
    set sent(v) {
      this.sent_ = v;
    },
    get sentIgnoreThrow() {
      return this.sent_;
    },
    maybeThrow: function() {
      if (this.action === 'throw') {
        this.action = 'next';
        throw this.sent_;
      }
    },
    end: function() {
      switch (this.state) {
        case END_STATE:
          return this;
        case RETHROW_STATE:
          throw this.storedException;
        default:
          throw getInternalError(this.state);
      }
    },
    handleException: function(ex) {
      this.GState = ST_CLOSED;
      this.state = END_STATE;
      throw ex;
    }
  };
  function nextOrThrow(ctx, moveNext, action, x) {
    switch (ctx.GState) {
      case ST_EXECUTING:
        throw new Error(("\"" + action + "\" on executing generator"));
      case ST_CLOSED:
        if (action == 'next') {
          return {
            value: undefined,
            done: true
          };
        }
        throw x;
      case ST_NEWBORN:
        if (action === 'throw') {
          ctx.GState = ST_CLOSED;
          throw x;
        }
        if (x !== undefined)
          throw $TypeError('Sent value to newborn generator');
      case ST_SUSPENDED:
        ctx.GState = ST_EXECUTING;
        ctx.action = action;
        ctx.sent = x;
        var value = moveNext(ctx);
        var done = value === ctx;
        if (done)
          value = ctx.returnValue;
        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
        return {
          value: value,
          done: done
        };
    }
  }
  var ctxName = createPrivateName();
  var moveNextName = createPrivateName();
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
  GeneratorFunctionPrototype.prototype = {
    constructor: GeneratorFunctionPrototype,
    next: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
    },
    throw: function(v) {
      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
    }
  };
  $defineProperties(GeneratorFunctionPrototype.prototype, {
    constructor: {enumerable: false},
    next: {enumerable: false},
    throw: {enumerable: false}
  });
  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
    return this;
  }));
  function createGeneratorInstance(innerFunction, functionObject, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new GeneratorContext();
    var object = $create(functionObject.prototype);
    object[ctxName] = ctx;
    object[moveNextName] = moveNext;
    return object;
  }
  function initGeneratorFunction(functionObject) {
    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
    functionObject.__proto__ = GeneratorFunctionPrototype;
    return functionObject;
  }
  function AsyncFunctionContext() {
    GeneratorContext.call(this);
    this.err = undefined;
    var ctx = this;
    ctx.result = new Promise(function(resolve, reject) {
      ctx.resolve = resolve;
      ctx.reject = reject;
    });
  }
  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
  AsyncFunctionContext.prototype.end = function() {
    switch (this.state) {
      case END_STATE:
        this.resolve(this.returnValue);
        break;
      case RETHROW_STATE:
        this.reject(this.storedException);
        break;
      default:
        this.reject(getInternalError(this.state));
    }
  };
  AsyncFunctionContext.prototype.handleException = function() {
    this.state = RETHROW_STATE;
  };
  function asyncWrap(innerFunction, self) {
    var moveNext = getMoveNext(innerFunction, self);
    var ctx = new AsyncFunctionContext();
    ctx.createCallback = function(newState) {
      return function(value) {
        ctx.state = newState;
        ctx.value = value;
        moveNext(ctx);
      };
    };
    ctx.errback = function(err) {
      handleCatch(ctx, err);
      moveNext(ctx);
    };
    moveNext(ctx);
    return ctx.result;
  }
  function getMoveNext(innerFunction, self) {
    return function(ctx) {
      while (true) {
        try {
          return innerFunction.call(self, ctx);
        } catch (ex) {
          handleCatch(ctx, ex);
        }
      }
    };
  }
  function handleCatch(ctx, ex) {
    ctx.storedException = ex;
    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
    if (!last) {
      ctx.handleException(ex);
      return;
    }
    ctx.state = last.catch !== undefined ? last.catch : last.finally;
    if (last.finallyFallThrough !== undefined)
      ctx.finallyFallThrough = last.finallyFallThrough;
  }
  $traceurRuntime.asyncWrap = asyncWrap;
  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
})();
(function() {
  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
    var out = [];
    if (opt_scheme) {
      out.push(opt_scheme, ':');
    }
    if (opt_domain) {
      out.push('//');
      if (opt_userInfo) {
        out.push(opt_userInfo, '@');
      }
      out.push(opt_domain);
      if (opt_port) {
        out.push(':', opt_port);
      }
    }
    if (opt_path) {
      out.push(opt_path);
    }
    if (opt_queryData) {
      out.push('?', opt_queryData);
    }
    if (opt_fragment) {
      out.push('#', opt_fragment);
    }
    return out.join('');
  }
  ;
  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
  var ComponentIndex = {
    SCHEME: 1,
    USER_INFO: 2,
    DOMAIN: 3,
    PORT: 4,
    PATH: 5,
    QUERY_DATA: 6,
    FRAGMENT: 7
  };
  function split(uri) {
    return (uri.match(splitRe));
  }
  function removeDotSegments(path) {
    if (path === '/')
      return '/';
    var leadingSlash = path[0] === '/' ? '/' : '';
    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
    var segments = path.split('/');
    var out = [];
    var up = 0;
    for (var pos = 0; pos < segments.length; pos++) {
      var segment = segments[pos];
      switch (segment) {
        case '':
        case '.':
          break;
        case '..':
          if (out.length)
            out.pop();
          else
            up++;
          break;
        default:
          out.push(segment);
      }
    }
    if (!leadingSlash) {
      while (up-- > 0) {
        out.unshift('..');
      }
      if (out.length === 0)
        out.push('.');
    }
    return leadingSlash + out.join('/') + trailingSlash;
  }
  function joinAndCanonicalizePath(parts) {
    var path = parts[ComponentIndex.PATH] || '';
    path = removeDotSegments(path);
    parts[ComponentIndex.PATH] = path;
    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
  }
  function canonicalizeUrl(url) {
    var parts = split(url);
    return joinAndCanonicalizePath(parts);
  }
  function resolveUrl(base, url) {
    var parts = split(url);
    var baseParts = split(base);
    if (parts[ComponentIndex.SCHEME]) {
      return joinAndCanonicalizePath(parts);
    } else {
      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
    }
    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
      if (!parts[i]) {
        parts[i] = baseParts[i];
      }
    }
    if (parts[ComponentIndex.PATH][0] == '/') {
      return joinAndCanonicalizePath(parts);
    }
    var path = baseParts[ComponentIndex.PATH];
    var index = path.lastIndexOf('/');
    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
    parts[ComponentIndex.PATH] = path;
    return joinAndCanonicalizePath(parts);
  }
  function isAbsolute(name) {
    if (!name)
      return false;
    if (name[0] === '/')
      return true;
    var parts = split(name);
    if (parts[ComponentIndex.SCHEME])
      return true;
    return false;
  }
  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
  $traceurRuntime.isAbsolute = isAbsolute;
  $traceurRuntime.removeDotSegments = removeDotSegments;
  $traceurRuntime.resolveUrl = resolveUrl;
})();
(function() {
  'use strict';
  var types = {
    any: {name: 'any'},
    boolean: {name: 'boolean'},
    number: {name: 'number'},
    string: {name: 'string'},
    symbol: {name: 'symbol'},
    void: {name: 'void'}
  };
  var GenericType = function GenericType(type, argumentTypes) {
    this.type = type;
    this.argumentTypes = argumentTypes;
  };
  ($traceurRuntime.createClass)(GenericType, {}, {});
  var typeRegister = Object.create(null);
  function genericType(type) {
    for (var argumentTypes = [],
        $__1 = 1; $__1 < arguments.length; $__1++)
      argumentTypes[$__1 - 1] = arguments[$__1];
    var typeMap = typeRegister;
    var key = $traceurRuntime.getOwnHashObject(type).hash;
    if (!typeMap[key]) {
      typeMap[key] = Object.create(null);
    }
    typeMap = typeMap[key];
    for (var i = 0; i < argumentTypes.length - 1; i++) {
      key = $traceurRuntime.getOwnHashObject(argumentTypes[i]).hash;
      if (!typeMap[key]) {
        typeMap[key] = Object.create(null);
      }
      typeMap = typeMap[key];
    }
    var tail = argumentTypes[argumentTypes.length - 1];
    key = $traceurRuntime.getOwnHashObject(tail).hash;
    if (!typeMap[key]) {
      typeMap[key] = new GenericType(type, argumentTypes);
    }
    return typeMap[key];
  }
  $traceurRuntime.GenericType = GenericType;
  $traceurRuntime.genericType = genericType;
  $traceurRuntime.type = types;
})();
(function(global) {
  'use strict';
  var $__2 = $traceurRuntime,
      canonicalizeUrl = $__2.canonicalizeUrl,
      resolveUrl = $__2.resolveUrl,
      isAbsolute = $__2.isAbsolute;
  var moduleInstantiators = Object.create(null);
  var baseURL;
  if (global.location && global.location.href)
    baseURL = resolveUrl(global.location.href, './');
  else
    baseURL = '';
  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
    this.url = url;
    this.value_ = uncoatedModule;
  };
  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
      this.stack = this.stripStack(cause.stack);
    else
      this.stack = '';
  };
  var $ModuleEvaluationError = ModuleEvaluationError;
  ($traceurRuntime.createClass)(ModuleEvaluationError, {
    stripError: function(message) {
      return message.replace(/.*Error:/, this.constructor.name + ':');
    },
    stripCause: function(cause) {
      if (!cause)
        return '';
      if (!cause.message)
        return cause + '';
      return this.stripError(cause.message);
    },
    loadedBy: function(moduleName) {
      this.stack += '\n loaded by ' + moduleName;
    },
    stripStack: function(causeStack) {
      var stack = [];
      causeStack.split('\n').some((function(frame) {
        if (/UncoatedModuleInstantiator/.test(frame))
          return true;
        stack.push(frame);
      }));
      stack[0] = this.stripError(stack[0]);
      return stack.join('\n');
    }
  }, {}, Error);
  function beforeLines(lines, number) {
    var result = [];
    var first = number - 3;
    if (first < 0)
      first = 0;
    for (var i = first; i < number; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function afterLines(lines, number) {
    var last = number + 1;
    if (last > lines.length - 1)
      last = lines.length - 1;
    var result = [];
    for (var i = number; i <= last; i++) {
      result.push(lines[i]);
    }
    return result;
  }
  function columnSpacing(columns) {
    var result = '';
    for (var i = 0; i < columns - 1; i++) {
      result += '-';
    }
    return result;
  }
  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
    $traceurRuntime.superConstructor($UncoatedModuleInstantiator).call(this, url, null);
    this.func = func;
  };
  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
      if (this.value_)
        return this.value_;
      try {
        var relativeRequire;
        if (typeof $traceurRuntime !== undefined) {
          relativeRequire = $traceurRuntime.require.bind(null, this.url);
        }
        return this.value_ = this.func.call(global, relativeRequire);
      } catch (ex) {
        if (ex instanceof ModuleEvaluationError) {
          ex.loadedBy(this.url);
          throw ex;
        }
        if (ex.stack) {
          var lines = this.func.toString().split('\n');
          var evaled = [];
          ex.stack.split('\n').some(function(frame) {
            if (frame.indexOf('UncoatedModuleInstantiator.getUncoatedModule') > 0)
              return true;
            var m = /(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(frame);
            if (m) {
              var line = parseInt(m[2], 10);
              evaled = evaled.concat(beforeLines(lines, line));
              evaled.push(columnSpacing(m[3]) + '^');
              evaled = evaled.concat(afterLines(lines, line));
              evaled.push('= = = = = = = = =');
            } else {
              evaled.push(frame);
            }
          });
          ex.stack = evaled.join('\n');
        }
        throw new ModuleEvaluationError(this.url, ex);
      }
    }}, {}, UncoatedModuleEntry);
  function getUncoatedModuleInstantiator(name) {
    if (!name)
      return;
    var url = ModuleStore.normalize(name);
    return moduleInstantiators[url];
  }
  ;
  var moduleInstances = Object.create(null);
  var liveModuleSentinel = {};
  function Module(uncoatedModule) {
    var isLive = arguments[1];
    var coatedModule = Object.create(null);
    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
      var getter,
          value;
      if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
          getter = descr.get;
      }
      if (!getter) {
        value = uncoatedModule[name];
        getter = function() {
          return value;
        };
      }
      Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
      });
    }));
    Object.preventExtensions(coatedModule);
    return coatedModule;
  }
  var ModuleStore = {
    normalize: function(name, refererName, refererAddress) {
      if (typeof name !== 'string')
        throw new TypeError('module name must be a string, not ' + typeof name);
      if (isAbsolute(name))
        return canonicalizeUrl(name);
      if (/[^\.]\/\.\.\//.test(name)) {
        throw new Error('module name embeds /../: ' + name);
      }
      if (name[0] === '.' && refererName)
        return resolveUrl(refererName, name);
      return canonicalizeUrl(name);
    },
    get: function(normalizedName) {
      var m = getUncoatedModuleInstantiator(normalizedName);
      if (!m)
        return undefined;
      var moduleInstance = moduleInstances[m.url];
      if (moduleInstance)
        return moduleInstance;
      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
      return moduleInstances[m.url] = moduleInstance;
    },
    set: function(normalizedName, module) {
      normalizedName = String(normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
        return module;
      }));
      moduleInstances[normalizedName] = module;
    },
    get baseURL() {
      return baseURL;
    },
    set baseURL(v) {
      baseURL = String(v);
    },
    registerModule: function(name, deps, func) {
      var normalizedName = ModuleStore.normalize(name);
      if (moduleInstantiators[normalizedName])
        throw new Error('duplicate module named ' + normalizedName);
      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
    },
    bundleStore: Object.create(null),
    register: function(name, deps, func) {
      if (!deps || !deps.length && !func.length) {
        this.registerModule(name, deps, func);
      } else {
        this.bundleStore[name] = {
          deps: deps,
          execute: function() {
            var $__0 = arguments;
            var depMap = {};
            deps.forEach((function(dep, index) {
              return depMap[dep] = $__0[index];
            }));
            var registryEntry = func.call(this, depMap);
            registryEntry.execute.call(this);
            return registryEntry.exports;
          }
        };
      }
    },
    getAnonymousModule: function(func) {
      return new Module(func.call(global), liveModuleSentinel);
    },
    getForTesting: function(name) {
      var $__0 = this;
      if (!this.testingPrefix_) {
        Object.keys(moduleInstances).some((function(key) {
          var m = /(traceur@[^\/]*\/)/.exec(key);
          if (m) {
            $__0.testingPrefix_ = m[1];
            return true;
          }
        }));
      }
      return this.get(this.testingPrefix_ + name);
    }
  };
  var moduleStoreModule = new Module({ModuleStore: ModuleStore});
  ModuleStore.set('@traceur/src/runtime/ModuleStore', moduleStoreModule);
  ModuleStore.set('@traceur/src/runtime/ModuleStore.js', moduleStoreModule);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
  };
  $traceurRuntime.ModuleStore = ModuleStore;
  global.System = {
    register: ModuleStore.register.bind(ModuleStore),
    registerModule: ModuleStore.registerModule.bind(ModuleStore),
    get: ModuleStore.get,
    set: ModuleStore.set,
    normalize: ModuleStore.normalize
  };
  $traceurRuntime.getModuleImpl = function(name) {
    var instantiator = getUncoatedModuleInstantiator(name);
    return instantiator && instantiator.getUncoatedModule();
  };
})(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this);
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/utils.js";
  var $ceil = Math.ceil;
  var $floor = Math.floor;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var $pow = Math.pow;
  var $min = Math.min;
  var toObject = $traceurRuntime.toObject;
  function toUint32(x) {
    return x >>> 0;
  }
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function isCallable(x) {
    return typeof x === 'function';
  }
  function isNumber(x) {
    return typeof x === 'number';
  }
  function toInteger(x) {
    x = +x;
    if ($isNaN(x))
      return 0;
    if (x === 0 || !$isFinite(x))
      return x;
    return x > 0 ? $floor(x) : $ceil(x);
  }
  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
  function toLength(x) {
    var len = toInteger(x);
    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
  }
  function checkIterable(x) {
    return !isObject(x) ? undefined : x[Symbol.iterator];
  }
  function isConstructor(x) {
    return isCallable(x);
  }
  function createIteratorResultObject(value, done) {
    return {
      value: value,
      done: done
    };
  }
  function maybeDefine(object, name, descr) {
    if (!(name in object)) {
      Object.defineProperty(object, name, descr);
    }
  }
  function maybeDefineMethod(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  function maybeDefineConst(object, name, value) {
    maybeDefine(object, name, {
      value: value,
      configurable: false,
      enumerable: false,
      writable: false
    });
  }
  function maybeAddFunctions(object, functions) {
    for (var i = 0; i < functions.length; i += 2) {
      var name = functions[i];
      var value = functions[i + 1];
      maybeDefineMethod(object, name, value);
    }
  }
  function maybeAddConsts(object, consts) {
    for (var i = 0; i < consts.length; i += 2) {
      var name = consts[i];
      var value = consts[i + 1];
      maybeDefineConst(object, name, value);
    }
  }
  function maybeAddIterator(object, func, Symbol) {
    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
      return;
    if (object['@@iterator'])
      func = object['@@iterator'];
    Object.defineProperty(object, Symbol.iterator, {
      value: func,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  var polyfills = [];
  function registerPolyfill(func) {
    polyfills.push(func);
  }
  function polyfillAll(global) {
    polyfills.forEach((function(f) {
      return f(global);
    }));
  }
  return {
    get toObject() {
      return toObject;
    },
    get toUint32() {
      return toUint32;
    },
    get isObject() {
      return isObject;
    },
    get isCallable() {
      return isCallable;
    },
    get isNumber() {
      return isNumber;
    },
    get toInteger() {
      return toInteger;
    },
    get toLength() {
      return toLength;
    },
    get checkIterable() {
      return checkIterable;
    },
    get isConstructor() {
      return isConstructor;
    },
    get createIteratorResultObject() {
      return createIteratorResultObject;
    },
    get maybeDefine() {
      return maybeDefine;
    },
    get maybeDefineMethod() {
      return maybeDefineMethod;
    },
    get maybeDefineConst() {
      return maybeDefineConst;
    },
    get maybeAddFunctions() {
      return maybeAddFunctions;
    },
    get maybeAddConsts() {
      return maybeAddConsts;
    },
    get maybeAddIterator() {
      return maybeAddIterator;
    },
    get registerPolyfill() {
      return registerPolyfill;
    },
    get polyfillAll() {
      return polyfillAll;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Map.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  var deletedSentinel = {};
  function lookupIndex(map, key) {
    if (isObject(key)) {
      var hashObject = getOwnHashObject(key);
      return hashObject && map.objectIndex_[hashObject.hash];
    }
    if (typeof key === 'string')
      return map.stringIndex_[key];
    return map.primitiveIndex_[key];
  }
  function initMap(map) {
    map.entries_ = [];
    map.objectIndex_ = Object.create(null);
    map.stringIndex_ = Object.create(null);
    map.primitiveIndex_ = Object.create(null);
    map.deletedCount_ = 0;
  }
  var Map = function Map() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Map called on incompatible type');
    if ($hasOwnProperty.call(this, 'entries_')) {
      throw new TypeError('Map can not be reentrantly initialised');
    }
    initMap(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__2 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var $__4 = $__3.value,
            key = $__4[0],
            value = $__4[1];
        {
          this.set(key, value);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Map, {
    get size() {
      return this.entries_.length / 2 - this.deletedCount_;
    },
    get: function(key) {
      var index = lookupIndex(this, key);
      if (index !== undefined)
        return this.entries_[index + 1];
    },
    set: function(key, value) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index = lookupIndex(this, key);
      if (index !== undefined) {
        this.entries_[index + 1] = value;
      } else {
        index = this.entries_.length;
        this.entries_[index] = key;
        this.entries_[index + 1] = value;
        if (objectMode) {
          var hashObject = getOwnHashObject(key);
          var hash = hashObject.hash;
          this.objectIndex_[hash] = index;
        } else if (stringMode) {
          this.stringIndex_[key] = index;
        } else {
          this.primitiveIndex_[key] = index;
        }
      }
      return this;
    },
    has: function(key) {
      return lookupIndex(this, key) !== undefined;
    },
    delete: function(key) {
      var objectMode = isObject(key);
      var stringMode = typeof key === 'string';
      var index;
      var hash;
      if (objectMode) {
        var hashObject = getOwnHashObject(key);
        if (hashObject) {
          index = this.objectIndex_[hash = hashObject.hash];
          delete this.objectIndex_[hash];
        }
      } else if (stringMode) {
        index = this.stringIndex_[key];
        delete this.stringIndex_[key];
      } else {
        index = this.primitiveIndex_[key];
        delete this.primitiveIndex_[key];
      }
      if (index !== undefined) {
        this.entries_[index] = deletedSentinel;
        this.entries_[index + 1] = undefined;
        this.deletedCount_++;
        return true;
      }
      return false;
    },
    clear: function() {
      initMap(this);
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      for (var i = 0; i < this.entries_.length; i += 2) {
        var key = this.entries_[i];
        var value = this.entries_[i + 1];
        if (key === deletedSentinel)
          continue;
        callbackFn.call(thisArg, value, key, this);
      }
    },
    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return [key, value];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__5, this);
    }),
    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return key;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    }),
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var i,
          key,
          value;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = (i < this.entries_.length) ? 8 : -2;
              break;
            case 4:
              i += 2;
              $ctx.state = 12;
              break;
            case 8:
              key = this.entries_[i];
              value = this.entries_[i + 1];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (key === deletedSentinel) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return value;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    })
  }, {});
  Object.defineProperty(Map.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Map.prototype.entries
  });
  function polyfillMap(global) {
    var $__4 = global,
        Object = $__4.Object,
        Symbol = $__4.Symbol;
    if (!global.Map)
      global.Map = Map;
    var mapPrototype = global.Map.prototype;
    if (mapPrototype.entries === undefined)
      global.Map = Map;
    if (mapPrototype.entries) {
      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillMap);
  return {
    get Map() {
      return Map;
    },
    get polyfillMap() {
      return polyfillMap;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Set.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isObject = $__0.isObject,
      maybeAddIterator = $__0.maybeAddIterator,
      registerPolyfill = $__0.registerPolyfill;
  var Map = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map;
  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
  var $hasOwnProperty = Object.prototype.hasOwnProperty;
  function initSet(set) {
    set.map_ = new Map();
  }
  var Set = function Set() {
    var iterable = arguments[0];
    if (!isObject(this))
      throw new TypeError('Set called on incompatible type');
    if ($hasOwnProperty.call(this, 'map_')) {
      throw new TypeError('Set can not be reentrantly initialised');
    }
    initSet(this);
    if (iterable !== null && iterable !== undefined) {
      for (var $__4 = iterable[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__5; !($__5 = $__4.next()).done; ) {
        var item = $__5.value;
        {
          this.add(item);
        }
      }
    }
  };
  ($traceurRuntime.createClass)(Set, {
    get size() {
      return this.map_.size;
    },
    has: function(key) {
      return this.map_.has(key);
    },
    add: function(key) {
      this.map_.set(key, key);
      return this;
    },
    delete: function(key) {
      return this.map_.delete(key);
    },
    clear: function() {
      return this.map_.clear();
    },
    forEach: function(callbackFn) {
      var thisArg = arguments[1];
      var $__2 = this;
      return this.map_.forEach((function(value, key) {
        callbackFn.call(thisArg, key, key, $__2);
      }));
    },
    values: $traceurRuntime.initGeneratorFunction(function $__7() {
      var $__8,
          $__9;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__8 = this.map_.keys()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__9.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__9.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__9.value;
            default:
              return $ctx.end();
          }
      }, $__7, this);
    }),
    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
      var $__11,
          $__12;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__11 = this.map_.entries()[Symbol.iterator]();
              $ctx.sent = void 0;
              $ctx.action = 'next';
              $ctx.state = 12;
              break;
            case 12:
              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = ($__12.done) ? 3 : 2;
              break;
            case 3:
              $ctx.sent = $__12.value;
              $ctx.state = -2;
              break;
            case 2:
              $ctx.state = 12;
              return $__12.value;
            default:
              return $ctx.end();
          }
      }, $__10, this);
    })
  }, {});
  Object.defineProperty(Set.prototype, Symbol.iterator, {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  Object.defineProperty(Set.prototype, 'keys', {
    configurable: true,
    writable: true,
    value: Set.prototype.values
  });
  function polyfillSet(global) {
    var $__6 = global,
        Object = $__6.Object,
        Symbol = $__6.Symbol;
    if (!global.Set)
      global.Set = Set;
    var setPrototype = global.Set.prototype;
    if (setPrototype.values) {
      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
        return this;
      }, Symbol);
    }
  }
  registerPolyfill(polyfillSet);
  return {
    get Set() {
      return Set;
    },
    get polyfillSet() {
      return polyfillSet;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js" + '');
System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js";
  var len = 0;
  function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      scheduleFlush();
    }
  }
  var $__default = asap;
  var browserGlobal = (typeof window !== 'undefined') ? window : {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
  function useNextTick() {
    return function() {
      process.nextTick(flush);
    };
  }
  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, {characterData: true});
    return function() {
      node.data = (iterations = ++iterations % 2);
    };
  }
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function() {
      channel.port2.postMessage(0);
    };
  }
  function useSetTimeout() {
    return function() {
      setTimeout(flush, 1);
    };
  }
  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];
      callback(arg);
      queue[i] = undefined;
      queue[i + 1] = undefined;
    }
    len = 0;
  }
  var scheduleFlush;
  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else {
    scheduleFlush = useSetTimeout();
  }
  return {get default() {
      return $__default;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js";
  var async = System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default;
  var registerPolyfill = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill;
  var promiseRaw = {};
  function isPromise(x) {
    return x && typeof x === 'object' && x.status_ !== undefined;
  }
  function idResolveHandler(x) {
    return x;
  }
  function idRejectHandler(x) {
    throw x;
  }
  function chain(promise) {
    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
    var deferred = getDeferred(promise.constructor);
    switch (promise.status_) {
      case undefined:
        throw TypeError;
      case 0:
        promise.onResolve_.push(onResolve, deferred);
        promise.onReject_.push(onReject, deferred);
        break;
      case +1:
        promiseEnqueue(promise.value_, [onResolve, deferred]);
        break;
      case -1:
        promiseEnqueue(promise.value_, [onReject, deferred]);
        break;
    }
    return deferred.promise;
  }
  function getDeferred(C) {
    if (this === $Promise) {
      var promise = promiseInit(new $Promise(promiseRaw));
      return {
        promise: promise,
        resolve: (function(x) {
          promiseResolve(promise, x);
        }),
        reject: (function(r) {
          promiseReject(promise, r);
        })
      };
    } else {
      var result = {};
      result.promise = new C((function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      }));
      return result;
    }
  }
  function promiseSet(promise, status, value, onResolve, onReject) {
    promise.status_ = status;
    promise.value_ = value;
    promise.onResolve_ = onResolve;
    promise.onReject_ = onReject;
    return promise;
  }
  function promiseInit(promise) {
    return promiseSet(promise, 0, undefined, [], []);
  }
  var Promise = function Promise(resolver) {
    if (resolver === promiseRaw)
      return;
    if (typeof resolver !== 'function')
      throw new TypeError;
    var promise = promiseInit(this);
    try {
      resolver((function(x) {
        promiseResolve(promise, x);
      }), (function(r) {
        promiseReject(promise, r);
      }));
    } catch (e) {
      promiseReject(promise, e);
    }
  };
  ($traceurRuntime.createClass)(Promise, {
    catch: function(onReject) {
      return this.then(undefined, onReject);
    },
    then: function(onResolve, onReject) {
      if (typeof onResolve !== 'function')
        onResolve = idResolveHandler;
      if (typeof onReject !== 'function')
        onReject = idRejectHandler;
      var that = this;
      var constructor = this.constructor;
      return chain(this, function(x) {
        x = promiseCoerce(constructor, x);
        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
      }, onReject);
    }
  }, {
    resolve: function(x) {
      if (this === $Promise) {
        if (isPromise(x)) {
          return x;
        }
        return promiseSet(new $Promise(promiseRaw), +1, x);
      } else {
        return new this(function(resolve, reject) {
          resolve(x);
        });
      }
    },
    reject: function(r) {
      if (this === $Promise) {
        return promiseSet(new $Promise(promiseRaw), -1, r);
      } else {
        return new this((function(resolve, reject) {
          reject(r);
        }));
      }
    },
    all: function(values) {
      var deferred = getDeferred(this);
      var resolutions = [];
      try {
        var count = values.length;
        if (count === 0) {
          deferred.resolve(resolutions);
        } else {
          for (var i = 0; i < values.length; i++) {
            this.resolve(values[i]).then(function(i, x) {
              resolutions[i] = x;
              if (--count === 0)
                deferred.resolve(resolutions);
            }.bind(undefined, i), (function(r) {
              deferred.reject(r);
            }));
          }
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    },
    race: function(values) {
      var deferred = getDeferred(this);
      try {
        for (var i = 0; i < values.length; i++) {
          this.resolve(values[i]).then((function(x) {
            deferred.resolve(x);
          }), (function(r) {
            deferred.reject(r);
          }));
        }
      } catch (e) {
        deferred.reject(e);
      }
      return deferred.promise;
    }
  });
  var $Promise = Promise;
  var $PromiseReject = $Promise.reject;
  function promiseResolve(promise, x) {
    promiseDone(promise, +1, x, promise.onResolve_);
  }
  function promiseReject(promise, r) {
    promiseDone(promise, -1, r, promise.onReject_);
  }
  function promiseDone(promise, status, value, reactions) {
    if (promise.status_ !== 0)
      return;
    promiseEnqueue(value, reactions);
    promiseSet(promise, status, value);
  }
  function promiseEnqueue(value, tasks) {
    async((function() {
      for (var i = 0; i < tasks.length; i += 2) {
        promiseHandle(value, tasks[i], tasks[i + 1]);
      }
    }));
  }
  function promiseHandle(value, handler, deferred) {
    try {
      var result = handler(value);
      if (result === deferred.promise)
        throw new TypeError;
      else if (isPromise(result))
        chain(result, deferred.resolve, deferred.reject);
      else
        deferred.resolve(result);
    } catch (e) {
      try {
        deferred.reject(e);
      } catch (e) {}
    }
  }
  var thenableSymbol = '@@thenable';
  function isObject(x) {
    return x && (typeof x === 'object' || typeof x === 'function');
  }
  function promiseCoerce(constructor, x) {
    if (!isPromise(x) && isObject(x)) {
      var then;
      try {
        then = x.then;
      } catch (r) {
        var promise = $PromiseReject.call(constructor, r);
        x[thenableSymbol] = promise;
        return promise;
      }
      if (typeof then === 'function') {
        var p = x[thenableSymbol];
        if (p) {
          return p;
        } else {
          var deferred = getDeferred(constructor);
          x[thenableSymbol] = deferred.promise;
          try {
            then.call(x, deferred.resolve, deferred.reject);
          } catch (r) {
            deferred.reject(r);
          }
          return deferred.promise;
        }
      }
    }
    return x;
  }
  function polyfillPromise(global) {
    if (!global.Promise)
      global.Promise = Promise;
  }
  registerPolyfill(polyfillPromise);
  return {
    get Promise() {
      return Promise;
    },
    get polyfillPromise() {
      return polyfillPromise;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      createIteratorResultObject = $__0.createIteratorResultObject,
      isObject = $__0.isObject;
  var toProperty = $traceurRuntime.toProperty;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var iteratedString = Symbol('iteratedString');
  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
  var StringIterator = function StringIterator() {};
  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[toProperty(iteratedString)];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[toProperty(stringIteratorNextIndex)];
      var len = s.length;
      if (position >= len) {
        o[toProperty(iteratedString)] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createStringIterator(string) {
    var s = String(string);
    var iterator = Object.create(StringIterator.prototype);
    iterator[toProperty(iteratedString)] = s;
    iterator[toProperty(stringIteratorNextIndex)] = 0;
    return iterator;
  }
  return {get createStringIterator() {
      return createStringIterator;
    }};
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/String.js";
  var createStringIterator = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill;
  var $toString = Object.prototype.toString;
  var $indexOf = String.prototype.indexOf;
  var $lastIndexOf = String.prototype.lastIndexOf;
  function startsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (isNaN(pos)) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    return $indexOf.call(string, searchString, pos) == start;
  }
  function endsWith(search) {
    var string = String(this);
    if (this == null || $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var pos = stringLength;
    if (arguments.length > 1) {
      var position = arguments[1];
      if (position !== undefined) {
        pos = position ? Number(position) : 0;
        if (isNaN(pos)) {
          pos = 0;
        }
      }
    }
    var end = Math.min(Math.max(pos, 0), stringLength);
    var start = end - searchLength;
    if (start < 0) {
      return false;
    }
    return $lastIndexOf.call(string, searchString, start) == start;
  }
  function includes(search) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    if (search && $toString.call(search) == '[object RegExp]') {
      throw TypeError();
    }
    var stringLength = string.length;
    var searchString = String(search);
    var searchLength = searchString.length;
    var position = arguments.length > 1 ? arguments[1] : undefined;
    var pos = position ? Number(position) : 0;
    if (pos != pos) {
      pos = 0;
    }
    var start = Math.min(Math.max(pos, 0), stringLength);
    if (searchLength + start > stringLength) {
      return false;
    }
    return $indexOf.call(string, searchString, pos) != -1;
  }
  function repeat(count) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var n = count ? Number(count) : 0;
    if (isNaN(n)) {
      n = 0;
    }
    if (n < 0 || n == Infinity) {
      throw RangeError();
    }
    if (n == 0) {
      return '';
    }
    var result = '';
    while (n--) {
      result += string;
    }
    return result;
  }
  function codePointAt(position) {
    if (this == null) {
      throw TypeError();
    }
    var string = String(this);
    var size = string.length;
    var index = position ? Number(position) : 0;
    if (isNaN(index)) {
      index = 0;
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    var first = string.charCodeAt(index);
    var second;
    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
      second = string.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
      }
    }
    return first;
  }
  function raw(callsite) {
    var raw = callsite.raw;
    var len = raw.length >>> 0;
    if (len === 0)
      return '';
    var s = '';
    var i = 0;
    while (true) {
      s += raw[i];
      if (i + 1 === len)
        return s;
      s += arguments[++i];
    }
  }
  function fromCodePoint() {
    var codeUnits = [];
    var floor = Math.floor;
    var highSurrogate;
    var lowSurrogate;
    var index = -1;
    var length = arguments.length;
    if (!length) {
      return '';
    }
    while (++index < length) {
      var codePoint = Number(arguments[index]);
      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
      if (codePoint <= 0xFFFF) {
        codeUnits.push(codePoint);
      } else {
        codePoint -= 0x10000;
        highSurrogate = (codePoint >> 10) + 0xD800;
        lowSurrogate = (codePoint % 0x400) + 0xDC00;
        codeUnits.push(highSurrogate, lowSurrogate);
      }
    }
    return String.fromCharCode.apply(null, codeUnits);
  }
  function stringPrototypeIterator() {
    var o = $traceurRuntime.checkObjectCoercible(this);
    var s = String(o);
    return createStringIterator(s);
  }
  function polyfillString(global) {
    var String = global.String;
    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'endsWith', endsWith, 'includes', includes, 'repeat', repeat, 'startsWith', startsWith]);
    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
  }
  registerPolyfill(polyfillString);
  return {
    get startsWith() {
      return startsWith;
    },
    get endsWith() {
      return endsWith;
    },
    get includes() {
      return includes;
    },
    get repeat() {
      return repeat;
    },
    get codePointAt() {
      return codePointAt;
    },
    get raw() {
      return raw;
    },
    get fromCodePoint() {
      return fromCodePoint;
    },
    get stringPrototypeIterator() {
      return stringPrototypeIterator;
    },
    get polyfillString() {
      return polyfillString;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js", [], function() {
  "use strict";
  var $__2;
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      toObject = $__0.toObject,
      toUint32 = $__0.toUint32,
      createIteratorResultObject = $__0.createIteratorResultObject;
  var ARRAY_ITERATOR_KIND_KEYS = 1;
  var ARRAY_ITERATOR_KIND_VALUES = 2;
  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
  var ArrayIterator = function ArrayIterator() {};
  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
    value: function() {
      var iterator = toObject(this);
      var array = iterator.iteratorObject_;
      if (!array) {
        throw new TypeError('Object is not an ArrayIterator');
      }
      var index = iterator.arrayIteratorNextIndex_;
      var itemKind = iterator.arrayIterationKind_;
      var length = toUint32(array.length);
      if (index >= length) {
        iterator.arrayIteratorNextIndex_ = Infinity;
        return createIteratorResultObject(undefined, true);
      }
      iterator.arrayIteratorNextIndex_ = index + 1;
      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
        return createIteratorResultObject(array[index], false);
      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
        return createIteratorResultObject([index, array[index]], false);
      return createIteratorResultObject(index, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {});
  function createArrayIterator(array, kind) {
    var object = toObject(array);
    var iterator = new ArrayIterator;
    iterator.iteratorObject_ = object;
    iterator.arrayIteratorNextIndex_ = 0;
    iterator.arrayIterationKind_ = kind;
    return iterator;
  }
  function entries() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
  }
  function keys() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
  }
  function values() {
    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
  }
  return {
    get entries() {
      return entries;
    },
    get keys() {
      return keys;
    },
    get values() {
      return values;
    }
  };
});
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Array.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),
      entries = $__0.entries,
      keys = $__0.keys,
      values = $__0.values;
  var $__1 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      checkIterable = $__1.checkIterable,
      isCallable = $__1.isCallable,
      isConstructor = $__1.isConstructor,
      maybeAddFunctions = $__1.maybeAddFunctions,
      maybeAddIterator = $__1.maybeAddIterator,
      registerPolyfill = $__1.registerPolyfill,
      toInteger = $__1.toInteger,
      toLength = $__1.toLength,
      toObject = $__1.toObject;
  function from(arrLike) {
    var mapFn = arguments[1];
    var thisArg = arguments[2];
    var C = this;
    var items = toObject(arrLike);
    var mapping = mapFn !== undefined;
    var k = 0;
    var arr,
        len;
    if (mapping && !isCallable(mapFn)) {
      throw TypeError();
    }
    if (checkIterable(items)) {
      arr = isConstructor(C) ? new C() : [];
      for (var $__2 = items[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        var item = $__3.value;
        {
          if (mapping) {
            arr[k] = mapFn.call(thisArg, item, k);
          } else {
            arr[k] = item;
          }
          k++;
        }
      }
      arr.length = k;
      return arr;
    }
    len = toLength(items.length);
    arr = isConstructor(C) ? new C(len) : new Array(len);
    for (; k < len; k++) {
      if (mapping) {
        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
      } else {
        arr[k] = items[k];
      }
    }
    arr.length = len;
    return arr;
  }
  function of() {
    for (var items = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      items[$__4] = arguments[$__4];
    var C = this;
    var len = items.length;
    var arr = isConstructor(C) ? new C(len) : new Array(len);
    for (var k = 0; k < len; k++) {
      arr[k] = items[k];
    }
    arr.length = len;
    return arr;
  }
  function fill(value) {
    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
    var end = arguments[2];
    var object = toObject(this);
    var len = toLength(object.length);
    var fillStart = toInteger(start);
    var fillEnd = end !== undefined ? toInteger(end) : len;
    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
    while (fillStart < fillEnd) {
      object[fillStart] = value;
      fillStart++;
    }
    return object;
  }
  function find(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg);
  }
  function findIndex(predicate) {
    var thisArg = arguments[1];
    return findHelper(this, predicate, thisArg, true);
  }
  function findHelper(self, predicate) {
    var thisArg = arguments[2];
    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
    var object = toObject(self);
    var len = toLength(object.length);
    if (!isCallable(predicate)) {
      throw TypeError();
    }
    for (var i = 0; i < len; i++) {
      var value = object[i];
      if (predicate.call(thisArg, value, i, object)) {
        return returnIndex ? i : value;
      }
    }
    return returnIndex ? -1 : undefined;
  }
  function polyfillArray(global) {
    var $__5 = global,
        Array = $__5.Array,
        Object = $__5.Object,
        Symbol = $__5.Symbol;
    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
    maybeAddFunctions(Array, ['from', from, 'of', of]);
    maybeAddIterator(Array.prototype, values, Symbol);
    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
      return this;
    }, Symbol);
  }
  registerPolyfill(polyfillArray);
  return {
    get from() {
      return from;
    },
    get of() {
      return of;
    },
    get fill() {
      return fill;
    },
    get find() {
      return find;
    },
    get findIndex() {
      return findIndex;
    },
    get polyfillArray() {
      return polyfillArray;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Object.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill;
  var $__1 = $traceurRuntime,
      defineProperty = $__1.defineProperty,
      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
      getOwnPropertyNames = $__1.getOwnPropertyNames,
      isPrivateName = $__1.isPrivateName,
      keys = $__1.keys;
  function is(left, right) {
    if (left === right)
      return left !== 0 || 1 / left === 1 / right;
    return left !== left && right !== right;
  }
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      var props = source == null ? [] : keys(source);
      var p,
          length = props.length;
      for (p = 0; p < length; p++) {
        var name = props[p];
        if (isPrivateName(name))
          continue;
        target[name] = source[name];
      }
    }
    return target;
  }
  function mixin(target, source) {
    var props = getOwnPropertyNames(source);
    var p,
        descriptor,
        length = props.length;
    for (p = 0; p < length; p++) {
      var name = props[p];
      if (isPrivateName(name))
        continue;
      descriptor = getOwnPropertyDescriptor(source, props[p]);
      defineProperty(target, props[p], descriptor);
    }
    return target;
  }
  function polyfillObject(global) {
    var Object = global.Object;
    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
  }
  registerPolyfill(polyfillObject);
  return {
    get is() {
      return is;
    },
    get assign() {
      return assign;
    },
    get mixin() {
      return mixin;
    },
    get polyfillObject() {
      return polyfillObject;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/Number.js";
  var $__0 = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),
      isNumber = $__0.isNumber,
      maybeAddConsts = $__0.maybeAddConsts,
      maybeAddFunctions = $__0.maybeAddFunctions,
      registerPolyfill = $__0.registerPolyfill,
      toInteger = $__0.toInteger;
  var $abs = Math.abs;
  var $isFinite = isFinite;
  var $isNaN = isNaN;
  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
  var EPSILON = Math.pow(2, -52);
  function NumberIsFinite(number) {
    return isNumber(number) && $isFinite(number);
  }
  ;
  function isInteger(number) {
    return NumberIsFinite(number) && toInteger(number) === number;
  }
  function NumberIsNaN(number) {
    return isNumber(number) && $isNaN(number);
  }
  ;
  function isSafeInteger(number) {
    if (NumberIsFinite(number)) {
      var integral = toInteger(number);
      if (integral === number)
        return $abs(integral) <= MAX_SAFE_INTEGER;
    }
    return false;
  }
  function polyfillNumber(global) {
    var Number = global.Number;
    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
  }
  registerPolyfill(polyfillNumber);
  return {
    get MAX_SAFE_INTEGER() {
      return MAX_SAFE_INTEGER;
    },
    get MIN_SAFE_INTEGER() {
      return MIN_SAFE_INTEGER;
    },
    get EPSILON() {
      return EPSILON;
    },
    get isFinite() {
      return NumberIsFinite;
    },
    get isInteger() {
      return isInteger;
    },
    get isNaN() {
      return NumberIsNaN;
    },
    get isSafeInteger() {
      return isSafeInteger;
    },
    get polyfillNumber() {
      return polyfillNumber;
    }
  };
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js" + '');
System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js", [], function() {
  "use strict";
  var __moduleName = "traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js";
  var polyfillAll = System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;
  polyfillAll(Reflect.global);
  var setupGlobals = $traceurRuntime.setupGlobals;
  $traceurRuntime.setupGlobals = function(global) {
    setupGlobals(global);
    polyfillAll(global);
  };
  return {};
});
System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js" + '');

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/process/browser.js","path":"/home/eryk/online-css-autoprefixer/node_modules/browserify/node_modules/path-browserify/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/index.js":[function(require,module,exports){
"use strict";
var baseFlatten = require('lodash._baseflatten'),
    createCallback = require('lodash.createcallback'),
    forIn = require('lodash.forin'),
    isObject = require('lodash.isobject');
function pick(object, callback, thisArg) {
  var result = {};
  if (typeof callback != 'function') {
    var index = -1,
        props = baseFlatten(arguments, true, false, 1),
        length = isObject(object) ? props.length : 0;
    while (++index < length) {
      var key = props[index];
      if (key in object) {
        result[key] = object[key];
      }
    }
  } else {
    callback = createCallback(callback, thisArg, 3);
    forIn(object, function(value, key, object) {
      if (callback(value, key, object)) {
        result[key] = value;
      }
    });
  }
  return result;
}
module.exports = pick;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/index.js
},{"lodash._baseflatten":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/index.js","lodash.createcallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/index.js","lodash.forin":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/**
 * The base implementation of `_.flatten` without support for callback
 * shorthands or `thisArg` binding.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
 * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
 * @param {number} [fromIndex=0] The index to start from.
 * @returns {Array} Returns a new flattened array.
 */
function baseFlatten(array, isShallow, isStrict, fromIndex) {
  var index = (fromIndex || 0) - 1,
      length = array ? array.length : 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (value && typeof value == 'object' && typeof value.length == 'number'
        && (isArray(value) || isArguments(value))) {
      // recursively flatten arrays (susceptible to call stack limits)
      if (!isShallow) {
        value = baseFlatten(value, isShallow, isStrict);
      }
      var valIndex = -1,
          valLength = value.length,
          resIndex = result.length;

      result.length += valLength;
      while (++valIndex < valLength) {
        result[resIndex++] = value[valIndex];
      }
    } else if (!isStrict) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseFlatten;

},{"lodash.isarguments":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarguments/index.js","lodash.isarray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarguments/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/**
 * Checks if `value` is an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
 * @example
 *
 * (function() { return _.isArguments(arguments); })(1, 2, 3);
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return value && typeof value == 'object' && typeof value.length == 'number' &&
    toString.call(value) == argsClass || false;
}

module.exports = isArguments;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative');

/** `Object#toString` result shortcuts */
var arrayClass = '[object Array]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray;

/**
 * Checks if `value` is an array.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
 * @example
 *
 * (function() { return _.isArray(arguments); })();
 * // => false
 *
 * _.isArray([1, 2, 3]);
 * // => true
 */
var isArray = nativeIsArray || function(value) {
  return value && typeof value == 'object' && typeof value.length == 'number' &&
    toString.call(value) == arrayClass || false;
};

module.exports = isArray;

},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  String(toString)
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/toString| for [^\]]+/g, '.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
 */
function isNative(value) {
  return typeof value == 'function' && reNative.test(value);
}

module.exports = isNative;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('lodash._basecreatecallback'),
    baseIsEqual = require('lodash._baseisequal'),
    isObject = require('lodash.isobject'),
    keys = require('lodash.keys'),
    property = require('lodash.property');

/**
 * Produces a callback bound to an optional `thisArg`. If `func` is a property
 * name the created callback will return the property value for a given element.
 * If `func` is an object the created callback will return `true` for elements
 * that contain the equivalent object properties, otherwise it will return `false`.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 * @example
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40 }
 * ];
 *
 * // wrap to create custom callback shorthands
 * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
 *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
 *   return !match ? func(callback, thisArg) : function(object) {
 *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
 *   };
 * });
 *
 * _.filter(characters, 'age__gt38');
 * // => [{ 'name': 'fred', 'age': 40 }]
 */
function createCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (func == null || type == 'function') {
    return baseCreateCallback(func, thisArg, argCount);
  }
  // handle "_.pluck" style callback shorthands
  if (type != 'object') {
    return property(func);
  }
  var props = keys(func),
      key = props[0],
      a = func[key];

  // handle "_.where" style callback shorthands
  if (props.length == 1 && a === a && !isObject(a)) {
    // fast path the common case of providing an object with a single
    // property containing a primitive value
    return function(object) {
      var b = object[key];
      return a === b && (a !== 0 || (1 / a == 1 / b));
    };
  }
  return function(object) {
    var length = props.length,
        result = false;

    while (length--) {
      if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
        break;
      }
    }
    return result;
  };
}

module.exports = createCallback;

},{"lodash._basecreatecallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js","lodash._baseisequal":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js","lodash.keys":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/index.js","lodash.property":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.property/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var bind = require('lodash.bind'),
    identity = require('lodash.identity'),
    setBindData = require('lodash._setbinddata'),
    support = require('lodash.support');

/** Used to detected named functions */
var reFuncName = /^\s*function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  // exit early for no `thisArg` or already bound by `Function#bind`
  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
    return func;
  }
  var bindData = func.__bindData__;
  if (typeof bindData == 'undefined') {
    if (support.funcNames) {
      bindData = !func.name;
    }
    bindData = bindData || !support.funcDecomp;
    if (!bindData) {
      var source = fnToString.call(func);
      if (!support.funcNames) {
        bindData = !reFuncName.test(source);
      }
      if (!bindData) {
        // checks if `func` references the `this` keyword and stores the result
        bindData = reThis.test(source);
        setBindData(func, bindData);
      }
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData === false || (bindData !== true && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return bind(func, thisArg);
}

module.exports = baseCreateCallback;

},{"lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash.bind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js","lodash.identity":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js","lodash.support":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative'),
    noop = require('lodash.noop');

/** Used as the property descriptor for `__bindData__` */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Used to set meta data on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = isNative(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {Array} value The data array to set.
 */
var setBindData = !defineProperty ? noop : function(func, value) {
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
};

module.exports = setBindData;

},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A no-operation function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // no operation performed
}

module.exports = noop;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('lodash._createwrapper'),
    slice = require('lodash._slice');

/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [arg] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'fred' }, 'hi');
 * func();
 * // => 'hi fred'
 */
function bind(func, thisArg) {
  return arguments.length > 2
    ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
    : createWrapper(func, 1, null, null, thisArg);
}

module.exports = bind;

},{"lodash._createwrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseBind = require('lodash._basebind'),
    baseCreateWrapper = require('lodash._basecreatewrapper'),
    isFunction = require('lodash.isfunction'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push,
    unshift = arrayRef.unshift;

/**
 * Creates a function that, when called, either curries or invokes `func`
 * with an optional `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of method flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1 - `_.bind`
 *  2 - `_.bindKey`
 *  4 - `_.curry`
 *  8 - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      isPartial = bitmask & 16,
      isPartialRight = bitmask & 32;

  if (!isBindKey && !isFunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~16;
    isPartial = partialArgs = false;
  }
  if (isPartialRight && !partialRightArgs.length) {
    bitmask &= ~32;
    isPartialRight = partialRightArgs = false;
  }
  var bindData = func && func.__bindData__;
  if (bindData && bindData !== true) {
    // clone `bindData`
    bindData = slice(bindData);
    if (bindData[2]) {
      bindData[2] = slice(bindData[2]);
    }
    if (bindData[3]) {
      bindData[3] = slice(bindData[3]);
    }
    // set `thisBinding` is not previously bound
    if (isBind && !(bindData[1] & 1)) {
      bindData[4] = thisArg;
    }
    // set if previously bound but not currently (subsequent curried functions)
    if (!isBind && bindData[1] & 1) {
      bitmask |= 8;
    }
    // set curried arity if not yet set
    if (isCurry && !(bindData[1] & 4)) {
      bindData[5] = arity;
    }
    // append partial left arguments
    if (isPartial) {
      push.apply(bindData[2] || (bindData[2] = []), partialArgs);
    }
    // append partial right arguments
    if (isPartialRight) {
      unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
    }
    // merge flags
    bindData[1] |= bitmask;
    return createWrapper.apply(null, bindData);
  }
  // fast path for `_.bind`
  var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
}

module.exports = createWrapper;

},{"lodash._basebind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js","lodash._basecreatewrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isfunction":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = require('lodash._basecreate'),
    isObject = require('lodash.isobject'),
    setBindData = require('lodash._setbinddata'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(bindData) {
  var func = bindData[0],
      partialArgs = bindData[2],
      thisArg = bindData[4];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      // avoid `arguments` object deoptimizations by using `slice` instead
      // of `Array.prototype.slice.call` and not assigning `arguments` to a
      // variable as a ternary expression
      var args = slice(partialArgs);
      push.apply(args, arguments);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = baseCreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseBind;

},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
(function (global){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative'),
    isObject = require('lodash.isobject'),
    noop = require('lodash.noop');

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(prototype, properties) {
  return isObject(prototype) ? nativeCreate(prototype) : {};
}
// fallback for browsers without `Object.create`
if (!nativeCreate) {
  baseCreate = (function() {
    function Object() {}
    return function(prototype) {
      if (isObject(prototype)) {
        Object.prototype = prototype;
        var result = new Object;
        Object.prototype = null;
      }
      return result || global.Object();
    };
  }());
}

module.exports = baseCreate;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = require('lodash._basecreate'),
    isObject = require('lodash.isobject'),
    setBindData = require('lodash._setbinddata'),
    slice = require('lodash._slice');

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} bindData The bind data array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(bindData) {
  var func = bindData[0],
      bitmask = bindData[1],
      partialArgs = bindData[2],
      partialRightArgs = bindData[3],
      thisArg = bindData[4],
      arity = bindData[5];

  var isBind = bitmask & 1,
      isBindKey = bitmask & 2,
      isCurry = bitmask & 4,
      isCurryBound = bitmask & 8,
      key = func;

  function bound() {
    var thisBinding = isBind ? thisArg : this;
    if (partialArgs) {
      var args = slice(partialArgs);
      push.apply(args, arguments);
    }
    if (partialRightArgs || isCurry) {
      args || (args = slice(arguments));
      if (partialRightArgs) {
        push.apply(args, partialRightArgs);
      }
      if (isCurry && args.length < arity) {
        bitmask |= 16 & ~32;
        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
      }
    }
    args || (args = arguments);
    if (isBindKey) {
      func = thisBinding[key];
    }
    if (this instanceof bound) {
      thisBinding = baseCreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  setBindData(bound, bindData);
  return bound;
}

module.exports = baseCreateWrapper;

},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}

module.exports = isFunction;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Slices the `collection` from the `start` index up to, but not including,
 * the `end` index.
 *
 * Note: This function is used instead of `Array#slice` to support node lists
 * in IE < 9 and to ensure dense arrays are returned.
 *
 * @private
 * @param {Array|Object|string} collection The collection to slice.
 * @param {number} start The start index.
 * @param {number} end The end index.
 * @returns {Array} Returns the new array.
 */
function slice(array, start, end) {
  start || (start = 0);
  if (typeof end == 'undefined') {
    end = array ? array.length : 0;
  }
  var index = -1,
      length = end - start || 0,
      result = Array(length < 0 ? 0 : length);

  while (++index < length) {
    result[index] = array[start + index];
  }
  return result;
}

module.exports = slice;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js":[function(require,module,exports){
(function (global){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative');

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if functions can be decompiled by `Function#toString`
 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() { return this; });

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

module.exports = support;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var forIn = require('lodash.forin'),
    getArray = require('lodash._getarray'),
    isFunction = require('lodash.isfunction'),
    objectTypes = require('lodash._objecttypes'),
    releaseArray = require('lodash._releasearray');

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]',
    arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.isEqual`, without support for `thisArg` binding,
 * that allows partial "_.where" style comparisons.
 *
 * @private
 * @param {*} a The value to compare.
 * @param {*} b The other value to compare.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `a` objects.
 * @param {Array} [stackB=[]] Tracks traversed `b` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
  // used to indicate that when comparing objects, `a` has at least the properties of `b`
  if (callback) {
    var result = callback(a, b);
    if (typeof result != 'undefined') {
      return !!result;
    }
  }
  // exit early for identical values
  if (a === b) {
    // treat `+0` vs. `-0` as not equal
    return a !== 0 || (1 / a == 1 / b);
  }
  var type = typeof a,
      otherType = typeof b;

  // exit early for unlike primitive values
  if (a === a &&
      !(a && objectTypes[type]) &&
      !(b && objectTypes[otherType])) {
    return false;
  }
  // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
  // http://es5.github.io/#x15.3.4.4
  if (a == null || b == null) {
    return a === b;
  }
  // compare [[Class]] names
  var className = toString.call(a),
      otherClass = toString.call(b);

  if (className == argsClass) {
    className = objectClass;
  }
  if (otherClass == argsClass) {
    otherClass = objectClass;
  }
  if (className != otherClass) {
    return false;
  }
  switch (className) {
    case boolClass:
    case dateClass:
      // coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
      return +a == +b;

    case numberClass:
      // treat `NaN` vs. `NaN` as equal
      return (a != +a)
        ? b != +b
        // but treat `+0` vs. `-0` as not equal
        : (a == 0 ? (1 / a == 1 / b) : a == +b);

    case regexpClass:
    case stringClass:
      // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
      // treat string primitives and their corresponding object instances as equal
      return a == String(b);
  }
  var isArr = className == arrayClass;
  if (!isArr) {
    // unwrap any `lodash` wrapped values
    var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
        bWrapped = hasOwnProperty.call(b, '__wrapped__');

    if (aWrapped || bWrapped) {
      return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
    }
    // exit for functions and DOM nodes
    if (className != objectClass) {
      return false;
    }
    // in older versions of Opera, `arguments` objects have `Array` constructors
    var ctorA = a.constructor,
        ctorB = b.constructor;

    // non `Object` object instances with different constructors are not equal
    if (ctorA != ctorB &&
          !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
          ('constructor' in a && 'constructor' in b)
        ) {
      return false;
    }
  }
  // assume cyclic structures are equal
  // the algorithm for detecting cyclic structures is adapted from ES 5.1
  // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
  var initedStack = !stackA;
  stackA || (stackA = getArray());
  stackB || (stackB = getArray());

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == a) {
      return stackB[length] == b;
    }
  }
  var size = 0;
  result = true;

  // add `a` and `b` to the stack of traversed objects
  stackA.push(a);
  stackB.push(b);

  // recursively compare objects and arrays (susceptible to call stack limits)
  if (isArr) {
    // compare lengths to determine if a deep comparison is necessary
    length = a.length;
    size = b.length;
    result = size == length;

    if (result || isWhere) {
      // deep compare the contents, ignoring non-numeric properties
      while (size--) {
        var index = length,
            value = b[size];

        if (isWhere) {
          while (index--) {
            if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
              break;
            }
          }
        } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
          break;
        }
      }
    }
  }
  else {
    // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
    // which, in this case, is more costly
    forIn(b, function(value, key, b) {
      if (hasOwnProperty.call(b, key)) {
        // count the number of properties.
        size++;
        // deep compare each property value.
        return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
      }
    });

    if (result && !isWhere) {
      // ensure both objects have the same number of properties
      forIn(a, function(value, key, a) {
        if (hasOwnProperty.call(a, key)) {
          // `size` will be `-1` if `a` has more properties than `b`
          return (result = --size > -1);
        }
      });
    }
  }
  stackA.pop();
  stackB.pop();

  if (initedStack) {
    releaseArray(stackA);
    releaseArray(stackB);
  }
  return result;
}

module.exports = baseIsEqual;

},{"lodash._getarray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js","lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js","lodash._releasearray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js","lodash.forin":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/index.js","lodash.isfunction":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.isfunction/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayPool = require('lodash._arraypool');

/**
 * Gets an array from the array pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Array} The array from the pool.
 */
function getArray() {
  return arrayPool.pop() || [];
}

module.exports = getArray;

},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to pool arrays and objects used internally */
var arrayPool = [];

module.exports = arrayPool;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to determine if values are of the language type Object */
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};

module.exports = objectTypes;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayPool = require('lodash._arraypool'),
    maxPoolSize = require('lodash._maxpoolsize');

/**
 * Releases the given array back to the array pool.
 *
 * @private
 * @param {Array} [array] The array to release.
 */
function releaseArray(array) {
  array.length = 0;
  if (arrayPool.length < maxPoolSize) {
    arrayPool.push(array);
  }
}

module.exports = releaseArray;

},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js","lodash._maxpoolsize":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used as the max size of the `arrayPool` and `objectPool` */
var maxPoolSize = 40;

module.exports = maxPoolSize;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.isfunction/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('lodash._isnative'),
    isObject = require('lodash.isobject'),
    shimKeys = require('lodash._shimkeys');

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;

/**
 * Creates an array composed of the own enumerable property names of an object.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 * @example
 *
 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  if (!isObject(object)) {
    return [];
  }
  return nativeKeys(object);
};

module.exports = keys;

},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._isnative/index.js","lodash._shimkeys":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = require('lodash._objecttypes');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which produces an array of the
 * given object's own enumerable property names.
 *
 * @private
 * @type Function
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names.
 */
var shimKeys = function(object) {
  var index, iterable = object, result = [];
  if (!iterable) return result;
  if (!(objectTypes[typeof object])) return result;
    for (index in iterable) {
      if (hasOwnProperty.call(iterable, index)) {
        result.push(index);
      }
    }
  return result
};

module.exports = shimKeys;

},{"lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.property/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Creates a "_.pluck" style function, which returns the `key` value of a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {string} key The name of the property to retrieve.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var characters = [
 *   { 'name': 'fred',   'age': 40 },
 *   { 'name': 'barney', 'age': 36 }
 * ];
 *
 * var getName = _.property('name');
 *
 * _.map(characters, getName);
 * // => ['barney', 'fred']
 *
 * _.sortBy(characters, getName);
 * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
 */
function property(key) {
  return function(object) {
    return object[key];
  };
}

module.exports = property;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('lodash._basecreatecallback'),
    objectTypes = require('lodash._objecttypes');

/**
 * Iterates over own and inherited enumerable properties of an object,
 * executing the callback for each property. The callback is bound to `thisArg`
 * and invoked with three arguments; (value, key, object). Callbacks may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.move = function(x, y) {
 *   this.x += x;
 *   this.y += y;
 * };
 *
 * _.forIn(new Shape, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
 */
var forIn = function(collection, callback, thisArg) {
  var index, iterable = collection, result = iterable;
  if (!iterable) return result;
  if (!objectTypes[typeof iterable]) return result;
  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    for (index in iterable) {
      if (callback(iterable[index], index, collection) === false) return result;
    }
  return result
};

module.exports = forIn;

},{"lodash._basecreatecallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/index.js","lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js"][0].apply(exports,arguments)
},{"lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash.bind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js","lodash.identity":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js","lodash.support":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js"][0].apply(exports,arguments)
},{"lodash._createwrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js"][0].apply(exports,arguments)
},{"lodash._basebind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js","lodash._basecreatewrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isfunction":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js"][0].apply(exports,arguments)
},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js"][0].apply(exports,arguments)
},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectTypes = require('lodash._objecttypes');

/**
 * Checks if `value` is the language type of Object.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // check if the value is the ECMAScript language type of Object
  // http://es5.github.io/#x8
  // and avoid a V8 bug
  // http://code.google.com/p/v8/issues/detail?id=2291
  return !!(value && objectTypes[typeof value]);
}

module.exports = isObject;

},{"lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/index.js":[function(require,module,exports){
"use strict";
var baseUniq = require('lodash._baseuniq'),
    createCallback = require('lodash.createcallback');
function uniq(array, isSorted, callback, thisArg) {
  if (typeof isSorted != 'boolean' && isSorted != null) {
    thisArg = callback;
    callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
    isSorted = false;
  }
  if (callback != null) {
    callback = createCallback(callback, thisArg, 3);
  }
  return baseUniq(array, isSorted, callback);
}
module.exports = uniq;


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/index.js
},{"lodash._baseuniq":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/index.js","lodash.createcallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseIndexOf = require('lodash._baseindexof'),
    cacheIndexOf = require('lodash._cacheindexof'),
    createCache = require('lodash._createcache'),
    getArray = require('lodash._getarray'),
    largeArraySize = require('lodash._largearraysize'),
    releaseArray = require('lodash._releasearray'),
    releaseObject = require('lodash._releaseobject');

/**
 * The base implementation of `_.uniq` without support for callback shorthands
 * or `thisArg` binding.
 *
 * @private
 * @param {Array} array The array to process.
 * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
 * @param {Function} [callback] The function called per iteration.
 * @returns {Array} Returns a duplicate-value-free array.
 */
function baseUniq(array, isSorted, callback) {
  var index = -1,
      indexOf = baseIndexOf,
      length = array ? array.length : 0,
      result = [];

  var isLarge = !isSorted && length >= largeArraySize,
      seen = (callback || isLarge) ? getArray() : result;

  if (isLarge) {
    var cache = createCache(seen);
    indexOf = cacheIndexOf;
    seen = cache;
  }
  while (++index < length) {
    var value = array[index],
        computed = callback ? callback(value, index, array) : value;

    if (isSorted
          ? !index || seen[seen.length - 1] !== computed
          : indexOf(seen, computed) < 0
        ) {
      if (callback || isLarge) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  if (isLarge) {
    releaseArray(seen.array);
    releaseObject(seen);
  } else if (callback) {
    releaseArray(seen);
  }
  return result;
}

module.exports = baseUniq;

},{"lodash._baseindexof":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._baseindexof/index.js","lodash._cacheindexof":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._cacheindexof/index.js","lodash._createcache":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/index.js","lodash._getarray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._getarray/index.js","lodash._largearraysize":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._largearraysize/index.js","lodash._releasearray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/index.js","lodash._releaseobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._baseindexof/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * The base implementation of `_.indexOf` without support for binary searches
 * or `fromIndex` constraints.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value or `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  var index = (fromIndex || 0) - 1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._cacheindexof/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseIndexOf = require('lodash._baseindexof'),
    keyPrefix = require('lodash._keyprefix');

/**
 * An implementation of `_.contains` for cache objects that mimics the return
 * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache object to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var type = typeof value;
  cache = cache.cache;

  if (type == 'boolean' || value == null) {
    return cache[value] ? 0 : -1;
  }
  if (type != 'number' && type != 'string') {
    type = 'object';
  }
  var key = type == 'number' ? value : keyPrefix + value;
  cache = (cache = cache[type]) && cache[key];

  return type == 'object'
    ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1)
    : (cache ? 0 : -1);
}

module.exports = cacheIndexOf;

},{"lodash._baseindexof":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._baseindexof/index.js","lodash._keyprefix":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._cacheindexof/node_modules/lodash._keyprefix/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._cacheindexof/node_modules/lodash._keyprefix/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.2 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
var keyPrefix = '__1335248838000__';

module.exports = keyPrefix;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var cachePush = require('lodash._cachepush'),
    getObject = require('lodash._getobject'),
    releaseObject = require('lodash._releaseobject');

/**
 * Creates a cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [array=[]] The array to search.
 * @returns {null|Object} Returns the cache object or `null` if caching should not be used.
 */
function createCache(array) {
  var index = -1,
      length = array.length,
      first = array[0],
      mid = array[(length / 2) | 0],
      last = array[length - 1];

  if (first && typeof first == 'object' &&
      mid && typeof mid == 'object' && last && typeof last == 'object') {
    return false;
  }
  var cache = getObject();
  cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

  var result = getObject();
  result.array = array;
  result.cache = cache;
  result.push = cachePush;

  while (++index < length) {
    result.push(array[index]);
  }
  return result;
}

module.exports = createCache;

},{"lodash._cachepush":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._cachepush/index.js","lodash._getobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._getobject/index.js","lodash._releaseobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._cachepush/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keyPrefix = require('lodash._keyprefix');

/**
 * Adds a given value to the corresponding cache object.
 *
 * @private
 * @param {*} value The value to add to the cache.
 */
function cachePush(value) {
  var cache = this.cache,
      type = typeof value;

  if (type == 'boolean' || value == null) {
    cache[value] = true;
  } else {
    if (type != 'number' && type != 'string') {
      type = 'object';
    }
    var key = type == 'number' ? value : keyPrefix + value,
        typeCache = cache[type] || (cache[type] = {});

    if (type == 'object') {
      (typeCache[key] || (typeCache[key] = [])).push(value);
    } else {
      typeCache[key] = true;
    }
  }
}

module.exports = cachePush;

},{"lodash._keyprefix":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._cachepush/node_modules/lodash._keyprefix/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._cachepush/node_modules/lodash._keyprefix/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._cacheindexof/node_modules/lodash._keyprefix/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._getobject/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectPool = require('lodash._objectpool');

/**
 * Gets an object from the object pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Object} The object from the pool.
 */
function getObject() {
  return objectPool.pop() || {
    'array': null,
    'cache': null,
    'criteria': null,
    'false': false,
    'index': 0,
    'null': false,
    'number': null,
    'object': null,
    'push': null,
    'string': null,
    'true': false,
    'undefined': false,
    'value': null
  };
}

module.exports = getObject;

},{"lodash._objectpool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._getobject/node_modules/lodash._objectpool/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._getobject/node_modules/lodash._objectpool/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to pool arrays and objects used internally */
var objectPool = [];

module.exports = objectPool;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._getarray/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js"][0].apply(exports,arguments)
},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._largearraysize/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used as the size when optimizations are enabled for large arrays */
var largeArraySize = 75;

module.exports = largeArraySize;

},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js"][0].apply(exports,arguments)
},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js","lodash._maxpoolsize":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/index.js":[function(require,module,exports){
/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="npm" -o ./npm/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var maxPoolSize = require('lodash._maxpoolsize'),
    objectPool = require('lodash._objectpool');

/**
 * Releases the given object back to the object pool.
 *
 * @private
 * @param {Object} [object] The object to release.
 */
function releaseObject(object) {
  var cache = object.cache;
  if (cache) {
    releaseObject(cache);
  }
  object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
  if (objectPool.length < maxPoolSize) {
    objectPool.push(object);
  }
}

module.exports = releaseObject;

},{"lodash._maxpoolsize":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/node_modules/lodash._maxpoolsize/index.js","lodash._objectpool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/node_modules/lodash._objectpool/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/node_modules/lodash._maxpoolsize/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._releaseobject/node_modules/lodash._objectpool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash._baseuniq/node_modules/lodash._createcache/node_modules/lodash._getobject/node_modules/lodash._objectpool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/index.js"][0].apply(exports,arguments)
},{"lodash._basecreatecallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js","lodash._baseisequal":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js","lodash.keys":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/index.js","lodash.property":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.property/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js"][0].apply(exports,arguments)
},{"lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash.bind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js","lodash.identity":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js","lodash.support":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/index.js"][0].apply(exports,arguments)
},{"lodash._createwrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/index.js"][0].apply(exports,arguments)
},{"lodash._basebind":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js","lodash._basecreatewrapper":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isfunction":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/index.js"][0].apply(exports,arguments)
},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/index.js"][0].apply(exports,arguments)
},{"lodash._basecreate":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js","lodash._setbinddata":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/index.js","lodash._slice":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basebind/node_modules/lodash._basecreate/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js","lodash.noop":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash._basecreatewrapper/node_modules/lodash._basecreate/node_modules/lodash.noop/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash._setbinddata/node_modules/lodash.noop/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._slice/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.identity/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.support/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/index.js"][0].apply(exports,arguments)
},{"lodash._getarray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js","lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js","lodash._releasearray":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js","lodash.forin":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.forin/index.js","lodash.isfunction":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.isfunction/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/index.js"][0].apply(exports,arguments)
},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/index.js"][0].apply(exports,arguments)
},{"lodash._arraypool":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js","lodash._maxpoolsize":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._arraypool/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._getarray/node_modules/lodash._arraypool/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._releasearray/node_modules/lodash._maxpoolsize/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.forin/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.forin/index.js"][0].apply(exports,arguments)
},{"lodash._basecreatecallback":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/index.js","lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash.isfunction/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._basecreatecallback/node_modules/lodash.bind/node_modules/lodash._createwrapper/node_modules/lodash.isfunction/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.isobject/index.js"][0].apply(exports,arguments)
},{"lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/index.js"][0].apply(exports,arguments)
},{"lodash._isnative":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._isnative/index.js","lodash._shimkeys":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/index.js","lodash.isobject":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.isobject/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._isnative/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash._baseflatten/node_modules/lodash.isarray/node_modules/lodash._isnative/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/index.js"][0].apply(exports,arguments)
},{"lodash._objecttypes":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/node_modules/lodash._objecttypes/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.keys/node_modules/lodash._shimkeys/node_modules/lodash._objecttypes/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash._baseisequal/node_modules/lodash._objecttypes/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/node_modules/lodash.createcallback/node_modules/lodash.property/index.js":[function(require,module,exports){
arguments[4]["/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/node_modules/lodash.createcallback/node_modules/lodash.property/index.js"][0].apply(exports,arguments)
},{}],"/home/eryk/online-css-autoprefixer/node_modules/map-values/index.js":[function(require,module,exports){
"use strict";
"use strict";
var hasOwnProperty = Object.prototype.hasOwnProperty;
module.exports = function(obj, map) {
  var result = {};
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      result[key] = map(obj[key], key, obj);
    }
  }
  return result;
};


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/map-values/index.js
},{}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/index.js":[function(require,module,exports){
"use strict";
"use strict";
var window = require("global/window");
var once = require("once");
var parseHeaders = require("parse-headers");
var XHR = window.XMLHttpRequest || noop;
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest;
module.exports = createXHR;
function createXHR(options, callback) {
  function readystatechange() {
    if (xhr.readyState === 4) {
      loadFunc();
    }
  }
  function getBody() {
    var body = undefined;
    if (xhr.response) {
      body = xhr.response;
    } else if (xhr.responseType === "text" || !xhr.responseType) {
      body = xhr.responseText || xhr.responseXML;
    }
    if (isJson) {
      try {
        body = JSON.parse(body);
      } catch (e) {}
    }
    return body;
  }
  var failureResponse = {
    body: undefined,
    headers: {},
    statusCode: 0,
    method: method,
    url: uri,
    rawRequest: xhr
  };
  function errorFunc(evt) {
    clearTimeout(timeoutTimer);
    if (!evt instanceof Error) {
      evt = new Error("" + evt);
    }
    evt.statusCode = 0;
    callback(evt, failureResponse);
  }
  function loadFunc() {
    clearTimeout(timeoutTimer);
    var status = (xhr.status === 1223 ? 204 : xhr.status);
    var response = failureResponse;
    var err = null;
    if (status !== 0) {
      response = {
        body: getBody(),
        statusCode: status,
        method: method,
        headers: {},
        url: uri,
        rawRequest: xhr
      };
      if (xhr.getAllResponseHeaders) {
        response.headers = parseHeaders(xhr.getAllResponseHeaders());
      }
    } else {
      err = new Error("Internal XMLHttpRequest Error");
    }
    callback(err, response, response.body);
  }
  if (typeof options === "string") {
    options = {uri: options};
  }
  options = options || {};
  callback = once(callback);
  var xhr = options.xhr || null;
  if (!xhr) {
    if (options.cors || options.useXDR) {
      xhr = new XDR();
    } else {
      xhr = new XHR();
    }
  }
  var key;
  var uri = xhr.url = options.uri || options.url;
  var method = xhr.method = options.method || "GET";
  var body = options.body || options.data;
  var headers = xhr.headers = options.headers || {};
  var sync = !!options.sync;
  var isJson = false;
  var timeoutTimer;
  if ("json" in options) {
    isJson = true;
    headers["Accept"] || (headers["Accept"] = "application/json");
    if (method !== "GET" && method !== "HEAD") {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(options.json);
    }
  }
  xhr.onreadystatechange = readystatechange;
  xhr.onload = loadFunc;
  xhr.onerror = errorFunc;
  xhr.onprogress = function() {};
  xhr.ontimeout = errorFunc;
  xhr.open(method, uri, !sync);
  xhr.withCredentials = !!options.withCredentials;
  if (!sync && options.timeout > 0) {
    timeoutTimer = setTimeout(function() {
      xhr.abort("timeout");
    }, options.timeout + 2);
  }
  if (xhr.setRequestHeader) {
    for (key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  } else if (options.headers) {
    throw new Error("Headers cannot be set on an XDomainRequest object");
  }
  if ("responseType" in options) {
    xhr.responseType = options.responseType;
  }
  if ("beforeSend" in options && typeof options.beforeSend === "function") {
    options.beforeSend(xhr);
  }
  xhr.send(body);
  return xhr;
}
function noop() {}


//# sourceURL=/home/eryk/online-css-autoprefixer/node_modules/xhr/index.js
},{"global/window":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/global/window.js","once":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/once/once.js","parse-headers":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/parse-headers.js"}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/global/window.js":[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/once/once.js":[function(require,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/for-each/index.js":[function(require,module,exports){
var isFunction = require('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/for-each/node_modules/is-function/index.js"}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/for-each/node_modules/is-function/index.js":[function(require,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/trim/index.js":[function(require,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/parse-headers.js":[function(require,module,exports){
var trim = require('trim')
  , forEach = require('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/for-each/index.js","trim":"/home/eryk/online-css-autoprefixer/node_modules/xhr/node_modules/parse-headers/node_modules/trim/index.js"}],"/home/eryk/online-css-autoprefixer/shims/autoprefixer.js":[function(require,module,exports){
"use strict";
module.exports = window.autoprefixer;


//# sourceURL=/home/eryk/online-css-autoprefixer/shims/autoprefixer.js
},{}],"/home/eryk/online-css-autoprefixer/shims/rx.js":[function(require,module,exports){
"use strict";
module.exports = window.Rx;


//# sourceURL=/home/eryk/online-css-autoprefixer/shims/rx.js
},{}],"/home/eryk/online-css-autoprefixer/src/js/intents/input.intent.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var InputIntent = Cycle.createIntent(['inputText'], function(view) {
  return {sourceChange: view.inputText.map((function(ev) {
      return ev.target.value;
    }))};
});
var $__default = InputIntent;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/intents/input.intent.js
},{"cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/intents/settings.intent.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var SettingsIntent = Cycle.createIntent(['settingsChange'], function(view) {
  return {settingsChange: view.settingsChange.map((function(ev) {
      return ev.target.value;
    }))};
});
var $__default = SettingsIntent;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/intents/settings.intent.js
},{"cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/models/input.model.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__,
    $___46__46__47_services_47_storage__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var storage = ($___46__46__47_services_47_storage__ = require("../services/storage"), $___46__46__47_services_47_storage__ && $___46__46__47_services_47_storage__.__esModule && $___46__46__47_services_47_storage__ || {default: $___46__46__47_services_47_storage__}).default;
var InputModel = Cycle.createModel(['sourceChange'], function(intent) {
  return {source: intent.sourceChange.startWith(storage.read('input')).map(function(input) {
      storage.save('input', input);
      return input;
    })};
});
var $__default = InputModel;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/models/input.model.js
},{"../services/storage":"/home/eryk/online-css-autoprefixer/src/js/services/storage.js","cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/models/output.model.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__,
    $__autoprefixer__,
    $___46__46__47_services_47_storage__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var autoprefixer = ($__autoprefixer__ = require('./../../../shims/autoprefixer.js'), $__autoprefixer__ && $__autoprefixer__.__esModule && $__autoprefixer__ || {default: $__autoprefixer__}).default;
var storage = ($___46__46__47_services_47_storage__ = require("../services/storage"), $___46__46__47_services_47_storage__ && $___46__46__47_services_47_storage__.__esModule && $___46__46__47_services_47_storage__ || {default: $___46__46__47_services_47_storage__}).default;
var processor = autoprefixer({
  browsers: ['> 1%', 'last 2 version'],
  cascade: true
});
var OutputModel = Cycle.createModel(['sourceChange'], function(intent) {
  return {prefixed: intent.sourceChange.startWith(storage.read('input')).map((function(source) {
      return processor.process(source, {safe: true}).css;
    }))};
});
var $__default = OutputModel;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/models/output.model.js
},{"../services/storage":"/home/eryk/online-css-autoprefixer/src/js/services/storage.js","./../../../shims/autoprefixer.js":"/home/eryk/online-css-autoprefixer/shims/autoprefixer.js","cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/models/settings.model.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__,
    $__rx__,
    $___46__46__47_services_47_get_45_json__,
    $___46__46__47_services_47_storage__,
    $___46__46__47_services_47_settings_45_parser__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var Rx = ($__rx__ = require('./../../../shims/rx.js'), $__rx__ && $__rx__.__esModule && $__rx__ || {default: $__rx__}).default;
var getJson = ($___46__46__47_services_47_get_45_json__ = require("../services/get-json"), $___46__46__47_services_47_get_45_json__ && $___46__46__47_services_47_get_45_json__.__esModule && $___46__46__47_services_47_get_45_json__ || {default: $___46__46__47_services_47_get_45_json__}).default;
var storage = ($___46__46__47_services_47_storage__ = require("../services/storage"), $___46__46__47_services_47_storage__ && $___46__46__47_services_47_storage__.__esModule && $___46__46__47_services_47_storage__ || {default: $___46__46__47_services_47_storage__}).default;
var SettingsParser = ($___46__46__47_services_47_settings_45_parser__ = require("../services/settings-parser"), $___46__46__47_services_47_settings_45_parser__ && $___46__46__47_services_47_settings_45_parser__.__esModule && $___46__46__47_services_47_settings_45_parser__ || {default: $___46__46__47_services_47_settings_45_parser__}).default;
var SettingsModel = Cycle.createModel(['settingsChange'], function(intent) {
  var settingsParser;
  var canIUseData = getJson('https://cdn.rawgit.com/Fyrd/caniuse/master/data.json').then(function(data) {
    settingsParser = new SettingsParser(data);
  });
  return {settings: intent.settingsChange.skipUntil(canIUseData).merge(Rx.Observable.fromPromise(canIUseData.then(function() {
      return settingsParser.parse(storage.read('settings'));
    }))).map(function(settings) {
      storage.save('settings', settingsParser.stringify(settings));
      return settings;
    })};
});
var $__default = SettingsModel;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/models/settings.model.js
},{"../services/get-json":"/home/eryk/online-css-autoprefixer/src/js/services/get-json.js","../services/settings-parser":"/home/eryk/online-css-autoprefixer/src/js/services/settings-parser.js","../services/storage":"/home/eryk/online-css-autoprefixer/src/js/services/storage.js","./../../../shims/rx.js":"/home/eryk/online-css-autoprefixer/shims/rx.js","cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/services/caniuse-data-normalizer.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__map_45_values__,
    $__lodash_46_pick__;
var mapValues = ($__map_45_values__ = require("map-values"), $__map_45_values__ && $__map_45_values__.__esModule && $__map_45_values__ || {default: $__map_45_values__}).default;
var pick = ($__lodash_46_pick__ = require("lodash.pick"), $__lodash_46_pick__ && $__lodash_46_pick__.__esModule && $__lodash_46_pick__ || {default: $__lodash_46_pick__}).default;
var names = ['firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'ie', 'bb', 'android'];
var major = ['firefox', 'chrome', 'safari', 'ios_saf', 'opera', 'android', 'ie', 'ie_mob'];
function normalizeVersions(array) {
  return array.reverse().filter((function(i) {
    return i;
  }));
}
function expandVersionIntervals(array) {
  var result = [];
  array.forEach(function(interval) {
    var splited = interval.split('-').sort().reverse();
    var sub = splited.map(function(part) {
      return [part, interval, splited.length];
    });
    result = result.concat(sub);
  });
  return result;
}
function normalizeBrowser(data, name) {
  var future = normalizeVersions(data.versions.slice(-3, -1));
  var versions = expandVersionIntervals(normalizeVersions(data.versions.slice(0, -4)));
  return {
    minor: major.indexOf(name) === -1,
    future: !!future.length,
    versions: versions.map((function(version) {
      return version[0];
    })),
    popularity: versions.map((function(version) {
      return data['usage_global'][version[1]] / version[2];
    }))
  };
}
function normalize(data) {
  return {
    updated: data.updated,
    browsers: mapValues(pick(data.agents, names), normalizeBrowser)
  };
}
var $__default = {normalize: normalize};


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/services/caniuse-data-normalizer.js
},{"lodash.pick":"/home/eryk/online-css-autoprefixer/node_modules/lodash.pick/index.js","map-values":"/home/eryk/online-css-autoprefixer/node_modules/map-values/index.js"}],"/home/eryk/online-css-autoprefixer/src/js/services/get-json.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__xhr__;
var xhr = ($__xhr__ = require("xhr"), $__xhr__ && $__xhr__.__esModule && $__xhr__ || {default: $__xhr__}).default;
function getJson(url) {
  return new Promise(function(resolve, reject) {
    xhr({
      method: 'GET',
      uri: url
    }, function(err, resp, body) {
      if (!err) {
        try {
          body = JSON.parse(body);
        } catch (e) {
          err = e;
        }
      }
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}
var $__default = getJson;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/services/get-json.js
},{"xhr":"/home/eryk/online-css-autoprefixer/node_modules/xhr/index.js"}],"/home/eryk/online-css-autoprefixer/src/js/services/settings-parser.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__lodash_46_uniq__,
    $__caniuse_45_data_45_normalizer__;
var uniq = ($__lodash_46_uniq__ = require("lodash.uniq"), $__lodash_46_uniq__ && $__lodash_46_uniq__.__esModule && $__lodash_46_uniq__ || {default: $__lodash_46_uniq__}).default;
var caniuseDataNormalizer = ($__caniuse_45_data_45_normalizer__ = require("./caniuse-data-normalizer"), $__caniuse_45_data_45_normalizer__ && $__caniuse_45_data_45_normalizer__.__esModule && $__caniuse_45_data_45_normalizer__ || {default: $__caniuse_45_data_45_normalizer__}).default;
var SettingsParser = function SettingsParser(data) {
  this._data = caniuseDataNormalizer.normalize(data);
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
        return this._browsers((function(data) {
          return data.minor ? [] : data.versions.slice(0, versions);
        }));
      }
    },
    lastByBrowser: {
      regexp: /^last (\d+) (\w+) versions?$/i,
      select: function(versions, browser) {
        var data = this._byName(browser);
        return data.versions.slice(0, versions).map((function(browserVersion) {
          return [data.name, browserVersion].join(' ');
        }));
      }
    },
    globalStatistics: {
      regexp: /^> (\d+(\.\d+)?)%$/,
      select: function(popularity) {
        return this._browsers((function(data) {
          return data.minor ? [] : data.versions.filter((function(version, i) {
            return data.popularity[i] > popularity;
          }));
        }));
      }
    },
    newerThan: {
      regexp: /^(\w+) (>=?)\s*([\d\.]+)/,
      select: function(browser, sign, version) {
        var data = this._byName(browser);
        var version = parseFloat(version);
        var filter;
        if (sign === '>') {
          filter = ((function(browserVersion) {
            return browserVersion > version;
          }));
        } else if (sign === '>=') {
          filter = ((function(browserVersion) {
            return browserVersion >= version;
          }));
        }
        return data.versions.filter(filter).map((function(browserVersion) {
          return [data.name, browserVersion].join(' ');
        }));
      }
    },
    olderThan: {
      regexp: /^(\w+) (<=?)\s*([\d\.]+)/,
      select: function(browser, sign, version) {
        var data = this._byName(browser);
        var version = parseFloat(version);
        var filter;
        if (sign === '<') {
          filter = ((function(browserVersion) {
            return browserVersion < version;
          }));
        } else if (sign === '<=') {
          filter = ((function(browserVersion) {
            return browserVersion <= version;
          }));
        }
        return data.versions.filter(filter).map((function(browserVersion) {
          return [data.name, browserVersion].join(' ');
        }));
      }
    },
    esr: {
      regexp: /^(firefox|ff|fx) esr$/i,
      select: function() {
        return ['firefox 31'];
      }
    },
    direct: {
      regexp: /^(\w+) ([\d\.]+)$/,
      select: function(browser, version) {
        var data = this._byName(browser);
        var version = parseFloat(version);
        var last = data.future ? data.future[0] : data.versions[0];
        var first = data.versions[data.versions.length - 1];
        if (version > last) {
          version = last;
        } else if (version < first) {
          version = first;
        }
        return [[data.name, version].join(' ')];
      }
    }
  };
};
($traceurRuntime.createClass)(SettingsParser, {
  parse: function(requirements) {
    requirements = requirements.split(',');
    var selected = [];
    requirements.forEach(function(requirement) {
      Object.keys(this._requirements).forEach(function(reqName) {
        var req = this._requirements[reqName];
        var match = requirement.match(req.regexp);
        if (match) {
          selected = selected.concat(req.select.apply(this, match.slice(1, -1)));
          return;
        }
      }, this);
    }, this);
    return uniq(selected);
  },
  stringify: function() {
    return '> 1%, last 2 versions, Firefox ESR, Opera 12.1';
  },
  _browsers: function(criteria) {
    var selected = [];
    Object.keys(this._data.browsers).forEach(function(browserName) {
      var browserData = this._data.browsers[browserName];
      selected = selected.concat(criteria(browserData).map((function(browserVersion) {
        return [browserName, browserVersion].join(' ');
      })));
    }, this);
    return selected;
  },
  _byName: function(name) {
    name = name.toLowerCase();
    name = this._aliases[name] || name;
    var data = this._data.browsers[name];
    data.name = name;
    return data;
  }
}, {});
var $__default = SettingsParser;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/services/settings-parser.js
},{"./caniuse-data-normalizer":"/home/eryk/online-css-autoprefixer/src/js/services/caniuse-data-normalizer.js","lodash.uniq":"/home/eryk/online-css-autoprefixer/node_modules/lodash.uniq/index.js"}],"/home/eryk/online-css-autoprefixer/src/js/services/storage.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
function read(key) {
  var value = localStorage.getItem(key);
  if (value === null || value === undefined) {
    value = '';
  } else {
    try {
      value = JSON.parse(value);
    } catch (err) {
      value = '';
    }
  }
  return value;
}
function save(key, value) {
  if (value === null || value === undefined) {
    value = '';
  } else {
    try {
      value = JSON.stringify(value);
    } catch (err) {
      value = '';
    }
  }
  localStorage.setItem(key, value);
  return true;
}
var $__default = {
  read: read,
  save: save
};


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/services/storage.js
},{}],"/home/eryk/online-css-autoprefixer/src/js/views/input.view.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var h = Cycle.h;
var InputView = Cycle.createView(['source'], function(model) {
  return {
    events: ['inputText'],
    vtree$: model.source.map((function(source) {
      return h('div.autoprefixer__view.autoprefixer__view--input.autoprefixer__input', {}, [h('label.autoprefixer__input__label', {}, 'Your CSS:'), h('textarea.autoprefixer__input__content', {
        'ev-input': 'inputText',
        'value': source
      })]);
    }))
  };
});
var $__default = InputView;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/views/input.view.js
},{"cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/views/output.view.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var h = Cycle.h;
var OutputView = Cycle.createView(['prefixed'], function(model) {
  return {
    events: [],
    vtree$: model.prefixed.map((function(prefixed) {
      return h('div.autoprefixer__view.autoprefixer__view--output.autoprefixer__output', {}, [h('label.autoprefixer__output__label', {}, 'Prefixed CSS:'), h('output.autoprefixer__output__content', {'value': prefixed})]);
    }))
  };
});
var $__default = OutputView;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/views/output.view.js
},{"cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}],"/home/eryk/online-css-autoprefixer/src/js/views/settings.view.js":[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__cyclejs__;
var Cycle = ($__cyclejs__ = require("cyclejs"), $__cyclejs__ && $__cyclejs__.__esModule && $__cyclejs__ || {default: $__cyclejs__}).default;
var h = Cycle.h;
var SettingsView = Cycle.createView(['settings'], function(model) {
  return {
    events: ['settingChange'],
    vtree$: model.settings.map((function(settings) {
      return h('div.autoprefixer__view.autoprefixer__view--settings.autoprefixer__settings', {}, [h('span', {}, JSON.stringify(settings))]);
    }))
  };
});
var $__default = SettingsView;


//# sourceURL=/home/eryk/online-css-autoprefixer/src/js/views/settings.view.js
},{"cyclejs":"/home/eryk/online-css-autoprefixer/node_modules/cyclejs/src/cycle.js"}]},{},["/home/eryk/online-css-autoprefixer/node_modules/es6ify/node_modules/traceur/bin/traceur-runtime.js","./src/js/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NyYy9qcy9hcHAuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9hZGQtZXZlbnQuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9kb20tZGVsZWdhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvY3VpZC9kaXN0L2Jyb3dzZXItY3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9kYXRhLXNldC9jcmVhdGUtaGFzaC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9kYXRhLXNldC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9kYXRhLXNldC9ub2RlX21vZHVsZXMvd2Vha21hcC1zaGltL2NyZWF0ZS1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9kYXRhLXNldC9ub2RlX21vZHVsZXMvd2Vha21hcC1zaGltL2hpZGRlbi1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9ub2RlX21vZHVsZXMvaW5kaXZpZHVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL2RvbS1kZWxlZ2F0b3Ivbm9kZV9tb2R1bGVzL3dlYWttYXAtc2hpbS9jcmVhdGUtc3RvcmUuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvZG9tLWRlbGVnYXRvci9wcm94eS1ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy9kb20tZGVsZWdhdG9yL3JlbW92ZS1ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL2guanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vaW5kZXguanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL2Vycm9yL25vZGVfbW9kdWxlcy9jYW1lbGl6ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9ub2RlX21vZHVsZXMvZXJyb3Ivbm9kZV9tb2R1bGVzL3N0cmluZy10ZW1wbGF0ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9ub2RlX21vZHVsZXMvZXJyb3Ivbm9kZV9tb2R1bGVzL3h0ZW5kL211dGFibGUuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL2Vycm9yL3R5cGVkLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL25vZGVfbW9kdWxlcy9pcy1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vbm9kZV9tb2R1bGVzL3gtaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vcGF0Y2guanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9hcHBseS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vY3JlYXRlLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9kb20taW5kZXguanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9wYXRjaC1vcC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92ZG9tL3BhdGNoLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vdXBkYXRlLXdpZGdldC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92aXJ0dWFsLWh5cGVyc2NyaXB0L2hvb2tzL2RhdGEtc2V0LWhvb2suanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmlydHVhbC1oeXBlcnNjcmlwdC9ob29rcy9ldi1ob29rLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3ZpcnR1YWwtaHlwZXJzY3JpcHQvaG9va3Mvc29mdC1zZXQtaG9vay5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92aXJ0dWFsLWh5cGVyc2NyaXB0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3ZpcnR1YWwtaHlwZXJzY3JpcHQvcGFyc2UtdGFnLmpzIiwibm9kZV9tb2R1bGVzL2N5Y2xlanMvbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL2hhbmRsZS10aHVuay5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy10aHVuay5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy12aG9vay5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy12bm9kZS5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy12dGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy13aWRnZXQuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdmVyc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92bm9kZS5qcyIsIm5vZGVfbW9kdWxlcy9jeWNsZWpzL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92cGF0Y2guanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdnRleHQuanMiLCJub2RlX21vZHVsZXMvY3ljbGVqcy9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvbm9kZV9tb2R1bGVzL2N5Y2xlanMvc3JjL2NyZWF0ZS1pbnRlbnQuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy9jeWNsZWpzL3NyYy9jcmVhdGUtbW9kZWwuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy9jeWNsZWpzL3NyYy9jcmVhdGUtdmlldy5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvbm9kZV9tb2R1bGVzL2N5Y2xlanMvc3JjL2N5Y2xlLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9ub2RlX21vZHVsZXMvY3ljbGVqcy9zcmMvZGF0YS1mbG93LW5vZGUuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy9jeWNsZWpzL3NyYy9kYXRhLWZsb3ctc2luay5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvbm9kZV9tb2R1bGVzL2N5Y2xlanMvc3JjL2RhdGEtZmxvdy1zb3VyY2UuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy9jeWNsZWpzL3NyYy9lcnJvcnMuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy9jeWNsZWpzL3NyYy9wcm9wZXJ0eS1ob29rLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9ub2RlX21vZHVsZXMvY3ljbGVqcy9zcmMvcmVuZGVyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2VzNmlmeS9ub2RlX21vZHVsZXMvdHJhY2V1ci9iaW4vdHJhY2V1ci1ydW50aW1lLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9ub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWZsYXR0ZW4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWZsYXR0ZW4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2FyZ3VtZW50cy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlZmxhdHRlbi9ub2RlX21vZHVsZXMvbG9kYXNoLmlzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWZsYXR0ZW4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2FycmF5L25vZGVfbW9kdWxlcy9sb2Rhc2guX2lzbmF0aXZlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY3JlYXRlY2FsbGJhY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fc2V0YmluZGRhdGEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fc2V0YmluZGRhdGEvbm9kZV9tb2R1bGVzL2xvZGFzaC5ub29wL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guYmluZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmJpbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC5fY3JlYXRld3JhcHBlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmJpbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC5fY3JlYXRld3JhcHBlci9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlYmluZC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmJpbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC5fY3JlYXRld3JhcHBlci9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlYmluZC9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY3JlYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guYmluZC9ub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGV3cmFwcGVyL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGV3cmFwcGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guYmluZC9ub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGV3cmFwcGVyL25vZGVfbW9kdWxlcy9sb2Rhc2guaXNmdW5jdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmJpbmQvbm9kZV9tb2R1bGVzL2xvZGFzaC5fc2xpY2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5pZGVudGl0eS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLnN1cHBvcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlaXNlcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gucGljay9ub2RlX21vZHVsZXMvbG9kYXNoLmNyZWF0ZWNhbGxiYWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2Vpc2VxdWFsL25vZGVfbW9kdWxlcy9sb2Rhc2guX2dldGFycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWlzZXF1YWwvbm9kZV9tb2R1bGVzL2xvZGFzaC5fZ2V0YXJyYXkvbm9kZV9tb2R1bGVzL2xvZGFzaC5fYXJyYXlwb29sL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guY3JlYXRlY2FsbGJhY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZWlzZXF1YWwvbm9kZV9tb2R1bGVzL2xvZGFzaC5fb2JqZWN0dHlwZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlaXNlcXVhbC9ub2RlX21vZHVsZXMvbG9kYXNoLl9yZWxlYXNlYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlaXNlcXVhbC9ub2RlX21vZHVsZXMvbG9kYXNoLl9yZWxlYXNlYXJyYXkvbm9kZV9tb2R1bGVzL2xvZGFzaC5fbWF4cG9vbHNpemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmtleXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLmtleXMvbm9kZV9tb2R1bGVzL2xvZGFzaC5fc2hpbWtleXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5jcmVhdGVjYWxsYmFjay9ub2RlX21vZHVsZXMvbG9kYXNoLnByb3BlcnR5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5waWNrL25vZGVfbW9kdWxlcy9sb2Rhc2guZm9yaW4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnBpY2svbm9kZV9tb2R1bGVzL2xvZGFzaC5pc29iamVjdC9pbmRleC5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvbm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2V1bmlxL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2V1bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2VpbmRleG9mL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2V1bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2NhY2hlaW5kZXhvZi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gudW5pcS9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNldW5pcS9ub2RlX21vZHVsZXMvbG9kYXNoLl9jYWNoZWluZGV4b2Yvbm9kZV9tb2R1bGVzL2xvZGFzaC5fa2V5cHJlZml4L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2V1bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2NyZWF0ZWNhY2hlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC51bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2V1bmlxL25vZGVfbW9kdWxlcy9sb2Rhc2guX2NyZWF0ZWNhY2hlL25vZGVfbW9kdWxlcy9sb2Rhc2guX2NhY2hlcHVzaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gudW5pcS9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNldW5pcS9ub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGVjYWNoZS9ub2RlX21vZHVsZXMvbG9kYXNoLl9nZXRvYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZXVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fY3JlYXRlY2FjaGUvbm9kZV9tb2R1bGVzL2xvZGFzaC5fZ2V0b2JqZWN0L25vZGVfbW9kdWxlcy9sb2Rhc2guX29iamVjdHBvb2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZXVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fbGFyZ2VhcnJheXNpemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLnVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fYmFzZXVuaXEvbm9kZV9tb2R1bGVzL2xvZGFzaC5fcmVsZWFzZW9iamVjdC9pbmRleC5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvbm9kZV9tb2R1bGVzL21hcC12YWx1ZXMvaW5kZXguanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL25vZGVfbW9kdWxlcy94aHIvaW5kZXguanMiLCJub2RlX21vZHVsZXMveGhyL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL3hoci9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwibm9kZV9tb2R1bGVzL3hoci9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9ub2RlX21vZHVsZXMvZm9yLWVhY2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMveGhyL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL25vZGVfbW9kdWxlcy9mb3ItZWFjaC9ub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMveGhyL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL25vZGVfbW9kdWxlcy90cmltL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3hoci9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9zaGltcy9hdXRvcHJlZml4ZXIuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NoaW1zL3J4LmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9zcmMvanMvaW50ZW50cy9pbnB1dC5pbnRlbnQuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NyYy9qcy9pbnRlbnRzL3NldHRpbmdzLmludGVudC5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvc3JjL2pzL21vZGVscy9pbnB1dC5tb2RlbC5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvc3JjL2pzL21vZGVscy9vdXRwdXQubW9kZWwuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NyYy9qcy9tb2RlbHMvc2V0dGluZ3MubW9kZWwuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NyYy9qcy9zZXJ2aWNlcy9jYW5pdXNlLWRhdGEtbm9ybWFsaXplci5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvc3JjL2pzL3NlcnZpY2VzL2dldC1qc29uLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9zcmMvanMvc2VydmljZXMvc2V0dGluZ3MtcGFyc2VyLmpzIiwiL2hvbWUvZXJ5ay9vbmxpbmUtY3NzLWF1dG9wcmVmaXhlci9zcmMvanMvc2VydmljZXMvc3RvcmFnZS5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvc3JjL2pzL3ZpZXdzL2lucHV0LnZpZXcuanMiLCIvaG9tZS9lcnlrL29ubGluZS1jc3MtYXV0b3ByZWZpeGVyL3NyYy9qcy92aWV3cy9vdXRwdXQudmlldy5qcyIsIi9ob21lL2VyeWsvb25saW5lLWNzcy1hdXRvcHJlZml4ZXIvc3JjL2pzL3ZpZXdzL3NldHRpbmdzLnZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7OztFQUFPLE1BQUksRUFBWCxFQUFDLGNBQW9CLENBQUEsT0FBTSxBQUFDLFdBQWtCLENBQ3RDLENBQUEsZUFBcUIsd0JBQTJCLENBQUEsZUFBcUIsR0FBSyxFQUFDLE9BQU0sY0FBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFQUN2RyxVQUFRLEVBRmYsRUFBQyw2QkFBb0IsQ0FBQSxPQUFNLEFBQUMsc0JBQWtCLENBQ3RDLENBQUEsOEJBQXFCLHVDQUEyQixDQUFBLDhCQUFxQixHQUFLLEVBQUMsT0FBTSw2QkFBbUIsQ0FEOUQsQUFDK0QsQ0FBQztFQUV2RyxZQUFVLEVBSGpCLEVBQUMsaUNBQW9CLENBQUEsT0FBTSxBQUFDLDBCQUFrQixDQUN0QyxDQUFBLGtDQUFxQiwyQ0FBMkIsQ0FBQSxrQ0FBcUIsR0FBSyxFQUFDLE9BQU0saUNBQW1CLENBRDlELEFBQytELENBQUM7RUFHdkcsV0FBUyxFQUpoQixFQUFDLCtCQUFvQixDQUFBLE9BQU0sQUFBQyx3QkFBa0IsQ0FDdEMsQ0FBQSxnQ0FBcUIseUNBQTJCLENB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hYQTtBQUFBLFdBQVcsQ0FBQztBQUNaLEFBQUksRUFBQSxD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9CQTtBQUFBLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGtCQUFpQixDQUFDO0FBQ3JDLGlCQUFhLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyx1QkFBc0IsQ0FBQyxDQUFDO0FBOENyRCxPQUFTLEtBQUcsQ0FBRSxLQUFJLENBQUcsQ0FBQSxRQUFPLENBQUcsQ0FBQSxRQUFPLENBQUcsQ0FBQSxPQUFNLENBQUc7QUFFaEQsS0FBSSxNQUFPLFNBQU8sQ0FBQSxFQUFLLFVBQVEsQ0FBQSxFQUFLLENBQUEsUUFBTyxHQUFLLEtBQUcsQ0FBRztBQUNwRCxVQUFNLEVBQUksU0FBTyxDQUFDO0FBQ2xCLFdBQU8sRUFBSSxDQUFBLENBQUMsTUFBTyxTQUFPLENBQUEsRUFBSyxXQUFTLENBQUEsRUFBSyxRQUFNLENBQUEsRUFBSyxDQUFBLE9BQU0sQ0FBRSxRQUFPLENBQUMsSUFBTSxNQUFJLENBQUMsRUFBSSxLQUFHLEVBQUksU0FBTyxDQUFDO0FBQ3RHLFdBQU8sRUFBSSxNQUFJLENBQUM7RUFDbEI7QUFBQSxBQUNBLEtBQUksUUFBTyxHQUFLLEtBQUcsQ0FBRztBQUNwQixXQUFPLEVBQUksQ0FBQSxjQUFhLEFBQUMsQ0FBQyxRQUFPLENBQUcsUUFBTSxDQUFHLEVBQUEsQ0FBQyxDQUFDO0VBQ2pEO0FBQUEsQUFDQSxPQUFPLENBQUEsUUFBTyxBQUFDLENBQUMsS0FBSSxDQUFHLFNBQU8sQ0FBRyxTQUFPLENBQUMsQ0FBQztBQUM1QztBQUFBLEFBRUEsS0FBSyxRQUFRLEVBQUksS0FBRyxDQUFDO0FBQ3JCOzs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFVLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQUEsRUFBQztBQUFBLEVBQ1IsQ0FBQztBQUNILENBQUMsQ0FBQztBQVhGLEFBQUksRUFBQSxDQUFBLFVBQVMsRUFhRSxhQWJrQixBQWFQLENBYk87QUFjakMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEN5Y2xlIGZyb20gJ2N5Y2xlanMnO1xuXG5pbXBvcnQgSW5wdXRWaWV3IGZyb20gJy4vdmlld3MvaW5wdXQudmlldyc7XG5pbXBvcnQgSW5wdXRJbnRlbnQgZnJvbSAnLi9pbnRlbnRzL2lucHV0LmludGVudCc7XG5pbXBvcnQgSW5wdXRNb2RlbCBmcm9tICcuL21vZGVscy9pbnB1dC5tb2RlbCc7XG5cbmltcG9ydCBPdXRwdXRWaWV3IGZyb20gJy4vdmlld3Mvb3V0cHV0LnZpZXcnO1xuaW1wb3J0IE91dHB1dE1vZGVsIGZyb20gJy4vbW9kZWxzL291dHB1dC5tb2RlbCc7XG5cbmltcG9ydCBTZXR0aW5nc1ZpZXcgZnJvbSAnLi92aWV3cy9zZXR0aW5ncy52aWV3JztcbmltcG9ydCBTZXR0aW5nc0ludGVudCBmcm9tICcuL2ludGVudHMvc2V0dGluZ3MuaW50ZW50JztcbmltcG9ydCBTZXR0aW5nc01vZGVsIGZyb20gJy4vbW9kZWxzL3NldHRpbmdzLm1vZGVsJztcblxuXG5DeWNsZS5jcmVhdGVSZW5kZXJlcignLmF1dG9wcmVmaXhlcl9fdmlldy1jb250YWluZXItLWlucHV0JykuaW5qZWN0KElucHV0Vmlldyk7XG5DeWNsZS5jaXJjdWxhckluamVjdChJbnB1dE1vZGVsLCBJbnB1dFZpZXcsIElucHV0SW50ZW50KTtcblxuQ3ljbGUuY3JlYXRlUmVuZGVyZXIoJy5hdXRvcHJlZml4ZXJfX3ZpZXctY29udGFpbmVyLS1vdXRwdXQnKS5pbmplY3QoT3V0cHV0Vmlldyk7XG5PdXRwdXRNb2RlbC5pbmplY3QoSW5wdXRJbnRlbnQpO1xuT3V0cHV0Vmlldy5pbmplY3QoT3V0cHV0TW9kZWwpO1xuXG5DeWNsZS5jcmVhdGVSZW5kZXJlcignLmF1dG9wcmVmaXhlcl9fdmlldy1jb250YWluZXItLXNldHRpbmdzJykuaW5qZWN0KFNldHRpbmdzVmlldyk7XG5TZXR0aW5nc01vZGVsLmluamVjdChTZXR0aW5nc0ludGVudCk7XG5TZXR0aW5nc1ZpZXcuaW5qZWN0KFNldHRpbmdzTW9kZWwpO1xuIixudWxsLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xudmFyIHNwbGl0UGF0aCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn07XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKSxcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXG4gICAgICBkaXIgPSByZXN1bHRbMV07XG5cbiAgaWYgKCFyb290ICYmICFkaXIpIHtcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICByZXR1cm4gJy4nO1xuICB9XG5cbiAgaWYgKGRpcikge1xuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gcm9vdCArIGRpcjtcbn07XG5cblxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBzcGxpdFBhdGgocGF0aClbM107XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCJ2YXIgRGF0YVNldCA9IHJlcXVpcmUoXCJkYXRhLXNldFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEV2ZW50XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KHRhcmdldCwgdHlwZSwgaGFuZGxlcikge1xuICAgIHZhciBkcyA9IERhdGFTZXQodGFyZ2V0KVxuICAgIHZhciBldmVudHMgPSBkc1t0eXBlXVxuXG4gICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgZHNbdHlwZV0gPSBoYW5kbGVyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2ZW50cykpIHtcbiAgICAgICAgaWYgKGV2ZW50cy5pbmRleE9mKGhhbmRsZXIpID09PSAtMSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goaGFuZGxlcilcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnRzICE9PSBoYW5kbGVyKSB7XG4gICAgICAgIGRzW3R5cGVdID0gW2V2ZW50cywgaGFuZGxlcl1cbiAgICB9XG59XG4iLCJ2YXIgZ2xvYmFsRG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgRGF0YVNldCA9IHJlcXVpcmUoXCJkYXRhLXNldFwiKVxudmFyIGNyZWF0ZVN0b3JlID0gcmVxdWlyZShcIndlYWttYXAtc2hpbS9jcmVhdGUtc3RvcmVcIilcblxudmFyIGFkZEV2ZW50ID0gcmVxdWlyZShcIi4vYWRkLWV2ZW50LmpzXCIpXG52YXIgcmVtb3ZlRXZlbnQgPSByZXF1aXJlKFwiLi9yZW1vdmUtZXZlbnQuanNcIilcbnZhciBQcm94eUV2ZW50ID0gcmVxdWlyZShcIi4vcHJveHktZXZlbnQuanNcIilcblxudmFyIEhBTkRMRVJfU1RPUkUgPSBjcmVhdGVTdG9yZSgpXG5cbm1vZHVsZS5leHBvcnRzID0gRE9NRGVsZWdhdG9yXG5cbmZ1bmN0aW9uIERPTURlbGVnYXRvcihkb2N1bWVudCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBET01EZWxlZ2F0b3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NRGVsZWdhdG9yKGRvY3VtZW50KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudCA9IGRvY3VtZW50IHx8IGdsb2JhbERvY3VtZW50XG5cbiAgICB0aGlzLnRhcmdldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgICB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzID0ge31cbiAgICB0aGlzLmdsb2JhbExpc3RlbmVycyA9IHt9XG59XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50XG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudFxuXG5ET01EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGUgPVxuICAgIGZ1bmN0aW9uIGFsbG9jYXRlSGFuZGxlKGZ1bmMpIHtcbiAgICAgICAgdmFyIGhhbmRsZSA9IG5ldyBIYW5kbGUoKVxuXG4gICAgICAgIEhBTkRMRVJfU1RPUkUoaGFuZGxlKS5mdW5jID0gZnVuYztcblxuICAgICAgICByZXR1cm4gaGFuZGxlXG4gICAgfVxuXG5ET01EZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlID1cbiAgICBmdW5jdGlvbiB0cmFuc2Zvcm1IYW5kbGUoaGFuZGxlLCBicm9hZGNhc3QpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBIQU5ETEVSX1NUT1JFKGhhbmRsZSkuZnVuY1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFsbG9jYXRlSGFuZGxlKGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgYnJvYWRjYXN0KGV2LCBmdW5jKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgICBpZiAobGlzdGVuZXJzLmluZGV4T2YoZm4pID09PSAtMSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdID0gbGlzdGVuZXJzO1xuICAgIH1cblxuRE9NRGVsZWdhdG9yLnByb3RvdHlwZS5yZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVHbG9iYWxFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZ2xvYmFsTGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW107XG5cbiAgICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoZm4pXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICB9XG5cbkRPTURlbGVnYXRvci5wcm90b3R5cGUubGlzdGVuVG8gPSBmdW5jdGlvbiBsaXN0ZW5UbyhldmVudE5hbWUpIHtcbiAgICBpZiAoIShldmVudE5hbWUgaW4gdGhpcy5ldmVudHMpKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0rKztcblxuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdICE9PSAxKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lciA9IHRoaXMucmF3RXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXVxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIgPSB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPVxuICAgICAgICAgICAgY3JlYXRlSGFuZGxlcihldmVudE5hbWUsIHRoaXMpXG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCB0cnVlKVxufVxuXG5ET01EZWxlZ2F0b3IucHJvdG90eXBlLnVubGlzdGVuVG8gPSBmdW5jdGlvbiB1bmxpc3RlblRvKGV2ZW50TmFtZSkge1xuICAgIGlmICghKGV2ZW50TmFtZSBpbiB0aGlzLmV2ZW50cykpIHtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWxyZWFkeSB1bmxpc3RlbmVkIHRvIGV2ZW50LlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLS07XG5cbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSAhPT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLnJhd0V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV1cblxuICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZG9tLWRlbGVnYXRvciN1bmxpc3RlblRvOiBjYW5ub3QgXCIgK1xuICAgICAgICAgICAgXCJ1bmxpc3RlbiB0byBcIiArIGV2ZW50TmFtZSlcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIoZXZlbnROYW1lLCBkZWxlZ2F0b3IpIHtcbiAgICB2YXIgZ2xvYmFsTGlzdGVuZXJzID0gZGVsZWdhdG9yLmdsb2JhbExpc3RlbmVycztcbiAgICB2YXIgZGVsZWdhdG9yVGFyZ2V0ID0gZGVsZWdhdG9yLnRhcmdldDtcblxuICAgIHJldHVybiBoYW5kbGVyXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGV2KSB7XG4gICAgICAgIHZhciBnbG9iYWxIYW5kbGVycyA9IGdsb2JhbExpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdXG5cbiAgICAgICAgaWYgKGdsb2JhbEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBnbG9iYWxFdmVudCA9IG5ldyBQcm94eUV2ZW50KGV2KTtcbiAgICAgICAgICAgIGdsb2JhbEV2ZW50LmN1cnJlbnRUYXJnZXQgPSBkZWxlZ2F0b3JUYXJnZXQ7XG4gICAgICAgICAgICBjYWxsTGlzdGVuZXJzKGdsb2JhbEhhbmRsZXJzLCBnbG9iYWxFdmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbmRBbmRJbnZva2VMaXN0ZW5lcnMoZXYudGFyZ2V0LCBldiwgZXZlbnROYW1lKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmluZEFuZEludm9rZUxpc3RlbmVycyhlbGVtLCBldiwgZXZlbnROYW1lKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gZ2V0TGlzdGVuZXIoZWxlbSwgZXZlbnROYW1lKVxuXG4gICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyRXZlbnQgPSBuZXcgUHJveHlFdmVudChldik7XG4gICAgICAgIGxpc3RlbmVyRXZlbnQuY3VycmVudFRhcmdldCA9IGxpc3RlbmVyLmN1cnJlbnRUYXJnZXRcbiAgICAgICAgY2FsbExpc3RlbmVycyhsaXN0ZW5lci5oYW5kbGVycywgbGlzdGVuZXJFdmVudClcblxuICAgICAgICBpZiAobGlzdGVuZXJFdmVudC5fYnViYmxlcykge1xuICAgICAgICAgICAgdmFyIG5leHRUYXJnZXQgPSBsaXN0ZW5lci5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgIGZpbmRBbmRJbnZva2VMaXN0ZW5lcnMobmV4dFRhcmdldCwgZXYsIGV2ZW50TmFtZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGlzdGVuZXIodGFyZ2V0LCB0eXBlKSB7XG4gICAgLy8gdGVybWluYXRlIHJlY3Vyc2lvbiBpZiBwYXJlbnQgaXMgYG51bGxgXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHZhciBkcyA9IERhdGFTZXQodGFyZ2V0KVxuICAgIC8vIGZldGNoIGxpc3Qgb2YgaGFuZGxlciBmbnMgZm9yIHRoaXMgZXZlbnRcbiAgICB2YXIgaGFuZGxlciA9IGRzW3R5cGVdXG4gICAgdmFyIGFsbEhhbmRsZXIgPSBkcy5ldmVudFxuXG4gICAgaWYgKCFoYW5kbGVyICYmICFhbGxIYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRMaXN0ZW5lcih0YXJnZXQucGFyZW50Tm9kZSwgdHlwZSlcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlcnMgPSBbXS5jb25jYXQoaGFuZGxlciB8fCBbXSwgYWxsSGFuZGxlciB8fCBbXSlcbiAgICByZXR1cm4gbmV3IExpc3RlbmVyKHRhcmdldCwgaGFuZGxlcnMpXG59XG5cbmZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoaGFuZGxlcnMsIGV2KSB7XG4gICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaGFuZGxlcihldilcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaGFuZGxlci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2KVxuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIudHlwZSA9PT0gXCJkb20tZGVsZWdhdG9yLWhhbmRsZVwiKSB7XG4gICAgICAgICAgICBIQU5ETEVSX1NUT1JFKGhhbmRsZXIpLmZ1bmMoZXYpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkb20tZGVsZWdhdG9yOiB1bmtub3duIGhhbmRsZXIgXCIgK1xuICAgICAgICAgICAgICAgIFwiZm91bmQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoaGFuZGxlcnMpKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIExpc3RlbmVyKHRhcmdldCwgaGFuZGxlcnMpIHtcbiAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnNcbn1cblxuZnVuY3Rpb24gSGFuZGxlKCkge1xuICAgIHRoaXMudHlwZSA9IFwiZG9tLWRlbGVnYXRvci1oYW5kbGVcIlxufVxuIiwidmFyIEluZGl2aWR1YWwgPSByZXF1aXJlKFwiaW5kaXZpZHVhbFwiKVxudmFyIGN1aWQgPSByZXF1aXJlKFwiY3VpZFwiKVxudmFyIGdsb2JhbERvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxuXG52YXIgRE9NRGVsZWdhdG9yID0gcmVxdWlyZShcIi4vZG9tLWRlbGVnYXRvci5qc1wiKVxuXG52YXIgdmVyc2lvbktleSA9IFwiMTJcIlxudmFyIGNhY2hlS2V5ID0gXCJfX0RPTV9ERUxFR0FUT1JfQ0FDSEVAXCIgKyB2ZXJzaW9uS2V5XG52YXIgY2FjaGVUb2tlbktleSA9IFwiX19ET01fREVMRUdBVE9SX0NBQ0hFX1RPS0VOQFwiICsgdmVyc2lvbktleVxudmFyIGRlbGVnYXRvckNhY2hlID0gSW5kaXZpZHVhbChjYWNoZUtleSwge1xuICAgIGRlbGVnYXRvcnM6IHt9XG59KVxudmFyIGNvbW1vbkV2ZW50cyA9IFtcbiAgICBcImJsdXJcIiwgXCJjaGFuZ2VcIiwgXCJjbGlja1wiLCAgXCJjb250ZXh0bWVudVwiLCBcImRibGNsaWNrXCIsXG4gICAgXCJlcnJvclwiLFwiZm9jdXNcIiwgXCJmb2N1c2luXCIsIFwiZm9jdXNvdXRcIiwgXCJpbnB1dFwiLCBcImtleWRvd25cIixcbiAgICBcImtleXByZXNzXCIsIFwia2V5dXBcIiwgXCJsb2FkXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLFxuICAgIFwicmVzaXplXCIsIFwic2VsZWN0XCIsIFwic3VibWl0XCIsIFwidG91Y2hjYW5jZWxcIixcbiAgICBcInRvdWNoZW5kXCIsIFwidG91Y2hzdGFydFwiLCBcInVubG9hZFwiXG5dXG5cbi8qICBEZWxlZ2F0b3IgaXMgYSB0aGluIHdyYXBwZXIgYXJvdW5kIGEgc2luZ2xldG9uIGBET01EZWxlZ2F0b3JgXG4gICAgICAgIGluc3RhbmNlLlxuXG4gICAgT25seSBvbmUgRE9NRGVsZWdhdG9yIHNob3VsZCBleGlzdCBiZWNhdXNlIHdlIGRvIG5vdCB3YW50XG4gICAgICAgIGR1cGxpY2F0ZSBldmVudCBsaXN0ZW5lcnMgYm91bmQgdG8gdGhlIERPTS5cblxuICAgIGBEZWxlZ2F0b3JgIHdpbGwgYWxzbyBgbGlzdGVuVG8oKWAgYWxsIGV2ZW50cyB1bmxlc3NcbiAgICAgICAgZXZlcnkgY2FsbGVyIG9wdHMgb3V0IG9mIGl0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBEZWxlZ2F0b3JcblxuZnVuY3Rpb24gRGVsZWdhdG9yKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fVxuICAgIHZhciBkb2N1bWVudCA9IG9wdHMuZG9jdW1lbnQgfHwgZ2xvYmFsRG9jdW1lbnRcblxuICAgIHZhciBjYWNoZUtleSA9IGRvY3VtZW50W2NhY2hlVG9rZW5LZXldXG5cbiAgICBpZiAoIWNhY2hlS2V5KSB7XG4gICAgICAgIGNhY2hlS2V5ID1cbiAgICAgICAgICAgIGRvY3VtZW50W2NhY2hlVG9rZW5LZXldID0gY3VpZCgpXG4gICAgfVxuXG4gICAgdmFyIGRlbGVnYXRvciA9IGRlbGVnYXRvckNhY2hlLmRlbGVnYXRvcnNbY2FjaGVLZXldXG5cbiAgICBpZiAoIWRlbGVnYXRvcikge1xuICAgICAgICBkZWxlZ2F0b3IgPSBkZWxlZ2F0b3JDYWNoZS5kZWxlZ2F0b3JzW2NhY2hlS2V5XSA9XG4gICAgICAgICAgICBuZXcgRE9NRGVsZWdhdG9yKGRvY3VtZW50KVxuICAgIH1cblxuICAgIGlmIChvcHRzLmRlZmF1bHRFdmVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tbW9uRXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWxlZ2F0b3IubGlzdGVuVG8oY29tbW9uRXZlbnRzW2ldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGVnYXRvclxufVxuXG5EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGUgPSBET01EZWxlZ2F0b3IuYWxsb2NhdGVIYW5kbGU7XG5EZWxlZ2F0b3IudHJhbnNmb3JtSGFuZGxlID0gRE9NRGVsZWdhdG9yLnRyYW5zZm9ybUhhbmRsZTtcbiIsIi8qKlxuICogY3VpZC5qc1xuICogQ29sbGlzaW9uLXJlc2lzdGFudCBVSUQgZ2VuZXJhdG9yIGZvciBicm93c2VycyBhbmQgbm9kZS5cbiAqIFNlcXVlbnRpYWwgZm9yIGZhc3QgZGIgbG9va3VwcyBhbmQgcmVjZW5jeSBzb3J0aW5nLlxuICogU2FmZSBmb3IgZWxlbWVudCBJRHMgYW5kIHNlcnZlci1zaWRlIGxvb2t1cHMuXG4gKlxuICogRXh0cmFjdGVkIGZyb20gQ0xDVFJcbiAqIFxuICogQ29weXJpZ2h0IChjKSBFcmljIEVsbGlvdHQgMjAxMlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKmdsb2JhbCB3aW5kb3csIG5hdmlnYXRvciwgZG9jdW1lbnQsIHJlcXVpcmUsIHByb2Nlc3MsIG1vZHVsZSAqL1xuKGZ1bmN0aW9uIChhcHApIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgbmFtZXNwYWNlID0gJ2N1aWQnLFxuICAgIGMgPSAwLFxuICAgIGJsb2NrU2l6ZSA9IDQsXG4gICAgYmFzZSA9IDM2LFxuICAgIGRpc2NyZXRlVmFsdWVzID0gTWF0aC5wb3coYmFzZSwgYmxvY2tTaXplKSxcblxuICAgIHBhZCA9IGZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgICAgIHZhciBzID0gXCIwMDAwMDAwMDBcIiArIG51bTtcbiAgICAgIHJldHVybiBzLnN1YnN0cihzLmxlbmd0aC1zaXplKTtcbiAgICB9LFxuXG4gICAgcmFuZG9tQmxvY2sgPSBmdW5jdGlvbiByYW5kb21CbG9jaygpIHtcbiAgICAgIHJldHVybiBwYWQoKE1hdGgucmFuZG9tKCkgKlxuICAgICAgICAgICAgZGlzY3JldGVWYWx1ZXMgPDwgMClcbiAgICAgICAgICAgIC50b1N0cmluZyhiYXNlKSwgYmxvY2tTaXplKTtcbiAgICB9LFxuXG4gICAgc2FmZUNvdW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjID0gKGMgPCBkaXNjcmV0ZVZhbHVlcykgPyBjIDogMDtcbiAgICAgIGMrKzsgLy8gdGhpcyBpcyBub3Qgc3VibGltaW5hbFxuICAgICAgcmV0dXJuIGMgLSAxO1xuICAgIH0sXG5cbiAgICBhcGkgPSBmdW5jdGlvbiBjdWlkKCkge1xuICAgICAgLy8gU3RhcnRpbmcgd2l0aCBhIGxvd2VyY2FzZSBsZXR0ZXIgbWFrZXNcbiAgICAgIC8vIGl0IEhUTUwgZWxlbWVudCBJRCBmcmllbmRseS5cbiAgICAgIHZhciBsZXR0ZXIgPSAnYycsIC8vIGhhcmQtY29kZWQgYWxsb3dzIGZvciBzZXF1ZW50aWFsIGFjY2Vzc1xuXG4gICAgICAgIC8vIHRpbWVzdGFtcFxuICAgICAgICAvLyB3YXJuaW5nOiB0aGlzIGV4cG9zZXMgdGhlIGV4YWN0IGRhdGUgYW5kIHRpbWVcbiAgICAgICAgLy8gdGhhdCB0aGUgdWlkIHdhcyBjcmVhdGVkLlxuICAgICAgICB0aW1lc3RhbXAgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKGJhc2UpLFxuXG4gICAgICAgIC8vIFByZXZlbnQgc2FtZS1tYWNoaW5lIGNvbGxpc2lvbnMuXG4gICAgICAgIGNvdW50ZXIsXG5cbiAgICAgICAgLy8gQSBmZXcgY2hhcnMgdG8gZ2VuZXJhdGUgZGlzdGluY3QgaWRzIGZvciBkaWZmZXJlbnRcbiAgICAgICAgLy8gY2xpZW50cyAoc28gZGlmZmVyZW50IGNvbXB1dGVycyBhcmUgZmFyIGxlc3NcbiAgICAgICAgLy8gbGlrZWx5IHRvIGdlbmVyYXRlIHRoZSBzYW1lIGlkKVxuICAgICAgICBmaW5nZXJwcmludCA9IGFwaS5maW5nZXJwcmludCgpLFxuXG4gICAgICAgIC8vIEdyYWIgc29tZSBtb3JlIGNoYXJzIGZyb20gTWF0aC5yYW5kb20oKVxuICAgICAgICByYW5kb20gPSByYW5kb21CbG9jaygpICsgcmFuZG9tQmxvY2soKTtcblxuICAgICAgICBjb3VudGVyID0gcGFkKHNhZmVDb3VudGVyKCkudG9TdHJpbmcoYmFzZSksIGJsb2NrU2l6ZSk7XG5cbiAgICAgIHJldHVybiAgKGxldHRlciArIHRpbWVzdGFtcCArIGNvdW50ZXIgKyBmaW5nZXJwcmludCArIHJhbmRvbSk7XG4gICAgfTtcblxuICBhcGkuc2x1ZyA9IGZ1bmN0aW9uIHNsdWcoKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygzNiksXG4gICAgICBjb3VudGVyLFxuICAgICAgcHJpbnQgPSBhcGkuZmluZ2VycHJpbnQoKS5zbGljZSgwLDEpICtcbiAgICAgICAgYXBpLmZpbmdlcnByaW50KCkuc2xpY2UoLTEpLFxuICAgICAgcmFuZG9tID0gcmFuZG9tQmxvY2soKS5zbGljZSgtMik7XG5cbiAgICAgIGNvdW50ZXIgPSBzYWZlQ291bnRlcigpLnRvU3RyaW5nKDM2KS5zbGljZSgtNCk7XG5cbiAgICByZXR1cm4gZGF0ZS5zbGljZSgtMikgKyBcbiAgICAgIGNvdW50ZXIgKyBwcmludCArIHJhbmRvbTtcbiAgfTtcblxuICBhcGkuZ2xvYmFsQ291bnQgPSBmdW5jdGlvbiBnbG9iYWxDb3VudCgpIHtcbiAgICAvLyBXZSB3YW50IHRvIGNhY2hlIHRoZSByZXN1bHRzIG9mIHRoaXNcbiAgICB2YXIgY2FjaGUgPSAoZnVuY3Rpb24gY2FsYygpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgY291bnQgPSAwO1xuXG4gICAgICAgIGZvciAoaSBpbiB3aW5kb3cpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgICAgfSgpKTtcblxuICAgIGFwaS5nbG9iYWxDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhY2hlOyB9O1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICBhcGkuZmluZ2VycHJpbnQgPSBmdW5jdGlvbiBicm93c2VyUHJpbnQoKSB7XG4gICAgcmV0dXJuIHBhZCgobmF2aWdhdG9yLm1pbWVUeXBlcy5sZW5ndGggK1xuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5sZW5ndGgpLnRvU3RyaW5nKDM2KSArXG4gICAgICBhcGkuZ2xvYmFsQ291bnQoKS50b1N0cmluZygzNiksIDQpO1xuICB9O1xuXG4gIC8vIGRvbid0IGNoYW5nZSBhbnl0aGluZyBmcm9tIGhlcmUgZG93bi5cbiAgaWYgKGFwcC5yZWdpc3Rlcikge1xuICAgIGFwcC5yZWdpc3RlcihuYW1lc3BhY2UsIGFwaSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGFwaTtcbiAgfSBlbHNlIHtcbiAgICBhcHBbbmFtZXNwYWNlXSA9IGFwaTtcbiAgfVxuXG59KHRoaXMuYXBwbGl0dWRlIHx8IHRoaXMpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlSGFzaFxuXG5mdW5jdGlvbiBjcmVhdGVIYXNoKGVsZW0pIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IGVsZW0uYXR0cmlidXRlc1xuICAgIHZhciBoYXNoID0ge31cblxuICAgIGlmIChhdHRyaWJ1dGVzID09PSBudWxsIHx8IGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gaGFzaFxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJpYnV0ZXNbaV1cblxuICAgICAgICBpZiAoYXR0ci5uYW1lLnN1YnN0cigwLDUpICE9PSBcImRhdGEtXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBoYXNoW2F0dHIubmFtZS5zdWJzdHIoNSldID0gYXR0ci52YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBoYXNoXG59XG4iLCJ2YXIgY3JlYXRlU3RvcmUgPSByZXF1aXJlKFwid2Vha21hcC1zaGltL2NyZWF0ZS1zdG9yZVwiKVxudmFyIEluZGl2aWR1YWwgPSByZXF1aXJlKFwiaW5kaXZpZHVhbFwiKVxuXG52YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1oYXNoLmpzXCIpXG5cbnZhciBoYXNoU3RvcmUgPSBJbmRpdmlkdWFsKFwiX19EQVRBX1NFVF9XRUFLTUFQQDNcIiwgY3JlYXRlU3RvcmUoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU2V0XG5cbmZ1bmN0aW9uIERhdGFTZXQoZWxlbSkge1xuICAgIHZhciBzdG9yZSA9IGhhc2hTdG9yZShlbGVtKVxuXG4gICAgaWYgKCFzdG9yZS5oYXNoKSB7XG4gICAgICAgIHN0b3JlLmhhc2ggPSBjcmVhdGVIYXNoKGVsZW0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlLmhhc2hcbn1cbiIsInZhciBoaWRkZW5TdG9yZSA9IHJlcXVpcmUoJy4vaGlkZGVuLXN0b3JlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU3RvcmU7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKCkge1xuICAgIHZhciBrZXkgPSB7fTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2Vha21hcC1zaGltOiBLZXkgbXVzdCBiZSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0b3JlID0gb2JqLnZhbHVlT2Yoa2V5KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlICYmIHN0b3JlLmlkZW50aXR5ID09PSBrZXkgP1xuICAgICAgICAgICAgc3RvcmUgOiBoaWRkZW5TdG9yZShvYmosIGtleSk7XG4gICAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaGlkZGVuU3RvcmU7XG5cbmZ1bmN0aW9uIGhpZGRlblN0b3JlKG9iaiwga2V5KSB7XG4gICAgdmFyIHN0b3JlID0geyBpZGVudGl0eToga2V5IH07XG4gICAgdmFyIHZhbHVlT2YgPSBvYmoudmFsdWVPZjtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwidmFsdWVPZlwiLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0ga2V5ID9cbiAgICAgICAgICAgICAgICB2YWx1ZU9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBzdG9yZTtcbiAgICAgICAgfSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiBzdG9yZTtcbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciB0b3BMZXZlbCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9XG52YXIgbWluRG9jID0gcmVxdWlyZSgnbWluLWRvY3VtZW50Jyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudDtcbn0gZWxzZSB7XG4gICAgdmFyIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jY3k7XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgIHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID9cbiAgICBnbG9iYWwgOiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRpdmlkdWFsXG5cbmZ1bmN0aW9uIEluZGl2aWR1YWwoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChyb290W2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHJvb3Rba2V5XVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyb290LCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIHJldHVybiB2YWx1ZVxufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsInZhciBoaWRkZW5TdG9yZSA9IHJlcXVpcmUoJy4vaGlkZGVuLXN0b3JlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU3RvcmU7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKCkge1xuICAgIHZhciBrZXkgPSB7fTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSAmJlxuICAgICAgICAgICAgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV2Vha21hcC1zaGltOiBLZXkgbXVzdCBiZSBvYmplY3QnKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0b3JlID0gb2JqLnZhbHVlT2Yoa2V5KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlICYmIHN0b3JlLmlkZW50aXR5ID09PSBrZXkgP1xuICAgICAgICAgICAgc3RvcmUgOiBoaWRkZW5TdG9yZShvYmosIGtleSk7XG4gICAgfTtcbn1cbiIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoXCJpbmhlcml0c1wiKVxuXG52YXIgQUxMX1BST1BTID0gW1xuICAgIFwiYWx0S2V5XCIsIFwiYnViYmxlc1wiLCBcImNhbmNlbGFibGVcIiwgXCJjdHJsS2V5XCIsXG4gICAgXCJldmVudFBoYXNlXCIsIFwibWV0YUtleVwiLCBcInJlbGF0ZWRUYXJnZXRcIiwgXCJzaGlmdEtleVwiLFxuICAgIFwidGFyZ2V0XCIsIFwidGltZVN0YW1wXCIsIFwidHlwZVwiLCBcInZpZXdcIiwgXCJ3aGljaFwiXG5dXG52YXIgS0VZX1BST1BTID0gW1wiY2hhclwiLCBcImNoYXJDb2RlXCIsIFwia2V5XCIsIFwia2V5Q29kZVwiXVxudmFyIE1PVVNFX1BST1BTID0gW1xuICAgIFwiYnV0dG9uXCIsIFwiYnV0dG9uc1wiLCBcImNsaWVudFhcIiwgXCJjbGllbnRZXCIsIFwibGF5ZXJYXCIsXG4gICAgXCJsYXllcllcIiwgXCJvZmZzZXRYXCIsIFwib2Zmc2V0WVwiLCBcInBhZ2VYXCIsIFwicGFnZVlcIixcbiAgICBcInNjcmVlblhcIiwgXCJzY3JlZW5ZXCIsIFwidG9FbGVtZW50XCJcbl1cblxudmFyIHJrZXlFdmVudCA9IC9ea2V5fGlucHV0L1xudmFyIHJtb3VzZUV2ZW50ID0gL14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay9cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUV2ZW50XG5cbmZ1bmN0aW9uIFByb3h5RXZlbnQoZXYpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJveHlFdmVudCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eUV2ZW50KGV2KVxuICAgIH1cblxuICAgIGlmIChya2V5RXZlbnQudGVzdChldi50eXBlKSkge1xuICAgICAgICByZXR1cm4gbmV3IEtleUV2ZW50KGV2KVxuICAgIH0gZWxzZSBpZiAocm1vdXNlRXZlbnQudGVzdChldi50eXBlKSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vdXNlRXZlbnQoZXYpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBTExfUFJPUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BLZXkgPSBBTExfUFJPUFNbaV1cbiAgICAgICAgdGhpc1twcm9wS2V5XSA9IGV2W3Byb3BLZXldXG4gICAgfVxuXG4gICAgdGhpcy5fcmF3RXZlbnQgPSBldlxuICAgIHRoaXMuX2J1YmJsZXMgPSBmYWxzZTtcbn1cblxuUHJveHlFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcmF3RXZlbnQucHJldmVudERlZmF1bHQoKVxufVxuXG5Qcm94eUV2ZW50LnByb3RvdHlwZS5zdGFydFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2J1YmJsZXMgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBNb3VzZUV2ZW50KGV2KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBBTExfUFJPUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BLZXkgPSBBTExfUFJPUFNbaV1cbiAgICAgICAgdGhpc1twcm9wS2V5XSA9IGV2W3Byb3BLZXldXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBNT1VTRV9QUk9QUy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbW91c2VQcm9wS2V5ID0gTU9VU0VfUFJPUFNbal1cbiAgICAgICAgdGhpc1ttb3VzZVByb3BLZXldID0gZXZbbW91c2VQcm9wS2V5XVxuICAgIH1cblxuICAgIHRoaXMuX3Jhd0V2ZW50ID0gZXZcbn1cblxuaW5oZXJpdHMoTW91c2VFdmVudCwgUHJveHlFdmVudClcblxuZnVuY3Rpb24gS2V5RXZlbnQoZXYpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEFMTF9QUk9QUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcEtleSA9IEFMTF9QUk9QU1tpXVxuICAgICAgICB0aGlzW3Byb3BLZXldID0gZXZbcHJvcEtleV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IEtFWV9QUk9QUy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIga2V5UHJvcEtleSA9IEtFWV9QUk9QU1tqXVxuICAgICAgICB0aGlzW2tleVByb3BLZXldID0gZXZba2V5UHJvcEtleV1cbiAgICB9XG5cbiAgICB0aGlzLl9yYXdFdmVudCA9IGV2XG59XG5cbmluaGVyaXRzKEtleUV2ZW50LCBQcm94eUV2ZW50KVxuIiwidmFyIERhdGFTZXQgPSByZXF1aXJlKFwiZGF0YS1zZXRcIilcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdmVFdmVudFxuXG5mdW5jdGlvbiByZW1vdmVFdmVudCh0YXJnZXQsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgZHMgPSBEYXRhU2V0KHRhcmdldClcbiAgICB2YXIgZXZlbnRzID0gZHNbdHlwZV1cblxuICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShldmVudHMpKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGV2ZW50cy5pbmRleE9mKGhhbmRsZXIpXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50cyA9PT0gaGFuZGxlcikge1xuICAgICAgICBkc1t0eXBlXSA9IG51bGxcbiAgICB9XG59XG4iLCJ2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoXCIuL3Zkb20vY3JlYXRlLWVsZW1lbnQuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFbGVtZW50XG4iLCJ2YXIgZGlmZiA9IHJlcXVpcmUoXCIuL3Z0cmVlL2RpZmYuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCJ2YXIgaCA9IHJlcXVpcmUoXCIuL3ZpcnR1YWwtaHlwZXJzY3JpcHQvaW5kZXguanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBoXG4iLCJ2YXIgZGlmZiA9IHJlcXVpcmUoXCIuL2RpZmYuanNcIilcclxudmFyIHBhdGNoID0gcmVxdWlyZShcIi4vcGF0Y2guanNcIilcclxudmFyIGggPSByZXF1aXJlKFwiLi9oLmpzXCIpXHJcbnZhciBjcmVhdGUgPSByZXF1aXJlKFwiLi9jcmVhdGUtZWxlbWVudC5qc1wiKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkaWZmOiBkaWZmLFxyXG4gICAgcGF0Y2g6IHBhdGNoLFxyXG4gICAgaDogaCxcclxuICAgIGNyZWF0ZTogY3JlYXRlXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBjYW1lbENhc2Uob2JqKTtcbiAgICByZXR1cm4gd2FsayhvYmopO1xufTtcblxuZnVuY3Rpb24gd2FsayAob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybiBvYmo7XG4gICAgaWYgKGlzRGF0ZShvYmopIHx8IGlzUmVnZXgob2JqKSkgcmV0dXJuIG9iajtcbiAgICBpZiAoaXNBcnJheShvYmopKSByZXR1cm4gbWFwKG9iaiwgd2Fsayk7XG4gICAgcmV0dXJuIHJlZHVjZShvYmplY3RLZXlzKG9iaiksIGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgY2FtZWwgPSBjYW1lbENhc2Uoa2V5KTtcbiAgICAgICAgYWNjW2NhbWVsXSA9IHdhbGsob2JqW2tleV0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW18uLV0oXFx3fCQpL2csIGZ1bmN0aW9uIChfLHgpIHtcbiAgICAgICAgcmV0dXJuIHgudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNEYXRlID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcblxudmFyIGlzUmVnZXggPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKGYoeHNbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcmVkdWNlICh4cywgZiwgYWNjKSB7XG4gICAgaWYgKHhzLnJlZHVjZSkgcmV0dXJuIHhzLnJlZHVjZShmLCBhY2MpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWNjID0gZihhY2MsIHhzW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbn1cbiIsInZhciBuYXJncyA9IC9cXHsoWzAtOWEtekEtWl0rKVxcfS9nXG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZShzdHJpbmcpIHtcbiAgICB2YXIgYXJnc1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBhcmdzID0gYXJndW1lbnRzWzFdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIH1cblxuICAgIGlmICghYXJncyB8fCAhYXJncy5oYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgICBhcmdzID0ge31cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UobmFyZ3MsIGZ1bmN0aW9uIHJlcGxhY2VBcmcobWF0Y2gsIGksIGluZGV4KSB7XG4gICAgICAgIHZhciByZXN1bHRcblxuICAgICAgICBpZiAoc3RyaW5nW2luZGV4IC0gMV0gPT09IFwie1wiICYmXG4gICAgICAgICAgICBzdHJpbmdbaW5kZXggKyBtYXRjaC5sZW5ndGhdID09PSBcIn1cIikge1xuICAgICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGFyZ3MuaGFzT3duUHJvcGVydHkoaSkgPyBhcmdzW2ldIDogbnVsbFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBjYW1lbGl6ZSA9IHJlcXVpcmUoXCJjYW1lbGl6ZVwiKVxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInN0cmluZy10ZW1wbGF0ZVwiKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZC9tdXRhYmxlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZWRFcnJvclxuXG5mdW5jdGlvbiBUeXBlZEVycm9yKGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJncyBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFhcmdzLnR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJncy50eXBlIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MubWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcmdzLm1lc3NhZ2UgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSBhcmdzLm1lc3NhZ2VcblxuICAgIGlmIChhcmdzLnR5cGUgJiYgIWFyZ3MubmFtZSkge1xuICAgICAgICB2YXIgZXJyb3JOYW1lID0gY2FtZWxpemUoYXJncy50eXBlKSArIFwiRXJyb3JcIlxuICAgICAgICBhcmdzLm5hbWUgPSBlcnJvck5hbWVbMF0udG9VcHBlckNhc2UoKSArIGVycm9yTmFtZS5zdWJzdHIoMSlcbiAgICB9XG5cbiAgICBleHRlbmQoY3JlYXRlRXJyb3IsIGFyZ3MpO1xuICAgIGNyZWF0ZUVycm9yLl9uYW1lID0gYXJncy5uYW1lO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVycm9yO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXJyb3Iob3B0cykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEVycm9yKClcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCBcInR5cGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC50eXBlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSBleHRlbmQoe30sIGFyZ3MsIG9wdHMpXG5cbiAgICAgICAgZXh0ZW5kKHJlc3VsdCwgb3B0aW9ucylcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSB0ZW1wbGF0ZShtZXNzYWdlLCBvcHRpb25zKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RcblxuZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsXG59XG4iLCJ2YXIgbmF0aXZlSXNBcnJheSA9IEFycmF5LmlzQXJyYXlcbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVJc0FycmF5IHx8IGlzQXJyYXlcblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCJcbn1cbiIsInZhciBwYXRjaCA9IHJlcXVpcmUoXCIuL3Zkb20vcGF0Y2guanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcImlzLW9iamVjdFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9vay5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5UHJvcGVydGllc1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMobm9kZSwgcHJvcHMsIHByZXZpb3VzKSB7XG4gICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcHMsIHByZXZpb3VzLCBwcm9wTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNIb29rKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgIHByb3BWYWx1ZS5ob29rKG5vZGUsXG4gICAgICAgICAgICAgICAgcHJvcE5hbWUsXG4gICAgICAgICAgICAgICAgcHJldmlvdXMgPyBwcmV2aW91c1twcm9wTmFtZV0gOiB1bmRlZmluZWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoT2JqZWN0KG5vZGUsIHByb3BzLCBwcmV2aW91cywgcHJvcE5hbWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcHMsIHByZXZpb3VzLCBwcm9wTmFtZSkge1xuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICghaXNIb29rKHByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtpXSA9IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBcIlwiXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbcHJvcE5hbWVdID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzVmFsdWUudW5ob29rKSB7XG4gICAgICAgICAgICBwcmV2aW91c1ZhbHVlLnVuaG9vayhub2RlLCBwcm9wTmFtZSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGF0Y2hPYmplY3Qobm9kZSwgcHJvcHMsIHByZXZpb3VzLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSB7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91cyA/IHByZXZpb3VzW3Byb3BOYW1lXSA6IHVuZGVmaW5lZFxuXG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBpZiAocHJvcE5hbWUgPT09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgIGZvciAodmFyIGF0dHJOYW1lIGluIHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGF0dHJWYWx1ZSA9IHByb3BWYWx1ZVthdHRyTmFtZV1cblxuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZihwcmV2aW91c1ZhbHVlICYmIGlzT2JqZWN0KHByZXZpb3VzVmFsdWUpICYmXG4gICAgICAgIGdldFByb3RvdHlwZShwcmV2aW91c1ZhbHVlKSAhPT0gZ2V0UHJvdG90eXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBwcm9wVmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc09iamVjdChub2RlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSB7fVxuICAgIH1cblxuICAgIHZhciByZXBsYWNlciA9IHByb3BOYW1lID09PSBcInN0eWxlXCIgPyBcIlwiIDogdW5kZWZpbmVkXG5cbiAgICBmb3IgKHZhciBrIGluIHByb3BWYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wVmFsdWVba11cbiAgICAgICAgbm9kZVtwcm9wTmFtZV1ba10gPSAodmFsdWUgPT09IHVuZGVmaW5lZCkgPyByZXBsYWNlciA6IHZhbHVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5fX3Byb3RvX18pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLl9fcHJvdG9fX1xuICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgIH1cbn1cbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoXCJnbG9iYWwvZG9jdW1lbnRcIilcblxudmFyIGFwcGx5UHJvcGVydGllcyA9IHJlcXVpcmUoXCIuL2FwcGx5LXByb3BlcnRpZXNcIilcblxudmFyIGlzVk5vZGUgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdm5vZGUuanNcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZ0ZXh0LmpzXCIpXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtd2lkZ2V0LmpzXCIpXG52YXIgaGFuZGxlVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaGFuZGxlLXRodW5rLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRWxlbWVudFxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHZub2RlLCBvcHRzKSB7XG4gICAgdmFyIGRvYyA9IG9wdHMgPyBvcHRzLmRvY3VtZW50IHx8IGRvY3VtZW50IDogZG9jdW1lbnRcbiAgICB2YXIgd2FybiA9IG9wdHMgPyBvcHRzLndhcm4gOiBudWxsXG5cbiAgICB2bm9kZSA9IGhhbmRsZVRodW5rKHZub2RlKS5hXG5cbiAgICBpZiAoaXNXaWRnZXQodm5vZGUpKSB7XG4gICAgICAgIHJldHVybiB2bm9kZS5pbml0KClcbiAgICB9IGVsc2UgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dClcbiAgICB9IGVsc2UgaWYgKCFpc1ZOb2RlKHZub2RlKSkge1xuICAgICAgICBpZiAod2Fybikge1xuICAgICAgICAgICAgd2FybihcIkl0ZW0gaXMgbm90IGEgdmFsaWQgdmlydHVhbCBkb20gbm9kZVwiLCB2bm9kZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHZhciBub2RlID0gKHZub2RlLm5hbWVzcGFjZSA9PT0gbnVsbCkgP1xuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudCh2bm9kZS50YWdOYW1lKSA6XG4gICAgICAgIGRvYy5jcmVhdGVFbGVtZW50TlModm5vZGUubmFtZXNwYWNlLCB2bm9kZS50YWdOYW1lKVxuXG4gICAgdmFyIHByb3BzID0gdm5vZGUucHJvcGVydGllc1xuICAgIGFwcGx5UHJvcGVydGllcyhub2RlLCBwcm9wcylcblxuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZE5vZGUgPSBjcmVhdGVFbGVtZW50KGNoaWxkcmVuW2ldLCBvcHRzKVxuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlXG59XG4iLCIvLyBNYXBzIGEgdmlydHVhbCBET00gdHJlZSBvbnRvIGEgcmVhbCBET00gdHJlZSBpbiBhbiBlZmZpY2llbnQgbWFubmVyLlxuLy8gV2UgZG9uJ3Qgd2FudCB0byByZWFkIGFsbCBvZiB0aGUgRE9NIG5vZGVzIGluIHRoZSB0cmVlIHNvIHdlIHVzZVxuLy8gdGhlIGluLW9yZGVyIHRyZWUgaW5kZXhpbmcgdG8gZWxpbWluYXRlIHJlY3Vyc2lvbiBkb3duIGNlcnRhaW4gYnJhbmNoZXMuXG4vLyBXZSBvbmx5IHJlY3Vyc2UgaW50byBhIERPTSBub2RlIGlmIHdlIGtub3cgdGhhdCBpdCBjb250YWlucyBhIGNoaWxkIG9mXG4vLyBpbnRlcmVzdC5cblxudmFyIG5vQ2hpbGQgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluZGV4XG5cbmZ1bmN0aW9uIGRvbUluZGV4KHJvb3ROb2RlLCB0cmVlLCBpbmRpY2VzLCBub2Rlcykge1xuICAgIGlmICghaW5kaWNlcyB8fCBpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VzLnNvcnQoYXNjZW5kaW5nKVxuICAgICAgICByZXR1cm4gcmVjdXJzZShyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMsIDApXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNlKHJvb3ROb2RlLCB0cmVlLCBpbmRpY2VzLCBub2Rlcywgcm9vdEluZGV4KSB7XG4gICAgbm9kZXMgPSBub2RlcyB8fCB7fVxuXG5cbiAgICBpZiAocm9vdE5vZGUpIHtcbiAgICAgICAgaWYgKGluZGV4SW5SYW5nZShpbmRpY2VzLCByb290SW5kZXgsIHJvb3RJbmRleCkpIHtcbiAgICAgICAgICAgIG5vZGVzW3Jvb3RJbmRleF0gPSByb290Tm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZDaGlsZHJlbiA9IHRyZWUuY2hpbGRyZW5cblxuICAgICAgICBpZiAodkNoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGVzID0gcm9vdE5vZGUuY2hpbGROb2Rlc1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb290SW5kZXggKz0gMVxuXG4gICAgICAgICAgICAgICAgdmFyIHZDaGlsZCA9IHZDaGlsZHJlbltpXSB8fCBub0NoaWxkXG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IHJvb3RJbmRleCArICh2Q2hpbGQuY291bnQgfHwgMClcblxuICAgICAgICAgICAgICAgIC8vIHNraXAgcmVjdXJzaW9uIGRvd24gdGhlIHRyZWUgaWYgdGhlcmUgYXJlIG5vIG5vZGVzIGRvd24gaGVyZVxuICAgICAgICAgICAgICAgIGlmIChpbmRleEluUmFuZ2UoaW5kaWNlcywgcm9vdEluZGV4LCBuZXh0SW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY2hpbGROb2Rlc1tpXSwgdkNoaWxkLCBpbmRpY2VzLCBub2Rlcywgcm9vdEluZGV4KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvb3RJbmRleCA9IG5leHRJbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzXG59XG5cbi8vIEJpbmFyeSBzZWFyY2ggZm9yIGFuIGluZGV4IGluIHRoZSBpbnRlcnZhbCBbbGVmdCwgcmlnaHRdXG5mdW5jdGlvbiBpbmRleEluUmFuZ2UoaW5kaWNlcywgbGVmdCwgcmlnaHQpIHtcbiAgICBpZiAoaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIG1pbkluZGV4ID0gMFxuICAgIHZhciBtYXhJbmRleCA9IGluZGljZXMubGVuZ3RoIC0gMVxuICAgIHZhciBjdXJyZW50SW5kZXhcbiAgICB2YXIgY3VycmVudEl0ZW1cblxuICAgIHdoaWxlIChtaW5JbmRleCA8PSBtYXhJbmRleCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoKG1heEluZGV4ICsgbWluSW5kZXgpIC8gMikgPj4gMFxuICAgICAgICBjdXJyZW50SXRlbSA9IGluZGljZXNbY3VycmVudEluZGV4XVxuXG4gICAgICAgIGlmIChtaW5JbmRleCA9PT0gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbSA+PSBsZWZ0ICYmIGN1cnJlbnRJdGVtIDw9IHJpZ2h0XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudEl0ZW0gPCBsZWZ0KSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGN1cnJlbnRJbmRleCArIDFcbiAgICAgICAgfSBlbHNlICBpZiAoY3VycmVudEl0ZW0gPiByaWdodCkge1xuICAgICAgICAgICAgbWF4SW5kZXggPSBjdXJyZW50SW5kZXggLSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICAgIHJldHVybiBhID4gYiA/IDEgOiAtMVxufVxuIiwidmFyIGFwcGx5UHJvcGVydGllcyA9IHJlcXVpcmUoXCIuL2FwcGx5LXByb3BlcnRpZXNcIilcblxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2guanNcIilcblxudmFyIHJlbmRlciA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1lbGVtZW50XCIpXG52YXIgdXBkYXRlV2lkZ2V0ID0gcmVxdWlyZShcIi4vdXBkYXRlLXdpZGdldFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5UGF0Y2hcblxuZnVuY3Rpb24gYXBwbHlQYXRjaCh2cGF0Y2gsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgdHlwZSA9IHZwYXRjaC50eXBlXG4gICAgdmFyIHZOb2RlID0gdnBhdGNoLnZOb2RlXG4gICAgdmFyIHBhdGNoID0gdnBhdGNoLnBhdGNoXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBWUGF0Y2guUkVNT1ZFOlxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZU5vZGUoZG9tTm9kZSwgdk5vZGUpXG4gICAgICAgIGNhc2UgVlBhdGNoLklOU0VSVDpcbiAgICAgICAgICAgIHJldHVybiBpbnNlcnROb2RlKGRvbU5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5WVEVYVDpcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLldJREdFVDpcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLlZOT0RFOlxuICAgICAgICAgICAgcmV0dXJuIHZOb2RlUGF0Y2goZG9tTm9kZSwgdk5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKVxuICAgICAgICBjYXNlIFZQYXRjaC5PUkRFUjpcbiAgICAgICAgICAgIHJlb3JkZXJDaGlsZHJlbihkb21Ob2RlLCBwYXRjaClcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlXG4gICAgICAgIGNhc2UgVlBhdGNoLlBST1BTOlxuICAgICAgICAgICAgYXBwbHlQcm9wZXJ0aWVzKGRvbU5vZGUsIHBhdGNoLCB2Tm9kZS5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICAgICAgY2FzZSBWUGF0Y2guVEhVTks6XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVJvb3QoZG9tTm9kZSxcbiAgICAgICAgICAgICAgICByZW5kZXJPcHRpb25zLnBhdGNoKGRvbU5vZGUsIHBhdGNoLCByZW5kZXJPcHRpb25zKSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBkb21Ob2RlXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKGRvbU5vZGUsIHZOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSlcbiAgICB9XG5cbiAgICBkZXN0cm95V2lkZ2V0KGRvbU5vZGUsIHZOb2RlKTtcblxuICAgIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGUocGFyZW50Tm9kZSwgdk5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgbmV3Tm9kZSA9IHJlbmRlcih2Tm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50Tm9kZVxufVxuXG5mdW5jdGlvbiBzdHJpbmdQYXRjaChkb21Ob2RlLCBsZWZ0Vk5vZGUsIHZUZXh0LCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChkb21Ob2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIGRvbU5vZGUucmVwbGFjZURhdGEoMCwgZG9tTm9kZS5sZW5ndGgsIHZUZXh0LnRleHQpXG4gICAgICAgIG5ld05vZGUgPSBkb21Ob2RlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcbiAgICAgICAgbmV3Tm9kZSA9IHJlbmRlcih2VGV4dCwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIHdpZGdldFBhdGNoKGRvbU5vZGUsIGxlZnRWTm9kZSwgd2lkZ2V0LCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIHVwZGF0aW5nID0gdXBkYXRlV2lkZ2V0KGxlZnRWTm9kZSwgd2lkZ2V0KVxuICAgIHZhciBuZXdOb2RlXG5cbiAgICBpZiAodXBkYXRpbmcpIHtcbiAgICAgICAgbmV3Tm9kZSA9IHdpZGdldC51cGRhdGUobGVmdFZOb2RlLCBkb21Ob2RlKSB8fCBkb21Ob2RlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Tm9kZSA9IHJlbmRlcih3aWRnZXQsIHJlbmRlck9wdGlvbnMpXG4gICAgfVxuXG4gICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnROb2RlICYmIG5ld05vZGUgIT09IGRvbU5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSlcbiAgICB9XG5cbiAgICBpZiAoIXVwZGF0aW5nKSB7XG4gICAgICAgIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgbGVmdFZOb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIHZOb2RlUGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB2Tm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG4gICAgdmFyIG5ld05vZGUgPSByZW5kZXIodk5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOb2RlXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgdykge1xuICAgIGlmICh0eXBlb2Ygdy5kZXN0cm95ID09PSBcImZ1bmN0aW9uXCIgJiYgaXNXaWRnZXQodykpIHtcbiAgICAgICAgdy5kZXN0cm95KGRvbU5vZGUpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW9yZGVyQ2hpbGRyZW4oZG9tTm9kZSwgYkluZGV4KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gW11cbiAgICB2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlc1xuICAgIHZhciBsZW4gPSBjaGlsZE5vZGVzLmxlbmd0aFxuICAgIHZhciBpXG4gICAgdmFyIHJldmVyc2VJbmRleCA9IGJJbmRleC5yZXZlcnNlXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGRyZW4ucHVzaChkb21Ob2RlLmNoaWxkTm9kZXNbaV0pXG4gICAgfVxuXG4gICAgdmFyIGluc2VydE9mZnNldCA9IDBcbiAgICB2YXIgbW92ZVxuICAgIHZhciBub2RlXG4gICAgdmFyIGluc2VydE5vZGVcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbW92ZSA9IGJJbmRleFtpXVxuICAgICAgICBpZiAobW92ZSAhPT0gdW5kZWZpbmVkICYmIG1vdmUgIT09IGkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50IGN1cnJlbnRseSBhdCB0aGlzIGluZGV4IHdpbGwgYmUgbW92ZWQgbGF0ZXIgc28gaW5jcmVhc2UgdGhlIGluc2VydCBvZmZzZXRcbiAgICAgICAgICAgIGlmIChyZXZlcnNlSW5kZXhbaV0gPiBpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T2Zmc2V0KytcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IGNoaWxkcmVuW21vdmVdXG4gICAgICAgICAgICBpbnNlcnROb2RlID0gY2hpbGROb2Rlc1tpICsgaW5zZXJ0T2Zmc2V0XSB8fCBudWxsXG4gICAgICAgICAgICBpZiAobm9kZSAhPT0gaW5zZXJ0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGRvbU5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGluc2VydE5vZGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZSBtb3ZlZCBlbGVtZW50IGNhbWUgZnJvbSB0aGUgZnJvbnQgb2YgdGhlIGFycmF5IHNvIHJlZHVjZSB0aGUgaW5zZXJ0IG9mZnNldFxuICAgICAgICAgICAgaWYgKG1vdmUgPCBpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T2Zmc2V0LS1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsZW1lbnQgYXQgdGhpcyBpbmRleCBpcyBzY2hlZHVsZWQgdG8gYmUgcmVtb3ZlZCBzbyBpbmNyZWFzZSBpbnNlcnQgb2Zmc2V0XG4gICAgICAgIGlmIChpIGluIGJJbmRleC5yZW1vdmVzKSB7XG4gICAgICAgICAgICBpbnNlcnRPZmZzZXQrK1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlUm9vdChvbGRSb290LCBuZXdSb290KSB7XG4gICAgaWYgKG9sZFJvb3QgJiYgbmV3Um9vdCAmJiBvbGRSb290ICE9PSBuZXdSb290ICYmIG9sZFJvb3QucGFyZW50Tm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhvbGRSb290KVxuICAgICAgICBvbGRSb290LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1Jvb3QsIG9sZFJvb3QpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Jvb3Q7XG59XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoXCJ4LWlzLWFycmF5XCIpXG5cbnZhciBkb21JbmRleCA9IHJlcXVpcmUoXCIuL2RvbS1pbmRleFwiKVxudmFyIHBhdGNoT3AgPSByZXF1aXJlKFwiLi9wYXRjaC1vcFwiKVxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuXG5mdW5jdGlvbiBwYXRjaChyb290Tm9kZSwgcGF0Y2hlcykge1xuICAgIHJldHVybiBwYXRjaFJlY3Vyc2l2ZShyb290Tm9kZSwgcGF0Y2hlcylcbn1cblxuZnVuY3Rpb24gcGF0Y2hSZWN1cnNpdmUocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgaW5kaWNlcyA9IHBhdGNoSW5kaWNlcyhwYXRjaGVzKVxuXG4gICAgaWYgKGluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZVxuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGRvbUluZGV4KHJvb3ROb2RlLCBwYXRjaGVzLmEsIGluZGljZXMpXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSByb290Tm9kZS5vd25lckRvY3VtZW50XG5cbiAgICBpZiAoIXJlbmRlck9wdGlvbnMpIHtcbiAgICAgICAgcmVuZGVyT3B0aW9ucyA9IHsgcGF0Y2g6IHBhdGNoUmVjdXJzaXZlIH1cbiAgICAgICAgaWYgKG93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZW5kZXJPcHRpb25zLmRvY3VtZW50ID0gb3duZXJEb2N1bWVudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlSW5kZXggPSBpbmRpY2VzW2ldXG4gICAgICAgIHJvb3ROb2RlID0gYXBwbHlQYXRjaChyb290Tm9kZSxcbiAgICAgICAgICAgIGluZGV4W25vZGVJbmRleF0sXG4gICAgICAgICAgICBwYXRjaGVzW25vZGVJbmRleF0sXG4gICAgICAgICAgICByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHJvb3ROb2RlLCBkb21Ob2RlLCBwYXRjaExpc3QsIHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlXG4gICAgfVxuXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChpc0FycmF5KHBhdGNoTGlzdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwYXRjaE9wKHBhdGNoTGlzdFtpXSwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgcm9vdE5vZGUgPSBuZXdOb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcGF0Y2hPcChwYXRjaExpc3QsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICByb290Tm9kZSA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBwYXRjaEluZGljZXMocGF0Y2hlcykge1xuICAgIHZhciBpbmRpY2VzID0gW11cblxuICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiYVwiKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goTnVtYmVyKGtleSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuIiwidmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVdpZGdldFxuXG5mdW5jdGlvbiB1cGRhdGVXaWRnZXQoYSwgYikge1xuICAgIGlmIChpc1dpZGdldChhKSAmJiBpc1dpZGdldChiKSkge1xuICAgICAgICBpZiAoXCJuYW1lXCIgaW4gYSAmJiBcIm5hbWVcIiBpbiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA9PT0gYi5pZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5pdCA9PT0gYi5pbml0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cbiIsInZhciBEYXRhU2V0ID0gcmVxdWlyZShcImRhdGEtc2V0XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVNldEhvb2s7XG5cbmZ1bmN0aW9uIERhdGFTZXRIb29rKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIERhdGFTZXRIb29rKSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGFTZXRIb29rKHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5cbkRhdGFTZXRIb29rLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBkcyA9IERhdGFTZXQobm9kZSlcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyKDUpXG5cbiAgICBkc1twcm9wTmFtZV0gPSB0aGlzLnZhbHVlO1xufTtcbiIsInZhciBEYXRhU2V0ID0gcmVxdWlyZShcImRhdGEtc2V0XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVNldEhvb2s7XG5cbmZ1bmN0aW9uIERhdGFTZXRIb29rKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIERhdGFTZXRIb29rKSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGFTZXRIb29rKHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5cbkRhdGFTZXRIb29rLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBkcyA9IERhdGFTZXQobm9kZSlcbiAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWUuc3Vic3RyKDMpXG5cbiAgICBkc1twcm9wTmFtZV0gPSB0aGlzLnZhbHVlO1xufTtcblxuRGF0YVNldEhvb2sucHJvdG90eXBlLnVuaG9vayA9IGZ1bmN0aW9uKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBkcyA9IERhdGFTZXQobm9kZSk7XG4gICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lLnN1YnN0cigzKTtcblxuICAgIGRzW3Byb3BOYW1lXSA9IHVuZGVmaW5lZDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gU29mdFNldEhvb2s7XG5cbmZ1bmN0aW9uIFNvZnRTZXRIb29rKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvZnRTZXRIb29rKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNvZnRTZXRIb29rKHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5cblNvZnRTZXRIb29rLnByb3RvdHlwZS5ob29rID0gZnVuY3Rpb24gKG5vZGUsIHByb3BlcnR5TmFtZSkge1xuICAgIGlmIChub2RlW3Byb3BlcnR5TmFtZV0gIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgbm9kZVtwcm9wZXJ0eU5hbWVdID0gdGhpcy52YWx1ZTtcbiAgICB9XG59O1xuIiwidmFyIFR5cGVkRXJyb3IgPSByZXF1aXJlKFwiZXJyb3IvdHlwZWRcIilcblxudmFyIFZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL3Zub2RlLmpzXCIpXG52YXIgVlRleHQgPSByZXF1aXJlKFwiLi4vdm5vZGUvdnRleHQuanNcIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9va1wiKVxudmFyIGlzVlRodW5rID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXRodW5rXCIpXG5cbnZhciBwYXJzZVRhZyA9IHJlcXVpcmUoXCIuL3BhcnNlLXRhZy5qc1wiKVxudmFyIHNvZnRTZXRIb29rID0gcmVxdWlyZShcIi4vaG9va3Mvc29mdC1zZXQtaG9vay5qc1wiKVxudmFyIGRhdGFTZXRIb29rID0gcmVxdWlyZShcIi4vaG9va3MvZGF0YS1zZXQtaG9vay5qc1wiKVxudmFyIGV2SG9vayA9IHJlcXVpcmUoXCIuL2hvb2tzL2V2LWhvb2suanNcIilcblxudmFyIFVuZXhwZWN0ZWRWaXJ0dWFsRWxlbWVudCA9IFR5cGVkRXJyb3Ioe1xuICAgIHR5cGU6IFwidmlydHVhbC1oeXBlcnNjcmlwdC51bmV4cGVjdGVkLnZpcnR1YWwtZWxlbWVudFwiLFxuICAgIG1lc3NhZ2U6IFwiVW5leHBlY3RlZCB2aXJ0dWFsIGNoaWxkIHBhc3NlZCB0byBoKCkuXFxuXCIgK1xuICAgICAgICBcIkV4cGVjdGVkIGEgVk5vZGUgLyBWdGh1bmsgLyBWV2lkZ2V0IC8gc3RyaW5nIGJ1dDpcXG5cIiArXG4gICAgICAgIFwiZ290IGEge2ZvcmVpZ25PYmplY3RTdHJ9LlxcblwiICtcbiAgICAgICAgXCJUaGUgcGFyZW50IHZub2RlIGlzIHtwYXJlbnRWbm9kZVN0cn0uXFxuXCIgK1xuICAgICAgICBcIlN1Z2dlc3RlZCBmaXg6IGNoYW5nZSB5b3VyIGBoKC4uLiwgWyAuLi4gXSlgIGNhbGxzaXRlLlwiLFxuICAgIGZvcmVpZ25PYmplY3RTdHI6IG51bGwsXG4gICAgcGFyZW50Vm5vZGVTdHI6IG51bGwsXG4gICAgZm9yZWlnbk9iamVjdDogbnVsbCxcbiAgICBwYXJlbnRWbm9kZTogbnVsbFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBoXG5cbmZ1bmN0aW9uIGgodGFnTmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdXG4gICAgdmFyIHRhZywgcHJvcHMsIGtleSwgbmFtZXNwYWNlXG5cbiAgICBpZiAoIWNoaWxkcmVuICYmIGlzQ2hpbGRyZW4ocHJvcGVydGllcykpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wZXJ0aWVzXG4gICAgICAgIHByb3BzID0ge31cbiAgICB9XG5cbiAgICBwcm9wcyA9IHByb3BzIHx8IHByb3BlcnRpZXMgfHwge31cbiAgICB0YWcgPSBwYXJzZVRhZyh0YWdOYW1lLCBwcm9wcylcblxuICAgIC8vIHN1cHBvcnQga2V5c1xuICAgIGlmIChcImtleVwiIGluIHByb3BzKSB7XG4gICAgICAgIGtleSA9IHByb3BzLmtleVxuICAgICAgICBwcm9wcy5rZXkgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IG5hbWVzcGFjZVxuICAgIGlmIChcIm5hbWVzcGFjZVwiIGluIHByb3BzKSB7XG4gICAgICAgIG5hbWVzcGFjZSA9IHByb3BzLm5hbWVzcGFjZVxuICAgICAgICBwcm9wcy5uYW1lc3BhY2UgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICAvLyBmaXggY3Vyc29yIGJ1Z1xuICAgIGlmICh0YWcgPT09IFwiaW5wdXRcIiAmJlxuICAgICAgICBcInZhbHVlXCIgaW4gcHJvcHMgJiZcbiAgICAgICAgcHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAhaXNIb29rKHByb3BzLnZhbHVlKVxuICAgICkge1xuICAgICAgICBwcm9wcy52YWx1ZSA9IHNvZnRTZXRIb29rKHByb3BzLnZhbHVlKVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpXG4gICAgdmFyIHByb3BOYW1lLCB2YWx1ZVxuICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwcm9wTmFtZSA9IGtleXNbal1cbiAgICAgICAgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cbiAgICAgICAgaWYgKGlzSG9vayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgZGF0YS1mb28gc3VwcG9ydFxuICAgICAgICBpZiAocHJvcE5hbWUuc3Vic3RyKDAsIDUpID09PSBcImRhdGEtXCIpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRhdGFTZXRIb29rKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGV2LWZvbyBzdXBwb3J0XG4gICAgICAgIGlmIChwcm9wTmFtZS5zdWJzdHIoMCwgMykgPT09IFwiZXYtXCIpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGV2SG9vayh2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIGNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgIGFkZENoaWxkKGNoaWxkcmVuLCBjaGlsZE5vZGVzLCB0YWcsIHByb3BzKVxuICAgIH1cblxuXG4gICAgdmFyIG5vZGUgPSBuZXcgVk5vZGUodGFnLCBwcm9wcywgY2hpbGROb2Rlcywga2V5LCBuYW1lc3BhY2UpXG5cbiAgICByZXR1cm4gbm9kZVxufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjLCBjaGlsZE5vZGVzLCB0YWcsIHByb3BzKSB7XG4gICAgaWYgKHR5cGVvZiBjID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNoaWxkTm9kZXMucHVzaChuZXcgVlRleHQoYykpXG4gICAgfSBlbHNlIGlmIChpc0NoaWxkKGMpKSB7XG4gICAgICAgIGNoaWxkTm9kZXMucHVzaChjKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFkZENoaWxkKGNbaV0sIGNoaWxkTm9kZXMsIHRhZywgcHJvcHMpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGMgPT09IG51bGwgfHwgYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IFVuZXhwZWN0ZWRWaXJ0dWFsRWxlbWVudCh7XG4gICAgICAgICAgICBmb3JlaWduT2JqZWN0U3RyOiBKU09OLnN0cmluZ2lmeShjKSxcbiAgICAgICAgICAgIGZvcmVpZ25PYmplY3Q6IGMsXG4gICAgICAgICAgICBwYXJlbnRWbm9kZVN0cjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwYXJlbnRWbm9kZToge1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZCh4KSB7XG4gICAgcmV0dXJuIGlzVk5vZGUoeCkgfHwgaXNWVGV4dCh4KSB8fCBpc1dpZGdldCh4KSB8fCBpc1ZUaHVuayh4KVxufVxuXG5mdW5jdGlvbiBpc0NoaWxkcmVuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSh4KSB8fCBpc0NoaWxkKHgpXG59XG4iLCJ2YXIgY2xhc3NJZFNwbGl0ID0gLyhbXFwuI10/W2EtekEtWjAtOV86LV0rKS9cbnZhciBub3RDbGFzc0lkID0gL15cXC58Iy9cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVRhZ1xuXG5mdW5jdGlvbiBwYXJzZVRhZyh0YWcsIHByb3BzKSB7XG4gICAgaWYgKCF0YWcpIHtcbiAgICAgICAgcmV0dXJuIFwiZGl2XCJcbiAgICB9XG5cbiAgICB2YXIgbm9JZCA9ICEoXCJpZFwiIGluIHByb3BzKVxuXG4gICAgdmFyIHRhZ1BhcnRzID0gdGFnLnNwbGl0KGNsYXNzSWRTcGxpdClcbiAgICB2YXIgdGFnTmFtZSA9IG51bGxcblxuICAgIGlmIChub3RDbGFzc0lkLnRlc3QodGFnUGFydHNbMV0pKSB7XG4gICAgICAgIHRhZ05hbWUgPSBcImRpdlwiXG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMsIHBhcnQsIHR5cGUsIGlcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFnUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFydCA9IHRhZ1BhcnRzW2ldXG5cbiAgICAgICAgaWYgKCFwYXJ0KSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IHBhcnQuY2hhckF0KDApXG5cbiAgICAgICAgaWYgKCF0YWdOYW1lKSB7XG4gICAgICAgICAgICB0YWdOYW1lID0gcGFydFxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiLlwiKSB7XG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3NlcyB8fCBbXVxuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoKSlcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIiNcIiAmJiBub0lkKSB7XG4gICAgICAgICAgICBwcm9wcy5pZCA9IHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIilcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnTmFtZSA/IHRhZ05hbWUudG9Mb3dlckNhc2UoKSA6IFwiZGl2XCJcbn1cbiIsInZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4vaXMtdm5vZGVcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4vaXMtdnRleHRcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi9pcy10aHVua1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVRodW5rXG5cbmZ1bmN0aW9uIGhhbmRsZVRodW5rKGEsIGIpIHtcbiAgICB2YXIgcmVuZGVyZWRBID0gYVxuICAgIHZhciByZW5kZXJlZEIgPSBiXG5cbiAgICBpZiAoaXNUaHVuayhiKSkge1xuICAgICAgICByZW5kZXJlZEIgPSByZW5kZXJUaHVuayhiLCBhKVxuICAgIH1cblxuICAgIGlmIChpc1RodW5rKGEpKSB7XG4gICAgICAgIHJlbmRlcmVkQSA9IHJlbmRlclRodW5rKGEsIG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTogcmVuZGVyZWRBLFxuICAgICAgICBiOiByZW5kZXJlZEJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRodW5rKHRodW5rLCBwcmV2aW91cykge1xuICAgIHZhciByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGVcblxuICAgIGlmICghcmVuZGVyZWRUaHVuaykge1xuICAgICAgICByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGUgPSB0aHVuay5yZW5kZXIocHJldmlvdXMpXG4gICAgfVxuXG4gICAgaWYgKCEoaXNWTm9kZShyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNWVGV4dChyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNXaWRnZXQocmVuZGVyZWRUaHVuaykpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRodW5rIGRpZCBub3QgcmV0dXJuIGEgdmFsaWQgbm9kZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyZWRUaHVua1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1RodW5rXHJcblxyXG5mdW5jdGlvbiBpc1RodW5rKHQpIHtcclxuICAgIHJldHVybiB0ICYmIHQudHlwZSA9PT0gXCJUaHVua1wiXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0hvb2tcblxuZnVuY3Rpb24gaXNIb29rKGhvb2spIHtcbiAgICByZXR1cm4gaG9vayAmJiB0eXBlb2YgaG9vay5ob29rID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgIWhvb2suaGFzT3duUHJvcGVydHkoXCJob29rXCIpXG59XG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxubW9kdWxlLmV4cG9ydHMgPSBpc1ZpcnR1YWxOb2RlXG5cbmZ1bmN0aW9uIGlzVmlydHVhbE5vZGUoeCkge1xuICAgIHJldHVybiB4ICYmIHgudHlwZSA9PT0gXCJWaXJ0dWFsTm9kZVwiICYmIHgudmVyc2lvbiA9PT0gdmVyc2lvblxufVxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaXNWaXJ0dWFsVGV4dFxuXG5mdW5jdGlvbiBpc1ZpcnR1YWxUZXh0KHgpIHtcbiAgICByZXR1cm4geCAmJiB4LnR5cGUgPT09IFwiVmlydHVhbFRleHRcIiAmJiB4LnZlcnNpb24gPT09IHZlcnNpb25cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaXNXaWRnZXRcblxuZnVuY3Rpb24gaXNXaWRnZXQodykge1xuICAgIHJldHVybiB3ICYmIHcudHlwZSA9PT0gXCJXaWRnZXRcIlxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjFcIlxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG52YXIgaXNWTm9kZSA9IHJlcXVpcmUoXCIuL2lzLXZub2RlXCIpXG52YXIgaXNXaWRnZXQgPSByZXF1aXJlKFwiLi9pcy13aWRnZXRcIilcbnZhciBpc1RodW5rID0gcmVxdWlyZShcIi4vaXMtdGh1bmtcIilcbnZhciBpc1ZIb29rID0gcmVxdWlyZShcIi4vaXMtdmhvb2tcIilcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsTm9kZVxuXG52YXIgbm9Qcm9wZXJ0aWVzID0ge31cbnZhciBub0NoaWxkcmVuID0gW11cblxuZnVuY3Rpb24gVmlydHVhbE5vZGUodGFnTmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4sIGtleSwgbmFtZXNwYWNlKSB7XG4gICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZVxuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgbm9Qcm9wZXJ0aWVzXG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IG5vQ2hpbGRyZW5cbiAgICB0aGlzLmtleSA9IGtleSAhPSBudWxsID8gU3RyaW5nKGtleSkgOiB1bmRlZmluZWRcbiAgICB0aGlzLm5hbWVzcGFjZSA9ICh0eXBlb2YgbmFtZXNwYWNlID09PSBcInN0cmluZ1wiKSA/IG5hbWVzcGFjZSA6IG51bGxcblxuICAgIHZhciBjb3VudCA9IChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHx8IDBcbiAgICB2YXIgZGVzY2VuZGFudHMgPSAwXG4gICAgdmFyIGhhc1dpZGdldHMgPSBmYWxzZVxuICAgIHZhciBoYXNUaHVua3MgPSBmYWxzZVxuICAgIHZhciBkZXNjZW5kYW50SG9va3MgPSBmYWxzZVxuICAgIHZhciBob29rc1xuXG4gICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcGVydGllcykge1xuICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbcHJvcE5hbWVdXG4gICAgICAgICAgICBpZiAoaXNWSG9vayhwcm9wZXJ0eSkgJiYgcHJvcGVydHkudW5ob29rKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFob29rcykge1xuICAgICAgICAgICAgICAgICAgICBob29rcyA9IHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaG9va3NbcHJvcE5hbWVdID0gcHJvcGVydHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICBpZiAoaXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgIGRlc2NlbmRhbnRzICs9IGNoaWxkLmNvdW50IHx8IDBcblxuICAgICAgICAgICAgaWYgKCFoYXNXaWRnZXRzICYmIGNoaWxkLmhhc1dpZGdldHMpIHtcbiAgICAgICAgICAgICAgICBoYXNXaWRnZXRzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc1RodW5rcyAmJiBjaGlsZC5oYXNUaHVua3MpIHtcbiAgICAgICAgICAgICAgICBoYXNUaHVua3MgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGVzY2VuZGFudEhvb2tzICYmIChjaGlsZC5ob29rcyB8fCBjaGlsZC5kZXNjZW5kYW50SG9va3MpKSB7XG4gICAgICAgICAgICAgICAgZGVzY2VuZGFudEhvb2tzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNXaWRnZXRzICYmIGlzV2lkZ2V0KGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5kZXN0cm95ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBoYXNXaWRnZXRzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNUaHVua3MgJiYgaXNUaHVuayhjaGlsZCkpIHtcbiAgICAgICAgICAgIGhhc1RodW5rcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvdW50ID0gY291bnQgKyBkZXNjZW5kYW50c1xuICAgIHRoaXMuaGFzV2lkZ2V0cyA9IGhhc1dpZGdldHNcbiAgICB0aGlzLmhhc1RodW5rcyA9IGhhc1RodW5rc1xuICAgIHRoaXMuaG9va3MgPSBob29rc1xuICAgIHRoaXMuZGVzY2VuZGFudEhvb2tzID0gZGVzY2VuZGFudEhvb2tzXG59XG5cblZpcnR1YWxOb2RlLnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvblxuVmlydHVhbE5vZGUucHJvdG90eXBlLnR5cGUgPSBcIlZpcnR1YWxOb2RlXCJcbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5WaXJ0dWFsUGF0Y2guTk9ORSA9IDBcblZpcnR1YWxQYXRjaC5WVEVYVCA9IDFcblZpcnR1YWxQYXRjaC5WTk9ERSA9IDJcblZpcnR1YWxQYXRjaC5XSURHRVQgPSAzXG5WaXJ0dWFsUGF0Y2guUFJPUFMgPSA0XG5WaXJ0dWFsUGF0Y2guT1JERVIgPSA1XG5WaXJ0dWFsUGF0Y2guSU5TRVJUID0gNlxuVmlydHVhbFBhdGNoLlJFTU9WRSA9IDdcblZpcnR1YWxQYXRjaC5USFVOSyA9IDhcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsUGF0Y2hcblxuZnVuY3Rpb24gVmlydHVhbFBhdGNoKHR5cGUsIHZOb2RlLCBwYXRjaCkge1xuICAgIHRoaXMudHlwZSA9IE51bWJlcih0eXBlKVxuICAgIHRoaXMudk5vZGUgPSB2Tm9kZVxuICAgIHRoaXMucGF0Y2ggPSBwYXRjaFxufVxuXG5WaXJ0dWFsUGF0Y2gucHJvdG90eXBlLnZlcnNpb24gPSB2ZXJzaW9uXG5WaXJ0dWFsUGF0Y2gucHJvdG90eXBlLnR5cGUgPSBcIlZpcnR1YWxQYXRjaFwiXG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsVGV4dFxuXG5mdW5jdGlvbiBWaXJ0dWFsVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy50ZXh0ID0gU3RyaW5nKHRleHQpXG59XG5cblZpcnR1YWxUZXh0LnByb3RvdHlwZS52ZXJzaW9uID0gdmVyc2lvblxuVmlydHVhbFRleHQucHJvdG90eXBlLnR5cGUgPSBcIlZpcnR1YWxUZXh0XCJcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoXCJpcy1vYmplY3RcIilcblxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2hcIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdGh1bmtcIilcbnZhciBpc0hvb2sgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdmhvb2tcIilcbnZhciBoYW5kbGVUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9oYW5kbGUtdGh1bmtcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG5cbmZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICAgIHZhciBwYXRjaCA9IHsgYTogYSB9XG4gICAgd2FsayhhLCBiLCBwYXRjaCwgMClcbiAgICByZXR1cm4gcGF0Y2hcbn1cblxuZnVuY3Rpb24gd2FsayhhLCBiLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYXBwbHkgPSBwYXRjaFtpbmRleF1cblxuICAgIGlmIChpc1RodW5rKGEpIHx8IGlzVGh1bmsoYikpIHtcbiAgICAgICAgdGh1bmtzKGEsIGIsIHBhdGNoLCBpbmRleClcbiAgICB9IGVsc2UgaWYgKGIgPT0gbnVsbCkge1xuXG4gICAgICAgIC8vIElmIGEgaXMgYSB3aWRnZXQgd2Ugd2lsbCBhZGQgYSByZW1vdmUgcGF0Y2ggZm9yIGl0XG4gICAgICAgIC8vIE90aGVyd2lzZSBhbnkgY2hpbGQgd2lkZ2V0cy9ob29rcyBtdXN0IGJlIGRlc3Ryb3llZC5cbiAgICAgICAgLy8gVGhpcyBwcmV2ZW50cyBhZGRpbmcgdHdvIHJlbW92ZSBwYXRjaGVzIGZvciBhIHdpZGdldC5cbiAgICAgICAgaWYgKCFpc1dpZGdldChhKSkge1xuICAgICAgICAgICAgY2xlYXJTdGF0ZShhLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgICAgICBhcHBseSA9IHBhdGNoW2luZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guUkVNT1ZFLCBhLCBiKSlcbiAgICB9IGVsc2UgaWYgKGlzVk5vZGUoYikpIHtcbiAgICAgICAgaWYgKGlzVk5vZGUoYSkpIHtcbiAgICAgICAgICAgIGlmIChhLnRhZ05hbWUgPT09IGIudGFnTmFtZSAmJlxuICAgICAgICAgICAgICAgIGEubmFtZXNwYWNlID09PSBiLm5hbWVzcGFjZSAmJlxuICAgICAgICAgICAgICAgIGEua2V5ID09PSBiLmtleSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc1BhdGNoID0gZGlmZlByb3BzKGEucHJvcGVydGllcywgYi5wcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1BhdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVlBhdGNoKFZQYXRjaC5QUk9QUywgYSwgcHJvcHNQYXRjaCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwcGx5ID0gZGlmZkNoaWxkcmVuKGEsIGIsIHBhdGNoLCBhcHBseSwgaW5kZXgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICAgICAgICAgIGFwcGx5ID0gcGF0Y2hbaW5kZXhdXG4gICAgICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guVk5PREUsIGEsIGIpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJTdGF0ZShhLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgICAgICBhcHBseSA9IHBhdGNoW2luZGV4XVxuICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guVk5PREUsIGEsIGIpKVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZUZXh0KGIpKSB7XG4gICAgICAgIGlmICghaXNWVGV4dChhKSkge1xuICAgICAgICAgICAgY2xlYXJTdGF0ZShhLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgICAgICBhcHBseSA9IHBhdGNoW2luZGV4XVxuICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSwgbmV3IFZQYXRjaChWUGF0Y2guVlRFWFQsIGEsIGIpKVxuICAgICAgICB9IGVsc2UgaWYgKGEudGV4dCAhPT0gYi50ZXh0KSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzV2lkZ2V0KGIpKSB7XG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICAgICAgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLldJREdFVCwgYSwgYikpXG4gICAgfVxuXG4gICAgaWYgKGFwcGx5KSB7XG4gICAgICAgIHBhdGNoW2luZGV4XSA9IGFwcGx5XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaWZmUHJvcHMoYSwgYikge1xuICAgIHZhciBkaWZmXG5cbiAgICBmb3IgKHZhciBhS2V5IGluIGEpIHtcbiAgICAgICAgaWYgKCEoYUtleSBpbiBiKSkge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhVmFsdWUgPSBhW2FLZXldXG4gICAgICAgIHZhciBiVmFsdWUgPSBiW2FLZXldXG5cbiAgICAgICAgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGFWYWx1ZSkgJiYgaXNPYmplY3QoYlZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGdldFByb3RvdHlwZShiVmFsdWUpICE9PSBnZXRQcm90b3R5cGUoYVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgZGlmZlthS2V5XSA9IGJWYWx1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hvb2soYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgICAgICBkaWZmW2FLZXldID0gYlZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3REaWZmID0gZGlmZlByb3BzKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIGRpZmZbYUtleV0gPSBvYmplY3REaWZmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSBiVmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGJLZXkgaW4gYikge1xuICAgICAgICBpZiAoIShiS2V5IGluIGEpKSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZltiS2V5XSA9IGJbYktleV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaWZmXG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKHZhbHVlLl9fcHJvdG9fXykge1xuICAgICAgICByZXR1cm4gdmFsdWUuX19wcm90b19fXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaWZmQ2hpbGRyZW4oYSwgYiwgcGF0Y2gsIGFwcGx5LCBpbmRleCkge1xuICAgIHZhciBhQ2hpbGRyZW4gPSBhLmNoaWxkcmVuXG4gICAgdmFyIGJDaGlsZHJlbiA9IHJlb3JkZXIoYUNoaWxkcmVuLCBiLmNoaWxkcmVuKVxuXG4gICAgdmFyIGFMZW4gPSBhQ2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIGJMZW4gPSBiQ2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIGxlbiA9IGFMZW4gPiBiTGVuID8gYUxlbiA6IGJMZW5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGxlZnROb2RlID0gYUNoaWxkcmVuW2ldXG4gICAgICAgIHZhciByaWdodE5vZGUgPSBiQ2hpbGRyZW5baV1cbiAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgIGlmICghbGVmdE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChyaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlc3Mgbm9kZXMgaW4gYiBuZWVkIHRvIGJlIGFkZGVkXG4gICAgICAgICAgICAgICAgYXBwbHkgPSBhcHBlbmRQYXRjaChhcHBseSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guSU5TRVJULCBudWxsLCByaWdodE5vZGUpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FsayhsZWZ0Tm9kZSwgcmlnaHROb2RlLCBwYXRjaCwgaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWTm9kZShsZWZ0Tm9kZSkgJiYgbGVmdE5vZGUuY291bnQpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IGxlZnROb2RlLmNvdW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYkNoaWxkcmVuLm1vdmVzKSB7XG4gICAgICAgIC8vIFJlb3JkZXIgbm9kZXMgbGFzdFxuICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5PUkRFUiwgYSwgYkNoaWxkcmVuLm1vdmVzKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXBwbHlcbn1cblxuZnVuY3Rpb24gY2xlYXJTdGF0ZSh2Tm9kZSwgcGF0Y2gsIGluZGV4KSB7XG4gICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc2luZ2xlIHdhbGssIG5vdCB0d29cbiAgICB1bmhvb2sodk5vZGUsIHBhdGNoLCBpbmRleClcbiAgICBkZXN0cm95V2lkZ2V0cyh2Tm9kZSwgcGF0Y2gsIGluZGV4KVxufVxuXG4vLyBQYXRjaCByZWNvcmRzIGZvciBhbGwgZGVzdHJveWVkIHdpZGdldHMgbXVzdCBiZSBhZGRlZCBiZWNhdXNlIHdlIG5lZWRcbi8vIGEgRE9NIG5vZGUgcmVmZXJlbmNlIGZvciB0aGUgZGVzdHJveSBmdW5jdGlvblxuZnVuY3Rpb24gZGVzdHJveVdpZGdldHModk5vZGUsIHBhdGNoLCBpbmRleCkge1xuICAgIGlmIChpc1dpZGdldCh2Tm9kZSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2Tm9kZS5kZXN0cm95ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHBhdGNoW2luZGV4XSA9IGFwcGVuZFBhdGNoKFxuICAgICAgICAgICAgICAgIHBhdGNoW2luZGV4XSxcbiAgICAgICAgICAgICAgICBuZXcgVlBhdGNoKFZQYXRjaC5SRU1PVkUsIHZOb2RlLCBudWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZOb2RlKHZOb2RlKSAmJiAodk5vZGUuaGFzV2lkZ2V0cyB8fCB2Tm9kZS5oYXNUaHVua3MpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuXG4gICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICAgICAgZGVzdHJveVdpZGdldHMoY2hpbGQsIHBhdGNoLCBpbmRleClcblxuICAgICAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpICYmIGNoaWxkLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gY2hpbGQuY291bnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUaHVuayh2Tm9kZSkpIHtcbiAgICAgICAgdGh1bmtzKHZOb2RlLCBudWxsLCBwYXRjaCwgaW5kZXgpXG4gICAgfVxufVxuXG4vLyBDcmVhdGUgYSBzdWItcGF0Y2ggZm9yIHRodW5rc1xuZnVuY3Rpb24gdGh1bmtzKGEsIGIsIHBhdGNoLCBpbmRleCkge1xuICAgIHZhciBub2RlcyA9IGhhbmRsZVRodW5rKGEsIGIpO1xuICAgIHZhciB0aHVua1BhdGNoID0gZGlmZihub2Rlcy5hLCBub2Rlcy5iKVxuICAgIGlmIChoYXNQYXRjaGVzKHRodW5rUGF0Y2gpKSB7XG4gICAgICAgIHBhdGNoW2luZGV4XSA9IG5ldyBWUGF0Y2goVlBhdGNoLlRIVU5LLCBudWxsLCB0aHVua1BhdGNoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUGF0Y2hlcyhwYXRjaCkge1xuICAgIGZvciAodmFyIGluZGV4IGluIHBhdGNoKSB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gXCJhXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBFeGVjdXRlIGhvb2tzIHdoZW4gdHdvIG5vZGVzIGFyZSBpZGVudGljYWxcbmZ1bmN0aW9uIHVuaG9vayh2Tm9kZSwgcGF0Y2gsIGluZGV4KSB7XG4gICAgaWYgKGlzVk5vZGUodk5vZGUpKSB7XG4gICAgICAgIGlmICh2Tm9kZS5ob29rcykge1xuICAgICAgICAgICAgcGF0Y2hbaW5kZXhdID0gYXBwZW5kUGF0Y2goXG4gICAgICAgICAgICAgICAgcGF0Y2hbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goXG4gICAgICAgICAgICAgICAgICAgIFZQYXRjaC5QUk9QUyxcbiAgICAgICAgICAgICAgICAgICAgdk5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZEtleXModk5vZGUuaG9va3MpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZOb2RlLmRlc2NlbmRhbnRIb29rcyB8fCB2Tm9kZS5oYXNUaHVua3MpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuXG4gICAgICAgICAgICB2YXIgbGVuID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICAgICAgICAgICAgICBpbmRleCArPSAxXG5cbiAgICAgICAgICAgICAgICB1bmhvb2soY2hpbGQsIHBhdGNoLCBpbmRleClcblxuICAgICAgICAgICAgICAgIGlmIChpc1ZOb2RlKGNoaWxkKSAmJiBjaGlsZC5jb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCArPSBjaGlsZC5jb3VudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNUaHVuayh2Tm9kZSkpIHtcbiAgICAgICAgdGh1bmtzKHZOb2RlLCBudWxsLCBwYXRjaCwgaW5kZXgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bmRlZmluZWRLZXlzKG9iaikge1xuICAgIHZhciByZXN1bHQgPSB7fVxuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICByZXN1bHRba2V5XSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbn1cblxuLy8gTGlzdCBkaWZmLCBuYWl2ZSBsZWZ0IHRvIHJpZ2h0IHJlb3JkZXJpbmdcbmZ1bmN0aW9uIHJlb3JkZXIoYUNoaWxkcmVuLCBiQ2hpbGRyZW4pIHtcblxuICAgIHZhciBiS2V5cyA9IGtleUluZGV4KGJDaGlsZHJlbilcblxuICAgIGlmICghYktleXMpIHtcbiAgICAgICAgcmV0dXJuIGJDaGlsZHJlblxuICAgIH1cblxuICAgIHZhciBhS2V5cyA9IGtleUluZGV4KGFDaGlsZHJlbilcblxuICAgIGlmICghYUtleXMpIHtcbiAgICAgICAgcmV0dXJuIGJDaGlsZHJlblxuICAgIH1cblxuICAgIHZhciBiTWF0Y2ggPSB7fSwgYU1hdGNoID0ge31cblxuICAgIGZvciAodmFyIGFLZXkgaW4gYktleXMpIHtcbiAgICAgICAgYk1hdGNoW2JLZXlzW2FLZXldXSA9IGFLZXlzW2FLZXldXG4gICAgfVxuXG4gICAgZm9yICh2YXIgYktleSBpbiBhS2V5cykge1xuICAgICAgICBhTWF0Y2hbYUtleXNbYktleV1dID0gYktleXNbYktleV1cbiAgICB9XG5cbiAgICB2YXIgYUxlbiA9IGFDaGlsZHJlbi5sZW5ndGhcbiAgICB2YXIgYkxlbiA9IGJDaGlsZHJlbi5sZW5ndGhcbiAgICB2YXIgbGVuID0gYUxlbiA+IGJMZW4gPyBhTGVuIDogYkxlblxuICAgIHZhciBzaHVmZmxlID0gW11cbiAgICB2YXIgZnJlZUluZGV4ID0gMFxuICAgIHZhciBpID0gMFxuICAgIHZhciBtb3ZlSW5kZXggPSAwXG4gICAgdmFyIG1vdmVzID0ge31cbiAgICB2YXIgcmVtb3ZlcyA9IG1vdmVzLnJlbW92ZXMgPSB7fVxuICAgIHZhciByZXZlcnNlID0gbW92ZXMucmV2ZXJzZSA9IHt9XG4gICAgdmFyIGhhc01vdmVzID0gZmFsc2VcblxuICAgIHdoaWxlIChmcmVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgdmFyIG1vdmUgPSBhTWF0Y2hbaV1cbiAgICAgICAgaWYgKG1vdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2h1ZmZsZVtpXSA9IGJDaGlsZHJlblttb3ZlXVxuICAgICAgICAgICAgaWYgKG1vdmUgIT09IG1vdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIG1vdmVzW21vdmVdID0gbW92ZUluZGV4XG4gICAgICAgICAgICAgICAgcmV2ZXJzZVttb3ZlSW5kZXhdID0gbW92ZVxuICAgICAgICAgICAgICAgIGhhc01vdmVzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW92ZUluZGV4KytcbiAgICAgICAgfSBlbHNlIGlmIChpIGluIGFNYXRjaCkge1xuICAgICAgICAgICAgc2h1ZmZsZVtpXSA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgcmVtb3Zlc1tpXSA9IG1vdmVJbmRleCsrXG4gICAgICAgICAgICBoYXNNb3ZlcyA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChiTWF0Y2hbZnJlZUluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZnJlZUluZGV4KytcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyZWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBmcmVlQ2hpbGQgPSBiQ2hpbGRyZW5bZnJlZUluZGV4XVxuICAgICAgICAgICAgICAgIGlmIChmcmVlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2h1ZmZsZVtpXSA9IGZyZWVDaGlsZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJlZUluZGV4ICE9PSBtb3ZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vdmVzID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXNbZnJlZUluZGV4XSA9IG1vdmVJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZVttb3ZlSW5kZXhdID0gZnJlZUluZGV4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbW92ZUluZGV4KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJlZUluZGV4KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICB9XG5cbiAgICBpZiAoaGFzTW92ZXMpIHtcbiAgICAgICAgc2h1ZmZsZS5tb3ZlcyA9IG1vdmVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHNodWZmbGVcbn1cblxuZnVuY3Rpb24ga2V5SW5kZXgoY2hpbGRyZW4pIHtcbiAgICB2YXIgaSwga2V5c1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cbiAgICAgICAgaWYgKGNoaWxkLmtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cyB8fCB7fVxuICAgICAgICAgICAga2V5c1tjaGlsZC5rZXldID0gaVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXNcbn1cblxuZnVuY3Rpb24gYXBwZW5kUGF0Y2goYXBwbHksIHBhdGNoKSB7XG4gICAgaWYgKGFwcGx5KSB7XG4gICAgICAgIGlmIChpc0FycmF5KGFwcGx5KSkge1xuICAgICAgICAgICAgYXBwbHkucHVzaChwYXRjaClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5ID0gW2FwcGx5LCBwYXRjaF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcHBseVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRjaFxuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBEYXRhRmxvd05vZGUgPSByZXF1aXJlKCcuL2RhdGEtZmxvdy1ub2RlJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi9lcnJvcnMnKTtcblxuZnVuY3Rpb24gY3JlYXRlSW50ZW50KCkge1xuICB2YXIgaW50ZW50ID0gRGF0YUZsb3dOb2RlLmFwcGx5KHt9LCBhcmd1bWVudHMpO1xuICBpbnRlbnQgPSBlcnJvcnMuY3VzdG9tSW50ZXJmYWNlRXJyb3JNZXNzYWdlSW5JbmplY3QoaW50ZW50LFxuICAgICdJbnRlbnQgZXhwZWN0cyBWaWV3IHRvIGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnR5ICdcbiAgKTtcbiAgdmFyIG9yaWdpbmFsQXJncyA9IGFyZ3VtZW50cztcbiAgaW50ZW50LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVJbnRlbnQuYXBwbHkoe30sIG9yaWdpbmFsQXJncyk7XG4gIH07XG4gIHJldHVybiBpbnRlbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlSW50ZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERhdGFGbG93Tm9kZSA9IHJlcXVpcmUoJy4vZGF0YS1mbG93LW5vZGUnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9ycycpO1xuXG5mdW5jdGlvbiBjcmVhdGVNb2RlbCgpIHtcbiAgdmFyIG1vZGVsID0gRGF0YUZsb3dOb2RlLmFwcGx5KHt9LCBhcmd1bWVudHMpO1xuICBtb2RlbCA9IGVycm9ycy5jdXN0b21JbnRlcmZhY2VFcnJvck1lc3NhZ2VJbkluamVjdChtb2RlbCxcbiAgICAnTW9kZWwgZXhwZWN0cyBJbnRlbnQgdG8gaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydHkgJ1xuICApO1xuICB2YXIgb3JpZ2luYWxBcmdzID0gYXJndW1lbnRzO1xuICBtb2RlbC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3JlYXRlTW9kZWwuYXBwbHkoe30sIG9yaWdpbmFsQXJncyk7XG4gIH07XG4gIHJldHVybiBtb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVNb2RlbDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBSeCA9IHJlcXVpcmUoJ3J4Jyk7XG52YXIgRGF0YUZsb3dOb2RlID0gcmVxdWlyZSgnLi9kYXRhLWZsb3ctbm9kZScpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uRm9yd2FyZEludG9TdHJlYW0oc3RyZWFtKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb3J3YXJkSW50b1N0cmVhbShldikgeyBzdHJlYW0ub25OZXh0KGV2KTsgfTtcbn1cblxuLy8gdHJhdmVyc2UgdGhlIHZ0cmVlLCByZXBsYWNpbmcgdGhlIHZhbHVlIG9mICdldi0qJyBmaWVsZHMgd2l0aFxuLy8gYGZ1bmN0aW9uIChldikgeyB2aWV3WyRQUkVWSU9VU19WQUxVRV0ub25OZXh0KGV2KTsgfWBcbmZ1bmN0aW9uIHJlcGxhY2VTdHJlYW1OYW1lV2l0aEZvcndhcmRGdW5jdGlvbih2dHJlZSwgdmlldykge1xuICBpZiAodHlwZW9mIHZ0cmVlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjsgLy8gc2lsZW50IGlnbm9yZVxuICB9XG4gIGlmICh2dHJlZSAmJiB2dHJlZS50eXBlID09PSAnVmlydHVhbE5vZGUnICYmIHR5cGVvZiB2dHJlZS5wcm9wZXJ0aWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAodmFyIGtleSBpbiB2dHJlZS5wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodnRyZWUucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICAgIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleS5zZWFyY2goL15ldlxcLS8pID09PSAwKVxuICAgICAge1xuICAgICAgICB2YXIgc3RyZWFtTmFtZSA9IHZ0cmVlLnByb3BlcnRpZXNba2V5XS52YWx1ZTtcbiAgICAgICAgaWYgKHZpZXdbc3RyZWFtTmFtZV0pIHtcbiAgICAgICAgICB2dHJlZS5wcm9wZXJ0aWVzW2tleV0udmFsdWUgPSBnZXRGdW5jdGlvbkZvcndhcmRJbnRvU3RyZWFtKHZpZXdbc3RyZWFtTmFtZV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHJlYW1OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVlRyZWUgdXNlcyBldmVudCBob29rIGAnICsgc3RyZWFtTmFtZSArICdgIHdoaWNoIHNob3VsZCAnICtcbiAgICAgICAgICAgICdoYXZlIGJlZW4gZGVmaW5lZCBpbiBgZXZlbnRzYCBhcnJheSBvZiB0aGUgVmlldy4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2dHJlZS5jaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZ0cmVlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXBsYWNlU3RyZWFtTmFtZVdpdGhGb3J3YXJkRnVuY3Rpb24odnRyZWUuY2hpbGRyZW5baV0sIHZpZXcpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0V2ZW50c0FycmF5KHZpZXcpIHtcbiAgaWYgKHR5cGVvZiB2aWV3LmV2ZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcgbXVzdCBkZWZpbmUgYGV2ZW50c2AgYXJyYXkgd2l0aCBuYW1lcyBvZiBldmVudCBzdHJlYW1zJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tWVHJlZSQodmlldykge1xuICBpZiAodHlwZW9mIHZpZXcudnRyZWUkID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygdmlldy52dHJlZSQuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3IG11c3QgZGVmaW5lIGB2dHJlZSRgIE9ic2VydmFibGUgZW1pdHRpbmcgdmlydHVhbCBET00gZWxlbWVudHMnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9ySWZOb3RWVHJlZSh2dHJlZSkge1xuICBpZiAodnRyZWUudHlwZSAhPT0gJ1ZpcnR1YWxOb2RlJyB8fCB2dHJlZS50YWdOYW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignVmlldyBgdnRyZWUkYCBtdXN0IGVtaXQgb25seSBWaXJ0dWFsTm9kZSBpbnN0YW5jZXMuICcgK1xuICAgICAgJ0hpbnQ6IGNyZWF0ZSB0aGVtIHdpdGggQ3ljbGUuaCgpJ1xuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmlldygpIHtcbiAgdmFyIHZpZXcgPSBEYXRhRmxvd05vZGUuYXBwbHkoe30sIGFyZ3VtZW50cyk7XG4gIHZpZXcgPSBlcnJvcnMuY3VzdG9tSW50ZXJmYWNlRXJyb3JNZXNzYWdlSW5JbmplY3QodmlldyxcbiAgICAnVmlldyBleHBlY3RzIE1vZGVsIHRvIGhhdmUgdGhlIHJlcXVpcmVkIHByb3BlcnR5ICdcbiAgKTtcbiAgY2hlY2tFdmVudHNBcnJheSh2aWV3KTtcbiAgY2hlY2tWVHJlZSQodmlldyk7XG4gIGlmICh2aWV3LmV2ZW50cykge1xuICAgIGZvciAodmFyIGkgPSB2aWV3LmV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmlld1t2aWV3LmV2ZW50c1tpXV0gPSBuZXcgUnguU3ViamVjdCgpO1xuICAgIH1cbiAgICBkZWxldGUgdmlldy5ldmVudHM7XG4gIH1cbiAgdmlldy52dHJlZSQgPSB2aWV3LnZ0cmVlJFxuICAgIC5tYXAoZnVuY3Rpb24gKHZ0cmVlKSB7XG4gICAgICB0aHJvd0Vycm9ySWZOb3RWVHJlZSh2dHJlZSk7XG4gICAgICByZXBsYWNlU3RyZWFtTmFtZVdpdGhGb3J3YXJkRnVuY3Rpb24odnRyZWUsIHZpZXcpO1xuICAgICAgcmV0dXJuIHZ0cmVlO1xuICAgIH0pXG4gICAgLnNoYXJlUmVwbGF5KDEpXG4gIDtcbiAgdHJ5IHsgdmlldy52dHJlZSQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHt9KTsgfSBjYXRjaCAoZXJyKSB7IH1cbiAgdmFyIG9yaWdpbmFsQXJncyA9IGFyZ3VtZW50cztcbiAgdmlldy5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lVmlldygpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlldy5hcHBseSh7fSwgb3JpZ2luYWxBcmdzKTtcbiAgfTtcbiAgcmV0dXJuIHZpZXc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVmlldztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBWaXJ0dWFsRE9NID0gcmVxdWlyZSgndmlydHVhbC1kb20nKTtcbnZhciBSeCA9IHJlcXVpcmUoJ3J4Jyk7XG52YXIgRGF0YUZsb3dOb2RlID0gcmVxdWlyZSgnLi9kYXRhLWZsb3ctbm9kZScpO1xudmFyIERhdGFGbG93U291cmNlID0gcmVxdWlyZSgnLi9kYXRhLWZsb3ctc291cmNlJyk7XG52YXIgRGF0YUZsb3dTaW5rID0gcmVxdWlyZSgnLi9kYXRhLWZsb3ctc2luaycpO1xudmFyIFJlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJpbmcnKS5SZW5kZXJlcjtcbnZhciBQcm9wZXJ0eUhvb2sgPSByZXF1aXJlKCcuL3Byb3BlcnR5LWhvb2snKTtcblxudmFyIEN5Y2xlID0ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIERhdGFGbG93Tm9kZS5cbiAgICpcbiAgICogYGlucHV0SW50ZXJmYWNlMWAgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncywgZGVmaW5pbmcgd2hpY2ggIE9ic2VydmFibGVzIGFyZSBleHBlY3RlZCB0b1xuICAgKiBleGlzdCBpbiB0aGUgZmlyc3QgaW5wdXQuIEl0IGRlZmluZXMgdGhlICd0eXBlJyBvZiB0aGUgaW5wdXQsIHNpbmNlIEphdmFTY3JpcHQgaGFzIG5vXG4gICAqIHN0cm9uZyB0eXBlcy4gVGhlIGBpbnB1dEludGVyZmFjZTFgIGlzIG9wdGlvbmFsIGlmIHRoZSBEYXRhRmxvd05vZGUgZG9lcyBub3QgaGF2ZSBhbnlcbiAgICogaW5wdXQuIEluIHRoYXQgY2FzZSwgdGhlIGZ1bmN0aW9uIGBkZWZpbml0aW9uRm5gIHNob3VsZCBub3QgaGF2ZSBhbnkgcGFyYW1ldGVyXG4gICAqIGVpdGhlci4gVGhlcmUgY2FuIGJlIGFuIGFyYml0cmFyeSBudW1iZXIgb2YgaW5wdXQgaW50ZXJmYWNlcywgYnV0IHRoZSBudW1iZXIgb2YgaW5wdXRcbiAgICogaW50ZXJmYWNlcyBtdXN0IG1hdGNoIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRoYXQgYGRlZmluaXRpb25GbmAgaGFzLiBUaGUgYXJndW1lbnRzXG4gICAqIHRvIGBkZWZpbml0aW9uRm5gIGFyZSBvYmplY3RzIHRoYXQgc2hvdWxkIGZ1bGZpbCB0aGUgcmVzcGVjdGl2ZSBpbnRlcmZhY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZz59IFtpbnB1dEludGVyZmFjZTFdIHByb3BlcnR5IG5hbWVzIHRoYXQgYXJlIGV4cGVjdGVkIHRvIGV4aXN0XG4gICAqIGFzIFJ4SlMgT2JzZXJ2YWJsZXMgaW4gdGhlIGZpcnN0IGlucHV0IHBhcmFtZXRlciBmb3IgYGRlZmluaXRpb25GbmAuXG4gICAqIEBwYXJhbSB7fSAuLi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvbkZuIGEgZnVuY3Rpb24gZXhwZWN0aW5nIG9iamVjdHMgYXMgcGFyYW1ldGVycyAoYXMgbWFueSBhc1xuICAgKiB0aGVyZSBhcmUgaW50ZXJmYWNlcyksIHNhdGlzZnlpbmcgdGhlIHR5cGUgcmVxdWlyZW1lbnQgZ2l2ZW4gYnkgYGlucHV0SW50ZXJmYWNlMWAsXG4gICAqIGBpbnB1dEludGVyZmFjZTJgLCBldGMuIFNob3VsZCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgUnhKUyBPYnNlcnZhYmxlcyBhc1xuICAgKiBwcm9wZXJ0aWVzLlxuICAgKiBAcmV0dXJuIHtEYXRhRmxvd05vZGV9IGEgRGF0YUZsb3dOb2RlLCBjb250YWluaW5nIGEgYGluamVjdChpbnB1dHMuLi4pYCBmdW5jdGlvbi5cbiAgICovXG4gIGNyZWF0ZURhdGFGbG93Tm9kZTogZnVuY3Rpb24gY3JlYXRlRGF0YUZsb3dOb2RlKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgICByZXR1cm4gRGF0YUZsb3dOb2RlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICBGLnByb3RvdHlwZSA9IERhdGFGbG93Tm9kZS5wcm90b3R5cGU7XG4gICAgcmV0dXJuIG5ldyBGKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBEYXRhRmxvd1NvdXJjZS4gSXQgcmVjZWl2ZXMgYW4gb2JqZWN0IGFzIGFyZ3VtZW50LCBhbmQgb3V0cHV0cyB0aGF0IHNhbWVcbiAgICogb2JqZWN0LCBhbm5vdGF0ZWQgYXMgYSBEYXRhRmxvd1NvdXJjZS4gRm9yIGFsbCBwcmFjdGljYWwgcHVycG9zZXMsIGEgRGF0YUZsb3dTb3VyY2VcbiAgICogaXMganVzdCBhIHJlZ3VsYXIgb2JqZWN0IHdpdGggUnhKUyBPYnNlcnZhYmxlcywgYnV0IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyXG4gICAqIGNvbXBvbmVudHMgaW4gdGhlIGZyYW1ld29yayBzdWNoIGFzIERhdGFGbG93Tm9kZSwgdGhlIHJldHVybmVkIG9iamVjdCBpcyBhbiBpbnN0YW5jZVxuICAgKiBvZiBEYXRhRmxvd1NvdXJjZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG91dHB1dE9iamVjdCBhbiBvYmplY3QgY29udGFpbmluZyBSeEpTIE9ic2VydmFibGVzLlxuICAgKiBAcmV0dXJuIHtEYXRhRmxvd1NvdXJjZX0gYSBEYXRhRmxvd1NvdXJjZSBlcXVpdmFsZW50IHRvIHRoZSBnaXZlbiBvdXRwdXRPYmplY3RcbiAgICovXG4gIGNyZWF0ZURhdGFGbG93U291cmNlOiBmdW5jdGlvbiBjcmVhdGVEYXRhRmxvd1NvdXJjZSgpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgICAgcmV0dXJuIERhdGFGbG93U291cmNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICBGLnByb3RvdHlwZSA9IERhdGFGbG93U291cmNlLnByb3RvdHlwZTtcbiAgICByZXR1cm4gbmV3IEYoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIERhdGFGbG93U2luaywgZ2l2ZW4gYSBkZWZpbml0aW9uIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgaW5qZWN0ZWQgaW5wdXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkZWZpbml0aW9uRm4gYSBmdW5jdGlvbiBleHBlY3Rpbmcgc29tZSBEYXRhRmxvd05vZGUocykgYXNcbiAgICogYXJndW1lbnRzLiBUaGUgZnVuY3Rpb24gc2hvdWxkIHN1YnNjcmliZSB0byBPYnNlcnZhYmxlcyBvZiB0aGUgaW5wdXQgRGF0YUZsb3dOb2Rlc1xuICAgKiBhbmQgc2hvdWxkIHJldHVybiBhIGBSeC5EaXNwb3NhYmxlYCBzdWJzY3JpcHRpb24uXG4gICAqIEByZXR1cm4ge0RhdGFGbG93U2lua30gYSBEYXRhRmxvd1NpbmssIGNvbnRhaW5pbmcgYSBgaW5qZWN0KGlucHV0cy4uLilgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY3JlYXRlRGF0YUZsb3dTaW5rOiBmdW5jdGlvbiBjcmVhdGVEYXRhRmxvd1NpbmsoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICAgIHJldHVybiBEYXRhRmxvd1NpbmsuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIEYucHJvdG90eXBlID0gRGF0YUZsb3dTaW5rLnByb3RvdHlwZTtcbiAgICByZXR1cm4gbmV3IEYoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIERhdGFGbG93Tm9kZSByZXByZXNlbnRpbmcgYSBNb2RlbCwgaGF2aW5nIHNvbWUgSW50ZW50IGFzIGlucHV0LlxuICAgKlxuICAgKiBJcyBhIHNwZWNpYWxpemVkIGNhc2Ugb2YgYGNyZWF0ZURhdGFGbG93Tm9kZSgpYCwgaGVuY2UgY2FuIGFsc28gcmVjZWl2ZSBtdWx0aXBsZVxuICAgKiBpbnRlcmZhY2VzIGFuZCBtdWx0aXBsZSBpbnB1dHMgaW4gYGRlZmluaXRpb25GbmAuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nPn0gW2ludGVudEludGVyZmFjZV0gcHJvcGVydHkgbmFtZXMgdGhhdCBhcmUgZXhwZWN0ZWQgdG8gZXhpc3QgYXNcbiAgICogUnhKUyBPYnNlcnZhYmxlcyBpbiB0aGUgaW5wdXQgSW50ZW50LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkZWZpbml0aW9uRm4gYSBmdW5jdGlvbiBleHBlY3RpbmcgYW4gSW50ZW50IG9iamVjdCBhcyBwYXJhbWV0ZXIuXG4gICAqIFNob3VsZCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgUnhKUyBPYnNlcnZhYmxlcyBhcyBwcm9wZXJ0aWVzLlxuICAgKiBAcmV0dXJuIHtEYXRhRmxvd05vZGV9IGEgRGF0YUZsb3dOb2RlIHJlcHJlc2VudGluZyBhIE1vZGVsLCBjb250YWluaW5nIGFcbiAgICogYGluamVjdChpbnRlbnQpYCBmdW5jdGlvbi5cbiAgICogQGZ1bmN0aW9uIGNyZWF0ZU1vZGVsXG4gICAqL1xuICBjcmVhdGVNb2RlbDogcmVxdWlyZSgnLi9jcmVhdGUtbW9kZWwnKSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIERhdGFGbG93Tm9kZSByZXByZXNlbnRpbmcgYSBWaWV3LCBoYXZpbmcgc29tZSBNb2RlbCBhcyBpbnB1dC5cbiAgICpcbiAgICogSXMgYSBzcGVjaWFsaXplZCBjYXNlIG9mIGBjcmVhdGVEYXRhRmxvd05vZGUoKWAsIGhlbmNlIGNhbiBhbHNvIHJlY2VpdmUgbXVsdGlwbGVcbiAgICogaW50ZXJmYWNlcyBhbmQgbXVsdGlwbGUgaW5wdXRzIGluIGBkZWZpbml0aW9uRm5gLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZz59IFttb2RlbEludGVyZmFjZV0gcHJvcGVydHkgbmFtZXMgdGhhdCBhcmUgZXhwZWN0ZWQgdG8gZXhpc3QgYXNcbiAgICogUnhKUyBPYnNlcnZhYmxlcyBpbiB0aGUgaW5wdXQgTW9kZWwuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRlZmluaXRpb25GbiBhIGZ1bmN0aW9uIGV4cGVjdGluZyBhIE1vZGVsIG9iamVjdCBhcyBwYXJhbWV0ZXIuXG4gICAqIFNob3VsZCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgUnhKUyBPYnNlcnZhYmxlcyBhcyBwcm9wZXJ0aWVzLiBUaGUgb2JqZWN0ICoqbXVzdFxuICAgKiBjb250YWluKiogdHdvIHByb3BlcnRpZXM6IGB2dHJlZSRgIGFuZCBgZXZlbnRzYC4gVGhlIHZhbHVlIG9mIGBldmVudHNgIG11c3QgYmUgYW5cbiAgICogYXJyYXkgb2Ygc3RyaW5ncyB3aXRoIHRoZSBuYW1lcyBvZiB0aGUgT2JzZXJ2YWJsZXMgdGhhdCBjYXJyeSBET00gZXZlbnRzLiBgdnRyZWUkYFxuICAgKiBzaG91bGQgYmUgYW4gT2JzZXJ2YWJsZSBlbWl0dGluZyBpbnN0YW5jZXMgb2YgVlRyZWUgKFZpcnR1YWwgRE9NIGVsZW1lbnRzKS5cbiAgICogQHJldHVybiB7RGF0YUZsb3dOb2RlfSBhIERhdGFGbG93Tm9kZSByZXByZXNlbnRpbmcgYSBWaWV3LCBjb250YWluaW5nIGFcbiAgICogYGluamVjdChtb2RlbClgIGZ1bmN0aW9uLlxuICAgKiBAZnVuY3Rpb24gY3JlYXRlVmlld1xuICAgKi9cbiAgY3JlYXRlVmlldzogcmVxdWlyZSgnLi9jcmVhdGUtdmlldycpLFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgRGF0YUZsb3dOb2RlIHJlcHJlc2VudGluZyBhbiBJbnRlbnQsIGhhdmluZyBzb21lIFZpZXcgYXMgaW5wdXQuXG4gICAqXG4gICAqIElzIGEgc3BlY2lhbGl6ZWQgY2FzZSBvZiBgY3JlYXRlRGF0YUZsb3dOb2RlKClgLCBoZW5jZSBjYW4gYWxzbyByZWNlaXZlIG11bHRpcGxlXG4gICAqIGludGVyZmFjZXMgYW5kIG11bHRpcGxlIGlucHV0cyBpbiBgZGVmaW5pdGlvbkZuYC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxTdHJpbmc+fSBbdmlld0ludGVyZmFjZV0gcHJvcGVydHkgbmFtZXMgdGhhdCBhcmUgZXhwZWN0ZWQgdG8gZXhpc3QgYXNcbiAgICogUnhKUyBPYnNlcnZhYmxlcyBpbiB0aGUgaW5wdXQgVmlldy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvbkZuIGEgZnVuY3Rpb24gZXhwZWN0aW5nIGEgVmlldyBvYmplY3QgYXMgcGFyYW1ldGVyLlxuICAgKiBTaG91bGQgcmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIFJ4SlMgT2JzZXJ2YWJsZXMgYXMgcHJvcGVydGllcy5cbiAgICogQHJldHVybiB7RGF0YUZsb3dOb2RlfSBhIERhdGFGbG93Tm9kZSByZXByZXNlbnRpbmcgYW4gSW50ZW50LCBjb250YWluaW5nIGFcbiAgICogYGluamVjdCh2aWV3KWAgZnVuY3Rpb24uXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVJbnRlbnRcbiAgICovXG4gIGNyZWF0ZUludGVudDogcmVxdWlyZSgnLi9jcmVhdGUtaW50ZW50JyksXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBSZW5kZXJlciAoYSBEYXRhRmxvd1NpbmspIGJvdW5kIHRvIGEgRE9NIGNvbnRhaW5lciBlbGVtZW50LiBDb250YWlucyBhblxuICAgKiBgaW5qZWN0YCBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2l0aCBhIFZpZXcgYXMgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7KFN0cmluZ3xIVE1MRWxlbWVudCl9IGNvbnRhaW5lciB0aGUgRE9NIHNlbGVjdG9yIGZvciB0aGUgZWxlbWVudCAob3IgdGhlXG4gICAqIGVsZW1lbnQgaXRzZWxmKSB0byBjb250YWluIHRoZSByZW5kZXJpbmcgb2YgdGhlIFZUcmVlcy5cbiAgICogQHJldHVybiB7UmVuZGVyZXJ9IGEgUmVuZGVyZXIgb2JqZWN0IGNvbnRhaW5pbmcgYW4gYGluamVjdCh2aWV3KWAgZnVuY3Rpb24uXG4gICAqIEBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlclxuICAgKi9cbiAgY3JlYXRlUmVuZGVyZXI6IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBuZXcgUmVuZGVyZXIoY29udGFpbmVyKTtcbiAgfSxcblxuICAvKipcbiAgICogVGllcyB0b2dldGhlciB0aGUgZ2l2ZW4gaW5wdXQgRGF0YUZsb3dOb2RlcywgbWFraW5nIHRoZW0gYmUgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAqIHRvIGVhY2ggb3RoZXIuIENhbGxzIGBpbmplY3QoKWAgb24gZWFjaCBvZiB0aGUgZ2l2ZW4gRGF0YUZsb3dOb2RlcywgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IG51bWJlciBvZiBpbnB1dHMsIGJ1dCBpdCBpcyBjb21tb25seVxuICAgKiB1c2VkIGZvciB0aGUgTW9kZWwtVmlldy1JbnRlbnQgdHJpcGxlIG9mIG5vZGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGFGbG93Tm9kZX0gbW9kZWwgYSBNb2RlbCBub2RlLlxuICAgKiBAcGFyYW0ge0RhdGFGbG93Tm9kZX0gdmlldyBhIFZpZXcgbm9kZS5cbiAgICogQHBhcmFtIHtEYXRhRmxvd05vZGV9IGludGVudCBhbiBJbnRlbnQgbm9kZS5cbiAgICogQGZ1bmN0aW9uIGNpcmN1bGFySW5qZWN0XG4gICAqL1xuICBjaXJjdWxhckluamVjdDogZnVuY3Rpb24gY2lyY3VsYXJJbmplY3QoKSB7XG4gICAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBhcmd1bWVudHNbaV07XG4gICAgICB2YXIgcHJldmlvdXMgPSBhcmd1bWVudHNbKGkgLSAxID49IDApID8gaSAtIDEgOiBhcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBjdXJyZW50LmluamVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBpbnB1dC4gY2lyY3VsYXJJbmplY3QoKSBleHBlY3RlZCBhIERhdGFGbG93Tm9kZSBhcyBpbnB1dCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC5pbmplY3QocHJldmlvdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhIGhvb2sgZm9yIG1hbmlwdWxhdGluZyBhbiBlbGVtZW50IGZyb20gdGhlIHJlYWwgRE9NLiBUaGlzIGlzIGEgaGVscGVyIGZvclxuICAgKiBjcmVhdGluZyBWVHJlZXMgaW4gVmlld3MuIFVzZWZ1bCBmb3IgY2FsbGluZyBgZm9jdXMoKWAgb24gdGhlIERPTSBlbGVtZW50LCBvciBkb2luZ1xuICAgKiBzaW1pbGFyIG11dGF0aW9ucy5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SYXlub3MvbWVyY3VyeS9ibG9iL21hc3Rlci9kb2NzL2ZhcS5tZCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBhIGZ1bmN0aW9uIHdpdGggdHdvIGFyZ3VtZW50czogYGVsZW1lbnRgLCBgcHJvcGVydHlgLlxuICAgKiBAcmV0dXJuIHtQcm9wZXJ0eUhvb2t9IGEgaG9va1xuICAgKi9cbiAgdmRvbVByb3BIb29rOiBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5SG9vayhmbik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgc2hvcnRjdXQgdG8gdGhlIHJvb3Qgb2JqZWN0IG9mIFtSeEpTXShodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmUtRXh0ZW5zaW9ucy9SeEpTKS5cbiAgICogQG5hbWUgUnhcbiAgICovXG4gIFJ4OiBSeCxcblxuICAvKipcbiAgICogQSBzaG9ydGN1dCB0byBbdmlydHVhbC1oeXBlcnNjcmlwdF0oXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0LUVzY2gvdmlydHVhbC1kb20vdHJlZS9tYXN0ZXIvdmlydHVhbC1oeXBlcnNjcmlwdCkuXG4gICAqIFRoaXMgaXMgYSBoZWxwZXIgZm9yIGNyZWF0aW5nIFZUcmVlcyBpbiBWaWV3cy5cbiAgICogQG5hbWUgaFxuICAgKi9cbiAgaDogVmlydHVhbERPTS5oXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFJ4ID0gcmVxdWlyZSgncngnKTtcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9ycycpO1xudmFyIEN5Y2xlSW50ZXJmYWNlRXJyb3IgPSBlcnJvcnMuQ3ljbGVJbnRlcmZhY2VFcnJvcjtcblxuZnVuY3Rpb24gcmVwbGljYXRlKHNvdXJjZSwgc3ViamVjdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZXBsaWNhdGUoKSBpZiBzb3VyY2UgaXMgdW5kZWZpbmVkLicpO1xuICB9XG4gIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgIGZ1bmN0aW9uIHJlcGxpY2F0aW9uT25OZXh0KHgpIHtcbiAgICAgIHN1YmplY3Qub25OZXh0KHgpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gcmVwbGljYXRpb25PbkVycm9yKGVycikge1xuICAgICAgc3ViamVjdC5vbkVycm9yKGVycik7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICApO1xufVxuXG5mdW5jdGlvbiBjaGVja0lucHV0SW50ZXJmYWNlQXJyYXkoaW5wdXRJbnRlcmZhY2UpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGlucHV0SW50ZXJmYWNlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYW4gYXJyYXkgYXMgdGhlIGludGVyZmFjZSBvZiB0aGUgaW5wdXQgZm9yIFxcbicgK1xuICAgICAgJ3RoZSBEYXRhRmxvd05vZGUuJ1xuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJbnB1dEludGVyZmFjZU9ubHlTdHJpbmdzKGlucHV0SW50ZXJmYWNlKSB7XG4gIGZvciAodmFyIGkgPSBpbnB1dEludGVyZmFjZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXRJbnRlcmZhY2VbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHN0cmluZ3MgYXMgbmFtZXMgb2YgcHJvcGVydGllcyBpbiB0aGUgaW5wdXQgaW50ZXJmYWNlJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTdHViUHJvcGVydGllc0Zyb21JbnRlcmZhY2UoaW5wdXRTdHViLCBpbnB1dEludGVyZmFjZSkge1xuICBmb3IgKHZhciBpID0gaW5wdXRJbnRlcmZhY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpbnB1dFN0dWJbaW5wdXRJbnRlcmZhY2VbaV1dID0gbmV3IFJ4LlN1YmplY3QoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja091dHB1dE9iamVjdChvdXRwdXQpIHtcbiAgaWYgKHR5cGVvZiBvdXRwdXQgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERhdGFGbG93Tm9kZSBzaG91bGQgYWx3YXlzIHJldHVybiBhbiBvYmplY3QuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weVByb3BlcnRpZXMob3JpZywgZGVzdCkge1xuICBmb3IgKHZhciBrZXkgaW4gb3JpZykge1xuICAgIGlmIChvcmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGRlc3Rba2V5XSA9IG9yaWdba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGljYXRlQWxsKGlucHV0LCBzdHViKSB7XG4gIGZvciAodmFyIGtleSBpbiBzdHViKSB7XG4gICAgaWYgKHN0dWIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRocm93IG5ldyBDeWNsZUludGVyZmFjZUVycm9yKCdJbnB1dCBzaG91bGQgaGF2ZSB0aGUgcmVxdWlyZWQgcHJvcGVydHkgJyArXG4gICAgICAgICAga2V5LCBTdHJpbmcoa2V5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVwbGljYXRlKGlucHV0W2tleV0sIHN0dWJba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIERhdGFGbG93Tm9kZSgpIHtcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgZGVmaW5pdGlvbkZuID0gYXJncy5wb3AoKTtcbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uRm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFGbG93Tm9kZSBleHBlY3RzIHRoZSBkZWZpbml0aW9uRm4gYXMgdGhlIGxhc3QgYXJndW1lbnQuJyk7XG4gIH1cbiAgdmFyIGludGVyZmFjZXMgPSBhcmdzO1xuICB2YXIgaW5wdXRTdHVicyA9IGludGVyZmFjZXMubWFwKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9OyB9KTtcbiAgdmFyIHdhc0luamVjdGVkID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBpbnRlcmZhY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY2hlY2tJbnB1dEludGVyZmFjZUFycmF5KGludGVyZmFjZXNbaV0pO1xuICAgIGNoZWNrSW5wdXRJbnRlcmZhY2VPbmx5U3RyaW5ncyhpbnRlcmZhY2VzW2ldKTtcbiAgICBtYWtlU3R1YlByb3BlcnRpZXNGcm9tSW50ZXJmYWNlKGlucHV0U3R1YnNbaV0sIGludGVyZmFjZXNbaV0pO1xuICB9XG4gIHZhciBvdXRwdXQgPSBkZWZpbml0aW9uRm4uYXBwbHkodGhpcywgaW5wdXRTdHVicyk7XG4gIGNoZWNrT3V0cHV0T2JqZWN0KG91dHB1dCk7XG4gIGNvcHlQcm9wZXJ0aWVzKG91dHB1dCwgdGhpcyk7XG4gIHRoaXMuaW5qZWN0ID0gZnVuY3Rpb24gaW5qZWN0SW50b0RhdGFGbG93Tm9kZSgpIHtcbiAgICBpZiAod2FzSW5qZWN0ZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRGF0YUZsb3dOb2RlIGhhcyBhbHJlYWR5IGJlZW4gaW5qZWN0ZWQgYW4gaW5wdXQuJyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHJlcGxpY2F0ZUFsbChhcmd1bWVudHNbaV0sIGlucHV0U3R1YnNbaV0pO1xuICAgIH1cbiAgICB3YXNJbmplY3RlZCA9IHRydWU7XG4gIH07XG4gIHRoaXMuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGFGbG93Tm9kZS5hcHBseSh7fSwgaW50ZXJmYWNlcy5jb25jYXQoW2RlZmluaXRpb25Gbl0pKTtcbiAgfTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YUZsb3dOb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBEYXRhRmxvd1NpbmsoZGVmaW5pdGlvbkZuKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhRmxvd1NpbmsgZXhwZWN0cyBvbmx5IG9uZSBhcmd1bWVudDogdGhlIGRlZmluaXRpb24gZnVuY3Rpb24uJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uRm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFGbG93U2luayBleHBlY3RzIHRoZSBhcmd1bWVudCB0byBiZSB0aGUgZGVmaW5pdGlvbiBmdW5jdGlvbi4nKTtcbiAgfVxuICBkZWZpbml0aW9uRm4uZGlzcGxheU5hbWUgKz0gJyhEYXRhRmxvd1NpbmsgZGVmRm4pJztcbiAgdGhpcy5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3RJbnRvRGF0YUZsb3dTaW5rKCkge1xuICAgIHJldHVybiBkZWZpbml0aW9uRm4uYXBwbHkoe30sIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFGbG93U2luaztcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gRGF0YUZsb3dTb3VyY2Uob3V0cHV0T2JqZWN0KSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhRmxvd1NvdXJjZSBleHBlY3RzIG9ubHkgb25lIGFyZ3VtZW50OiB0aGUgb3V0cHV0IG9iamVjdC4nKTtcbiAgfVxuICBpZiAodHlwZW9mIG91dHB1dE9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFGbG93U291cmNlIGV4cGVjdHMgdGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50IHRvIGJlIHRoZSAnICtcbiAgICAgICdvdXRwdXQgb2JqZWN0LidcbiAgICApO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvdXRwdXRPYmplY3QpIHtcbiAgICBpZiAob3V0cHV0T2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXNba2V5XSA9IG91dHB1dE9iamVjdDtcbiAgICB9XG4gIH1cbiAgdGhpcy5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3REYXRhRmxvd1NvdXJjZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRGF0YUZsb3dTb3VyY2UgY2Fubm90IGJlIGluamVjdGVkLiBVc2UgYSBEYXRhRmxvd05vZGUgaW5zdGVhZC4nKTtcbiAgfTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YUZsb3dTb3VyY2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEN5Y2xlSW50ZXJmYWNlRXJyb3IobWVzc2FnZSwgbWlzc2luZ01lbWJlcikge1xuICB0aGlzLm5hbWUgPSAnQ3ljbGVJbnRlcmZhY2VFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IChtZXNzYWdlIHx8ICcnKTtcbiAgdGhpcy5taXNzaW5nTWVtYmVyID0gKG1pc3NpbmdNZW1iZXIgfHwgJycpO1xufVxuQ3ljbGVJbnRlcmZhY2VFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIGN1c3RvbUludGVyZmFjZUVycm9yTWVzc2FnZUluSW5qZWN0KGRhdGFGbG93Tm9kZSwgbWVzc2FnZSkge1xuICB2YXIgb3JpZ2luYWxJbmplY3QgPSBkYXRhRmxvd05vZGUuaW5qZWN0O1xuICBkYXRhRmxvd05vZGUuaW5qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBvcmlnaW5hbEluamVjdC5hcHBseSh7fSwgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0N5Y2xlSW50ZXJmYWNlRXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBDeWNsZUludGVyZmFjZUVycm9yKG1lc3NhZ2UgKyBlcnIubWlzc2luZ01lbWJlciwgZXJyLm1pc3NpbmdNZW1iZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGRhdGFGbG93Tm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEN5Y2xlSW50ZXJmYWNlRXJyb3I6IEN5Y2xlSW50ZXJmYWNlRXJyb3IsXG4gIGN1c3RvbUludGVyZmFjZUVycm9yTWVzc2FnZUluSW5qZWN0OiBjdXN0b21JbnRlcmZhY2VFcnJvck1lc3NhZ2VJbkluamVjdFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gUHJvcGVydHlIb29rKGZuKSB7XG4gIHRoaXMuZm4gPSBmbjtcbn1cblByb3BlcnR5SG9vay5wcm90b3R5cGUuaG9vayA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9wZXJ0eUhvb2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWRE9NID0ge1xuICBoOiByZXF1aXJlKCd2aXJ0dWFsLWRvbScpLmgsXG4gIGRpZmY6IHJlcXVpcmUoJ3ZpcnR1YWwtZG9tL2RpZmYnKSxcbiAgcGF0Y2g6IHJlcXVpcmUoJ3ZpcnR1YWwtZG9tL3BhdGNoJylcbn07XG52YXIgRE9NRGVsZWdhdG9yID0gcmVxdWlyZSgnZG9tLWRlbGVnYXRvcicpO1xudmFyIERhdGFGbG93U2luayA9IHJlcXVpcmUoJy4vZGF0YS1mbG93LXNpbmsnKTtcblxudmFyIGRlbGVnYXRvciA9IG5ldyBET01EZWxlZ2F0b3IoKTtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG8pIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdvYmplY3QnID9cbiAgICAgIG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmXG4gICAgICB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRXZlcnkodnRyZWUkLCBkb21Db250YWluZXIpIHtcbiAgZG9tQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAvLyBNYWtlIHRoZSBET00gbm9kZSBib3VuZCB0byB0aGUgVkRPTSBub2RlXG4gIHZhciByb290Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21Db250YWluZXIuYXBwZW5kQ2hpbGQocm9vdE5vZGUpO1xuICByZXR1cm4gdnRyZWUkLnN0YXJ0V2l0aChWRE9NLmgoKSlcbiAgICAuYnVmZmVyV2l0aENvdW50KDIsIDEpXG4gICAgLnN1YnNjcmliZShmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgb2xkVlRyZWUgPSBidWZmZXJbMF07XG4gICAgICAgIHZhciBuZXdWVHJlZSA9IGJ1ZmZlclsxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdWVHJlZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcm9vdE5vZGUgPSBWRE9NLnBhdGNoKHJvb3ROb2RlLCBWRE9NLmRpZmYob2xkVlRyZWUsIG5ld1ZUcmVlKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBSZW5kZXJlcihjb250YWluZXIpIHtcbiAgLy8gRmluZCBhbmQgcHJlcGFyZSB0aGUgY29udGFpbmVyXG4gIHZhciBkb21Db250YWluZXIgPSAodHlwZW9mIGNvbnRhaW5lciA9PT0gJ3N0cmluZycpID9cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikgOlxuICAgIGNvbnRhaW5lcjtcbiAgaWYgKHR5cGVvZiBjb250YWluZXIgPT09ICdzdHJpbmcnICYmIGRvbUNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlbmRlciBpbnRvIHVua25vd24gZWxlbWVudCBcXCcnICsgY29udGFpbmVyICsgJ1xcJycpO1xuICB9IGVsc2UgaWYgKCFpc0VsZW1lbnQoZG9tQ29udGFpbmVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignR2l2ZW4gY29udGFpbmVyIGlzIG5vdCBhIERPTSBlbGVtZW50IG5laXRoZXIgYSBzZWxlY3RvciBzdHJpbmcuJyk7XG4gIH1cbiAgRGF0YUZsb3dTaW5rLmNhbGwodGhpcywgZnVuY3Rpb24gaW5qZWN0SW50b1JlbmRlcmVyKHZpZXcpIHtcbiAgICByZXR1cm4gcmVuZGVyRXZlcnkodmlldy52dHJlZSQsIGRvbUNvbnRhaW5lcik7XG4gIH0pO1xuICB0aGlzLmRlbGVnYXRvciA9IGRlbGVnYXRvcjtcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhRmxvd1NpbmsucHJvdG90eXBlKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlbmRlcmVyOiBSZW5kZXJlcixcbiAgcmVuZGVyRXZlcnk6IHJlbmRlckV2ZXJ5LFxuICBpc0VsZW1lbnQ6IGlzRWxlbWVudCxcbiAgZGVsZWdhdG9yOiBkZWxlZ2F0b3Jcbn07XG4iLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsKXtcbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAoZ2xvYmFsLiR0cmFjZXVyUnVudGltZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgJE9iamVjdCA9IE9iamVjdDtcbiAgdmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gIHZhciAkY3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG4gIHZhciAkZGVmaW5lUHJvcGVydGllcyA9ICRPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9ICRPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIHZhciAkZnJlZXplID0gJE9iamVjdC5mcmVlemU7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRrZXlzID0gJE9iamVjdC5rZXlzO1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gJE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciAkdG9TdHJpbmcgPSAkT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcbiAgdmFyICRzZWFsID0gT2JqZWN0LnNlYWw7XG4gIHZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbiAgZnVuY3Rpb24gbm9uRW51bSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuICB2YXIgbWV0aG9kID0gbm9uRW51bTtcbiAgdmFyIGNvdW50ZXIgPSAwO1xuICBmdW5jdGlvbiBuZXdVbmlxdWVTdHJpbmcoKSB7XG4gICAgcmV0dXJuICdfXyQnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU5KSArICckJyArICsrY291bnRlciArICckX18nO1xuICB9XG4gIHZhciBzeW1ib2xJbnRlcm5hbFByb3BlcnR5ID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gIHZhciBzeW1ib2xEZXNjcmlwdGlvblByb3BlcnR5ID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gIHZhciBzeW1ib2xEYXRhUHJvcGVydHkgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgdmFyIHN5bWJvbFZhbHVlcyA9ICRjcmVhdGUobnVsbCk7XG4gIHZhciBwcml2YXRlTmFtZXMgPSAkY3JlYXRlKG51bGwpO1xuICBmdW5jdGlvbiBpc1ByaXZhdGVOYW1lKHMpIHtcbiAgICByZXR1cm4gcHJpdmF0ZU5hbWVzW3NdO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVByaXZhdGVOYW1lKCkge1xuICAgIHZhciBzID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gICAgcHJpdmF0ZU5hbWVzW3NdID0gdHJ1ZTtcbiAgICByZXR1cm4gcztcbiAgfVxuICBmdW5jdGlvbiBpc1NoaW1TeW1ib2woc3ltYm9sKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzeW1ib2wgPT09ICdvYmplY3QnICYmIHN5bWJvbCBpbnN0YW5jZW9mIFN5bWJvbFZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIHR5cGVPZih2KSB7XG4gICAgaWYgKGlzU2hpbVN5bWJvbCh2KSlcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICByZXR1cm4gdHlwZW9mIHY7XG4gIH1cbiAgZnVuY3Rpb24gU3ltYm9sKGRlc2NyaXB0aW9uKSB7XG4gICAgdmFyIHZhbHVlID0gbmV3IFN5bWJvbFZhbHVlKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSlcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTeW1ib2wgY2Fubm90IGJlIG5ld1xcJ2VkJyk7XG4gIH1cbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIG5vbkVudW0oU3ltYm9sKSk7XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBtZXRob2QoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN5bWJvbFZhbHVlID0gdGhpc1tzeW1ib2xEYXRhUHJvcGVydHldO1xuICAgIGlmICghZ2V0T3B0aW9uKCdzeW1ib2xzJykpXG4gICAgICByZXR1cm4gc3ltYm9sVmFsdWVbc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eV07XG4gICAgaWYgKCFzeW1ib2xWYWx1ZSlcbiAgICAgIHRocm93IFR5cGVFcnJvcignQ29udmVyc2lvbiBmcm9tIHN5bWJvbCB0byBzdHJpbmcnKTtcbiAgICB2YXIgZGVzYyA9IHN5bWJvbFZhbHVlW3N5bWJvbERlc2NyaXB0aW9uUHJvcGVydHldO1xuICAgIGlmIChkZXNjID09PSB1bmRlZmluZWQpXG4gICAgICBkZXNjID0gJyc7XG4gICAgcmV0dXJuICdTeW1ib2woJyArIGRlc2MgKyAnKSc7XG4gIH0pKTtcbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbC5wcm90b3R5cGUsICd2YWx1ZU9mJywgbWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzeW1ib2xWYWx1ZSA9IHRoaXNbc3ltYm9sRGF0YVByb3BlcnR5XTtcbiAgICBpZiAoIXN5bWJvbFZhbHVlKVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdDb252ZXJzaW9uIGZyb20gc3ltYm9sIHRvIHN0cmluZycpO1xuICAgIGlmICghZ2V0T3B0aW9uKCdzeW1ib2xzJykpXG4gICAgICByZXR1cm4gc3ltYm9sVmFsdWVbc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eV07XG4gICAgcmV0dXJuIHN5bWJvbFZhbHVlO1xuICB9KSk7XG4gIGZ1bmN0aW9uIFN5bWJvbFZhbHVlKGRlc2NyaXB0aW9uKSB7XG4gICAgdmFyIGtleSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICAgICRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBzeW1ib2xEYXRhUHJvcGVydHksIHt2YWx1ZTogdGhpc30pO1xuICAgICRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBzeW1ib2xJbnRlcm5hbFByb3BlcnR5LCB7dmFsdWU6IGtleX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eSh0aGlzLCBzeW1ib2xEZXNjcmlwdGlvblByb3BlcnR5LCB7dmFsdWU6IGRlc2NyaXB0aW9ufSk7XG4gICAgZnJlZXplKHRoaXMpO1xuICAgIHN5bWJvbFZhbHVlc1trZXldID0gdGhpcztcbiAgfVxuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sVmFsdWUucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBub25FbnVtKFN5bWJvbCkpO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sVmFsdWUucHJvdG90eXBlLCAndG9TdHJpbmcnLCB7XG4gICAgdmFsdWU6IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZW51bWVyYWJsZTogZmFsc2VcbiAgfSk7XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2xWYWx1ZS5wcm90b3R5cGUsICd2YWx1ZU9mJywge1xuICAgIHZhbHVlOiBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YsXG4gICAgZW51bWVyYWJsZTogZmFsc2VcbiAgfSk7XG4gIHZhciBoYXNoUHJvcGVydHkgPSBjcmVhdGVQcml2YXRlTmFtZSgpO1xuICB2YXIgaGFzaFByb3BlcnR5RGVzY3JpcHRvciA9IHt2YWx1ZTogdW5kZWZpbmVkfTtcbiAgdmFyIGhhc2hPYmplY3RQcm9wZXJ0aWVzID0ge1xuICAgIGhhc2g6IHt2YWx1ZTogdW5kZWZpbmVkfSxcbiAgICBzZWxmOiB7dmFsdWU6IHVuZGVmaW5lZH1cbiAgfTtcbiAgdmFyIGhhc2hDb3VudGVyID0gMDtcbiAgZnVuY3Rpb24gZ2V0T3duSGFzaE9iamVjdChvYmplY3QpIHtcbiAgICB2YXIgaGFzaE9iamVjdCA9IG9iamVjdFtoYXNoUHJvcGVydHldO1xuICAgIGlmIChoYXNoT2JqZWN0ICYmIGhhc2hPYmplY3Quc2VsZiA9PT0gb2JqZWN0KVxuICAgICAgcmV0dXJuIGhhc2hPYmplY3Q7XG4gICAgaWYgKCRpc0V4dGVuc2libGUob2JqZWN0KSkge1xuICAgICAgaGFzaE9iamVjdFByb3BlcnRpZXMuaGFzaC52YWx1ZSA9IGhhc2hDb3VudGVyKys7XG4gICAgICBoYXNoT2JqZWN0UHJvcGVydGllcy5zZWxmLnZhbHVlID0gb2JqZWN0O1xuICAgICAgaGFzaFByb3BlcnR5RGVzY3JpcHRvci52YWx1ZSA9ICRjcmVhdGUobnVsbCwgaGFzaE9iamVjdFByb3BlcnRpZXMpO1xuICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgaGFzaFByb3BlcnR5LCBoYXNoUHJvcGVydHlEZXNjcmlwdG9yKTtcbiAgICAgIHJldHVybiBoYXNoUHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGZyZWV6ZShvYmplY3QpIHtcbiAgICBnZXRPd25IYXNoT2JqZWN0KG9iamVjdCk7XG4gICAgcmV0dXJuICRmcmVlemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhvYmplY3QpIHtcbiAgICBnZXRPd25IYXNoT2JqZWN0KG9iamVjdCk7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIGZ1bmN0aW9uIHNlYWwob2JqZWN0KSB7XG4gICAgZ2V0T3duSGFzaE9iamVjdChvYmplY3QpO1xuICAgIHJldHVybiAkc2VhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIGZyZWV6ZShTeW1ib2xWYWx1ZS5wcm90b3R5cGUpO1xuICBmdW5jdGlvbiBpc1N5bWJvbFN0cmluZyhzKSB7XG4gICAgcmV0dXJuIHN5bWJvbFZhbHVlc1tzXSB8fCBwcml2YXRlTmFtZXNbc107XG4gIH1cbiAgZnVuY3Rpb24gdG9Qcm9wZXJ0eShuYW1lKSB7XG4gICAgaWYgKGlzU2hpbVN5bWJvbChuYW1lKSlcbiAgICAgIHJldHVybiBuYW1lW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIHJldHVybiBuYW1lO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVN5bWJvbEtleXMoYXJyYXkpIHtcbiAgICB2YXIgcnYgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzU3ltYm9sU3RyaW5nKGFycmF5W2ldKSkge1xuICAgICAgICBydi5wdXNoKGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xuICB9XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSB7XG4gICAgcmV0dXJuIHJlbW92ZVN5bWJvbEtleXMoJGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSk7XG4gIH1cbiAgZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgICByZXR1cm4gcmVtb3ZlU3ltYm9sS2V5cygka2V5cyhvYmplY3QpKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KSB7XG4gICAgdmFyIHJ2ID0gW107XG4gICAgdmFyIG5hbWVzID0gJGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3ltYm9sID0gc3ltYm9sVmFsdWVzW25hbWVzW2ldXTtcbiAgICAgIGlmIChzeW1ib2wpIHtcbiAgICAgICAgcnYucHVzaChzeW1ib2wpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnY7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgbmFtZSkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgdG9Qcm9wZXJ0eShuYW1lKSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkobmFtZSkge1xuICAgIHJldHVybiAkaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCB0b1Byb3BlcnR5KG5hbWUpKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRPcHRpb24obmFtZSkge1xuICAgIHJldHVybiBnbG9iYWwudHJhY2V1ciAmJiBnbG9iYWwudHJhY2V1ci5vcHRpb25zW25hbWVdO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChpc1NoaW1TeW1ib2wobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBuYW1lW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIH1cbiAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsT2JqZWN0KE9iamVjdCkge1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScsIHt2YWx1ZTogZGVmaW5lUHJvcGVydHl9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlOYW1lcycsIHt2YWx1ZTogZ2V0T3duUHJvcGVydHlOYW1lc30pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCB7dmFsdWU6IGdldE93blByb3BlcnR5RGVzY3JpcHRvcn0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QucHJvdG90eXBlLCAnaGFzT3duUHJvcGVydHknLCB7dmFsdWU6IGhhc093blByb3BlcnR5fSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2ZyZWV6ZScsIHt2YWx1ZTogZnJlZXplfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ3ByZXZlbnRFeHRlbnNpb25zJywge3ZhbHVlOiBwcmV2ZW50RXh0ZW5zaW9uc30pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdzZWFsJywge3ZhbHVlOiBzZWFsfSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2tleXMnLCB7dmFsdWU6IGtleXN9KTtcbiAgfVxuICBmdW5jdGlvbiBleHBvcnRTdGFyKG9iamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZXMgPSAkZ2V0T3duUHJvcGVydHlOYW1lcyhhcmd1bWVudHNbaV0pO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVzW2pdO1xuICAgICAgICBpZiAoaXNTeW1ib2xTdHJpbmcobmFtZSkpXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIChmdW5jdGlvbihtb2QsIG5hbWUpIHtcbiAgICAgICAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbW9kW25hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoYXJndW1lbnRzW2ldLCBuYW1lc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9IG51bGwgJiYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH1cbiAgZnVuY3Rpb24gdG9PYmplY3QoeCkge1xuICAgIGlmICh4ID09IG51bGwpXG4gICAgICB0aHJvdyAkVHlwZUVycm9yKCk7XG4gICAgcmV0dXJuICRPYmplY3QoeCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tPYmplY3RDb2VyY2libGUoYXJndW1lbnQpIHtcbiAgICBpZiAoYXJndW1lbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhbiBPYmplY3QnKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3VtZW50O1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsU3ltYm9sKGdsb2JhbCwgU3ltYm9sKSB7XG4gICAgaWYgKCFnbG9iYWwuU3ltYm9sKSB7XG4gICAgICBnbG9iYWwuU3ltYm9sID0gU3ltYm9sO1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scztcbiAgICB9XG4gICAgaWYgKCFnbG9iYWwuU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICBnbG9iYWwuU3ltYm9sLml0ZXJhdG9yID0gU3ltYm9sKCdTeW1ib2wuaXRlcmF0b3InKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0dXBHbG9iYWxzKGdsb2JhbCkge1xuICAgIHBvbHlmaWxsU3ltYm9sKGdsb2JhbCwgU3ltYm9sKTtcbiAgICBnbG9iYWwuUmVmbGVjdCA9IGdsb2JhbC5SZWZsZWN0IHx8IHt9O1xuICAgIGdsb2JhbC5SZWZsZWN0Lmdsb2JhbCA9IGdsb2JhbC5SZWZsZWN0Lmdsb2JhbCB8fCBnbG9iYWw7XG4gICAgcG9seWZpbGxPYmplY3QoZ2xvYmFsLk9iamVjdCk7XG4gIH1cbiAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG4gIGdsb2JhbC4kdHJhY2V1clJ1bnRpbWUgPSB7XG4gICAgY2hlY2tPYmplY3RDb2VyY2libGU6IGNoZWNrT2JqZWN0Q29lcmNpYmxlLFxuICAgIGNyZWF0ZVByaXZhdGVOYW1lOiBjcmVhdGVQcml2YXRlTmFtZSxcbiAgICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAgIGV4cG9ydFN0YXI6IGV4cG9ydFN0YXIsXG4gICAgZ2V0T3duSGFzaE9iamVjdDogZ2V0T3duSGFzaE9iamVjdCxcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gICAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICAgIGlzUHJpdmF0ZU5hbWU6IGlzUHJpdmF0ZU5hbWUsXG4gICAgaXNTeW1ib2xTdHJpbmc6IGlzU3ltYm9sU3RyaW5nLFxuICAgIGtleXM6ICRrZXlzLFxuICAgIHNldHVwR2xvYmFsczogc2V0dXBHbG9iYWxzLFxuICAgIHRvT2JqZWN0OiB0b09iamVjdCxcbiAgICB0b1Byb3BlcnR5OiB0b1Byb3BlcnR5LFxuICAgIHR5cGVvZjogdHlwZU9mXG4gIH07XG59KSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYXRoO1xuICBmdW5jdGlvbiByZWxhdGl2ZVJlcXVpcmUoY2FsbGVyUGF0aCwgcmVxdWlyZWRQYXRoKSB7XG4gICAgcGF0aCA9IHBhdGggfHwgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnICYmIHJlcXVpcmUoJ3BhdGgnKTtcbiAgICBmdW5jdGlvbiBpc0RpcmVjdG9yeShwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5zbGljZSgtMSkgPT09ICcvJztcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aFswXSA9PT0gJy8nO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1JlbGF0aXZlKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoWzBdID09PSAnLic7XG4gICAgfVxuICAgIGlmIChpc0RpcmVjdG9yeShyZXF1aXJlZFBhdGgpIHx8IGlzQWJzb2x1dGUocmVxdWlyZWRQYXRoKSlcbiAgICAgIHJldHVybjtcbiAgICByZXR1cm4gaXNSZWxhdGl2ZShyZXF1aXJlZFBhdGgpID8gcmVxdWlyZShwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKGNhbGxlclBhdGgpLCByZXF1aXJlZFBhdGgpKSA6IHJlcXVpcmUocmVxdWlyZWRQYXRoKTtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUucmVxdWlyZSA9IHJlbGF0aXZlUmVxdWlyZTtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgZnVuY3Rpb24gc3ByZWFkKCkge1xuICAgIHZhciBydiA9IFtdLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgaXRlclJlc3VsdDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbHVlVG9TcHJlYWQgPSAkdHJhY2V1clJ1bnRpbWUuY2hlY2tPYmplY3RDb2VyY2libGUoYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWVUb1NwcmVhZFskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3Qgc3ByZWFkIG5vbi1pdGVyYWJsZSBvYmplY3QuJyk7XG4gICAgICB9XG4gICAgICB2YXIgaXRlciA9IHZhbHVlVG9TcHJlYWRbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoU3ltYm9sLml0ZXJhdG9yKV0oKTtcbiAgICAgIHdoaWxlICghKGl0ZXJSZXN1bHQgPSBpdGVyLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBydltqKytdID0gaXRlclJlc3VsdC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5zcHJlYWQgPSBzcHJlYWQ7XG59KSgpO1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciAkT2JqZWN0ID0gT2JqZWN0O1xuICB2YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgdmFyICRjcmVhdGUgPSAkT2JqZWN0LmNyZWF0ZTtcbiAgdmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gJHRyYWNldXJSdW50aW1lLmRlZmluZVByb3BlcnRpZXM7XG4gIHZhciAkZGVmaW5lUHJvcGVydHkgPSAkdHJhY2V1clJ1bnRpbWUuZGVmaW5lUHJvcGVydHk7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gJHRyYWNldXJSdW50aW1lLmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gJHRyYWNldXJSdW50aW1lLmdldE93blByb3BlcnR5TmFtZXM7XG4gIHZhciAkZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciAkX18wID0gT2JqZWN0LFxuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lcyA9ICRfXzAuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgIGdldE93blByb3BlcnR5U3ltYm9scyA9ICRfXzAuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuICBmdW5jdGlvbiBzdXBlckRlc2NyaXB0b3IoaG9tZU9iamVjdCwgbmFtZSkge1xuICAgIHZhciBwcm90byA9ICRnZXRQcm90b3R5cGVPZihob21lT2JqZWN0KTtcbiAgICBkbyB7XG4gICAgICB2YXIgcmVzdWx0ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgbmFtZSk7XG4gICAgICBpZiAocmVzdWx0KVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgcHJvdG8gPSAkZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH0gd2hpbGUgKHByb3RvKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHN1cGVyQ29uc3RydWN0b3IoY3Rvcikge1xuICAgIHJldHVybiBjdG9yLl9fcHJvdG9fXztcbiAgfVxuICBmdW5jdGlvbiBzdXBlckNhbGwoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSwgYXJncykge1xuICAgIHJldHVybiBzdXBlckdldChzZWxmLCBob21lT2JqZWN0LCBuYW1lKS5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuICBmdW5jdGlvbiBzdXBlckdldChzZWxmLCBob21lT2JqZWN0LCBuYW1lKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBzdXBlckRlc2NyaXB0b3IoaG9tZU9iamVjdCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgIGlmICghZGVzY3JpcHRvci5nZXQpXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwoc2VsZik7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJTZXQoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHN1cGVyRGVzY3JpcHRvcihob21lT2JqZWN0LCBuYW1lKTtcbiAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQuY2FsbChzZWxmLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHRocm93ICRUeXBlRXJyb3IoKFwic3VwZXIgaGFzIG5vIHNldHRlciAnXCIgKyBuYW1lICsgXCInLlwiKSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIGRlc2NyaXB0b3JzID0ge307XG4gICAgdmFyIG5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBuYW1lID0gbmFtZXNbaV07XG4gICAgICBkZXNjcmlwdG9yc1tuYW1lXSA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBuYW1lKTtcbiAgICB9XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzeW1ib2wgPSBzeW1ib2xzW2ldO1xuICAgICAgZGVzY3JpcHRvcnNbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoc3ltYm9sKV0gPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoc3ltYm9sKSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVDbGFzcyhjdG9yLCBvYmplY3QsIHN0YXRpY09iamVjdCwgc3VwZXJDbGFzcykge1xuICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsICdjb25zdHJ1Y3RvcicsIHtcbiAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMykge1xuICAgICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzID09PSAnZnVuY3Rpb24nKVxuICAgICAgICBjdG9yLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9ICRjcmVhdGUoZ2V0UHJvdG9QYXJlbnQoc3VwZXJDbGFzcyksIGdldERlc2NyaXB0b3JzKG9iamVjdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG9iamVjdDtcbiAgICB9XG4gICAgJGRlZmluZVByb3BlcnR5KGN0b3IsICdwcm90b3R5cGUnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0aWVzKGN0b3IsIGdldERlc2NyaXB0b3JzKHN0YXRpY09iamVjdCkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFByb3RvUGFyZW50KHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBzdXBlckNsYXNzLnByb3RvdHlwZTtcbiAgICAgIGlmICgkT2JqZWN0KHByb3RvdHlwZSkgPT09IHByb3RvdHlwZSB8fCBwcm90b3R5cGUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiBzdXBlckNsYXNzLnByb3RvdHlwZTtcbiAgICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdzdXBlciBwcm90b3R5cGUgbXVzdCBiZSBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICBpZiAoc3VwZXJDbGFzcyA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKChcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyArIFwiLlwiKSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVmYXVsdFN1cGVyQ2FsbChzZWxmLCBob21lT2JqZWN0LCBhcmdzKSB7XG4gICAgaWYgKCRnZXRQcm90b3R5cGVPZihob21lT2JqZWN0KSAhPT0gbnVsbClcbiAgICAgIHN1cGVyQ2FsbChzZWxmLCBob21lT2JqZWN0LCAnY29uc3RydWN0b3InLCBhcmdzKTtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MgPSBjcmVhdGVDbGFzcztcbiAgJHRyYWNldXJSdW50aW1lLmRlZmF1bHRTdXBlckNhbGwgPSBkZWZhdWx0U3VwZXJDYWxsO1xuICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJDYWxsID0gc3VwZXJDYWxsO1xuICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJDb25zdHJ1Y3RvciA9IHN1cGVyQ29uc3RydWN0b3I7XG4gICR0cmFjZXVyUnVudGltZS5zdXBlckdldCA9IHN1cGVyR2V0O1xuICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJTZXQgPSBzdXBlclNldDtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKHR5cGVvZiAkdHJhY2V1clJ1bnRpbWUgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0cmFjZXVyIHJ1bnRpbWUgbm90IGZvdW5kLicpO1xuICB9XG4gIHZhciBjcmVhdGVQcml2YXRlTmFtZSA9ICR0cmFjZXVyUnVudGltZS5jcmVhdGVQcml2YXRlTmFtZTtcbiAgdmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gJHRyYWNldXJSdW50aW1lLmRlZmluZVByb3BlcnRpZXM7XG4gIHZhciAkZGVmaW5lUHJvcGVydHkgPSAkdHJhY2V1clJ1bnRpbWUuZGVmaW5lUHJvcGVydHk7XG4gIHZhciAkY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbiAgdmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gIGZ1bmN0aW9uIG5vbkVudW0odmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH07XG4gIH1cbiAgdmFyIFNUX05FV0JPUk4gPSAwO1xuICB2YXIgU1RfRVhFQ1VUSU5HID0gMTtcbiAgdmFyIFNUX1NVU1BFTkRFRCA9IDI7XG4gIHZhciBTVF9DTE9TRUQgPSAzO1xuICB2YXIgRU5EX1NUQVRFID0gLTI7XG4gIHZhciBSRVRIUk9XX1NUQVRFID0gLTM7XG4gIGZ1bmN0aW9uIGdldEludGVybmFsRXJyb3Ioc3RhdGUpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdUcmFjZXVyIGNvbXBpbGVyIGJ1ZzogaW52YWxpZCBzdGF0ZSBpbiBzdGF0ZSBtYWNoaW5lOiAnICsgc3RhdGUpO1xuICB9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckNvbnRleHQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgdGhpcy5HU3RhdGUgPSBTVF9ORVdCT1JOO1xuICAgIHRoaXMuc3RvcmVkRXhjZXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmluYWxseUZhbGxUaHJvdWdoID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VudF8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyeVN0YWNrXyA9IFtdO1xuICB9XG4gIEdlbmVyYXRvckNvbnRleHQucHJvdG90eXBlID0ge1xuICAgIHB1c2hUcnk6IGZ1bmN0aW9uKGNhdGNoU3RhdGUsIGZpbmFsbHlTdGF0ZSkge1xuICAgICAgaWYgKGZpbmFsbHlTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmluYWxseUZhbGxUaHJvdWdoID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5U3RhY2tfLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJ5U3RhY2tfW2ldLmNhdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZpbmFsbHlGYWxsVGhyb3VnaCA9IHRoaXMudHJ5U3RhY2tfW2ldLmNhdGNoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5hbGx5RmFsbFRocm91Z2ggPT09IG51bGwpXG4gICAgICAgICAgZmluYWxseUZhbGxUaHJvdWdoID0gUkVUSFJPV19TVEFURTtcbiAgICAgICAgdGhpcy50cnlTdGFja18ucHVzaCh7XG4gICAgICAgICAgZmluYWxseTogZmluYWxseVN0YXRlLFxuICAgICAgICAgIGZpbmFsbHlGYWxsVGhyb3VnaDogZmluYWxseUZhbGxUaHJvdWdoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNhdGNoU3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50cnlTdGFja18ucHVzaCh7Y2F0Y2g6IGNhdGNoU3RhdGV9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvcFRyeTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRyeVN0YWNrXy5wb3AoKTtcbiAgICB9LFxuICAgIGdldCBzZW50KCkge1xuICAgICAgdGhpcy5tYXliZVRocm93KCk7XG4gICAgICByZXR1cm4gdGhpcy5zZW50XztcbiAgICB9LFxuICAgIHNldCBzZW50KHYpIHtcbiAgICAgIHRoaXMuc2VudF8gPSB2O1xuICAgIH0sXG4gICAgZ2V0IHNlbnRJZ25vcmVUaHJvdygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbnRfO1xuICAgIH0sXG4gICAgbWF5YmVUaHJvdzogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb24gPT09ICd0aHJvdycpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgIHRocm93IHRoaXMuc2VudF87XG4gICAgICB9XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgRU5EX1NUQVRFOlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBjYXNlIFJFVEhST1dfU1RBVEU6XG4gICAgICAgICAgdGhyb3cgdGhpcy5zdG9yZWRFeGNlcHRpb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxFcnJvcih0aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUV4Y2VwdGlvbjogZnVuY3Rpb24oZXgpIHtcbiAgICAgIHRoaXMuR1N0YXRlID0gU1RfQ0xPU0VEO1xuICAgICAgdGhpcy5zdGF0ZSA9IEVORF9TVEFURTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gbmV4dE9yVGhyb3coY3R4LCBtb3ZlTmV4dCwgYWN0aW9uLCB4KSB7XG4gICAgc3dpdGNoIChjdHguR1N0YXRlKSB7XG4gICAgICBjYXNlIFNUX0VYRUNVVElORzpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcIlxcXCJcIiArIGFjdGlvbiArIFwiXFxcIiBvbiBleGVjdXRpbmcgZ2VuZXJhdG9yXCIpKTtcbiAgICAgIGNhc2UgU1RfQ0xPU0VEOlxuICAgICAgICBpZiAoYWN0aW9uID09ICduZXh0Jykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgeDtcbiAgICAgIGNhc2UgU1RfTkVXQk9STjpcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Rocm93Jykge1xuICAgICAgICAgIGN0eC5HU3RhdGUgPSBTVF9DTE9TRUQ7XG4gICAgICAgICAgdGhyb3cgeDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRocm93ICRUeXBlRXJyb3IoJ1NlbnQgdmFsdWUgdG8gbmV3Ym9ybiBnZW5lcmF0b3InKTtcbiAgICAgIGNhc2UgU1RfU1VTUEVOREVEOlxuICAgICAgICBjdHguR1N0YXRlID0gU1RfRVhFQ1VUSU5HO1xuICAgICAgICBjdHguYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICBjdHguc2VudCA9IHg7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1vdmVOZXh0KGN0eCk7XG4gICAgICAgIHZhciBkb25lID0gdmFsdWUgPT09IGN0eDtcbiAgICAgICAgaWYgKGRvbmUpXG4gICAgICAgICAgdmFsdWUgPSBjdHgucmV0dXJuVmFsdWU7XG4gICAgICAgIGN0eC5HU3RhdGUgPSBkb25lID8gU1RfQ0xPU0VEIDogU1RfU1VTUEVOREVEO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBkb25lXG4gICAgICAgIH07XG4gICAgfVxuICB9XG4gIHZhciBjdHhOYW1lID0gY3JlYXRlUHJpdmF0ZU5hbWUoKTtcbiAgdmFyIG1vdmVOZXh0TmFtZSA9IGNyZWF0ZVByaXZhdGVOYW1lKCk7XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgJGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBub25FbnVtKEdlbmVyYXRvckZ1bmN0aW9uKSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgbmV4dDogZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIG5leHRPclRocm93KHRoaXNbY3R4TmFtZV0sIHRoaXNbbW92ZU5leHROYW1lXSwgJ25leHQnLCB2KTtcbiAgICB9LFxuICAgIHRocm93OiBmdW5jdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV4dE9yVGhyb3codGhpc1tjdHhOYW1lXSwgdGhpc1ttb3ZlTmV4dE5hbWVdLCAndGhyb3cnLCB2KTtcbiAgICB9XG4gIH07XG4gICRkZWZpbmVQcm9wZXJ0aWVzKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7ZW51bWVyYWJsZTogZmFsc2V9LFxuICAgIG5leHQ6IHtlbnVtZXJhYmxlOiBmYWxzZX0sXG4gICAgdGhyb3c6IHtlbnVtZXJhYmxlOiBmYWxzZX1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUsIFN5bWJvbC5pdGVyYXRvciwgbm9uRW51bShmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSkpO1xuICBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShpbm5lckZ1bmN0aW9uLCBmdW5jdGlvbk9iamVjdCwgc2VsZikge1xuICAgIHZhciBtb3ZlTmV4dCA9IGdldE1vdmVOZXh0KGlubmVyRnVuY3Rpb24sIHNlbGYpO1xuICAgIHZhciBjdHggPSBuZXcgR2VuZXJhdG9yQ29udGV4dCgpO1xuICAgIHZhciBvYmplY3QgPSAkY3JlYXRlKGZ1bmN0aW9uT2JqZWN0LnByb3RvdHlwZSk7XG4gICAgb2JqZWN0W2N0eE5hbWVdID0gY3R4O1xuICAgIG9iamVjdFttb3ZlTmV4dE5hbWVdID0gbW92ZU5leHQ7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBpbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb25PYmplY3QpIHtcbiAgICBmdW5jdGlvbk9iamVjdC5wcm90b3R5cGUgPSAkY3JlYXRlKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSk7XG4gICAgZnVuY3Rpb25PYmplY3QuX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uT2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jRnVuY3Rpb25Db250ZXh0KCkge1xuICAgIEdlbmVyYXRvckNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmVyciA9IHVuZGVmaW5lZDtcbiAgICB2YXIgY3R4ID0gdGhpcztcbiAgICBjdHgucmVzdWx0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjdHgucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBjdHgucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG4gIEFzeW5jRnVuY3Rpb25Db250ZXh0LnByb3RvdHlwZSA9ICRjcmVhdGUoR2VuZXJhdG9yQ29udGV4dC5wcm90b3R5cGUpO1xuICBBc3luY0Z1bmN0aW9uQ29udGV4dC5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIEVORF9TVEFURTpcbiAgICAgICAgdGhpcy5yZXNvbHZlKHRoaXMucmV0dXJuVmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVUSFJPV19TVEFURTpcbiAgICAgICAgdGhpcy5yZWplY3QodGhpcy5zdG9yZWRFeGNlcHRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMucmVqZWN0KGdldEludGVybmFsRXJyb3IodGhpcy5zdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgQXN5bmNGdW5jdGlvbkNvbnRleHQucHJvdG90eXBlLmhhbmRsZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdGUgPSBSRVRIUk9XX1NUQVRFO1xuICB9O1xuICBmdW5jdGlvbiBhc3luY1dyYXAoaW5uZXJGdW5jdGlvbiwgc2VsZikge1xuICAgIHZhciBtb3ZlTmV4dCA9IGdldE1vdmVOZXh0KGlubmVyRnVuY3Rpb24sIHNlbGYpO1xuICAgIHZhciBjdHggPSBuZXcgQXN5bmNGdW5jdGlvbkNvbnRleHQoKTtcbiAgICBjdHguY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbihuZXdTdGF0ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGN0eC5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICBjdHgudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgbW92ZU5leHQoY3R4KTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBjdHguZXJyYmFjayA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgaGFuZGxlQ2F0Y2goY3R4LCBlcnIpO1xuICAgICAgbW92ZU5leHQoY3R4KTtcbiAgICB9O1xuICAgIG1vdmVOZXh0KGN0eCk7XG4gICAgcmV0dXJuIGN0eC5yZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TW92ZU5leHQoaW5uZXJGdW5jdGlvbiwgc2VsZikge1xuICAgIHJldHVybiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyRnVuY3Rpb24uY2FsbChzZWxmLCBjdHgpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGhhbmRsZUNhdGNoKGN0eCwgZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDYXRjaChjdHgsIGV4KSB7XG4gICAgY3R4LnN0b3JlZEV4Y2VwdGlvbiA9IGV4O1xuICAgIHZhciBsYXN0ID0gY3R4LnRyeVN0YWNrX1tjdHgudHJ5U3RhY2tfLmxlbmd0aCAtIDFdO1xuICAgIGlmICghbGFzdCkge1xuICAgICAgY3R4LmhhbmRsZUV4Y2VwdGlvbihleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGN0eC5zdGF0ZSA9IGxhc3QuY2F0Y2ggIT09IHVuZGVmaW5lZCA/IGxhc3QuY2F0Y2ggOiBsYXN0LmZpbmFsbHk7XG4gICAgaWYgKGxhc3QuZmluYWxseUZhbGxUaHJvdWdoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHguZmluYWxseUZhbGxUaHJvdWdoID0gbGFzdC5maW5hbGx5RmFsbFRocm91Z2g7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLmFzeW5jV3JhcCA9IGFzeW5jV3JhcDtcbiAgJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbiA9IGluaXRHZW5lcmF0b3JGdW5jdGlvbjtcbiAgJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlID0gY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2U7XG59KSgpO1xuKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBidWlsZEZyb21FbmNvZGVkUGFydHMob3B0X3NjaGVtZSwgb3B0X3VzZXJJbmZvLCBvcHRfZG9tYWluLCBvcHRfcG9ydCwgb3B0X3BhdGgsIG9wdF9xdWVyeURhdGEsIG9wdF9mcmFnbWVudCkge1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBpZiAob3B0X3NjaGVtZSkge1xuICAgICAgb3V0LnB1c2gob3B0X3NjaGVtZSwgJzonKTtcbiAgICB9XG4gICAgaWYgKG9wdF9kb21haW4pIHtcbiAgICAgIG91dC5wdXNoKCcvLycpO1xuICAgICAgaWYgKG9wdF91c2VySW5mbykge1xuICAgICAgICBvdXQucHVzaChvcHRfdXNlckluZm8sICdAJyk7XG4gICAgICB9XG4gICAgICBvdXQucHVzaChvcHRfZG9tYWluKTtcbiAgICAgIGlmIChvcHRfcG9ydCkge1xuICAgICAgICBvdXQucHVzaCgnOicsIG9wdF9wb3J0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdF9wYXRoKSB7XG4gICAgICBvdXQucHVzaChvcHRfcGF0aCk7XG4gICAgfVxuICAgIGlmIChvcHRfcXVlcnlEYXRhKSB7XG4gICAgICBvdXQucHVzaCgnPycsIG9wdF9xdWVyeURhdGEpO1xuICAgIH1cbiAgICBpZiAob3B0X2ZyYWdtZW50KSB7XG4gICAgICBvdXQucHVzaCgnIycsIG9wdF9mcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gIH1cbiAgO1xuICB2YXIgc3BsaXRSZSA9IG5ldyBSZWdFeHAoJ14nICsgJyg/OicgKyAnKFteOi8/Iy5dKyknICsgJzopPycgKyAnKD86Ly8nICsgJyg/OihbXi8/I10qKUApPycgKyAnKFtcXFxcd1xcXFxkXFxcXC1cXFxcdTAxMDAtXFxcXHVmZmZmLiVdKiknICsgJyg/OjooWzAtOV0rKSk/JyArICcpPycgKyAnKFtePyNdKyk/JyArICcoPzpcXFxcPyhbXiNdKikpPycgKyAnKD86IyguKikpPycgKyAnJCcpO1xuICB2YXIgQ29tcG9uZW50SW5kZXggPSB7XG4gICAgU0NIRU1FOiAxLFxuICAgIFVTRVJfSU5GTzogMixcbiAgICBET01BSU46IDMsXG4gICAgUE9SVDogNCxcbiAgICBQQVRIOiA1LFxuICAgIFFVRVJZX0RBVEE6IDYsXG4gICAgRlJBR01FTlQ6IDdcbiAgfTtcbiAgZnVuY3Rpb24gc3BsaXQodXJpKSB7XG4gICAgcmV0dXJuICh1cmkubWF0Y2goc3BsaXRSZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKHBhdGgpIHtcbiAgICBpZiAocGF0aCA9PT0gJy8nKVxuICAgICAgcmV0dXJuICcvJztcbiAgICB2YXIgbGVhZGluZ1NsYXNoID0gcGF0aFswXSA9PT0gJy8nID8gJy8nIDogJyc7XG4gICAgdmFyIHRyYWlsaW5nU2xhc2ggPSBwYXRoLnNsaWNlKC0xKSA9PT0gJy8nID8gJy8nIDogJyc7XG4gICAgdmFyIHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICB2YXIgdXAgPSAwO1xuICAgIGZvciAodmFyIHBvcyA9IDA7IHBvcyA8IHNlZ21lbnRzLmxlbmd0aDsgcG9zKyspIHtcbiAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbcG9zXTtcbiAgICAgIHN3aXRjaCAoc2VnbWVudCkge1xuICAgICAgICBjYXNlICcnOlxuICAgICAgICBjYXNlICcuJzpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLi4nOlxuICAgICAgICAgIGlmIChvdXQubGVuZ3RoKVxuICAgICAgICAgICAgb3V0LnBvcCgpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHVwKys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgb3V0LnB1c2goc2VnbWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbGVhZGluZ1NsYXNoKSB7XG4gICAgICB3aGlsZSAodXAtLSA+IDApIHtcbiAgICAgICAgb3V0LnVuc2hpZnQoJy4uJyk7XG4gICAgICB9XG4gICAgICBpZiAob3V0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgb3V0LnB1c2goJy4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlYWRpbmdTbGFzaCArIG91dC5qb2luKCcvJykgKyB0cmFpbGluZ1NsYXNoO1xuICB9XG4gIGZ1bmN0aW9uIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKSB7XG4gICAgdmFyIHBhdGggPSBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXSB8fCAnJztcbiAgICBwYXRoID0gcmVtb3ZlRG90U2VnbWVudHMocGF0aCk7XG4gICAgcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF0gPSBwYXRoO1xuICAgIHJldHVybiBidWlsZEZyb21FbmNvZGVkUGFydHMocGFydHNbQ29tcG9uZW50SW5kZXguU0NIRU1FXSwgcGFydHNbQ29tcG9uZW50SW5kZXguVVNFUl9JTkZPXSwgcGFydHNbQ29tcG9uZW50SW5kZXguRE9NQUlOXSwgcGFydHNbQ29tcG9uZW50SW5kZXguUE9SVF0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdLCBwYXJ0c1tDb21wb25lbnRJbmRleC5RVUVSWV9EQVRBXSwgcGFydHNbQ29tcG9uZW50SW5kZXguRlJBR01FTlRdKTtcbiAgfVxuICBmdW5jdGlvbiBjYW5vbmljYWxpemVVcmwodXJsKSB7XG4gICAgdmFyIHBhcnRzID0gc3BsaXQodXJsKTtcbiAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc29sdmVVcmwoYmFzZSwgdXJsKSB7XG4gICAgdmFyIHBhcnRzID0gc3BsaXQodXJsKTtcbiAgICB2YXIgYmFzZVBhcnRzID0gc3BsaXQoYmFzZSk7XG4gICAgaWYgKHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0pIHtcbiAgICAgIHJldHVybiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0gPSBiYXNlUGFydHNbQ29tcG9uZW50SW5kZXguU0NIRU1FXTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IENvbXBvbmVudEluZGV4LlNDSEVNRTsgaSA8PSBDb21wb25lbnRJbmRleC5QT1JUOyBpKyspIHtcbiAgICAgIGlmICghcGFydHNbaV0pIHtcbiAgICAgICAgcGFydHNbaV0gPSBiYXNlUGFydHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXVswXSA9PSAnLycpIHtcbiAgICAgIHJldHVybiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cyk7XG4gICAgfVxuICAgIHZhciBwYXRoID0gYmFzZVBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdO1xuICAgIHZhciBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBpbmRleCArIDEpICsgcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF07XG4gICAgcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF0gPSBwYXRoO1xuICAgIHJldHVybiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cyk7XG4gIH1cbiAgZnVuY3Rpb24gaXNBYnNvbHV0ZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuYW1lWzBdID09PSAnLycpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgcGFydHMgPSBzcGxpdChuYW1lKTtcbiAgICBpZiAocGFydHNbQ29tcG9uZW50SW5kZXguU0NIRU1FXSlcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAkdHJhY2V1clJ1bnRpbWUuY2Fub25pY2FsaXplVXJsID0gY2Fub25pY2FsaXplVXJsO1xuICAkdHJhY2V1clJ1bnRpbWUuaXNBYnNvbHV0ZSA9IGlzQWJzb2x1dGU7XG4gICR0cmFjZXVyUnVudGltZS5yZW1vdmVEb3RTZWdtZW50cyA9IHJlbW92ZURvdFNlZ21lbnRzO1xuICAkdHJhY2V1clJ1bnRpbWUucmVzb2x2ZVVybCA9IHJlc29sdmVVcmw7XG59KSgpO1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciB0eXBlcyA9IHtcbiAgICBhbnk6IHtuYW1lOiAnYW55J30sXG4gICAgYm9vbGVhbjoge25hbWU6ICdib29sZWFuJ30sXG4gICAgbnVtYmVyOiB7bmFtZTogJ251bWJlcid9LFxuICAgIHN0cmluZzoge25hbWU6ICdzdHJpbmcnfSxcbiAgICBzeW1ib2w6IHtuYW1lOiAnc3ltYm9sJ30sXG4gICAgdm9pZDoge25hbWU6ICd2b2lkJ31cbiAgfTtcbiAgdmFyIEdlbmVyaWNUeXBlID0gZnVuY3Rpb24gR2VuZXJpY1R5cGUodHlwZSwgYXJndW1lbnRUeXBlcykge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hcmd1bWVudFR5cGVzID0gYXJndW1lbnRUeXBlcztcbiAgfTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoR2VuZXJpY1R5cGUsIHt9LCB7fSk7XG4gIHZhciB0eXBlUmVnaXN0ZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBmdW5jdGlvbiBnZW5lcmljVHlwZSh0eXBlKSB7XG4gICAgZm9yICh2YXIgYXJndW1lbnRUeXBlcyA9IFtdLFxuICAgICAgICAkX18xID0gMTsgJF9fMSA8IGFyZ3VtZW50cy5sZW5ndGg7ICRfXzErKylcbiAgICAgIGFyZ3VtZW50VHlwZXNbJF9fMSAtIDFdID0gYXJndW1lbnRzWyRfXzFdO1xuICAgIHZhciB0eXBlTWFwID0gdHlwZVJlZ2lzdGVyO1xuICAgIHZhciBrZXkgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdCh0eXBlKS5oYXNoO1xuICAgIGlmICghdHlwZU1hcFtrZXldKSB7XG4gICAgICB0eXBlTWFwW2tleV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICB0eXBlTWFwID0gdHlwZU1hcFtrZXldO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRUeXBlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGtleSA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0KGFyZ3VtZW50VHlwZXNbaV0pLmhhc2g7XG4gICAgICBpZiAoIXR5cGVNYXBba2V5XSkge1xuICAgICAgICB0eXBlTWFwW2tleV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgfVxuICAgICAgdHlwZU1hcCA9IHR5cGVNYXBba2V5XTtcbiAgICB9XG4gICAgdmFyIHRhaWwgPSBhcmd1bWVudFR5cGVzW2FyZ3VtZW50VHlwZXMubGVuZ3RoIC0gMV07XG4gICAga2V5ID0gJHRyYWNldXJSdW50aW1lLmdldE93bkhhc2hPYmplY3QodGFpbCkuaGFzaDtcbiAgICBpZiAoIXR5cGVNYXBba2V5XSkge1xuICAgICAgdHlwZU1hcFtrZXldID0gbmV3IEdlbmVyaWNUeXBlKHR5cGUsIGFyZ3VtZW50VHlwZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZU1hcFtrZXldO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5HZW5lcmljVHlwZSA9IEdlbmVyaWNUeXBlO1xuICAkdHJhY2V1clJ1bnRpbWUuZ2VuZXJpY1R5cGUgPSBnZW5lcmljVHlwZTtcbiAgJHRyYWNldXJSdW50aW1lLnR5cGUgPSB0eXBlcztcbn0pKCk7XG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyICRfXzIgPSAkdHJhY2V1clJ1bnRpbWUsXG4gICAgICBjYW5vbmljYWxpemVVcmwgPSAkX18yLmNhbm9uaWNhbGl6ZVVybCxcbiAgICAgIHJlc29sdmVVcmwgPSAkX18yLnJlc29sdmVVcmwsXG4gICAgICBpc0Fic29sdXRlID0gJF9fMi5pc0Fic29sdXRlO1xuICB2YXIgbW9kdWxlSW5zdGFudGlhdG9ycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBiYXNlVVJMO1xuICBpZiAoZ2xvYmFsLmxvY2F0aW9uICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmKVxuICAgIGJhc2VVUkwgPSByZXNvbHZlVXJsKGdsb2JhbC5sb2NhdGlvbi5ocmVmLCAnLi8nKTtcbiAgZWxzZVxuICAgIGJhc2VVUkwgPSAnJztcbiAgdmFyIFVuY29hdGVkTW9kdWxlRW50cnkgPSBmdW5jdGlvbiBVbmNvYXRlZE1vZHVsZUVudHJ5KHVybCwgdW5jb2F0ZWRNb2R1bGUpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnZhbHVlXyA9IHVuY29hdGVkTW9kdWxlO1xuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShVbmNvYXRlZE1vZHVsZUVudHJ5LCB7fSwge30pO1xuICB2YXIgTW9kdWxlRXZhbHVhdGlvbkVycm9yID0gZnVuY3Rpb24gTW9kdWxlRXZhbHVhdGlvbkVycm9yKGVycm9uZW91c01vZHVsZU5hbWUsIGNhdXNlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJzogJyArIHRoaXMuc3RyaXBDYXVzZShjYXVzZSkgKyAnIGluICcgKyBlcnJvbmVvdXNNb2R1bGVOYW1lO1xuICAgIGlmICghKGNhdXNlIGluc3RhbmNlb2YgJE1vZHVsZUV2YWx1YXRpb25FcnJvcikgJiYgY2F1c2Uuc3RhY2spXG4gICAgICB0aGlzLnN0YWNrID0gdGhpcy5zdHJpcFN0YWNrKGNhdXNlLnN0YWNrKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH07XG4gIHZhciAkTW9kdWxlRXZhbHVhdGlvbkVycm9yID0gTW9kdWxlRXZhbHVhdGlvbkVycm9yO1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShNb2R1bGVFdmFsdWF0aW9uRXJyb3IsIHtcbiAgICBzdHJpcEVycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8uKkVycm9yOi8sIHRoaXMuY29uc3RydWN0b3IubmFtZSArICc6Jyk7XG4gICAgfSxcbiAgICBzdHJpcENhdXNlOiBmdW5jdGlvbihjYXVzZSkge1xuICAgICAgaWYgKCFjYXVzZSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgaWYgKCFjYXVzZS5tZXNzYWdlKVxuICAgICAgICByZXR1cm4gY2F1c2UgKyAnJztcbiAgICAgIHJldHVybiB0aGlzLnN0cmlwRXJyb3IoY2F1c2UubWVzc2FnZSk7XG4gICAgfSxcbiAgICBsb2FkZWRCeTogZnVuY3Rpb24obW9kdWxlTmFtZSkge1xuICAgICAgdGhpcy5zdGFjayArPSAnXFxuIGxvYWRlZCBieSAnICsgbW9kdWxlTmFtZTtcbiAgICB9LFxuICAgIHN0cmlwU3RhY2s6IGZ1bmN0aW9uKGNhdXNlU3RhY2spIHtcbiAgICAgIHZhciBzdGFjayA9IFtdO1xuICAgICAgY2F1c2VTdGFjay5zcGxpdCgnXFxuJykuc29tZSgoZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgaWYgKC9VbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvci8udGVzdChmcmFtZSkpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHN0YWNrLnB1c2goZnJhbWUpO1xuICAgICAgfSkpO1xuICAgICAgc3RhY2tbMF0gPSB0aGlzLnN0cmlwRXJyb3Ioc3RhY2tbMF0pO1xuICAgICAgcmV0dXJuIHN0YWNrLmpvaW4oJ1xcbicpO1xuICAgIH1cbiAgfSwge30sIEVycm9yKTtcbiAgZnVuY3Rpb24gYmVmb3JlTGluZXMobGluZXMsIG51bWJlcikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIgZmlyc3QgPSBudW1iZXIgLSAzO1xuICAgIGlmIChmaXJzdCA8IDApXG4gICAgICBmaXJzdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IGZpcnN0OyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBhZnRlckxpbmVzKGxpbmVzLCBudW1iZXIpIHtcbiAgICB2YXIgbGFzdCA9IG51bWJlciArIDE7XG4gICAgaWYgKGxhc3QgPiBsaW5lcy5sZW5ndGggLSAxKVxuICAgICAgbGFzdCA9IGxpbmVzLmxlbmd0aCAtIDE7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBudW1iZXI7IGkgPD0gbGFzdDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaChsaW5lc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY29sdW1uU3BhY2luZyhjb2x1bW5zKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucyAtIDE7IGkrKykge1xuICAgICAgcmVzdWx0ICs9ICctJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2YXIgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IgPSBmdW5jdGlvbiBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcih1cmwsIGZ1bmMpIHtcbiAgICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJDb25zdHJ1Y3RvcigkVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IpLmNhbGwodGhpcywgdXJsLCBudWxsKTtcbiAgICB0aGlzLmZ1bmMgPSBmdW5jO1xuICB9O1xuICB2YXIgJFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yID0gVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3I7XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yLCB7Z2V0VW5jb2F0ZWRNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWVfKVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZV87XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVsYXRpdmVSZXF1aXJlO1xuICAgICAgICBpZiAodHlwZW9mICR0cmFjZXVyUnVudGltZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVsYXRpdmVSZXF1aXJlID0gJHRyYWNldXJSdW50aW1lLnJlcXVpcmUuYmluZChudWxsLCB0aGlzLnVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVfID0gdGhpcy5mdW5jLmNhbGwoZ2xvYmFsLCByZWxhdGl2ZVJlcXVpcmUpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgaWYgKGV4IGluc3RhbmNlb2YgTW9kdWxlRXZhbHVhdGlvbkVycm9yKSB7XG4gICAgICAgICAgZXgubG9hZGVkQnkodGhpcy51cmwpO1xuICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChleC5zdGFjaykge1xuICAgICAgICAgIHZhciBsaW5lcyA9IHRoaXMuZnVuYy50b1N0cmluZygpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICB2YXIgZXZhbGVkID0gW107XG4gICAgICAgICAgZXguc3RhY2suc3BsaXQoJ1xcbicpLnNvbWUoZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZS5pbmRleE9mKCdVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvci5nZXRVbmNvYXRlZE1vZHVsZScpID4gMClcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgbSA9IC8oYXRcXHNbXlxcc10qXFxzKS4qPjooXFxkKik6KFxcZCopXFwpLy5leGVjKGZyYW1lKTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5lID0gcGFyc2VJbnQobVsyXSwgMTApO1xuICAgICAgICAgICAgICBldmFsZWQgPSBldmFsZWQuY29uY2F0KGJlZm9yZUxpbmVzKGxpbmVzLCBsaW5lKSk7XG4gICAgICAgICAgICAgIGV2YWxlZC5wdXNoKGNvbHVtblNwYWNpbmcobVszXSkgKyAnXicpO1xuICAgICAgICAgICAgICBldmFsZWQgPSBldmFsZWQuY29uY2F0KGFmdGVyTGluZXMobGluZXMsIGxpbmUpKTtcbiAgICAgICAgICAgICAgZXZhbGVkLnB1c2goJz0gPSA9ID0gPSA9ID0gPSA9Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBldmFsZWQucHVzaChmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZXguc3RhY2sgPSBldmFsZWQuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUV2YWx1YXRpb25FcnJvcih0aGlzLnVybCwgZXgpO1xuICAgICAgfVxuICAgIH19LCB7fSwgVW5jb2F0ZWRNb2R1bGVFbnRyeSk7XG4gIGZ1bmN0aW9uIGdldFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpXG4gICAgICByZXR1cm47XG4gICAgdmFyIHVybCA9IE1vZHVsZVN0b3JlLm5vcm1hbGl6ZShuYW1lKTtcbiAgICByZXR1cm4gbW9kdWxlSW5zdGFudGlhdG9yc1t1cmxdO1xuICB9XG4gIDtcbiAgdmFyIG1vZHVsZUluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBsaXZlTW9kdWxlU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gTW9kdWxlKHVuY29hdGVkTW9kdWxlKSB7XG4gICAgdmFyIGlzTGl2ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgY29hdGVkTW9kdWxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh1bmNvYXRlZE1vZHVsZSkuZm9yRWFjaCgoZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGdldHRlcixcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgIGlmIChpc0xpdmUgPT09IGxpdmVNb2R1bGVTZW50aW5lbCkge1xuICAgICAgICB2YXIgZGVzY3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHVuY29hdGVkTW9kdWxlLCBuYW1lKTtcbiAgICAgICAgaWYgKGRlc2NyLmdldClcbiAgICAgICAgICBnZXR0ZXIgPSBkZXNjci5nZXQ7XG4gICAgICB9XG4gICAgICBpZiAoIWdldHRlcikge1xuICAgICAgICB2YWx1ZSA9IHVuY29hdGVkTW9kdWxlW25hbWVdO1xuICAgICAgICBnZXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29hdGVkTW9kdWxlLCBuYW1lLCB7XG4gICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKGNvYXRlZE1vZHVsZSk7XG4gICAgcmV0dXJuIGNvYXRlZE1vZHVsZTtcbiAgfVxuICB2YXIgTW9kdWxlU3RvcmUgPSB7XG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbihuYW1lLCByZWZlcmVyTmFtZSwgcmVmZXJlckFkZHJlc3MpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21vZHVsZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCAnICsgdHlwZW9mIG5hbWUpO1xuICAgICAgaWYgKGlzQWJzb2x1dGUobmFtZSkpXG4gICAgICAgIHJldHVybiBjYW5vbmljYWxpemVVcmwobmFtZSk7XG4gICAgICBpZiAoL1teXFwuXVxcL1xcLlxcLlxcLy8udGVzdChuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21vZHVsZSBuYW1lIGVtYmVkcyAvLi4vOiAnICsgbmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAobmFtZVswXSA9PT0gJy4nICYmIHJlZmVyZXJOYW1lKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZVVybChyZWZlcmVyTmFtZSwgbmFtZSk7XG4gICAgICByZXR1cm4gY2Fub25pY2FsaXplVXJsKG5hbWUpO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihub3JtYWxpemVkTmFtZSkge1xuICAgICAgdmFyIG0gPSBnZXRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihub3JtYWxpemVkTmFtZSk7XG4gICAgICBpZiAoIW0pXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB2YXIgbW9kdWxlSW5zdGFuY2UgPSBtb2R1bGVJbnN0YW5jZXNbbS51cmxdO1xuICAgICAgaWYgKG1vZHVsZUluc3RhbmNlKVxuICAgICAgICByZXR1cm4gbW9kdWxlSW5zdGFuY2U7XG4gICAgICBtb2R1bGVJbnN0YW5jZSA9IE1vZHVsZShtLmdldFVuY29hdGVkTW9kdWxlKCksIGxpdmVNb2R1bGVTZW50aW5lbCk7XG4gICAgICByZXR1cm4gbW9kdWxlSW5zdGFuY2VzW20udXJsXSA9IG1vZHVsZUluc3RhbmNlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihub3JtYWxpemVkTmFtZSwgbW9kdWxlKSB7XG4gICAgICBub3JtYWxpemVkTmFtZSA9IFN0cmluZyhub3JtYWxpemVkTmFtZSk7XG4gICAgICBtb2R1bGVJbnN0YW50aWF0b3JzW25vcm1hbGl6ZWROYW1lXSA9IG5ldyBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihub3JtYWxpemVkTmFtZSwgKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgfSkpO1xuICAgICAgbW9kdWxlSW5zdGFuY2VzW25vcm1hbGl6ZWROYW1lXSA9IG1vZHVsZTtcbiAgICB9LFxuICAgIGdldCBiYXNlVVJMKCkge1xuICAgICAgcmV0dXJuIGJhc2VVUkw7XG4gICAgfSxcbiAgICBzZXQgYmFzZVVSTCh2KSB7XG4gICAgICBiYXNlVVJMID0gU3RyaW5nKHYpO1xuICAgIH0sXG4gICAgcmVnaXN0ZXJNb2R1bGU6IGZ1bmN0aW9uKG5hbWUsIGRlcHMsIGZ1bmMpIHtcbiAgICAgIHZhciBub3JtYWxpemVkTmFtZSA9IE1vZHVsZVN0b3JlLm5vcm1hbGl6ZShuYW1lKTtcbiAgICAgIGlmIChtb2R1bGVJbnN0YW50aWF0b3JzW25vcm1hbGl6ZWROYW1lXSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkdXBsaWNhdGUgbW9kdWxlIG5hbWVkICcgKyBub3JtYWxpemVkTmFtZSk7XG4gICAgICBtb2R1bGVJbnN0YW50aWF0b3JzW25vcm1hbGl6ZWROYW1lXSA9IG5ldyBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihub3JtYWxpemVkTmFtZSwgZnVuYyk7XG4gICAgfSxcbiAgICBidW5kbGVTdG9yZTogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICByZWdpc3RlcjogZnVuY3Rpb24obmFtZSwgZGVwcywgZnVuYykge1xuICAgICAgaWYgKCFkZXBzIHx8ICFkZXBzLmxlbmd0aCAmJiAhZnVuYy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vZHVsZShuYW1lLCBkZXBzLCBmdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVuZGxlU3RvcmVbbmFtZV0gPSB7XG4gICAgICAgICAgZGVwczogZGVwcyxcbiAgICAgICAgICBleGVjdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkX18wID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGRlcE1hcCA9IHt9O1xuICAgICAgICAgICAgZGVwcy5mb3JFYWNoKChmdW5jdGlvbihkZXAsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXBNYXBbZGVwXSA9ICRfXzBbaW5kZXhdO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIHJlZ2lzdHJ5RW50cnkgPSBmdW5jLmNhbGwodGhpcywgZGVwTWFwKTtcbiAgICAgICAgICAgIHJlZ2lzdHJ5RW50cnkuZXhlY3V0ZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJ5RW50cnkuZXhwb3J0cztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRBbm9ueW1vdXNNb2R1bGU6IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgICAgIHJldHVybiBuZXcgTW9kdWxlKGZ1bmMuY2FsbChnbG9iYWwpLCBsaXZlTW9kdWxlU2VudGluZWwpO1xuICAgIH0sXG4gICAgZ2V0Rm9yVGVzdGluZzogZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyICRfXzAgPSB0aGlzO1xuICAgICAgaWYgKCF0aGlzLnRlc3RpbmdQcmVmaXhfKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZUluc3RhbmNlcykuc29tZSgoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIG0gPSAvKHRyYWNldXJAW15cXC9dKlxcLykvLmV4ZWMoa2V5KTtcbiAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgJF9fMC50ZXN0aW5nUHJlZml4XyA9IG1bMV07XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLnRlc3RpbmdQcmVmaXhfICsgbmFtZSk7XG4gICAgfVxuICB9O1xuICB2YXIgbW9kdWxlU3RvcmVNb2R1bGUgPSBuZXcgTW9kdWxlKHtNb2R1bGVTdG9yZTogTW9kdWxlU3RvcmV9KTtcbiAgTW9kdWxlU3RvcmUuc2V0KCdAdHJhY2V1ci9zcmMvcnVudGltZS9Nb2R1bGVTdG9yZScsIG1vZHVsZVN0b3JlTW9kdWxlKTtcbiAgTW9kdWxlU3RvcmUuc2V0KCdAdHJhY2V1ci9zcmMvcnVudGltZS9Nb2R1bGVTdG9yZS5qcycsIG1vZHVsZVN0b3JlTW9kdWxlKTtcbiAgdmFyIHNldHVwR2xvYmFscyA9ICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHM7XG4gICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgICBzZXR1cEdsb2JhbHMoZ2xvYmFsKTtcbiAgfTtcbiAgJHRyYWNldXJSdW50aW1lLk1vZHVsZVN0b3JlID0gTW9kdWxlU3RvcmU7XG4gIGdsb2JhbC5TeXN0ZW0gPSB7XG4gICAgcmVnaXN0ZXI6IE1vZHVsZVN0b3JlLnJlZ2lzdGVyLmJpbmQoTW9kdWxlU3RvcmUpLFxuICAgIHJlZ2lzdGVyTW9kdWxlOiBNb2R1bGVTdG9yZS5yZWdpc3Rlck1vZHVsZS5iaW5kKE1vZHVsZVN0b3JlKSxcbiAgICBnZXQ6IE1vZHVsZVN0b3JlLmdldCxcbiAgICBzZXQ6IE1vZHVsZVN0b3JlLnNldCxcbiAgICBub3JtYWxpemU6IE1vZHVsZVN0b3JlLm5vcm1hbGl6ZVxuICB9O1xuICAkdHJhY2V1clJ1bnRpbWUuZ2V0TW9kdWxlSW1wbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgaW5zdGFudGlhdG9yID0gZ2V0VW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IobmFtZSk7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRvciAmJiBpbnN0YW50aWF0b3IuZ2V0VW5jb2F0ZWRNb2R1bGUoKTtcbiAgfTtcbn0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiO1xuICB2YXIgJGNlaWwgPSBNYXRoLmNlaWw7XG4gIHZhciAkZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgJGlzRmluaXRlID0gaXNGaW5pdGU7XG4gIHZhciAkaXNOYU4gPSBpc05hTjtcbiAgdmFyICRwb3cgPSBNYXRoLnBvdztcbiAgdmFyICRtaW4gPSBNYXRoLm1pbjtcbiAgdmFyIHRvT2JqZWN0ID0gJHRyYWNldXJSdW50aW1lLnRvT2JqZWN0O1xuICBmdW5jdGlvbiB0b1VpbnQzMih4KSB7XG4gICAgcmV0dXJuIHggPj4+IDA7XG4gIH1cbiAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpO1xuICB9XG4gIGZ1bmN0aW9uIGlzQ2FsbGFibGUoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuICBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJztcbiAgfVxuICBmdW5jdGlvbiB0b0ludGVnZXIoeCkge1xuICAgIHggPSAreDtcbiAgICBpZiAoJGlzTmFOKHgpKVxuICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKHggPT09IDAgfHwgISRpc0Zpbml0ZSh4KSlcbiAgICAgIHJldHVybiB4O1xuICAgIHJldHVybiB4ID4gMCA/ICRmbG9vcih4KSA6ICRjZWlsKHgpO1xuICB9XG4gIHZhciBNQVhfU0FGRV9MRU5HVEggPSAkcG93KDIsIDUzKSAtIDE7XG4gIGZ1bmN0aW9uIHRvTGVuZ3RoKHgpIHtcbiAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHgpO1xuICAgIHJldHVybiBsZW4gPCAwID8gMCA6ICRtaW4obGVuLCBNQVhfU0FGRV9MRU5HVEgpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrSXRlcmFibGUoeCkge1xuICAgIHJldHVybiAhaXNPYmplY3QoeCkgPyB1bmRlZmluZWQgOiB4W1N5bWJvbC5pdGVyYXRvcl07XG4gIH1cbiAgZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcih4KSB7XG4gICAgcmV0dXJuIGlzQ2FsbGFibGUoeCk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QodmFsdWUsIGRvbmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZG9uZTogZG9uZVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVEZWZpbmUob2JqZWN0LCBuYW1lLCBkZXNjcikge1xuICAgIGlmICghKG5hbWUgaW4gb2JqZWN0KSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYXliZURlZmluZU1ldGhvZChvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgbWF5YmVEZWZpbmUob2JqZWN0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVEZWZpbmVDb25zdChvYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgbWF5YmVEZWZpbmUob2JqZWN0LCBuYW1lLCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUFkZEZ1bmN0aW9ucyhvYmplY3QsIGZ1bmN0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2YXIgbmFtZSA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IGZ1bmN0aW9uc1tpICsgMV07XG4gICAgICBtYXliZURlZmluZU1ldGhvZChvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVBZGRDb25zdHMob2JqZWN0LCBjb25zdHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnN0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIG5hbWUgPSBjb25zdHNbaV07XG4gICAgICB2YXIgdmFsdWUgPSBjb25zdHNbaSArIDFdO1xuICAgICAgbWF5YmVEZWZpbmVDb25zdChvYmplY3QsIG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVBZGRJdGVyYXRvcihvYmplY3QsIGZ1bmMsIFN5bWJvbCkge1xuICAgIGlmICghU3ltYm9sIHx8ICFTeW1ib2wuaXRlcmF0b3IgfHwgb2JqZWN0W1N5bWJvbC5pdGVyYXRvcl0pXG4gICAgICByZXR1cm47XG4gICAgaWYgKG9iamVjdFsnQEBpdGVyYXRvciddKVxuICAgICAgZnVuYyA9IG9iamVjdFsnQEBpdGVyYXRvciddO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgICAgdmFsdWU6IGZ1bmMsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgdmFyIHBvbHlmaWxscyA9IFtdO1xuICBmdW5jdGlvbiByZWdpc3RlclBvbHlmaWxsKGZ1bmMpIHtcbiAgICBwb2x5ZmlsbHMucHVzaChmdW5jKTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbEFsbChnbG9iYWwpIHtcbiAgICBwb2x5ZmlsbHMuZm9yRWFjaCgoZnVuY3Rpb24oZikge1xuICAgICAgcmV0dXJuIGYoZ2xvYmFsKTtcbiAgICB9KSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXQgdG9PYmplY3QoKSB7XG4gICAgICByZXR1cm4gdG9PYmplY3Q7XG4gICAgfSxcbiAgICBnZXQgdG9VaW50MzIoKSB7XG4gICAgICByZXR1cm4gdG9VaW50MzI7XG4gICAgfSxcbiAgICBnZXQgaXNPYmplY3QoKSB7XG4gICAgICByZXR1cm4gaXNPYmplY3Q7XG4gICAgfSxcbiAgICBnZXQgaXNDYWxsYWJsZSgpIHtcbiAgICAgIHJldHVybiBpc0NhbGxhYmxlO1xuICAgIH0sXG4gICAgZ2V0IGlzTnVtYmVyKCkge1xuICAgICAgcmV0dXJuIGlzTnVtYmVyO1xuICAgIH0sXG4gICAgZ2V0IHRvSW50ZWdlcigpIHtcbiAgICAgIHJldHVybiB0b0ludGVnZXI7XG4gICAgfSxcbiAgICBnZXQgdG9MZW5ndGgoKSB7XG4gICAgICByZXR1cm4gdG9MZW5ndGg7XG4gICAgfSxcbiAgICBnZXQgY2hlY2tJdGVyYWJsZSgpIHtcbiAgICAgIHJldHVybiBjaGVja0l0ZXJhYmxlO1xuICAgIH0sXG4gICAgZ2V0IGlzQ29uc3RydWN0b3IoKSB7XG4gICAgICByZXR1cm4gaXNDb25zdHJ1Y3RvcjtcbiAgICB9LFxuICAgIGdldCBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdDtcbiAgICB9LFxuICAgIGdldCBtYXliZURlZmluZSgpIHtcbiAgICAgIHJldHVybiBtYXliZURlZmluZTtcbiAgICB9LFxuICAgIGdldCBtYXliZURlZmluZU1ldGhvZCgpIHtcbiAgICAgIHJldHVybiBtYXliZURlZmluZU1ldGhvZDtcbiAgICB9LFxuICAgIGdldCBtYXliZURlZmluZUNvbnN0KCkge1xuICAgICAgcmV0dXJuIG1heWJlRGVmaW5lQ29uc3Q7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVBZGRGdW5jdGlvbnMoKSB7XG4gICAgICByZXR1cm4gbWF5YmVBZGRGdW5jdGlvbnM7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVBZGRDb25zdHMoKSB7XG4gICAgICByZXR1cm4gbWF5YmVBZGRDb25zdHM7XG4gICAgfSxcbiAgICBnZXQgbWF5YmVBZGRJdGVyYXRvcigpIHtcbiAgICAgIHJldHVybiBtYXliZUFkZEl0ZXJhdG9yO1xuICAgIH0sXG4gICAgZ2V0IHJlZ2lzdGVyUG9seWZpbGwoKSB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJQb2x5ZmlsbDtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbEFsbCgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbEFsbDtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL01hcC5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9NYXAuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBpc09iamVjdCA9ICRfXzAuaXNPYmplY3QsXG4gICAgICBtYXliZUFkZEl0ZXJhdG9yID0gJF9fMC5tYXliZUFkZEl0ZXJhdG9yLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzAucmVnaXN0ZXJQb2x5ZmlsbDtcbiAgdmFyIGdldE93bkhhc2hPYmplY3QgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdDtcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBkZWxldGVkU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gbG9va3VwSW5kZXgobWFwLCBrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgdmFyIGhhc2hPYmplY3QgPSBnZXRPd25IYXNoT2JqZWN0KGtleSk7XG4gICAgICByZXR1cm4gaGFzaE9iamVjdCAmJiBtYXAub2JqZWN0SW5kZXhfW2hhc2hPYmplY3QuaGFzaF07XG4gICAgfVxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJylcbiAgICAgIHJldHVybiBtYXAuc3RyaW5nSW5kZXhfW2tleV07XG4gICAgcmV0dXJuIG1hcC5wcmltaXRpdmVJbmRleF9ba2V5XTtcbiAgfVxuICBmdW5jdGlvbiBpbml0TWFwKG1hcCkge1xuICAgIG1hcC5lbnRyaWVzXyA9IFtdO1xuICAgIG1hcC5vYmplY3RJbmRleF8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIG1hcC5zdHJpbmdJbmRleF8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIG1hcC5wcmltaXRpdmVJbmRleF8gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIG1hcC5kZWxldGVkQ291bnRfID0gMDtcbiAgfVxuICB2YXIgTWFwID0gZnVuY3Rpb24gTWFwKCkge1xuICAgIHZhciBpdGVyYWJsZSA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAoIWlzT2JqZWN0KHRoaXMpKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWFwIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgdHlwZScpO1xuICAgIGlmICgkaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnZW50cmllc18nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTWFwIGNhbiBub3QgYmUgcmVlbnRyYW50bHkgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG4gICAgaW5pdE1hcCh0aGlzKTtcbiAgICBpZiAoaXRlcmFibGUgIT09IG51bGwgJiYgaXRlcmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgJF9fMiA9IGl0ZXJhYmxlWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildKCksXG4gICAgICAgICAgJF9fMzsgISgkX18zID0gJF9fMi5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgICB2YXIgJF9fNCA9ICRfXzMudmFsdWUsXG4gICAgICAgICAgICBrZXkgPSAkX180WzBdLFxuICAgICAgICAgICAgdmFsdWUgPSAkX180WzFdO1xuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKE1hcCwge1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50cmllc18ubGVuZ3RoIC8gMiAtIHRoaXMuZGVsZXRlZENvdW50XztcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgaW5kZXggPSBsb29rdXBJbmRleCh0aGlzLCBrZXkpO1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNfW2luZGV4ICsgMV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBvYmplY3RNb2RlID0gaXNPYmplY3Qoa2V5KTtcbiAgICAgIHZhciBzdHJpbmdNb2RlID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZyc7XG4gICAgICB2YXIgaW5kZXggPSBsb29rdXBJbmRleCh0aGlzLCBrZXkpO1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleCArIDFdID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IHRoaXMuZW50cmllc18ubGVuZ3RoO1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4XSA9IGtleTtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleCArIDFdID0gdmFsdWU7XG4gICAgICAgIGlmIChvYmplY3RNb2RlKSB7XG4gICAgICAgICAgdmFyIGhhc2hPYmplY3QgPSBnZXRPd25IYXNoT2JqZWN0KGtleSk7XG4gICAgICAgICAgdmFyIGhhc2ggPSBoYXNoT2JqZWN0Lmhhc2g7XG4gICAgICAgICAgdGhpcy5vYmplY3RJbmRleF9baGFzaF0gPSBpbmRleDtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICAgICAgdGhpcy5zdHJpbmdJbmRleF9ba2V5XSA9IGluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJpbWl0aXZlSW5kZXhfW2tleV0gPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGxvb2t1cEluZGV4KHRoaXMsIGtleSkgIT09IHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgb2JqZWN0TW9kZSA9IGlzT2JqZWN0KGtleSk7XG4gICAgICB2YXIgc3RyaW5nTW9kZSA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgdmFyIGhhc2g7XG4gICAgICBpZiAob2JqZWN0TW9kZSkge1xuICAgICAgICB2YXIgaGFzaE9iamVjdCA9IGdldE93bkhhc2hPYmplY3Qoa2V5KTtcbiAgICAgICAgaWYgKGhhc2hPYmplY3QpIHtcbiAgICAgICAgICBpbmRleCA9IHRoaXMub2JqZWN0SW5kZXhfW2hhc2ggPSBoYXNoT2JqZWN0Lmhhc2hdO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLm9iamVjdEluZGV4X1toYXNoXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5zdHJpbmdJbmRleF9ba2V5XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc3RyaW5nSW5kZXhfW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IHRoaXMucHJpbWl0aXZlSW5kZXhfW2tleV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLnByaW1pdGl2ZUluZGV4X1trZXldO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleF0gPSBkZWxldGVkU2VudGluZWw7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXggKyAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kZWxldGVkQ291bnRfKys7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgaW5pdE1hcCh0aGlzKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrRm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVudHJpZXNfLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmVudHJpZXNfW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgaWYgKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjYWxsYmFja0ZuLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbnRyaWVzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzUoKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWU7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGgpID8gOCA6IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBrZXkgPSB0aGlzLmVudHJpZXNfW2ldO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZW50cmllc19baSArIDFdO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoa2V5ID09PSBkZWxldGVkU2VudGluZWwpID8gNCA6IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHZhbHVlXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5tYXliZVRocm93KCk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzUsIHRoaXMpO1xuICAgIH0pLFxuICAgIGtleXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fNigpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGkgPCB0aGlzLmVudHJpZXNfLmxlbmd0aCkgPyA4IDogLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAxMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgIGtleSA9IHRoaXMuZW50cmllc19baV07XG4gICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lbnRyaWVzX1tpICsgMV07XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChrZXkgPT09IGRlbGV0ZWRTZW50aW5lbCkgPyA0IDogNjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAyO1xuICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4Lm1heWJlVGhyb3coKTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fNiwgdGhpcyk7XG4gICAgfSksXG4gICAgdmFsdWVzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzcoKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWU7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGgpID8gOCA6IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBrZXkgPSB0aGlzLmVudHJpZXNfW2ldO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZW50cmllc19baSArIDFdO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoa2V5ID09PSBkZWxldGVkU2VudGluZWwpID8gNCA6IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4Lm1heWJlVGhyb3coKTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fNywgdGhpcyk7XG4gICAgfSlcbiAgfSwge30pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFwLnByb3RvdHlwZSwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBNYXAucHJvdG90eXBlLmVudHJpZXNcbiAgfSk7XG4gIGZ1bmN0aW9uIHBvbHlmaWxsTWFwKGdsb2JhbCkge1xuICAgIHZhciAkX180ID0gZ2xvYmFsLFxuICAgICAgICBPYmplY3QgPSAkX180Lk9iamVjdCxcbiAgICAgICAgU3ltYm9sID0gJF9fNC5TeW1ib2w7XG4gICAgaWYgKCFnbG9iYWwuTWFwKVxuICAgICAgZ2xvYmFsLk1hcCA9IE1hcDtcbiAgICB2YXIgbWFwUHJvdG90eXBlID0gZ2xvYmFsLk1hcC5wcm90b3R5cGU7XG4gICAgaWYgKG1hcFByb3RvdHlwZS5lbnRyaWVzID09PSB1bmRlZmluZWQpXG4gICAgICBnbG9iYWwuTWFwID0gTWFwO1xuICAgIGlmIChtYXBQcm90b3R5cGUuZW50cmllcykge1xuICAgICAgbWF5YmVBZGRJdGVyYXRvcihtYXBQcm90b3R5cGUsIG1hcFByb3RvdHlwZS5lbnRyaWVzLCBTeW1ib2wpO1xuICAgICAgbWF5YmVBZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IGdsb2JhbC5NYXAoKS5lbnRyaWVzKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LCBTeW1ib2wpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsTWFwKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgTWFwKCkge1xuICAgICAgcmV0dXJuIE1hcDtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbE1hcCgpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbE1hcDtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9NYXAuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1NldC5qc1wiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TZXQuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICBpc09iamVjdCA9ICRfXzAuaXNPYmplY3QsXG4gICAgICBtYXliZUFkZEl0ZXJhdG9yID0gJF9fMC5tYXliZUFkZEl0ZXJhdG9yLFxuICAgICAgcmVnaXN0ZXJQb2x5ZmlsbCA9ICRfXzAucmVnaXN0ZXJQb2x5ZmlsbDtcbiAgdmFyIE1hcCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9NYXAuanNcIikuTWFwO1xuICB2YXIgZ2V0T3duSGFzaE9iamVjdCA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0O1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgZnVuY3Rpb24gaW5pdFNldChzZXQpIHtcbiAgICBzZXQubWFwXyA9IG5ldyBNYXAoKTtcbiAgfVxuICB2YXIgU2V0ID0gZnVuY3Rpb24gU2V0KCkge1xuICAgIHZhciBpdGVyYWJsZSA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAoIWlzT2JqZWN0KHRoaXMpKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2V0IGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgdHlwZScpO1xuICAgIGlmICgkaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLCAnbWFwXycpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZXQgY2FuIG5vdCBiZSByZWVudHJhbnRseSBpbml0aWFsaXNlZCcpO1xuICAgIH1cbiAgICBpbml0U2V0KHRoaXMpO1xuICAgIGlmIChpdGVyYWJsZSAhPT0gbnVsbCAmJiBpdGVyYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciAkX180ID0gaXRlcmFibGVbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoU3ltYm9sLml0ZXJhdG9yKV0oKSxcbiAgICAgICAgICAkX181OyAhKCRfXzUgPSAkX180Lm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgIHZhciBpdGVtID0gJF9fNS52YWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShTZXQsIHtcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uc2l6ZTtcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLmhhcyhrZXkpO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHRoaXMubWFwXy5zZXQoa2V5LCBrZXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5kZWxldGUoa2V5KTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uY2xlYXIoKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrRm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgICAgdmFyICRfXzIgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5mb3JFYWNoKChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCBrZXksIGtleSwgJF9fMik7XG4gICAgICB9KSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fNygpIHtcbiAgICAgIHZhciAkX184LFxuICAgICAgICAgICRfXzk7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICRfXzggPSB0aGlzLm1hcF8ua2V5cygpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAkY3R4LmFjdGlvbiA9ICduZXh0JztcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRfXzkgPSAkX184WyRjdHguYWN0aW9uXSgkY3R4LnNlbnRJZ25vcmVUaHJvdyk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9ICgkX185LmRvbmUpID8gMyA6IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSAkX185LnZhbHVlO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIHJldHVybiAkX185LnZhbHVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fNywgdGhpcyk7XG4gICAgfSksXG4gICAgZW50cmllczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX18xMCgpIHtcbiAgICAgIHZhciAkX18xMSxcbiAgICAgICAgICAkX18xMjtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgJF9fMTEgPSB0aGlzLm1hcF8uZW50cmllcygpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAkY3R4LmFjdGlvbiA9ICduZXh0JztcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRfXzEyID0gJF9fMTFbJGN0eC5hY3Rpb25dKCRjdHguc2VudElnbm9yZVRocm93KTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKCRfXzEyLmRvbmUpID8gMyA6IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSAkX18xMi52YWx1ZTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICByZXR1cm4gJF9fMTIudmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX18xMCwgdGhpcyk7XG4gICAgfSlcbiAgfSwge30pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBTZXQucHJvdG90eXBlLnZhbHVlc1xuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsICdrZXlzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogU2V0LnByb3RvdHlwZS52YWx1ZXNcbiAgfSk7XG4gIGZ1bmN0aW9uIHBvbHlmaWxsU2V0KGdsb2JhbCkge1xuICAgIHZhciAkX182ID0gZ2xvYmFsLFxuICAgICAgICBPYmplY3QgPSAkX182Lk9iamVjdCxcbiAgICAgICAgU3ltYm9sID0gJF9fNi5TeW1ib2w7XG4gICAgaWYgKCFnbG9iYWwuU2V0KVxuICAgICAgZ2xvYmFsLlNldCA9IFNldDtcbiAgICB2YXIgc2V0UHJvdG90eXBlID0gZ2xvYmFsLlNldC5wcm90b3R5cGU7XG4gICAgaWYgKHNldFByb3RvdHlwZS52YWx1ZXMpIHtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3Ioc2V0UHJvdG90eXBlLCBzZXRQcm90b3R5cGUudmFsdWVzLCBTeW1ib2wpO1xuICAgICAgbWF5YmVBZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IGdsb2JhbC5TZXQoKS52YWx1ZXMoKSksIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFN5bWJvbCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxTZXQpO1xuICByZXR1cm4ge1xuICAgIGdldCBTZXQoKSB7XG4gICAgICByZXR1cm4gU2V0O1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsU2V0KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsU2V0O1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1NldC5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9ub2RlX21vZHVsZXMvcnN2cC9saWIvcnN2cC9hc2FwLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvbm9kZV9tb2R1bGVzL3JzdnAvbGliL3JzdnAvYXNhcC5qc1wiO1xuICB2YXIgbGVuID0gMDtcbiAgZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICAgIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICAgIGxlbiArPSAyO1xuICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICB9XG4gIH1cbiAgdmFyICRfX2RlZmF1bHQgPSBhc2FwO1xuICB2YXIgYnJvd3Nlckdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB7fTtcbiAgdmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgdmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcbiAgZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICAgIH07XG4gIH1cbiAgdmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG4gICAgICBjYWxsYmFjayhhcmcpO1xuICAgICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxlbiA9IDA7XG4gIH1cbiAgdmFyIHNjaGVkdWxlRmx1c2g7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG4gIH0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICB9IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbiAgfVxuICByZXR1cm4ge2dldCBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuICRfX2RlZmF1bHQ7XG4gICAgfX07XG59KTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1Byb21pc2UuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvUHJvbWlzZS5qc1wiO1xuICB2YXIgYXN5bmMgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9ub2RlX21vZHVsZXMvcnN2cC9saWIvcnN2cC9hc2FwLmpzXCIpLmRlZmF1bHQ7XG4gIHZhciByZWdpc3RlclBvbHlmaWxsID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciBwcm9taXNlUmF3ID0ge307XG4gIGZ1bmN0aW9uIGlzUHJvbWlzZSh4KSB7XG4gICAgcmV0dXJuIHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHguc3RhdHVzXyAhPT0gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGlkUmVzb2x2ZUhhbmRsZXIoeCkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIGZ1bmN0aW9uIGlkUmVqZWN0SGFuZGxlcih4KSB7XG4gICAgdGhyb3cgeDtcbiAgfVxuICBmdW5jdGlvbiBjaGFpbihwcm9taXNlKSB7XG4gICAgdmFyIG9uUmVzb2x2ZSA9IGFyZ3VtZW50c1sxXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMV0gOiBpZFJlc29sdmVIYW5kbGVyO1xuICAgIHZhciBvblJlamVjdCA9IGFyZ3VtZW50c1syXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMl0gOiBpZFJlamVjdEhhbmRsZXI7XG4gICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQocHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gICAgc3dpdGNoIChwcm9taXNlLnN0YXR1c18pIHtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICB0aHJvdyBUeXBlRXJyb3I7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHByb21pc2Uub25SZXNvbHZlXy5wdXNoKG9uUmVzb2x2ZSwgZGVmZXJyZWQpO1xuICAgICAgICBwcm9taXNlLm9uUmVqZWN0Xy5wdXNoKG9uUmVqZWN0LCBkZWZlcnJlZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSArMTpcbiAgICAgICAgcHJvbWlzZUVucXVldWUocHJvbWlzZS52YWx1ZV8sIFtvblJlc29sdmUsIGRlZmVycmVkXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcHJvbWlzZUVucXVldWUocHJvbWlzZS52YWx1ZV8sIFtvblJlamVjdCwgZGVmZXJyZWRdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9XG4gIGZ1bmN0aW9uIGdldERlZmVycmVkKEMpIHtcbiAgICBpZiAodGhpcyA9PT0gJFByb21pc2UpIHtcbiAgICAgIHZhciBwcm9taXNlID0gcHJvbWlzZUluaXQobmV3ICRQcm9taXNlKHByb21pc2VSYXcpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgIHJlc29sdmU6IChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgcHJvbWlzZVJlc29sdmUocHJvbWlzZSwgeCk7XG4gICAgICAgIH0pLFxuICAgICAgICByZWplY3Q6IChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgcHJvbWlzZVJlamVjdChwcm9taXNlLCByKTtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIHJlc3VsdC5wcm9taXNlID0gbmV3IEMoKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXN1bHQucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHJlc3VsdC5yZWplY3QgPSByZWplY3Q7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlU2V0KHByb21pc2UsIHN0YXR1cywgdmFsdWUsIG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICBwcm9taXNlLnN0YXR1c18gPSBzdGF0dXM7XG4gICAgcHJvbWlzZS52YWx1ZV8gPSB2YWx1ZTtcbiAgICBwcm9taXNlLm9uUmVzb2x2ZV8gPSBvblJlc29sdmU7XG4gICAgcHJvbWlzZS5vblJlamVjdF8gPSBvblJlamVjdDtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlSW5pdChwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2VTZXQocHJvbWlzZSwgMCwgdW5kZWZpbmVkLCBbXSwgW10pO1xuICB9XG4gIHZhciBQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmIChyZXNvbHZlciA9PT0gcHJvbWlzZVJhdylcbiAgICAgIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICB2YXIgcHJvbWlzZSA9IHByb21pc2VJbml0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICByZXNvbHZlcigoZnVuY3Rpb24oeCkge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZShwcm9taXNlLCB4KTtcbiAgICAgIH0pLCAoZnVuY3Rpb24ocikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KHByb21pc2UsIHIpO1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHByb21pc2VSZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShQcm9taXNlLCB7XG4gICAgY2F0Y2g6IGZ1bmN0aW9uKG9uUmVqZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3QpO1xuICAgIH0sXG4gICAgdGhlbjogZnVuY3Rpb24ob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiBvblJlc29sdmUgIT09ICdmdW5jdGlvbicpXG4gICAgICAgIG9uUmVzb2x2ZSA9IGlkUmVzb2x2ZUhhbmRsZXI7XG4gICAgICBpZiAodHlwZW9mIG9uUmVqZWN0ICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICBvblJlamVjdCA9IGlkUmVqZWN0SGFuZGxlcjtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICByZXR1cm4gY2hhaW4odGhpcywgZnVuY3Rpb24oeCkge1xuICAgICAgICB4ID0gcHJvbWlzZUNvZXJjZShjb25zdHJ1Y3RvciwgeCk7XG4gICAgICAgIHJldHVybiB4ID09PSB0aGF0ID8gb25SZWplY3QobmV3IFR5cGVFcnJvcikgOiBpc1Byb21pc2UoeCkgPyB4LnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCkgOiBvblJlc29sdmUoeCk7XG4gICAgICB9LCBvblJlamVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAgcmVzb2x2ZTogZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKHRoaXMgPT09ICRQcm9taXNlKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UoeCkpIHtcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZVNldChuZXcgJFByb21pc2UocHJvbWlzZVJhdyksICsxLCB4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyhmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZXNvbHZlKHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlamVjdDogZnVuY3Rpb24ocikge1xuICAgICAgaWYgKHRoaXMgPT09ICRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlU2V0KG5ldyAkUHJvbWlzZShwcm9taXNlUmF3KSwgLTEsIHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3Qocik7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBnZXREZWZlcnJlZCh0aGlzKTtcbiAgICAgIHZhciByZXNvbHV0aW9ucyA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNvbHV0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZXNbaV0pLnRoZW4oZnVuY3Rpb24oaSwgeCkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uc1tpXSA9IHg7XG4gICAgICAgICAgICAgIGlmICgtLWNvdW50ID09PSAwKVxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzb2x1dGlvbnMpO1xuICAgICAgICAgICAgfS5iaW5kKHVuZGVmaW5lZCwgaSksIChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfSxcbiAgICByYWNlOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IGdldERlZmVycmVkKHRoaXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWVzW2ldKS50aGVuKChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHgpO1xuICAgICAgICAgIH0pLCAoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHIpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgJFByb21pc2UgPSBQcm9taXNlO1xuICB2YXIgJFByb21pc2VSZWplY3QgPSAkUHJvbWlzZS5yZWplY3Q7XG4gIGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlKHByb21pc2UsIHgpIHtcbiAgICBwcm9taXNlRG9uZShwcm9taXNlLCArMSwgeCwgcHJvbWlzZS5vblJlc29sdmVfKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlUmVqZWN0KHByb21pc2UsIHIpIHtcbiAgICBwcm9taXNlRG9uZShwcm9taXNlLCAtMSwgciwgcHJvbWlzZS5vblJlamVjdF8pO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VEb25lKHByb21pc2UsIHN0YXR1cywgdmFsdWUsIHJlYWN0aW9ucykge1xuICAgIGlmIChwcm9taXNlLnN0YXR1c18gIT09IDApXG4gICAgICByZXR1cm47XG4gICAgcHJvbWlzZUVucXVldWUodmFsdWUsIHJlYWN0aW9ucyk7XG4gICAgcHJvbWlzZVNldChwcm9taXNlLCBzdGF0dXMsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlRW5xdWV1ZSh2YWx1ZSwgdGFza3MpIHtcbiAgICBhc3luYygoZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHByb21pc2VIYW5kbGUodmFsdWUsIHRhc2tzW2ldLCB0YXNrc1tpICsgMV0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlSGFuZGxlKHZhbHVlLCBoYW5kbGVyLCBkZWZlcnJlZCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBkZWZlcnJlZC5wcm9taXNlKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKHJlc3VsdCkpXG4gICAgICAgIGNoYWluKHJlc3VsdCwgZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0KTtcbiAgICAgIGVsc2VcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHZhciB0aGVuYWJsZVN5bWJvbCA9ICdAQHRoZW5hYmxlJztcbiAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VDb2VyY2UoY29uc3RydWN0b3IsIHgpIHtcbiAgICBpZiAoIWlzUHJvbWlzZSh4KSAmJiBpc09iamVjdCh4KSkge1xuICAgICAgdmFyIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuID0geC50aGVuO1xuICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlUmVqZWN0LmNhbGwoY29uc3RydWN0b3IsIHIpO1xuICAgICAgICB4W3RoZW5hYmxlU3ltYm9sXSA9IHByb21pc2U7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwID0geFt0aGVuYWJsZVN5bWJvbF07XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQoY29uc3RydWN0b3IpO1xuICAgICAgICAgIHhbdGhlbmFibGVTeW1ib2xdID0gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHgsIGRlZmVycmVkLnJlc29sdmUsIGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFByb21pc2UoZ2xvYmFsKSB7XG4gICAgaWYgKCFnbG9iYWwuUHJvbWlzZSlcbiAgICAgIGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsUHJvbWlzZSk7XG4gIHJldHVybiB7XG4gICAgZ2V0IFByb21pc2UoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZTtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbFByb21pc2UoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxQcm9taXNlO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1Byb21pc2UuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ0l0ZXJhdG9yLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciAkX18yO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmdJdGVyYXRvci5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0ID0gJF9fMC5jcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCxcbiAgICAgIGlzT2JqZWN0ID0gJF9fMC5pc09iamVjdDtcbiAgdmFyIHRvUHJvcGVydHkgPSAkdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGl0ZXJhdGVkU3RyaW5nID0gU3ltYm9sKCdpdGVyYXRlZFN0cmluZycpO1xuICB2YXIgc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXggPSBTeW1ib2woJ3N0cmluZ0l0ZXJhdG9yTmV4dEluZGV4Jyk7XG4gIHZhciBTdHJpbmdJdGVyYXRvciA9IGZ1bmN0aW9uIFN0cmluZ0l0ZXJhdG9yKCkge307XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFN0cmluZ0l0ZXJhdG9yLCAoJF9fMiA9IHt9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgXCJuZXh0XCIsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICBpZiAoIWlzT2JqZWN0KG8pIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGl0ZXJhdGVkU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIG11c3QgYmUgYSBTdHJpbmdJdGVyYXRvciBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgIHZhciBzID0gb1t0b1Byb3BlcnR5KGl0ZXJhdGVkU3RyaW5nKV07XG4gICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgdmFyIHBvc2l0aW9uID0gb1t0b1Byb3BlcnR5KHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4KV07XG4gICAgICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gICAgICBpZiAocG9zaXRpb24gPj0gbGVuKSB7XG4gICAgICAgIG9bdG9Qcm9wZXJ0eShpdGVyYXRlZFN0cmluZyldID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaXJzdCA9IHMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgICB2YXIgcmVzdWx0U3RyaW5nO1xuICAgICAgaWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gbGVuKSB7XG4gICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNlY29uZCA9IHMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpO1xuICAgICAgICBpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpICsgU3RyaW5nLmZyb21DaGFyQ29kZShzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvW3RvUHJvcGVydHkoc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXgpXSA9IHBvc2l0aW9uICsgcmVzdWx0U3RyaW5nLmxlbmd0aDtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChyZXN1bHRTdHJpbmcsIGZhbHNlKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgJF9fMiksIHt9KTtcbiAgZnVuY3Rpb24gY3JlYXRlU3RyaW5nSXRlcmF0b3Ioc3RyaW5nKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoc3RyaW5nKTtcbiAgICB2YXIgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgaXRlcmF0b3JbdG9Qcm9wZXJ0eShpdGVyYXRlZFN0cmluZyldID0gcztcbiAgICBpdGVyYXRvclt0b1Byb3BlcnR5KHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4KV0gPSAwO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfVxuICByZXR1cm4ge2dldCBjcmVhdGVTdHJpbmdJdGVyYXRvcigpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdJdGVyYXRvcjtcbiAgICB9fTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZy5qc1wiO1xuICB2YXIgY3JlYXRlU3RyaW5nSXRlcmF0b3IgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nSXRlcmF0b3IuanNcIikuY3JlYXRlU3RyaW5nSXRlcmF0b3I7XG4gIHZhciAkX18xID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzLmpzXCIpLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18xLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzEubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18xLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciAkdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgJGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG4gIHZhciAkbGFzdEluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmxhc3RJbmRleE9mO1xuICBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaCkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCB8fCAkdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgIGlmIChpc05hTihwb3MpKSB7XG4gICAgICBwb3MgPSAwO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xuICAgIHJldHVybiAkaW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBwb3MpID09IHN0YXJ0O1xuICB9XG4gIGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaCkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCB8fCAkdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3MgPSBzdHJpbmdMZW5ndGg7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgICAgICBpZiAoaXNOYU4ocG9zKSkge1xuICAgICAgICAgIHBvcyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVuZCA9IE1hdGgubWluKE1hdGgubWF4KHBvcywgMCksIHN0cmluZ0xlbmd0aCk7XG4gICAgdmFyIHN0YXJ0ID0gZW5kIC0gc2VhcmNoTGVuZ3RoO1xuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICRsYXN0SW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBzdGFydCkgPT0gc3RhcnQ7XG4gIH1cbiAgZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoKSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgaWYgKHNlYXJjaCAmJiAkdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgIGlmIChwb3MgIT0gcG9zKSB7XG4gICAgICBwb3MgPSAwO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xuICAgIGlmIChzZWFyY2hMZW5ndGggKyBzdGFydCA+IHN0cmluZ0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gJGluZGV4T2YuY2FsbChzdHJpbmcsIHNlYXJjaFN0cmluZywgcG9zKSAhPSAtMTtcbiAgfVxuICBmdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICB2YXIgbiA9IGNvdW50ID8gTnVtYmVyKGNvdW50KSA6IDA7XG4gICAgaWYgKGlzTmFOKG4pKSB7XG4gICAgICBuID0gMDtcbiAgICB9XG4gICAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHtcbiAgICAgIHRocm93IFJhbmdlRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKG4gPT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgd2hpbGUgKG4tLSkge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3NpdGlvbikge1xuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIHZhciBzaXplID0gc3RyaW5nLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgIGlmIChpc05hTihpbmRleCkpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBzaXplKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgZmlyc3QgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgdmFyIHNlY29uZDtcbiAgICBpZiAoZmlyc3QgPj0gMHhEODAwICYmIGZpcnN0IDw9IDB4REJGRiAmJiBzaXplID4gaW5kZXggKyAxKSB7XG4gICAgICBzZWNvbmQgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICAgICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgICByZXR1cm4gKGZpcnN0IC0gMHhEODAwKSAqIDB4NDAwICsgc2Vjb25kIC0gMHhEQzAwICsgMHgxMDAwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0O1xuICB9XG4gIGZ1bmN0aW9uIHJhdyhjYWxsc2l0ZSkge1xuICAgIHZhciByYXcgPSBjYWxsc2l0ZS5yYXc7XG4gICAgdmFyIGxlbiA9IHJhdy5sZW5ndGggPj4+IDA7XG4gICAgaWYgKGxlbiA9PT0gMClcbiAgICAgIHJldHVybiAnJztcbiAgICB2YXIgcyA9ICcnO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgcyArPSByYXdbaV07XG4gICAgICBpZiAoaSArIDEgPT09IGxlbilcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICBzICs9IGFyZ3VtZW50c1srK2ldO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KCkge1xuICAgIHZhciBjb2RlVW5pdHMgPSBbXTtcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBoaWdoU3Vycm9nYXRlO1xuICAgIHZhciBsb3dTdXJyb2dhdGU7XG4gICAgdmFyIGluZGV4ID0gLTE7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBjb2RlUG9pbnQgPSBOdW1iZXIoYXJndW1lbnRzW2luZGV4XSk7XG4gICAgICBpZiAoIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgY29kZVBvaW50IDwgMCB8fCBjb2RlUG9pbnQgPiAweDEwRkZGRiB8fCBmbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCkge1xuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweEZGRkYpIHtcbiAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweEQ4MDA7XG4gICAgICAgIGxvd1N1cnJvZ2F0ZSA9IChjb2RlUG9pbnQgJSAweDQwMCkgKyAweERDMDA7XG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGhpZ2hTdXJyb2dhdGUsIGxvd1N1cnJvZ2F0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cyk7XG4gIH1cbiAgZnVuY3Rpb24gc3RyaW5nUHJvdG90eXBlSXRlcmF0b3IoKSB7XG4gICAgdmFyIG8gPSAkdHJhY2V1clJ1bnRpbWUuY2hlY2tPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgdmFyIHMgPSBTdHJpbmcobyk7XG4gICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0l0ZXJhdG9yKHMpO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsU3RyaW5nKGdsb2JhbCkge1xuICAgIHZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKFN0cmluZy5wcm90b3R5cGUsIFsnY29kZVBvaW50QXQnLCBjb2RlUG9pbnRBdCwgJ2VuZHNXaXRoJywgZW5kc1dpdGgsICdpbmNsdWRlcycsIGluY2x1ZGVzLCAncmVwZWF0JywgcmVwZWF0LCAnc3RhcnRzV2l0aCcsIHN0YXJ0c1dpdGhdKTtcbiAgICBtYXliZUFkZEZ1bmN0aW9ucyhTdHJpbmcsIFsnZnJvbUNvZGVQb2ludCcsIGZyb21Db2RlUG9pbnQsICdyYXcnLCByYXddKTtcbiAgICBtYXliZUFkZEl0ZXJhdG9yKFN0cmluZy5wcm90b3R5cGUsIHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yLCBTeW1ib2wpO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxTdHJpbmcpO1xuICByZXR1cm4ge1xuICAgIGdldCBzdGFydHNXaXRoKCkge1xuICAgICAgcmV0dXJuIHN0YXJ0c1dpdGg7XG4gICAgfSxcbiAgICBnZXQgZW5kc1dpdGgoKSB7XG4gICAgICByZXR1cm4gZW5kc1dpdGg7XG4gICAgfSxcbiAgICBnZXQgaW5jbHVkZXMoKSB7XG4gICAgICByZXR1cm4gaW5jbHVkZXM7XG4gICAgfSxcbiAgICBnZXQgcmVwZWF0KCkge1xuICAgICAgcmV0dXJuIHJlcGVhdDtcbiAgICB9LFxuICAgIGdldCBjb2RlUG9pbnRBdCgpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnRBdDtcbiAgICB9LFxuICAgIGdldCByYXcoKSB7XG4gICAgICByZXR1cm4gcmF3O1xuICAgIH0sXG4gICAgZ2V0IGZyb21Db2RlUG9pbnQoKSB7XG4gICAgICByZXR1cm4gZnJvbUNvZGVQb2ludDtcbiAgICB9LFxuICAgIGdldCBzdHJpbmdQcm90b3R5cGVJdGVyYXRvcigpIHtcbiAgICAgIHJldHVybiBzdHJpbmdQcm90b3R5cGVJdGVyYXRvcjtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbFN0cmluZygpIHtcbiAgICAgIHJldHVybiBwb2x5ZmlsbFN0cmluZztcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmcuanNcIiArICcnKTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5SXRlcmF0b3IuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyICRfXzI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5SXRlcmF0b3IuanNcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHMuanNcIiksXG4gICAgICB0b09iamVjdCA9ICRfXzAudG9PYmplY3QsXG4gICAgICB0b1VpbnQzMiA9ICRfXzAudG9VaW50MzIsXG4gICAgICBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCA9ICRfXzAuY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3Q7XG4gIHZhciBBUlJBWV9JVEVSQVRPUl9LSU5EX0tFWVMgPSAxO1xuICB2YXIgQVJSQVlfSVRFUkFUT1JfS0lORF9WQUxVRVMgPSAyO1xuICB2YXIgQVJSQVlfSVRFUkFUT1JfS0lORF9FTlRSSUVTID0gMztcbiAgdmFyIEFycmF5SXRlcmF0b3IgPSBmdW5jdGlvbiBBcnJheUl0ZXJhdG9yKCkge307XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKEFycmF5SXRlcmF0b3IsICgkX18yID0ge30sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkX18yLCBcIm5leHRcIiwge1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IHRvT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGFycmF5ID0gaXRlcmF0b3IuaXRlcmF0b3JPYmplY3RfO1xuICAgICAgaWYgKCFhcnJheSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QgaXMgbm90IGFuIEFycmF5SXRlcmF0b3InKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbmRleCA9IGl0ZXJhdG9yLmFycmF5SXRlcmF0b3JOZXh0SW5kZXhfO1xuICAgICAgdmFyIGl0ZW1LaW5kID0gaXRlcmF0b3IuYXJyYXlJdGVyYXRpb25LaW5kXztcbiAgICAgIHZhciBsZW5ndGggPSB0b1VpbnQzMihhcnJheS5sZW5ndGgpO1xuICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBpdGVyYXRvci5hcnJheUl0ZXJhdG9yTmV4dEluZGV4XyA9IEluZmluaXR5O1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0b3JOZXh0SW5kZXhfID0gaW5kZXggKyAxO1xuICAgICAgaWYgKGl0ZW1LaW5kID09IEFSUkFZX0lURVJBVE9SX0tJTkRfVkFMVUVTKVxuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QoYXJyYXlbaW5kZXhdLCBmYWxzZSk7XG4gICAgICBpZiAoaXRlbUtpbmQgPT0gQVJSQVlfSVRFUkFUT1JfS0lORF9FTlRSSUVTKVxuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QoW2luZGV4LCBhcnJheVtpbmRleF1dLCBmYWxzZSk7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QoaW5kZXgsIGZhbHNlKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgJF9fMiksIHt9KTtcbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlJdGVyYXRvcihhcnJheSwga2luZCkge1xuICAgIHZhciBvYmplY3QgPSB0b09iamVjdChhcnJheSk7XG4gICAgdmFyIGl0ZXJhdG9yID0gbmV3IEFycmF5SXRlcmF0b3I7XG4gICAgaXRlcmF0b3IuaXRlcmF0b3JPYmplY3RfID0gb2JqZWN0O1xuICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0b3JOZXh0SW5kZXhfID0gMDtcbiAgICBpdGVyYXRvci5hcnJheUl0ZXJhdGlvbktpbmRfID0ga2luZDtcbiAgICByZXR1cm4gaXRlcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICByZXR1cm4gY3JlYXRlQXJyYXlJdGVyYXRvcih0aGlzLCBBUlJBWV9JVEVSQVRPUl9LSU5EX0VOVFJJRVMpO1xuICB9XG4gIGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFycmF5SXRlcmF0b3IodGhpcywgQVJSQVlfSVRFUkFUT1JfS0lORF9LRVlTKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUFycmF5SXRlcmF0b3IodGhpcywgQVJSQVlfSVRFUkFUT1JfS0lORF9WQUxVRVMpO1xuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0IGVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cmllcztcbiAgICB9LFxuICAgIGdldCBrZXlzKCkge1xuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSxcbiAgICBnZXQgdmFsdWVzKCkge1xuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5yZWdpc3Rlck1vZHVsZShcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5LmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5LmpzXCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL0FycmF5SXRlcmF0b3IuanNcIiksXG4gICAgICBlbnRyaWVzID0gJF9fMC5lbnRyaWVzLFxuICAgICAga2V5cyA9ICRfXzAua2V5cyxcbiAgICAgIHZhbHVlcyA9ICRfXzAudmFsdWVzO1xuICB2YXIgJF9fMSA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIGNoZWNrSXRlcmFibGUgPSAkX18xLmNoZWNrSXRlcmFibGUsXG4gICAgICBpc0NhbGxhYmxlID0gJF9fMS5pc0NhbGxhYmxlLFxuICAgICAgaXNDb25zdHJ1Y3RvciA9ICRfXzEuaXNDb25zdHJ1Y3RvcixcbiAgICAgIG1heWJlQWRkRnVuY3Rpb25zID0gJF9fMS5tYXliZUFkZEZ1bmN0aW9ucyxcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IgPSAkX18xLm1heWJlQWRkSXRlcmF0b3IsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMS5yZWdpc3RlclBvbHlmaWxsLFxuICAgICAgdG9JbnRlZ2VyID0gJF9fMS50b0ludGVnZXIsXG4gICAgICB0b0xlbmd0aCA9ICRfXzEudG9MZW5ndGgsXG4gICAgICB0b09iamVjdCA9ICRfXzEudG9PYmplY3Q7XG4gIGZ1bmN0aW9uIGZyb20oYXJyTGlrZSkge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGl0ZW1zID0gdG9PYmplY3QoYXJyTGlrZSk7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBrID0gMDtcbiAgICB2YXIgYXJyLFxuICAgICAgICBsZW47XG4gICAgaWYgKG1hcHBpbmcgJiYgIWlzQ2FsbGFibGUobWFwRm4pKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrSXRlcmFibGUoaXRlbXMpKSB7XG4gICAgICBhcnIgPSBpc0NvbnN0cnVjdG9yKEMpID8gbmV3IEMoKSA6IFtdO1xuICAgICAgZm9yICh2YXIgJF9fMiA9IGl0ZW1zWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildKCksXG4gICAgICAgICAgJF9fMzsgISgkX18zID0gJF9fMi5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgICB2YXIgaXRlbSA9ICRfXzMudmFsdWU7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAobWFwcGluZykge1xuICAgICAgICAgICAgYXJyW2tdID0gbWFwRm4uY2FsbCh0aGlzQXJnLCBpdGVtLCBrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyW2tdID0gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcnIubGVuZ3RoID0gaztcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG4gICAgYXJyID0gaXNDb25zdHJ1Y3RvcihDKSA/IG5ldyBDKGxlbikgOiBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICBpZiAobWFwcGluZykge1xuICAgICAgICBhcnJba10gPSB0eXBlb2YgdGhpc0FyZyA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihpdGVtc1trXSwgaykgOiBtYXBGbi5jYWxsKHRoaXNBcmcsIGl0ZW1zW2tdLCBrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycltrXSA9IGl0ZW1zW2tdO1xuICAgICAgfVxuICAgIH1cbiAgICBhcnIubGVuZ3RoID0gbGVuO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgZnVuY3Rpb24gb2YoKSB7XG4gICAgZm9yICh2YXIgaXRlbXMgPSBbXSxcbiAgICAgICAgJF9fNCA9IDA7ICRfXzQgPCBhcmd1bWVudHMubGVuZ3RoOyAkX180KyspXG4gICAgICBpdGVtc1skX180XSA9IGFyZ3VtZW50c1skX180XTtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGxlbiA9IGl0ZW1zLmxlbmd0aDtcbiAgICB2YXIgYXJyID0gaXNDb25zdHJ1Y3RvcihDKSA/IG5ldyBDKGxlbikgOiBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IGxlbjsgaysrKSB7XG4gICAgICBhcnJba10gPSBpdGVtc1trXTtcbiAgICB9XG4gICAgYXJyLmxlbmd0aCA9IGxlbjtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGZ1bmN0aW9uIGZpbGwodmFsdWUpIHtcbiAgICB2YXIgc3RhcnQgPSBhcmd1bWVudHNbMV0gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICB2YXIgZW5kID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciBvYmplY3QgPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgob2JqZWN0Lmxlbmd0aCk7XG4gICAgdmFyIGZpbGxTdGFydCA9IHRvSW50ZWdlcihzdGFydCk7XG4gICAgdmFyIGZpbGxFbmQgPSBlbmQgIT09IHVuZGVmaW5lZCA/IHRvSW50ZWdlcihlbmQpIDogbGVuO1xuICAgIGZpbGxTdGFydCA9IGZpbGxTdGFydCA8IDAgPyBNYXRoLm1heChsZW4gKyBmaWxsU3RhcnQsIDApIDogTWF0aC5taW4oZmlsbFN0YXJ0LCBsZW4pO1xuICAgIGZpbGxFbmQgPSBmaWxsRW5kIDwgMCA/IE1hdGgubWF4KGxlbiArIGZpbGxFbmQsIDApIDogTWF0aC5taW4oZmlsbEVuZCwgbGVuKTtcbiAgICB3aGlsZSAoZmlsbFN0YXJ0IDwgZmlsbEVuZCkge1xuICAgICAgb2JqZWN0W2ZpbGxTdGFydF0gPSB2YWx1ZTtcbiAgICAgIGZpbGxTdGFydCsrO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIGZpbmRIZWxwZXIodGhpcywgcHJlZGljYXRlLCB0aGlzQXJnKTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlKSB7XG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIGZpbmRIZWxwZXIodGhpcywgcHJlZGljYXRlLCB0aGlzQXJnLCB0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBmaW5kSGVscGVyKHNlbGYsIHByZWRpY2F0ZSkge1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciByZXR1cm5JbmRleCA9IGFyZ3VtZW50c1szXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICB2YXIgb2JqZWN0ID0gdG9PYmplY3Qoc2VsZik7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKG9iamVjdC5sZW5ndGgpO1xuICAgIGlmICghaXNDYWxsYWJsZShwcmVkaWNhdGUpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIHZhbHVlID0gb2JqZWN0W2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5JbmRleCA/IGkgOiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkluZGV4ID8gLTEgOiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxBcnJheShnbG9iYWwpIHtcbiAgICB2YXIgJF9fNSA9IGdsb2JhbCxcbiAgICAgICAgQXJyYXkgPSAkX181LkFycmF5LFxuICAgICAgICBPYmplY3QgPSAkX181Lk9iamVjdCxcbiAgICAgICAgU3ltYm9sID0gJF9fNS5TeW1ib2w7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoQXJyYXkucHJvdG90eXBlLCBbJ2VudHJpZXMnLCBlbnRyaWVzLCAna2V5cycsIGtleXMsICd2YWx1ZXMnLCB2YWx1ZXMsICdmaWxsJywgZmlsbCwgJ2ZpbmQnLCBmaW5kLCAnZmluZEluZGV4JywgZmluZEluZGV4XSk7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoQXJyYXksIFsnZnJvbScsIGZyb20sICdvZicsIG9mXSk7XG4gICAgbWF5YmVBZGRJdGVyYXRvcihBcnJheS5wcm90b3R5cGUsIHZhbHVlcywgU3ltYm9sKTtcbiAgICBtYXliZUFkZEl0ZXJhdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihbXS52YWx1ZXMoKSksIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgU3ltYm9sKTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsQXJyYXkpO1xuICByZXR1cm4ge1xuICAgIGdldCBmcm9tKCkge1xuICAgICAgcmV0dXJuIGZyb207XG4gICAgfSxcbiAgICBnZXQgb2YoKSB7XG4gICAgICByZXR1cm4gb2Y7XG4gICAgfSxcbiAgICBnZXQgZmlsbCgpIHtcbiAgICAgIHJldHVybiBmaWxsO1xuICAgIH0sXG4gICAgZ2V0IGZpbmQoKSB7XG4gICAgICByZXR1cm4gZmluZDtcbiAgICB9LFxuICAgIGdldCBmaW5kSW5kZXgoKSB7XG4gICAgICByZXR1cm4gZmluZEluZGV4O1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsQXJyYXkoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxBcnJheTtcbiAgICB9XG4gIH07XG59KTtcblN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9BcnJheS5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvT2JqZWN0LmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL09iamVjdC5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIG1heWJlQWRkRnVuY3Rpb25zID0gJF9fMC5tYXliZUFkZEZ1bmN0aW9ucyxcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciAkX18xID0gJHRyYWNldXJSdW50aW1lLFxuICAgICAgZGVmaW5lUHJvcGVydHkgPSAkX18xLmRlZmluZVByb3BlcnR5LFxuICAgICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gJF9fMS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gJF9fMS5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgICAgaXNQcml2YXRlTmFtZSA9ICRfXzEuaXNQcml2YXRlTmFtZSxcbiAgICAgIGtleXMgPSAkX18xLmtleXM7XG4gIGZ1bmN0aW9uIGlzKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGxlZnQgPT09IHJpZ2h0KVxuICAgICAgcmV0dXJuIGxlZnQgIT09IDAgfHwgMSAvIGxlZnQgPT09IDEgLyByaWdodDtcbiAgICByZXR1cm4gbGVmdCAhPT0gbGVmdCAmJiByaWdodCAhPT0gcmlnaHQ7XG4gIH1cbiAgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIHByb3BzID0gc291cmNlID09IG51bGwgPyBbXSA6IGtleXMoc291cmNlKTtcbiAgICAgIHZhciBwLFxuICAgICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcbiAgICAgIGZvciAocCA9IDA7IHAgPCBsZW5ndGg7IHArKykge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BzW3BdO1xuICAgICAgICBpZiAoaXNQcml2YXRlTmFtZShuYW1lKSlcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gc291cmNlW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHByb3BzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xuICAgIHZhciBwLFxuICAgICAgICBkZXNjcmlwdG9yLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgZm9yIChwID0gMDsgcCA8IGxlbmd0aDsgcCsrKSB7XG4gICAgICB2YXIgbmFtZSA9IHByb3BzW3BdO1xuICAgICAgaWYgKGlzUHJpdmF0ZU5hbWUobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHByb3BzW3BdKTtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcHNbcF0sIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsT2JqZWN0KGdsb2JhbCkge1xuICAgIHZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKE9iamVjdCwgWydhc3NpZ24nLCBhc3NpZ24sICdpcycsIGlzLCAnbWl4aW4nLCBtaXhpbl0pO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxPYmplY3QpO1xuICByZXR1cm4ge1xuICAgIGdldCBpcygpIHtcbiAgICAgIHJldHVybiBpcztcbiAgICB9LFxuICAgIGdldCBhc3NpZ24oKSB7XG4gICAgICByZXR1cm4gYXNzaWduO1xuICAgIH0sXG4gICAgZ2V0IG1peGluKCkge1xuICAgICAgcmV0dXJuIG1peGluO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsT2JqZWN0O1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL09iamVjdC5qc1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyTW9kdWxlKFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTnVtYmVyLmpzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL051bWJlci5qc1wiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKSxcbiAgICAgIGlzTnVtYmVyID0gJF9fMC5pc051bWJlcixcbiAgICAgIG1heWJlQWRkQ29uc3RzID0gJF9fMC5tYXliZUFkZENvbnN0cyxcbiAgICAgIG1heWJlQWRkRnVuY3Rpb25zID0gJF9fMC5tYXliZUFkZEZ1bmN0aW9ucyxcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGwsXG4gICAgICB0b0ludGVnZXIgPSAkX18wLnRvSW50ZWdlcjtcbiAgdmFyICRhYnMgPSBNYXRoLmFicztcbiAgdmFyICRpc0Zpbml0ZSA9IGlzRmluaXRlO1xuICB2YXIgJGlzTmFOID0gaXNOYU47XG4gIHZhciBNQVhfU0FGRV9JTlRFR0VSID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIE1JTl9TQUZFX0lOVEVHRVIgPSAtTWF0aC5wb3coMiwgNTMpICsgMTtcbiAgdmFyIEVQU0lMT04gPSBNYXRoLnBvdygyLCAtNTIpO1xuICBmdW5jdGlvbiBOdW1iZXJJc0Zpbml0ZShudW1iZXIpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIobnVtYmVyKSAmJiAkaXNGaW5pdGUobnVtYmVyKTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIGlzSW50ZWdlcihudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVySXNGaW5pdGUobnVtYmVyKSAmJiB0b0ludGVnZXIobnVtYmVyKSA9PT0gbnVtYmVyO1xuICB9XG4gIGZ1bmN0aW9uIE51bWJlcklzTmFOKG51bWJlcikge1xuICAgIHJldHVybiBpc051bWJlcihudW1iZXIpICYmICRpc05hTihudW1iZXIpO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVySXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgdmFyIGludGVncmFsID0gdG9JbnRlZ2VyKG51bWJlcik7XG4gICAgICBpZiAoaW50ZWdyYWwgPT09IG51bWJlcilcbiAgICAgICAgcmV0dXJuICRhYnMoaW50ZWdyYWwpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbE51bWJlcihnbG9iYWwpIHtcbiAgICB2YXIgTnVtYmVyID0gZ2xvYmFsLk51bWJlcjtcbiAgICBtYXliZUFkZENvbnN0cyhOdW1iZXIsIFsnTUFYX1NBRkVfSU5URUdFUicsIE1BWF9TQUZFX0lOVEVHRVIsICdNSU5fU0FGRV9JTlRFR0VSJywgTUlOX1NBRkVfSU5URUdFUiwgJ0VQU0lMT04nLCBFUFNJTE9OXSk7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoTnVtYmVyLCBbJ2lzRmluaXRlJywgTnVtYmVySXNGaW5pdGUsICdpc0ludGVnZXInLCBpc0ludGVnZXIsICdpc05hTicsIE51bWJlcklzTmFOLCAnaXNTYWZlSW50ZWdlcicsIGlzU2FmZUludGVnZXJdKTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsTnVtYmVyKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgTUFYX1NBRkVfSU5URUdFUigpIHtcbiAgICAgIHJldHVybiBNQVhfU0FGRV9JTlRFR0VSO1xuICAgIH0sXG4gICAgZ2V0IE1JTl9TQUZFX0lOVEVHRVIoKSB7XG4gICAgICByZXR1cm4gTUlOX1NBRkVfSU5URUdFUjtcbiAgICB9LFxuICAgIGdldCBFUFNJTE9OKCkge1xuICAgICAgcmV0dXJuIEVQU0lMT047XG4gICAgfSxcbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICByZXR1cm4gTnVtYmVySXNGaW5pdGU7XG4gICAgfSxcbiAgICBnZXQgaXNJbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIGlzSW50ZWdlcjtcbiAgICB9LFxuICAgIGdldCBpc05hTigpIHtcbiAgICAgIHJldHVybiBOdW1iZXJJc05hTjtcbiAgICB9LFxuICAgIGdldCBpc1NhZmVJbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIGlzU2FmZUludGVnZXI7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxOdW1iZXIoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxOdW1iZXI7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTnVtYmVyLmpzXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXJNb2R1bGUoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy9wb2x5ZmlsbHMuanNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43OS9zcmMvcnVudGltZS9wb2x5ZmlsbHMvcG9seWZpbGxzLmpzXCI7XG4gIHZhciBwb2x5ZmlsbEFsbCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjc5L3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlscy5qc1wiKS5wb2x5ZmlsbEFsbDtcbiAgcG9seWZpbGxBbGwoUmVmbGVjdC5nbG9iYWwpO1xuICB2YXIgc2V0dXBHbG9iYWxzID0gJHRyYWNldXJSdW50aW1lLnNldHVwR2xvYmFscztcbiAgJHRyYWNldXJSdW50aW1lLnNldHVwR2xvYmFscyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuICAgIHBvbHlmaWxsQWxsKGdsb2JhbCk7XG4gIH07XG4gIHJldHVybiB7fTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzkvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3BvbHlmaWxscy5qc1wiICsgJycpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2VmbGF0dGVuJyksXG4gICAgY3JlYXRlQ2FsbGJhY2sgPSByZXF1aXJlKCdsb2Rhc2guY3JlYXRlY2FsbGJhY2snKSxcbiAgICBmb3JJbiA9IHJlcXVpcmUoJ2xvZGFzaC5mb3JpbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLmlzb2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYG9iamVjdGAgY29tcG9zZWQgb2YgdGhlIHNwZWNpZmllZCBwcm9wZXJ0aWVzLlxuICogUHJvcGVydHkgbmFtZXMgbWF5IGJlIHNwZWNpZmllZCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50cyBvciBhcyBhcnJheXMgb2ZcbiAqIHByb3BlcnR5IG5hbWVzLiBJZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkIGl0IHdpbGwgYmUgZXhlY3V0ZWQgZm9yIGVhY2hcbiAqIHByb3BlcnR5IG9mIGBvYmplY3RgIHBpY2tpbmcgdGhlIHByb3BlcnRpZXMgdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1ZXlcbiAqIGZvci4gVGhlIGNhbGxiYWNrIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50cztcbiAqICh2YWx1ZSwga2V5LCBvYmplY3QpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb258Li4uc3RyaW5nfHN0cmluZ1tdfSBbY2FsbGJhY2tdIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyXG4gKiAgaXRlcmF0aW9uIG9yIHByb3BlcnR5IG5hbWVzIHRvIHBpY2ssIHNwZWNpZmllZCBhcyBpbmRpdmlkdWFsIHByb3BlcnR5XG4gKiAgbmFtZXMgb3IgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCBjb21wb3NlZCBvZiB0aGUgcGlja2VkIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucGljayh7ICduYW1lJzogJ2ZyZWQnLCAnX3VzZXJpZCc6ICdmcmVkMScgfSwgJ25hbWUnKTtcbiAqIC8vID0+IHsgJ25hbWUnOiAnZnJlZCcgfVxuICpcbiAqIF8ucGljayh7ICduYW1lJzogJ2ZyZWQnLCAnX3VzZXJpZCc6ICdmcmVkMScgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICByZXR1cm4ga2V5LmNoYXJBdCgwKSAhPSAnXyc7XG4gKiB9KTtcbiAqIC8vID0+IHsgJ25hbWUnOiAnZnJlZCcgfVxuICovXG5mdW5jdGlvbiBwaWNrKG9iamVjdCwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgcHJvcHMgPSBiYXNlRmxhdHRlbihhcmd1bWVudHMsIHRydWUsIGZhbHNlLCAxKSxcbiAgICAgICAgbGVuZ3RoID0gaXNPYmplY3Qob2JqZWN0KSA/IHByb3BzLmxlbmd0aCA6IDA7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gb2JqZWN0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrID0gY3JlYXRlQ2FsbGJhY2soY2FsbGJhY2ssIHRoaXNBcmcsIDMpO1xuICAgIGZvckluKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgICBpZiAoY2FsbGJhY2sodmFsdWUsIGtleSwgb2JqZWN0KSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGljaztcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdsb2Rhc2guaXNhcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoLmlzYXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIG9yIGB0aGlzQXJnYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU2hhbGxvdz1mYWxzZV0gQSBmbGFnIHRvIHJlc3RyaWN0IGZsYXR0ZW5pbmcgdG8gYSBzaW5nbGUgbGV2ZWwuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdD1mYWxzZV0gQSBmbGFnIHRvIHJlc3RyaWN0IGZsYXR0ZW5pbmcgdG8gYXJyYXlzIGFuZCBgYXJndW1lbnRzYCBvYmplY3RzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHN0YXJ0IGZyb20uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgaXNTaGFsbG93LCBpc1N0cmljdCwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IChmcm9tSW5kZXggfHwgMCkgLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT0gJ251bWJlcidcbiAgICAgICAgJiYgKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgIC8vIHJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cylcbiAgICAgIGlmICghaXNTaGFsbG93KSB7XG4gICAgICAgIHZhbHVlID0gYmFzZUZsYXR0ZW4odmFsdWUsIGlzU2hhbGxvdywgaXNTdHJpY3QpO1xuICAgICAgfVxuICAgICAgdmFyIHZhbEluZGV4ID0gLTEsXG4gICAgICAgICAgdmFsTGVuZ3RoID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgIHJlc0luZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuICAgICAgcmVzdWx0Lmxlbmd0aCArPSB2YWxMZW5ndGg7XG4gICAgICB3aGlsZSAoKyt2YWxJbmRleCA8IHZhbExlbmd0aCkge1xuICAgICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZVt2YWxJbmRleF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgc2hvcnRjdXRzICovXG52YXIgYXJnc0NsYXNzID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGludGVybmFsIFtbQ2xhc3NdXSBvZiB2YWx1ZXMgKi9cbnZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdHNcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAoZnVuY3Rpb24oKSB7IHJldHVybiBfLmlzQXJndW1lbnRzKGFyZ3VtZW50cyk7IH0pKDEsIDIsIDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIHRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NDbGFzcyB8fCBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgaXNOYXRpdmUgPSByZXF1aXJlKCdsb2Rhc2guX2lzbmF0aXZlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgc2hvcnRjdXRzICovXG52YXIgYXJyYXlDbGFzcyA9ICdbb2JqZWN0IEFycmF5XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGludGVybmFsIFtbQ2xhc3NdXSBvZiB2YWx1ZXMgKi9cbnZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyBmb3IgbWV0aG9kcyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcyAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBpc05hdGl2ZShuYXRpdmVJc0FycmF5ID0gQXJyYXkuaXNBcnJheSkgJiYgbmF0aXZlSXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHR5cGUgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBPYmplY3RzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAoZnVuY3Rpb24oKSB7IHJldHVybiBfLmlzQXJyYXkoYXJndW1lbnRzKTsgfSkoKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheUNsYXNzIHx8IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgaW50ZXJuYWwgW1tDbGFzc11dIG9mIHZhbHVlcyAqL1xudmFyIHRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUgKi9cbnZhciByZU5hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBTdHJpbmcodG9TdHJpbmcpXG4gICAgLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAucmVwbGFjZSgvdG9TdHJpbmd8IGZvciBbXlxcXV0rL2csICcuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nICYmIHJlTmF0aXZlLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQ3JlYXRlQ2FsbGJhY2sgPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2VjcmVhdGVjYWxsYmFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlaXNlcXVhbCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLmlzb2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCdsb2Rhc2gucHJvcGVydHknKTtcblxuLyoqXG4gKiBQcm9kdWNlcyBhIGNhbGxiYWNrIGJvdW5kIHRvIGFuIG9wdGlvbmFsIGB0aGlzQXJnYC4gSWYgYGZ1bmNgIGlzIGEgcHJvcGVydHlcbiAqIG5hbWUgdGhlIGNyZWF0ZWQgY2FsbGJhY2sgd2lsbCByZXR1cm4gdGhlIHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIGVsZW1lbnQuXG4gKiBJZiBgZnVuY2AgaXMgYW4gb2JqZWN0IHRoZSBjcmVhdGVkIGNhbGxiYWNrIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgZWxlbWVudHNcbiAqIHRoYXQgY29udGFpbiB0aGUgZXF1aXZhbGVudCBvYmplY3QgcHJvcGVydGllcywgb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXRpZXNcbiAqIEBwYXJhbSB7Kn0gW2Z1bmM9aWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgY2FsbGJhY2suXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIGNyZWF0ZWQgY2FsbGJhY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0aGUgY2FsbGJhY2sgYWNjZXB0cy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgY2hhcmFjdGVycyA9IFtcbiAqICAgeyAnbmFtZSc6ICdiYXJuZXknLCAnYWdlJzogMzYgfSxcbiAqICAgeyAnbmFtZSc6ICdmcmVkJywgICAnYWdlJzogNDAgfVxuICogXTtcbiAqXG4gKiAvLyB3cmFwIHRvIGNyZWF0ZSBjdXN0b20gY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogXy5jcmVhdGVDYWxsYmFjayA9IF8ud3JhcChfLmNyZWF0ZUNhbGxiYWNrLCBmdW5jdGlvbihmdW5jLCBjYWxsYmFjaywgdGhpc0FyZykge1xuICogICB2YXIgbWF0Y2ggPSAvXiguKz8pX18oW2dsXXQpKC4rKSQvLmV4ZWMoY2FsbGJhY2spO1xuICogICByZXR1cm4gIW1hdGNoID8gZnVuYyhjYWxsYmFjaywgdGhpc0FyZykgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAqICAgICByZXR1cm4gbWF0Y2hbMl0gPT0gJ2d0JyA/IG9iamVjdFttYXRjaFsxXV0gPiBtYXRjaFszXSA6IG9iamVjdFttYXRjaFsxXV0gPCBtYXRjaFszXTtcbiAqICAgfTtcbiAqIH0pO1xuICpcbiAqIF8uZmlsdGVyKGNoYXJhY3RlcnMsICdhZ2VfX2d0MzgnKTtcbiAqIC8vID0+IFt7ICduYW1lJzogJ2ZyZWQnLCAnYWdlJzogNDAgfV1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgZnVuYztcbiAgaWYgKGZ1bmMgPT0gbnVsbCB8fCB0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmFzZUNyZWF0ZUNhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcbiAgfVxuICAvLyBoYW5kbGUgXCJfLnBsdWNrXCIgc3R5bGUgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICBpZiAodHlwZSAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwcm9wZXJ0eShmdW5jKTtcbiAgfVxuICB2YXIgcHJvcHMgPSBrZXlzKGZ1bmMpLFxuICAgICAga2V5ID0gcHJvcHNbMF0sXG4gICAgICBhID0gZnVuY1trZXldO1xuXG4gIC8vIGhhbmRsZSBcIl8ud2hlcmVcIiBzdHlsZSBjYWxsYmFjayBzaG9ydGhhbmRzXG4gIGlmIChwcm9wcy5sZW5ndGggPT0gMSAmJiBhID09PSBhICYmICFpc09iamVjdChhKSkge1xuICAgIC8vIGZhc3QgcGF0aCB0aGUgY29tbW9uIGNhc2Ugb2YgcHJvdmlkaW5nIGFuIG9iamVjdCB3aXRoIGEgc2luZ2xlXG4gICAgLy8gcHJvcGVydHkgY29udGFpbmluZyBhIHByaW1pdGl2ZSB2YWx1ZVxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIHZhciBiID0gb2JqZWN0W2tleV07XG4gICAgICByZXR1cm4gYSA9PT0gYiAmJiAoYSAhPT0gMCB8fCAoMSAvIGEgPT0gMSAvIGIpKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKCEocmVzdWx0ID0gYmFzZUlzRXF1YWwob2JqZWN0W3Byb3BzW2xlbmd0aF1dLCBmdW5jW3Byb3BzW2xlbmd0aF1dLCBudWxsLCB0cnVlKSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FsbGJhY2s7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJpbmQgPSByZXF1aXJlKCdsb2Rhc2guYmluZCcpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnbG9kYXNoLmlkZW50aXR5JyksXG4gICAgc2V0QmluZERhdGEgPSByZXF1aXJlKCdsb2Rhc2guX3NldGJpbmRkYXRhJyksXG4gICAgc3VwcG9ydCA9IHJlcXVpcmUoJ2xvZGFzaC5zdXBwb3J0Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdGVkIG5hbWVkIGZ1bmN0aW9ucyAqL1xudmFyIHJlRnVuY05hbWUgPSAvXlxccypmdW5jdGlvblsgXFxuXFxyXFx0XStcXHcvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgZnVuY3Rpb25zIGNvbnRhaW5pbmcgYSBgdGhpc2AgcmVmZXJlbmNlICovXG52YXIgcmVUaGlzID0gL1xcYnRoaXNcXGIvO1xuXG4vKiogTmF0aXZlIG1ldGhvZCBzaG9ydGN1dHMgKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZUNhbGxiYWNrYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNyZWF0aW5nXG4gKiBcIl8ucGx1Y2tcIiBvciBcIl8ud2hlcmVcIiBzdHlsZSBjYWxsYmFja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW2Z1bmM9aWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgY2FsbGJhY2suXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIGNyZWF0ZWQgY2FsbGJhY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0aGUgY2FsbGJhY2sgYWNjZXB0cy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgLy8gZXhpdCBlYXJseSBmb3Igbm8gYHRoaXNBcmdgIG9yIGFscmVhZHkgYm91bmQgYnkgYEZ1bmN0aW9uI2JpbmRgXG4gIGlmICh0eXBlb2YgdGhpc0FyZyA9PSAndW5kZWZpbmVkJyB8fCAhKCdwcm90b3R5cGUnIGluIGZ1bmMpKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgdmFyIGJpbmREYXRhID0gZnVuYy5fX2JpbmREYXRhX187XG4gIGlmICh0eXBlb2YgYmluZERhdGEgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoc3VwcG9ydC5mdW5jTmFtZXMpIHtcbiAgICAgIGJpbmREYXRhID0gIWZ1bmMubmFtZTtcbiAgICB9XG4gICAgYmluZERhdGEgPSBiaW5kRGF0YSB8fCAhc3VwcG9ydC5mdW5jRGVjb21wO1xuICAgIGlmICghYmluZERhdGEpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBmblRvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgICBpZiAoIXN1cHBvcnQuZnVuY05hbWVzKSB7XG4gICAgICAgIGJpbmREYXRhID0gIXJlRnVuY05hbWUudGVzdChzb3VyY2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFiaW5kRGF0YSkge1xuICAgICAgICAvLyBjaGVja3MgaWYgYGZ1bmNgIHJlZmVyZW5jZXMgdGhlIGB0aGlzYCBrZXl3b3JkIGFuZCBzdG9yZXMgdGhlIHJlc3VsdFxuICAgICAgICBiaW5kRGF0YSA9IHJlVGhpcy50ZXN0KHNvdXJjZSk7XG4gICAgICAgIHNldEJpbmREYXRhKGZ1bmMsIGJpbmREYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZXhpdCBlYXJseSBpZiB0aGVyZSBhcmUgbm8gYHRoaXNgIHJlZmVyZW5jZXMgb3IgYGZ1bmNgIGlzIGJvdW5kXG4gIGlmIChiaW5kRGF0YSA9PT0gZmFsc2UgfHwgKGJpbmREYXRhICE9PSB0cnVlICYmIGJpbmREYXRhWzFdICYgMSkpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBiaW5kKGZ1bmMsIHRoaXNBcmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGVDYWxsYmFjaztcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgaXNOYXRpdmUgPSByZXF1aXJlKCdsb2Rhc2guX2lzbmF0aXZlJyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJ2xvZGFzaC5ub29wJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGZvciBgX19iaW5kRGF0YV9fYCAqL1xudmFyIGRlc2NyaXB0b3IgPSB7XG4gICdjb25maWd1cmFibGUnOiBmYWxzZSxcbiAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgJ3ZhbHVlJzogbnVsbCxcbiAgJ3dyaXRhYmxlJzogZmFsc2Vcbn07XG5cbi8qKiBVc2VkIHRvIHNldCBtZXRhIGRhdGEgb24gZnVuY3Rpb25zICovXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIC8vIElFIDggb25seSBhY2NlcHRzIERPTSBlbGVtZW50c1xuICB0cnkge1xuICAgIHZhciBvID0ge30sXG4gICAgICAgIGZ1bmMgPSBpc05hdGl2ZShmdW5jID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KSAmJiBmdW5jLFxuICAgICAgICByZXN1bHQgPSBmdW5jKG8sIG8sIG8pICYmIGZ1bmM7XG4gIH0gY2F0Y2goZSkgeyB9XG4gIHJldHVybiByZXN1bHQ7XG59KCkpO1xuXG4vKipcbiAqIFNldHMgYHRoaXNgIGJpbmRpbmcgZGF0YSBvbiBhIGdpdmVuIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBzZXQgZGF0YSBvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlIFRoZSBkYXRhIGFycmF5IHRvIHNldC5cbiAqL1xudmFyIHNldEJpbmREYXRhID0gIWRlZmluZVByb3BlcnR5ID8gbm9vcCA6IGZ1bmN0aW9uKGZ1bmMsIHZhbHVlKSB7XG4gIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgZGVmaW5lUHJvcGVydHkoZnVuYywgJ19fYmluZERhdGFfXycsIGRlc2NyaXB0b3IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRCaW5kRGF0YTtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQSBuby1vcGVyYXRpb24gZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXRpZXNcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ25hbWUnOiAnZnJlZCcgfTtcbiAqIF8ubm9vcChvYmplY3QpID09PSB1bmRlZmluZWQ7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIG5vIG9wZXJhdGlvbiBwZXJmb3JtZWRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBjcmVhdGVXcmFwcGVyID0gcmVxdWlyZSgnbG9kYXNoLl9jcmVhdGV3cmFwcGVyJyksXG4gICAgc2xpY2UgPSByZXF1aXJlKCdsb2Rhc2guX3NsaWNlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2BcbiAqIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCBwcmVwZW5kcyBhbnkgYWRkaXRpb25hbCBgYmluZGAgYXJndW1lbnRzIHRvIHRob3NlXG4gKiBwcm92aWRlZCB0byB0aGUgYm91bmQgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHsuLi4qfSBbYXJnXSBBcmd1bWVudHMgdG8gYmUgcGFydGlhbGx5IGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBib3VuZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGZ1bmMgPSBmdW5jdGlvbihncmVldGluZykge1xuICogICByZXR1cm4gZ3JlZXRpbmcgKyAnICcgKyB0aGlzLm5hbWU7XG4gKiB9O1xuICpcbiAqIGZ1bmMgPSBfLmJpbmQoZnVuYywgeyAnbmFtZSc6ICdmcmVkJyB9LCAnaGknKTtcbiAqIGZ1bmMoKTtcbiAqIC8vID0+ICdoaSBmcmVkJ1xuICovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAyXG4gICAgPyBjcmVhdGVXcmFwcGVyKGZ1bmMsIDE3LCBzbGljZShhcmd1bWVudHMsIDIpLCBudWxsLCB0aGlzQXJnKVxuICAgIDogY3JlYXRlV3JhcHBlcihmdW5jLCAxLCBudWxsLCBudWxsLCB0aGlzQXJnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQmluZCA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWJpbmQnKSxcbiAgICBiYXNlQ3JlYXRlV3JhcHBlciA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWNyZWF0ZXdyYXBwZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoLmlzZnVuY3Rpb24nKSxcbiAgICBzbGljZSA9IHJlcXVpcmUoJ2xvZGFzaC5fc2xpY2UnKTtcblxuLyoqXG4gKiBVc2VkIGZvciBgQXJyYXlgIG1ldGhvZCByZWZlcmVuY2VzLlxuICpcbiAqIE5vcm1hbGx5IGBBcnJheS5wcm90b3R5cGVgIHdvdWxkIHN1ZmZpY2UsIGhvd2V2ZXIsIHVzaW5nIGFuIGFycmF5IGxpdGVyYWxcbiAqIGF2b2lkcyBpc3N1ZXMgaW4gTmFyd2hhbC5cbiAqL1xudmFyIGFycmF5UmVmID0gW107XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyAqL1xudmFyIHB1c2ggPSBhcnJheVJlZi5wdXNoLFxuICAgIHVuc2hpZnQgPSBhcnJheVJlZi51bnNoaWZ0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgZWl0aGVyIGN1cnJpZXMgb3IgaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggYW4gb3B0aW9uYWwgYHRoaXNgIGJpbmRpbmcgYW5kIHBhcnRpYWxseSBhcHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IGZ1bmMgVGhlIGZ1bmN0aW9uIG9yIG1ldGhvZCBuYW1lIHRvIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIG9mIG1ldGhvZCBmbGFncyB0byBjb21wb3NlLlxuICogIFRoZSBiaXRtYXNrIG1heSBiZSBjb21wb3NlZCBvZiB0aGUgZm9sbG93aW5nIGZsYWdzOlxuICogIDEgLSBgXy5iaW5kYFxuICogIDIgLSBgXy5iaW5kS2V5YFxuICogIDQgLSBgXy5jdXJyeWBcbiAqICA4IC0gYF8uY3VycnlgIChib3VuZClcbiAqICAxNiAtIGBfLnBhcnRpYWxgXG4gKiAgMzIgLSBgXy5wYXJ0aWFsUmlnaHRgXG4gKiBAcGFyYW0ge0FycmF5fSBbcGFydGlhbEFyZ3NdIEFuIGFycmF5IG9mIGFyZ3VtZW50cyB0byBwcmVwZW5kIHRvIHRob3NlXG4gKiAgcHJvdmlkZWQgdG8gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IFtwYXJ0aWFsUmlnaHRBcmdzXSBBbiBhcnJheSBvZiBhcmd1bWVudHMgdG8gYXBwZW5kIHRvIHRob3NlXG4gKiAgcHJvdmlkZWQgdG8gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyaXR5XSBUaGUgYXJpdHkgb2YgYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoZnVuYywgYml0bWFzaywgcGFydGlhbEFyZ3MsIHBhcnRpYWxSaWdodEFyZ3MsIHRoaXNBcmcsIGFyaXR5KSB7XG4gIHZhciBpc0JpbmQgPSBiaXRtYXNrICYgMSxcbiAgICAgIGlzQmluZEtleSA9IGJpdG1hc2sgJiAyLFxuICAgICAgaXNDdXJyeSA9IGJpdG1hc2sgJiA0LFxuICAgICAgaXNDdXJyeUJvdW5kID0gYml0bWFzayAmIDgsXG4gICAgICBpc1BhcnRpYWwgPSBiaXRtYXNrICYgMTYsXG4gICAgICBpc1BhcnRpYWxSaWdodCA9IGJpdG1hc2sgJiAzMjtcblxuICBpZiAoIWlzQmluZEtleSAmJiAhaXNGdW5jdGlvbihmdW5jKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3I7XG4gIH1cbiAgaWYgKGlzUGFydGlhbCAmJiAhcGFydGlhbEFyZ3MubGVuZ3RoKSB7XG4gICAgYml0bWFzayAmPSB+MTY7XG4gICAgaXNQYXJ0aWFsID0gcGFydGlhbEFyZ3MgPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNQYXJ0aWFsUmlnaHQgJiYgIXBhcnRpYWxSaWdodEFyZ3MubGVuZ3RoKSB7XG4gICAgYml0bWFzayAmPSB+MzI7XG4gICAgaXNQYXJ0aWFsUmlnaHQgPSBwYXJ0aWFsUmlnaHRBcmdzID0gZmFsc2U7XG4gIH1cbiAgdmFyIGJpbmREYXRhID0gZnVuYyAmJiBmdW5jLl9fYmluZERhdGFfXztcbiAgaWYgKGJpbmREYXRhICYmIGJpbmREYXRhICE9PSB0cnVlKSB7XG4gICAgLy8gY2xvbmUgYGJpbmREYXRhYFxuICAgIGJpbmREYXRhID0gc2xpY2UoYmluZERhdGEpO1xuICAgIGlmIChiaW5kRGF0YVsyXSkge1xuICAgICAgYmluZERhdGFbMl0gPSBzbGljZShiaW5kRGF0YVsyXSk7XG4gICAgfVxuICAgIGlmIChiaW5kRGF0YVszXSkge1xuICAgICAgYmluZERhdGFbM10gPSBzbGljZShiaW5kRGF0YVszXSk7XG4gICAgfVxuICAgIC8vIHNldCBgdGhpc0JpbmRpbmdgIGlzIG5vdCBwcmV2aW91c2x5IGJvdW5kXG4gICAgaWYgKGlzQmluZCAmJiAhKGJpbmREYXRhWzFdICYgMSkpIHtcbiAgICAgIGJpbmREYXRhWzRdID0gdGhpc0FyZztcbiAgICB9XG4gICAgLy8gc2V0IGlmIHByZXZpb3VzbHkgYm91bmQgYnV0IG5vdCBjdXJyZW50bHkgKHN1YnNlcXVlbnQgY3VycmllZCBmdW5jdGlvbnMpXG4gICAgaWYgKCFpc0JpbmQgJiYgYmluZERhdGFbMV0gJiAxKSB7XG4gICAgICBiaXRtYXNrIHw9IDg7XG4gICAgfVxuICAgIC8vIHNldCBjdXJyaWVkIGFyaXR5IGlmIG5vdCB5ZXQgc2V0XG4gICAgaWYgKGlzQ3VycnkgJiYgIShiaW5kRGF0YVsxXSAmIDQpKSB7XG4gICAgICBiaW5kRGF0YVs1XSA9IGFyaXR5O1xuICAgIH1cbiAgICAvLyBhcHBlbmQgcGFydGlhbCBsZWZ0IGFyZ3VtZW50c1xuICAgIGlmIChpc1BhcnRpYWwpIHtcbiAgICAgIHB1c2guYXBwbHkoYmluZERhdGFbMl0gfHwgKGJpbmREYXRhWzJdID0gW10pLCBwYXJ0aWFsQXJncyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCBwYXJ0aWFsIHJpZ2h0IGFyZ3VtZW50c1xuICAgIGlmIChpc1BhcnRpYWxSaWdodCkge1xuICAgICAgdW5zaGlmdC5hcHBseShiaW5kRGF0YVszXSB8fCAoYmluZERhdGFbM10gPSBbXSksIHBhcnRpYWxSaWdodEFyZ3MpO1xuICAgIH1cbiAgICAvLyBtZXJnZSBmbGFnc1xuICAgIGJpbmREYXRhWzFdIHw9IGJpdG1hc2s7XG4gICAgcmV0dXJuIGNyZWF0ZVdyYXBwZXIuYXBwbHkobnVsbCwgYmluZERhdGEpO1xuICB9XG4gIC8vIGZhc3QgcGF0aCBmb3IgYF8uYmluZGBcbiAgdmFyIGNyZWF0ZXIgPSAoYml0bWFzayA9PSAxIHx8IGJpdG1hc2sgPT09IDE3KSA/IGJhc2VCaW5kIDogYmFzZUNyZWF0ZVdyYXBwZXI7XG4gIHJldHVybiBjcmVhdGVyKFtmdW5jLCBiaXRtYXNrLCBwYXJ0aWFsQXJncywgcGFydGlhbFJpZ2h0QXJncywgdGhpc0FyZywgYXJpdHldKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVXcmFwcGVyO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlY3JlYXRlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNvYmplY3QnKSxcbiAgICBzZXRCaW5kRGF0YSA9IHJlcXVpcmUoJ2xvZGFzaC5fc2V0YmluZGRhdGEnKSxcbiAgICBzbGljZSA9IHJlcXVpcmUoJ2xvZGFzaC5fc2xpY2UnKTtcblxuLyoqXG4gKiBVc2VkIGZvciBgQXJyYXlgIG1ldGhvZCByZWZlcmVuY2VzLlxuICpcbiAqIE5vcm1hbGx5IGBBcnJheS5wcm90b3R5cGVgIHdvdWxkIHN1ZmZpY2UsIGhvd2V2ZXIsIHVzaW5nIGFuIGFycmF5IGxpdGVyYWxcbiAqIGF2b2lkcyBpc3N1ZXMgaW4gTmFyd2hhbC5cbiAqL1xudmFyIGFycmF5UmVmID0gW107XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyAqL1xudmFyIHB1c2ggPSBhcnJheVJlZi5wdXNoO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmJpbmRgIHRoYXQgY3JlYXRlcyB0aGUgYm91bmQgZnVuY3Rpb24gYW5kXG4gKiBzZXRzIGl0cyBtZXRhIGRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGJpbmREYXRhIFRoZSBiaW5kIGRhdGEgYXJyYXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBib3VuZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUJpbmQoYmluZERhdGEpIHtcbiAgdmFyIGZ1bmMgPSBiaW5kRGF0YVswXSxcbiAgICAgIHBhcnRpYWxBcmdzID0gYmluZERhdGFbMl0sXG4gICAgICB0aGlzQXJnID0gYmluZERhdGFbNF07XG5cbiAgZnVuY3Rpb24gYm91bmQoKSB7XG4gICAgLy8gYEZ1bmN0aW9uI2JpbmRgIHNwZWNcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjMuNC41XG4gICAgaWYgKHBhcnRpYWxBcmdzKSB7XG4gICAgICAvLyBhdm9pZCBgYXJndW1lbnRzYCBvYmplY3QgZGVvcHRpbWl6YXRpb25zIGJ5IHVzaW5nIGBzbGljZWAgaW5zdGVhZFxuICAgICAgLy8gb2YgYEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsYCBhbmQgbm90IGFzc2lnbmluZyBgYXJndW1lbnRzYCB0byBhXG4gICAgICAvLyB2YXJpYWJsZSBhcyBhIHRlcm5hcnkgZXhwcmVzc2lvblxuICAgICAgdmFyIGFyZ3MgPSBzbGljZShwYXJ0aWFsQXJncyk7XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8vIG1pbWljIHRoZSBjb25zdHJ1Y3RvcidzIGByZXR1cm5gIGJlaGF2aW9yXG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuaW8vI3gxMy4yLjJcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAvLyBlbnN1cmUgYG5ldyBib3VuZGAgaXMgYW4gaW5zdGFuY2Ugb2YgYGZ1bmNgXG4gICAgICB2YXIgdGhpc0JpbmRpbmcgPSBiYXNlQ3JlYXRlKGZ1bmMucHJvdG90eXBlKSxcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzIHx8IGFyZ3VtZW50cyk7XG4gICAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IHRoaXNCaW5kaW5nO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzIHx8IGFyZ3VtZW50cyk7XG4gIH1cbiAgc2V0QmluZERhdGEoYm91bmQsIGJpbmREYXRhKTtcbiAgcmV0dXJuIGJvdW5kO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VCaW5kO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJ2xvZGFzaC5faXNuYXRpdmUnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC5pc29iamVjdCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCdsb2Rhc2gubm9vcCcpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyBmb3IgbWV0aG9kcyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcyAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGlzTmF0aXZlKG5hdGl2ZUNyZWF0ZSA9IE9iamVjdC5jcmVhdGUpICYmIG5hdGl2ZUNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG90eXBlLCBwcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90b3R5cGUpID8gbmF0aXZlQ3JlYXRlKHByb3RvdHlwZSkgOiB7fTtcbn1cbi8vIGZhbGxiYWNrIGZvciBicm93c2VycyB3aXRob3V0IGBPYmplY3QuY3JlYXRlYFxuaWYgKCFuYXRpdmVDcmVhdGUpIHtcbiAgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBPYmplY3QoKSB7fVxuICAgIHJldHVybiBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICAgIGlmIChpc09iamVjdChwcm90b3R5cGUpKSB7XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgT2JqZWN0O1xuICAgICAgICBPYmplY3QucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQgfHwgZ2xvYmFsLk9iamVjdCgpO1xuICAgIH07XG4gIH0oKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlY3JlYXRlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2guaXNvYmplY3QnKSxcbiAgICBzZXRCaW5kRGF0YSA9IHJlcXVpcmUoJ2xvZGFzaC5fc2V0YmluZGRhdGEnKSxcbiAgICBzbGljZSA9IHJlcXVpcmUoJ2xvZGFzaC5fc2xpY2UnKTtcblxuLyoqXG4gKiBVc2VkIGZvciBgQXJyYXlgIG1ldGhvZCByZWZlcmVuY2VzLlxuICpcbiAqIE5vcm1hbGx5IGBBcnJheS5wcm90b3R5cGVgIHdvdWxkIHN1ZmZpY2UsIGhvd2V2ZXIsIHVzaW5nIGFuIGFycmF5IGxpdGVyYWxcbiAqIGF2b2lkcyBpc3N1ZXMgaW4gTmFyd2hhbC5cbiAqL1xudmFyIGFycmF5UmVmID0gW107XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyAqL1xudmFyIHB1c2ggPSBhcnJheVJlZi5wdXNoO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBjcmVhdGVXcmFwcGVyYCB0aGF0IGNyZWF0ZXMgdGhlIHdyYXBwZXIgYW5kXG4gKiBzZXRzIGl0cyBtZXRhIGRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGJpbmREYXRhIFRoZSBiaW5kIGRhdGEgYXJyYXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUNyZWF0ZVdyYXBwZXIoYmluZERhdGEpIHtcbiAgdmFyIGZ1bmMgPSBiaW5kRGF0YVswXSxcbiAgICAgIGJpdG1hc2sgPSBiaW5kRGF0YVsxXSxcbiAgICAgIHBhcnRpYWxBcmdzID0gYmluZERhdGFbMl0sXG4gICAgICBwYXJ0aWFsUmlnaHRBcmdzID0gYmluZERhdGFbM10sXG4gICAgICB0aGlzQXJnID0gYmluZERhdGFbNF0sXG4gICAgICBhcml0eSA9IGJpbmREYXRhWzVdO1xuXG4gIHZhciBpc0JpbmQgPSBiaXRtYXNrICYgMSxcbiAgICAgIGlzQmluZEtleSA9IGJpdG1hc2sgJiAyLFxuICAgICAgaXNDdXJyeSA9IGJpdG1hc2sgJiA0LFxuICAgICAgaXNDdXJyeUJvdW5kID0gYml0bWFzayAmIDgsXG4gICAgICBrZXkgPSBmdW5jO1xuXG4gIGZ1bmN0aW9uIGJvdW5kKCkge1xuICAgIHZhciB0aGlzQmluZGluZyA9IGlzQmluZCA/IHRoaXNBcmcgOiB0aGlzO1xuICAgIGlmIChwYXJ0aWFsQXJncykge1xuICAgICAgdmFyIGFyZ3MgPSBzbGljZShwYXJ0aWFsQXJncyk7XG4gICAgICBwdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmIChwYXJ0aWFsUmlnaHRBcmdzIHx8IGlzQ3VycnkpIHtcbiAgICAgIGFyZ3MgfHwgKGFyZ3MgPSBzbGljZShhcmd1bWVudHMpKTtcbiAgICAgIGlmIChwYXJ0aWFsUmlnaHRBcmdzKSB7XG4gICAgICAgIHB1c2guYXBwbHkoYXJncywgcGFydGlhbFJpZ2h0QXJncyk7XG4gICAgICB9XG4gICAgICBpZiAoaXNDdXJyeSAmJiBhcmdzLmxlbmd0aCA8IGFyaXR5KSB7XG4gICAgICAgIGJpdG1hc2sgfD0gMTYgJiB+MzI7XG4gICAgICAgIHJldHVybiBiYXNlQ3JlYXRlV3JhcHBlcihbZnVuYywgKGlzQ3VycnlCb3VuZCA/IGJpdG1hc2sgOiBiaXRtYXNrICYgfjMpLCBhcmdzLCBudWxsLCB0aGlzQXJnLCBhcml0eV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhcmdzIHx8IChhcmdzID0gYXJndW1lbnRzKTtcbiAgICBpZiAoaXNCaW5kS2V5KSB7XG4gICAgICBmdW5jID0gdGhpc0JpbmRpbmdba2V5XTtcbiAgICB9XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgdGhpc0JpbmRpbmcgPSBiYXNlQ3JlYXRlKGZ1bmMucHJvdG90eXBlKTtcbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzKTtcbiAgICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogdGhpc0JpbmRpbmc7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzKTtcbiAgfVxuICBzZXRCaW5kRGF0YShib3VuZCwgYmluZERhdGEpO1xuICByZXR1cm4gYm91bmQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZVdyYXBwZXI7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RzXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogU2xpY2VzIHRoZSBgY29sbGVjdGlvbmAgZnJvbSB0aGUgYHN0YXJ0YCBpbmRleCB1cCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsXG4gKiB0aGUgYGVuZGAgaW5kZXguXG4gKlxuICogTm90ZTogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGluc3RlYWQgb2YgYEFycmF5I3NsaWNlYCB0byBzdXBwb3J0IG5vZGUgbGlzdHNcbiAqIGluIElFIDwgOSBhbmQgdG8gZW5zdXJlIGRlbnNlIGFycmF5cyBhcmUgcmV0dXJuZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgaW5kZXguXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBlbmQgaW5kZXguXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgc3RhcnQgfHwgKHN0YXJ0ID0gMCk7XG4gIGlmICh0eXBlb2YgZW5kID09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5kID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW5kIC0gc3RhcnQgfHwgMCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCA8IDAgPyAwIDogbGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtzdGFydCArIGluZGV4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNsaWNlO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdGllc1xuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnbmFtZSc6ICdmcmVkJyB9O1xuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgaXNOYXRpdmUgPSByZXF1aXJlKCdsb2Rhc2guX2lzbmF0aXZlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBmdW5jdGlvbnMgY29udGFpbmluZyBhIGB0aGlzYCByZWZlcmVuY2UgKi9cbnZhciByZVRoaXMgPSAvXFxidGhpc1xcYi87XG5cbi8qKlxuICogQW4gb2JqZWN0IHVzZWQgdG8gZmxhZyBlbnZpcm9ubWVudHMgZmVhdHVyZXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEB0eXBlIE9iamVjdFxuICovXG52YXIgc3VwcG9ydCA9IHt9O1xuXG4vKipcbiAqIERldGVjdCBpZiBmdW5jdGlvbnMgY2FuIGJlIGRlY29tcGlsZWQgYnkgYEZ1bmN0aW9uI3RvU3RyaW5nYFxuICogKGFsbCBidXQgUFMzIGFuZCBvbGRlciBPcGVyYSBtb2JpbGUgYnJvd3NlcnMgJiBhdm9pZGVkIGluIFdpbmRvd3MgOCBhcHBzKS5cbiAqXG4gKiBAbWVtYmVyT2YgXy5zdXBwb3J0XG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnN1cHBvcnQuZnVuY0RlY29tcCA9ICFpc05hdGl2ZShnbG9iYWwuV2luUlRFcnJvcikgJiYgcmVUaGlzLnRlc3QoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KTtcblxuLyoqXG4gKiBEZXRlY3QgaWYgYEZ1bmN0aW9uI25hbWVgIGlzIHN1cHBvcnRlZCAoYWxsIGJ1dCBJRSkuXG4gKlxuICogQG1lbWJlck9mIF8uc3VwcG9ydFxuICogQHR5cGUgYm9vbGVhblxuICovXG5zdXBwb3J0LmZ1bmNOYW1lcyA9IHR5cGVvZiBGdW5jdGlvbi5uYW1lID09ICdzdHJpbmcnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnQ7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgZm9ySW4gPSByZXF1aXJlKCdsb2Rhc2guZm9yaW4nKSxcbiAgICBnZXRBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC5fZ2V0YXJyYXknKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoLmlzZnVuY3Rpb24nKSxcbiAgICBvYmplY3RUeXBlcyA9IHJlcXVpcmUoJ2xvZGFzaC5fb2JqZWN0dHlwZXMnKSxcbiAgICByZWxlYXNlQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2guX3JlbGVhc2VhcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHNob3J0Y3V0cyAqL1xudmFyIGFyZ3NDbGFzcyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5Q2xhc3MgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xDbGFzcyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbnVtYmVyQ2xhc3MgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RDbGFzcyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nQ2xhc3MgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgaW50ZXJuYWwgW1tDbGFzc11dIG9mIHZhbHVlcyAqL1xudmFyIHRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAsIHdpdGhvdXQgc3VwcG9ydCBmb3IgYHRoaXNBcmdgIGJpbmRpbmcsXG4gKiB0aGF0IGFsbG93cyBwYXJ0aWFsIFwiXy53aGVyZVwiIHN0eWxlIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IGEgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IGIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpc1doZXJlPWZhbHNlXSBBIGZsYWcgdG8gaW5kaWNhdGUgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQT1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgYWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYGJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbChhLCBiLCBjYWxsYmFjaywgaXNXaGVyZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgLy8gdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHdoZW4gY29tcGFyaW5nIG9iamVjdHMsIGBhYCBoYXMgYXQgbGVhc3QgdGhlIHByb3BlcnRpZXMgb2YgYGJgXG4gIGlmIChjYWxsYmFjaykge1xuICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhhLCBiKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgIH1cbiAgfVxuICAvLyBleGl0IGVhcmx5IGZvciBpZGVudGljYWwgdmFsdWVzXG4gIGlmIChhID09PSBiKSB7XG4gICAgLy8gdHJlYXQgYCswYCB2cy4gYC0wYCBhcyBub3QgZXF1YWxcbiAgICByZXR1cm4gYSAhPT0gMCB8fCAoMSAvIGEgPT0gMSAvIGIpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGEsXG4gICAgICBvdGhlclR5cGUgPSB0eXBlb2YgYjtcblxuICAvLyBleGl0IGVhcmx5IGZvciB1bmxpa2UgcHJpbWl0aXZlIHZhbHVlc1xuICBpZiAoYSA9PT0gYSAmJlxuICAgICAgIShhICYmIG9iamVjdFR5cGVzW3R5cGVdKSAmJlxuICAgICAgIShiICYmIG9iamVjdFR5cGVzW290aGVyVHlwZV0pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGV4aXQgZWFybHkgZm9yIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXZvaWRpbmcgRVMzJ3MgRnVuY3Rpb24jY2FsbCBiZWhhdmlvclxuICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjMuNC40XG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cbiAgLy8gY29tcGFyZSBbW0NsYXNzXV0gbmFtZXNcbiAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSksXG4gICAgICBvdGhlckNsYXNzID0gdG9TdHJpbmcuY2FsbChiKTtcblxuICBpZiAoY2xhc3NOYW1lID09IGFyZ3NDbGFzcykge1xuICAgIGNsYXNzTmFtZSA9IG9iamVjdENsYXNzO1xuICB9XG4gIGlmIChvdGhlckNsYXNzID09IGFyZ3NDbGFzcykge1xuICAgIG90aGVyQ2xhc3MgPSBvYmplY3RDbGFzcztcbiAgfVxuICBpZiAoY2xhc3NOYW1lICE9IG90aGVyQ2xhc3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICBjYXNlIGJvb2xDbGFzczpcbiAgICBjYXNlIGRhdGVDbGFzczpcbiAgICAgIC8vIGNvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsXG4gICAgICByZXR1cm4gK2EgPT0gK2I7XG5cbiAgICBjYXNlIG51bWJlckNsYXNzOlxuICAgICAgLy8gdHJlYXQgYE5hTmAgdnMuIGBOYU5gIGFzIGVxdWFsXG4gICAgICByZXR1cm4gKGEgIT0gK2EpXG4gICAgICAgID8gYiAhPSArYlxuICAgICAgICAvLyBidXQgdHJlYXQgYCswYCB2cy4gYC0wYCBhcyBub3QgZXF1YWxcbiAgICAgICAgOiAoYSA9PSAwID8gKDEgLyBhID09IDEgLyBiKSA6IGEgPT0gK2IpO1xuXG4gICAgY2FzZSByZWdleHBDbGFzczpcbiAgICBjYXNlIHN0cmluZ0NsYXNzOlxuICAgICAgLy8gY29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyAoaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQpXG4gICAgICAvLyB0cmVhdCBzdHJpbmcgcHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3QgaW5zdGFuY2VzIGFzIGVxdWFsXG4gICAgICByZXR1cm4gYSA9PSBTdHJpbmcoYik7XG4gIH1cbiAgdmFyIGlzQXJyID0gY2xhc3NOYW1lID09IGFycmF5Q2xhc3M7XG4gIGlmICghaXNBcnIpIHtcbiAgICAvLyB1bndyYXAgYW55IGBsb2Rhc2hgIHdyYXBwZWQgdmFsdWVzXG4gICAgdmFyIGFXcmFwcGVkID0gaGFzT3duUHJvcGVydHkuY2FsbChhLCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgYldyYXBwZWQgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKGFXcmFwcGVkIHx8IGJXcmFwcGVkKSB7XG4gICAgICByZXR1cm4gYmFzZUlzRXF1YWwoYVdyYXBwZWQgPyBhLl9fd3JhcHBlZF9fIDogYSwgYldyYXBwZWQgPyBiLl9fd3JhcHBlZF9fIDogYiwgY2FsbGJhY2ssIGlzV2hlcmUsIHN0YWNrQSwgc3RhY2tCKTtcbiAgICB9XG4gICAgLy8gZXhpdCBmb3IgZnVuY3Rpb25zIGFuZCBET00gbm9kZXNcbiAgICBpZiAoY2xhc3NOYW1lICE9IG9iamVjdENsYXNzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIE9wZXJhLCBgYXJndW1lbnRzYCBvYmplY3RzIGhhdmUgYEFycmF5YCBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgY3RvckEgPSBhLmNvbnN0cnVjdG9yLFxuICAgICAgICBjdG9yQiA9IGIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBub24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbFxuICAgIGlmIChjdG9yQSAhPSBjdG9yQiAmJlxuICAgICAgICAgICEoaXNGdW5jdGlvbihjdG9yQSkgJiYgY3RvckEgaW5zdGFuY2VvZiBjdG9yQSAmJiBpc0Z1bmN0aW9uKGN0b3JCKSAmJiBjdG9yQiBpbnN0YW5jZW9mIGN0b3JCKSAmJlxuICAgICAgICAgICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gYXNzdW1lIGN5Y2xpYyBzdHJ1Y3R1cmVzIGFyZSBlcXVhbFxuICAvLyB0aGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMVxuICAvLyBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gIChodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjEyLjMpXG4gIHZhciBpbml0ZWRTdGFjayA9ICFzdGFja0E7XG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gZ2V0QXJyYXkoKSk7XG4gIHN0YWNrQiB8fCAoc3RhY2tCID0gZ2V0QXJyYXkoKSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBhKSB7XG4gICAgICByZXR1cm4gc3RhY2tCW2xlbmd0aF0gPT0gYjtcbiAgICB9XG4gIH1cbiAgdmFyIHNpemUgPSAwO1xuICByZXN1bHQgPSB0cnVlO1xuXG4gIC8vIGFkZCBgYWAgYW5kIGBiYCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHNcbiAgc3RhY2tBLnB1c2goYSk7XG4gIHN0YWNrQi5wdXNoKGIpO1xuXG4gIC8vIHJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cylcbiAgaWYgKGlzQXJyKSB7XG4gICAgLy8gY29tcGFyZSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnlcbiAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICBzaXplID0gYi5sZW5ndGg7XG4gICAgcmVzdWx0ID0gc2l6ZSA9PSBsZW5ndGg7XG5cbiAgICBpZiAocmVzdWx0IHx8IGlzV2hlcmUpIHtcbiAgICAgIC8vIGRlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXNcbiAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gbGVuZ3RoLFxuICAgICAgICAgICAgdmFsdWUgPSBiW3NpemVdO1xuXG4gICAgICAgIGlmIChpc1doZXJlKSB7XG4gICAgICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgICAgIGlmICgocmVzdWx0ID0gYmFzZUlzRXF1YWwoYVtpbmRleF0sIHZhbHVlLCBjYWxsYmFjaywgaXNXaGVyZSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShyZXN1bHQgPSBiYXNlSXNFcXVhbChhW3NpemVdLCB2YWx1ZSwgY2FsbGJhY2ssIGlzV2hlcmUsIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICAvLyBkZWVwIGNvbXBhcmUgb2JqZWN0cyB1c2luZyBgZm9ySW5gLCBpbnN0ZWFkIG9mIGBmb3JPd25gLCB0byBhdm9pZCBgT2JqZWN0LmtleXNgXG4gICAgLy8gd2hpY2gsIGluIHRoaXMgY2FzZSwgaXMgbW9yZSBjb3N0bHlcbiAgICBmb3JJbihiLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBiKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXkpKSB7XG4gICAgICAgIC8vIGNvdW50IHRoZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgc2l6ZSsrO1xuICAgICAgICAvLyBkZWVwIGNvbXBhcmUgZWFjaCBwcm9wZXJ0eSB2YWx1ZS5cbiAgICAgICAgcmV0dXJuIChyZXN1bHQgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGtleSkgJiYgYmFzZUlzRXF1YWwoYVtrZXldLCB2YWx1ZSwgY2FsbGJhY2ssIGlzV2hlcmUsIHN0YWNrQSwgc3RhY2tCKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0ICYmICFpc1doZXJlKSB7XG4gICAgICAvLyBlbnN1cmUgYm90aCBvYmplY3RzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXNcbiAgICAgIGZvckluKGEsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGEpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KSkge1xuICAgICAgICAgIC8vIGBzaXplYCB3aWxsIGJlIGAtMWAgaWYgYGFgIGhhcyBtb3JlIHByb3BlcnRpZXMgdGhhbiBgYmBcbiAgICAgICAgICByZXR1cm4gKHJlc3VsdCA9IC0tc2l6ZSA+IC0xKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHN0YWNrQS5wb3AoKTtcbiAgc3RhY2tCLnBvcCgpO1xuXG4gIGlmIChpbml0ZWRTdGFjaykge1xuICAgIHJlbGVhc2VBcnJheShzdGFja0EpO1xuICAgIHJlbGVhc2VBcnJheShzdGFja0IpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGFycmF5UG9vbCA9IHJlcXVpcmUoJ2xvZGFzaC5fYXJyYXlwb29sJyk7XG5cbi8qKlxuICogR2V0cyBhbiBhcnJheSBmcm9tIHRoZSBhcnJheSBwb29sIG9yIGNyZWF0ZXMgYSBuZXcgb25lIGlmIHRoZSBwb29sIGlzIGVtcHR5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBhcnJheSBmcm9tIHRoZSBwb29sLlxuICovXG5mdW5jdGlvbiBnZXRBcnJheSgpIHtcbiAgcmV0dXJuIGFycmF5UG9vbC5wb3AoKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBcnJheTtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIHRvIHBvb2wgYXJyYXlzIGFuZCBvYmplY3RzIHVzZWQgaW50ZXJuYWxseSAqL1xudmFyIGFycmF5UG9vbCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UG9vbDtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIHRvIGRldGVybWluZSBpZiB2YWx1ZXMgYXJlIG9mIHRoZSBsYW5ndWFnZSB0eXBlIE9iamVjdCAqL1xudmFyIG9iamVjdFR5cGVzID0ge1xuICAnYm9vbGVhbic6IGZhbHNlLFxuICAnZnVuY3Rpb24nOiB0cnVlLFxuICAnb2JqZWN0JzogdHJ1ZSxcbiAgJ251bWJlcic6IGZhbHNlLFxuICAnc3RyaW5nJzogZmFsc2UsXG4gICd1bmRlZmluZWQnOiBmYWxzZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUeXBlcztcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYXJyYXlQb29sID0gcmVxdWlyZSgnbG9kYXNoLl9hcnJheXBvb2wnKSxcbiAgICBtYXhQb29sU2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC5fbWF4cG9vbHNpemUnKTtcblxuLyoqXG4gKiBSZWxlYXNlcyB0aGUgZ2l2ZW4gYXJyYXkgYmFjayB0byB0aGUgYXJyYXkgcG9vbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gcmVsZWFzZS5cbiAqL1xuZnVuY3Rpb24gcmVsZWFzZUFycmF5KGFycmF5KSB7XG4gIGFycmF5Lmxlbmd0aCA9IDA7XG4gIGlmIChhcnJheVBvb2wubGVuZ3RoIDwgbWF4UG9vbFNpemUpIHtcbiAgICBhcnJheVBvb2wucHVzaChhcnJheSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWxlYXNlQXJyYXk7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4IHNpemUgb2YgdGhlIGBhcnJheVBvb2xgIGFuZCBgb2JqZWN0UG9vbGAgKi9cbnZhciBtYXhQb29sU2l6ZSA9IDQwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1heFBvb2xTaXplO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJ2xvZGFzaC5faXNuYXRpdmUnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC5pc29iamVjdCcpLFxuICAgIHNoaW1LZXlzID0gcmVxdWlyZSgnbG9kYXNoLl9zaGlta2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHNob3J0Y3V0cyBmb3IgbWV0aG9kcyB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcyAqL1xudmFyIG5hdGl2ZUtleXMgPSBpc05hdGl2ZShuYXRpdmVLZXlzID0gT2JqZWN0LmtleXMpICYmIG5hdGl2ZUtleXM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjb21wb3NlZCBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ua2V5cyh7ICdvbmUnOiAxLCAndHdvJzogMiwgJ3RocmVlJzogMyB9KTtcbiAqIC8vID0+IFsnb25lJywgJ3R3bycsICd0aHJlZSddIChwcm9wZXJ0eSBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCBhY3Jvc3MgZW52aXJvbm1lbnRzKVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIG9iamVjdFR5cGVzID0gcmVxdWlyZSgnbG9kYXNoLl9vYmplY3R0eXBlcycpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogTmF0aXZlIG1ldGhvZCBzaG9ydGN1dHMgKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24gb2YgYE9iamVjdC5rZXlzYCB3aGljaCBwcm9kdWNlcyBhbiBhcnJheSBvZiB0aGVcbiAqIGdpdmVuIG9iamVjdCdzIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAdHlwZSBGdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbnZhciBzaGltS2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgaW5kZXgsIGl0ZXJhYmxlID0gb2JqZWN0LCByZXN1bHQgPSBbXTtcbiAgaWYgKCFpdGVyYWJsZSkgcmV0dXJuIHJlc3VsdDtcbiAgaWYgKCEob2JqZWN0VHlwZXNbdHlwZW9mIG9iamVjdF0pKSByZXR1cm4gcmVzdWx0O1xuICAgIGZvciAoaW5kZXggaW4gaXRlcmFibGUpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0ZXJhYmxlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIHJlc3VsdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFwiXy5wbHVja1wiIHN0eWxlIGZ1bmN0aW9uLCB3aGljaCByZXR1cm5zIHRoZSBga2V5YCB2YWx1ZSBvZiBhXG4gKiBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXRpZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHJldHJpZXZlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBjaGFyYWN0ZXJzID0gW1xuICogICB7ICduYW1lJzogJ2ZyZWQnLCAgICdhZ2UnOiA0MCB9LFxuICogICB7ICduYW1lJzogJ2Jhcm5leScsICdhZ2UnOiAzNiB9XG4gKiBdO1xuICpcbiAqIHZhciBnZXROYW1lID0gXy5wcm9wZXJ0eSgnbmFtZScpO1xuICpcbiAqIF8ubWFwKGNoYXJhY3RlcnMsIGdldE5hbWUpO1xuICogLy8gPT4gWydiYXJuZXknLCAnZnJlZCddXG4gKlxuICogXy5zb3J0QnkoY2hhcmFjdGVycywgZ2V0TmFtZSk7XG4gKiAvLyA9PiBbeyAnbmFtZSc6ICdiYXJuZXknLCAnYWdlJzogMzYgfSwgeyAnbmFtZSc6ICdmcmVkJywgICAnYWdlJzogNDAgfV1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJhc2VDcmVhdGVDYWxsYmFjayA9IHJlcXVpcmUoJ2xvZGFzaC5fYmFzZWNyZWF0ZWNhbGxiYWNrJyksXG4gICAgb2JqZWN0VHlwZXMgPSByZXF1aXJlKCdsb2Rhc2guX29iamVjdHR5cGVzJyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0LFxuICogZXhlY3V0aW5nIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBwcm9wZXJ0eS4gVGhlIGNhbGxiYWNrIGlzIGJvdW5kIHRvIGB0aGlzQXJnYFxuICogYW5kIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM7ICh2YWx1ZSwga2V5LCBvYmplY3QpLiBDYWxsYmFja3MgbWF5IGV4aXRcbiAqIGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAdHlwZSBGdW5jdGlvblxuICogQGNhdGVnb3J5IE9iamVjdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2s9aWRlbnRpdHldIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY2FsbGJhY2tgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gU2hhcGUoKSB7XG4gKiAgIHRoaXMueCA9IDA7XG4gKiAgIHRoaXMueSA9IDA7XG4gKiB9XG4gKlxuICogU2hhcGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG4gKiAgIHRoaXMueCArPSB4O1xuICogICB0aGlzLnkgKz0geTtcbiAqIH07XG4gKlxuICogXy5mb3JJbihuZXcgU2hhcGUsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAqICAgY29uc29sZS5sb2coa2V5KTtcbiAqIH0pO1xuICogLy8gPT4gbG9ncyAneCcsICd5JywgYW5kICdtb3ZlJyAocHJvcGVydHkgb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQgYWNyb3NzIGVudmlyb25tZW50cylcbiAqL1xudmFyIGZvckluID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgdmFyIGluZGV4LCBpdGVyYWJsZSA9IGNvbGxlY3Rpb24sIHJlc3VsdCA9IGl0ZXJhYmxlO1xuICBpZiAoIWl0ZXJhYmxlKSByZXR1cm4gcmVzdWx0O1xuICBpZiAoIW9iamVjdFR5cGVzW3R5cGVvZiBpdGVyYWJsZV0pIHJldHVybiByZXN1bHQ7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgJiYgdHlwZW9mIHRoaXNBcmcgPT0gJ3VuZGVmaW5lZCcgPyBjYWxsYmFjayA6IGJhc2VDcmVhdGVDYWxsYmFjayhjYWxsYmFjaywgdGhpc0FyZywgMyk7XG4gICAgZm9yIChpbmRleCBpbiBpdGVyYWJsZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGNvbGxlY3Rpb24pID09PSBmYWxzZSkgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIHJldHVybiByZXN1bHRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ySW47XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIG9iamVjdFR5cGVzID0gcmVxdWlyZSgnbG9kYXNoLl9vYmplY3R0eXBlcycpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBsYW5ndWFnZSB0eXBlIG9mIE9iamVjdC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0c1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gY2hlY2sgaWYgdGhlIHZhbHVlIGlzIHRoZSBFQ01BU2NyaXB0IGxhbmd1YWdlIHR5cGUgb2YgT2JqZWN0XG4gIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4OFxuICAvLyBhbmQgYXZvaWQgYSBWOCBidWdcbiAgLy8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MVxuICByZXR1cm4gISEodmFsdWUgJiYgb2JqZWN0VHlwZXNbdHlwZW9mIHZhbHVlXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNldW5pcScpLFxuICAgIGNyZWF0ZUNhbGxiYWNrID0gcmVxdWlyZSgnbG9kYXNoLmNyZWF0ZWNhbGxiYWNrJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZS12YWx1ZS1mcmVlIHZlcnNpb24gb2YgYW4gYXJyYXkgdXNpbmcgc3RyaWN0IGVxdWFsaXR5XG4gKiBmb3IgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuIElmIHRoZSBhcnJheSBpcyBzb3J0ZWQsIHByb3ZpZGluZ1xuICogYHRydWVgIGZvciBgaXNTb3J0ZWRgIHdpbGwgdXNlIGEgZmFzdGVyIGFsZ29yaXRobS4gSWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZFxuICogZWFjaCBlbGVtZW50IG9mIGBhcnJheWAgaXMgcGFzc2VkIHRocm91Z2ggdGhlIGNhbGxiYWNrIGJlZm9yZSB1bmlxdWVuZXNzXG4gKiBpcyBjb21wdXRlZC4gVGhlIGNhbGxiYWNrIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM7ICh2YWx1ZSwgaW5kZXgsIGFycmF5KS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBjYWxsYmFja2AgdGhlIGNyZWF0ZWQgXCJfLnBsdWNrXCIgc3R5bGVcbiAqIGNhbGxiYWNrIHdpbGwgcmV0dXJuIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBjYWxsYmFja2AgdGhlIGNyZWF0ZWQgXCJfLndoZXJlXCIgc3R5bGUgY2FsbGJhY2tcbiAqIHdpbGwgcmV0dXJuIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlbiBvYmplY3QsXG4gKiBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyB1bmlxdWVcbiAqIEBjYXRlZ29yeSBBcnJheXNcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTb3J0ZWQ9ZmFsc2VdIEEgZmxhZyB0byBpbmRpY2F0ZSB0aGF0IGBhcnJheWAgaXMgc29ydGVkLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbY2FsbGJhY2s9aWRlbnRpdHldIFRoZSBmdW5jdGlvbiBjYWxsZWRcbiAqICBwZXIgaXRlcmF0aW9uLiBJZiBhIHByb3BlcnR5IG5hbWUgb3Igb2JqZWN0IGlzIHByb3ZpZGVkIGl0IHdpbGwgYmUgdXNlZFxuICogIHRvIGNyZWF0ZSBhIFwiXy5wbHVja1wiIG9yIFwiXy53aGVyZVwiIHN0eWxlIGNhbGxiYWNrLCByZXNwZWN0aXZlbHkuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIGR1cGxpY2F0ZS12YWx1ZS1mcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXEoWzEsIDIsIDEsIDMsIDFdKTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICpcbiAqIF8udW5pcShbMSwgMSwgMiwgMiwgM10sIHRydWUpO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKlxuICogXy51bmlxKFsnQScsICdiJywgJ0MnLCAnYScsICdCJywgJ2MnXSwgZnVuY3Rpb24obGV0dGVyKSB7IHJldHVybiBsZXR0ZXIudG9Mb3dlckNhc2UoKTsgfSk7XG4gKiAvLyA9PiBbJ0EnLCAnYicsICdDJ11cbiAqXG4gKiBfLnVuaXEoWzEsIDIuNSwgMywgMS41LCAyLCAzLjVdLCBmdW5jdGlvbihudW0pIHsgcmV0dXJuIHRoaXMuZmxvb3IobnVtKTsgfSwgTWF0aCk7XG4gKiAvLyA9PiBbMSwgMi41LCAzXVxuICpcbiAqIC8vIHVzaW5nIFwiXy5wbHVja1wiIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy51bmlxKFt7ICd4JzogMSB9LCB7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG5mdW5jdGlvbiB1bmlxKGFycmF5LCBpc1NvcnRlZCwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgLy8ganVnZ2xlIGFyZ3VtZW50c1xuICBpZiAodHlwZW9mIGlzU29ydGVkICE9ICdib29sZWFuJyAmJiBpc1NvcnRlZCAhPSBudWxsKSB7XG4gICAgdGhpc0FyZyA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gKHR5cGVvZiBpc1NvcnRlZCAhPSAnZnVuY3Rpb24nICYmIHRoaXNBcmcgJiYgdGhpc0FyZ1tpc1NvcnRlZF0gPT09IGFycmF5KSA/IG51bGwgOiBpc1NvcnRlZDtcbiAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICB9XG4gIGlmIChjYWxsYmFjayAhPSBudWxsKSB7XG4gICAgY2FsbGJhY2sgPSBjcmVhdGVDYWxsYmFjayhjYWxsYmFjaywgdGhpc0FyZywgMyk7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGFycmF5LCBpc1NvcnRlZCwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXE7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlaW5kZXhvZicpLFxuICAgIGNhY2hlSW5kZXhPZiA9IHJlcXVpcmUoJ2xvZGFzaC5fY2FjaGVpbmRleG9mJyksXG4gICAgY3JlYXRlQ2FjaGUgPSByZXF1aXJlKCdsb2Rhc2guX2NyZWF0ZWNhY2hlJyksXG4gICAgZ2V0QXJyYXkgPSByZXF1aXJlKCdsb2Rhc2guX2dldGFycmF5JyksXG4gICAgbGFyZ2VBcnJheVNpemUgPSByZXF1aXJlKCdsb2Rhc2guX2xhcmdlYXJyYXlzaXplJyksXG4gICAgcmVsZWFzZUFycmF5ID0gcmVxdWlyZSgnbG9kYXNoLl9yZWxlYXNlYXJyYXknKSxcbiAgICByZWxlYXNlT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLl9yZWxlYXNlb2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcWAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzXG4gKiBvciBgdGhpc0FyZ2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1NvcnRlZD1mYWxzZV0gQSBmbGFnIHRvIGluZGljYXRlIHRoYXQgYGFycmF5YCBpcyBzb3J0ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIGR1cGxpY2F0ZS12YWx1ZS1mcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXNTb3J0ZWQsIGNhbGxiYWNrKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5kZXhPZiA9IGJhc2VJbmRleE9mLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgdmFyIGlzTGFyZ2UgPSAhaXNTb3J0ZWQgJiYgbGVuZ3RoID49IGxhcmdlQXJyYXlTaXplLFxuICAgICAgc2VlbiA9IChjYWxsYmFjayB8fCBpc0xhcmdlKSA/IGdldEFycmF5KCkgOiByZXN1bHQ7XG5cbiAgaWYgKGlzTGFyZ2UpIHtcbiAgICB2YXIgY2FjaGUgPSBjcmVhdGVDYWNoZShzZWVuKTtcbiAgICBpbmRleE9mID0gY2FjaGVJbmRleE9mO1xuICAgIHNlZW4gPSBjYWNoZTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBjYWxsYmFjayA/IGNhbGxiYWNrKHZhbHVlLCBpbmRleCwgYXJyYXkpIDogdmFsdWU7XG5cbiAgICBpZiAoaXNTb3J0ZWRcbiAgICAgICAgICA/ICFpbmRleCB8fCBzZWVuW3NlZW4ubGVuZ3RoIC0gMV0gIT09IGNvbXB1dGVkXG4gICAgICAgICAgOiBpbmRleE9mKHNlZW4sIGNvbXB1dGVkKSA8IDBcbiAgICAgICAgKSB7XG4gICAgICBpZiAoY2FsbGJhY2sgfHwgaXNMYXJnZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNMYXJnZSkge1xuICAgIHJlbGVhc2VBcnJheShzZWVuLmFycmF5KTtcbiAgICByZWxlYXNlT2JqZWN0KHNlZW4pO1xuICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgcmVsZWFzZUFycmF5KHNlZW4pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYmluYXJ5IHNlYXJjaGVzXG4gKiBvciBgZnJvbUluZGV4YCBjb25zdHJhaW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSBvciBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSAoZnJvbUluZGV4IHx8IDApIC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsIi8qKlxuICogTG8tRGFzaCAyLjQuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cDovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBtb2Rlcm4gZXhwb3J0cz1cIm5wbVwiIC1vIC4vbnBtL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTMgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuNS4yIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxMyBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2VpbmRleG9mJyksXG4gICAga2V5UHJlZml4ID0gcmVxdWlyZSgnbG9kYXNoLl9rZXlwcmVmaXgnKTtcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jb250YWluc2AgZm9yIGNhY2hlIG9iamVjdHMgdGhhdCBtaW1pY3MgdGhlIHJldHVyblxuICogc2lnbmF0dXJlIG9mIGBfLmluZGV4T2ZgIGJ5IHJldHVybmluZyBgMGAgaWYgdGhlIHZhbHVlIGlzIGZvdW5kLCBlbHNlIGAtMWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgMGAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBjYWNoZUluZGV4T2YoY2FjaGUsIHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBjYWNoZSA9IGNhY2hlLmNhY2hlO1xuXG4gIGlmICh0eXBlID09ICdib29sZWFuJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlW3ZhbHVlXSA/IDAgOiAtMTtcbiAgfVxuICBpZiAodHlwZSAhPSAnbnVtYmVyJyAmJiB0eXBlICE9ICdzdHJpbmcnKSB7XG4gICAgdHlwZSA9ICdvYmplY3QnO1xuICB9XG4gIHZhciBrZXkgPSB0eXBlID09ICdudW1iZXInID8gdmFsdWUgOiBrZXlQcmVmaXggKyB2YWx1ZTtcbiAgY2FjaGUgPSAoY2FjaGUgPSBjYWNoZVt0eXBlXSkgJiYgY2FjaGVba2V5XTtcblxuICByZXR1cm4gdHlwZSA9PSAnb2JqZWN0J1xuICAgID8gKGNhY2hlICYmIGJhc2VJbmRleE9mKGNhY2hlLCB2YWx1ZSkgPiAtMSA/IDAgOiAtMSlcbiAgICA6IChjYWNoZSA/IDAgOiAtMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVJbmRleE9mO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4yIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNCBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgdG8gcHJlZml4IGtleXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggYF9fcHJvdG9fX2AgYW5kIHByb3BlcnRpZXMgb24gYE9iamVjdC5wcm90b3R5cGVgICovXG52YXIga2V5UHJlZml4ID0gJ19fMTMzNTI0ODgzODAwMF9fJztcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlQcmVmaXg7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGNhY2hlUHVzaCA9IHJlcXVpcmUoJ2xvZGFzaC5fY2FjaGVwdXNoJyksXG4gICAgZ2V0T2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLl9nZXRvYmplY3QnKSxcbiAgICByZWxlYXNlT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoLl9yZWxlYXNlb2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNhY2hlIG9iamVjdCB0byBvcHRpbWl6ZSBsaW5lYXIgc2VhcmNoZXMgb2YgbGFyZ2UgYXJyYXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIG9iamVjdCBvciBgbnVsbGAgaWYgY2FjaGluZyBzaG91bGQgbm90IGJlIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgZmlyc3QgPSBhcnJheVswXSxcbiAgICAgIG1pZCA9IGFycmF5WyhsZW5ndGggLyAyKSB8IDBdLFxuICAgICAgbGFzdCA9IGFycmF5W2xlbmd0aCAtIDFdO1xuXG4gIGlmIChmaXJzdCAmJiB0eXBlb2YgZmlyc3QgPT0gJ29iamVjdCcgJiZcbiAgICAgIG1pZCAmJiB0eXBlb2YgbWlkID09ICdvYmplY3QnICYmIGxhc3QgJiYgdHlwZW9mIGxhc3QgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGNhY2hlID0gZ2V0T2JqZWN0KCk7XG4gIGNhY2hlWydmYWxzZSddID0gY2FjaGVbJ251bGwnXSA9IGNhY2hlWyd0cnVlJ10gPSBjYWNoZVsndW5kZWZpbmVkJ10gPSBmYWxzZTtcblxuICB2YXIgcmVzdWx0ID0gZ2V0T2JqZWN0KCk7XG4gIHJlc3VsdC5hcnJheSA9IGFycmF5O1xuICByZXN1bHQuY2FjaGUgPSBjYWNoZTtcbiAgcmVzdWx0LnB1c2ggPSBjYWNoZVB1c2g7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQucHVzaChhcnJheVtpbmRleF0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FjaGU7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIGtleVByZWZpeCA9IHJlcXVpcmUoJ2xvZGFzaC5fa2V5cHJlZml4Jyk7XG5cbi8qKlxuICogQWRkcyBhIGdpdmVuIHZhbHVlIHRvIHRoZSBjb3JyZXNwb25kaW5nIGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkIHRvIHRoZSBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gY2FjaGVQdXNoKHZhbHVlKSB7XG4gIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUsXG4gICAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gIGlmICh0eXBlID09ICdib29sZWFuJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgY2FjaGVbdmFsdWVdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZSAhPSAnbnVtYmVyJyAmJiB0eXBlICE9ICdzdHJpbmcnKSB7XG4gICAgICB0eXBlID0gJ29iamVjdCc7XG4gICAgfVxuICAgIHZhciBrZXkgPSB0eXBlID09ICdudW1iZXInID8gdmFsdWUgOiBrZXlQcmVmaXggKyB2YWx1ZSxcbiAgICAgICAgdHlwZUNhY2hlID0gY2FjaGVbdHlwZV0gfHwgKGNhY2hlW3R5cGVdID0ge30pO1xuXG4gICAgaWYgKHR5cGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICh0eXBlQ2FjaGVba2V5XSB8fCAodHlwZUNhY2hlW2tleV0gPSBbXSkpLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlQ2FjaGVba2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVQdXNoO1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBvYmplY3RQb29sID0gcmVxdWlyZSgnbG9kYXNoLl9vYmplY3Rwb29sJyk7XG5cbi8qKlxuICogR2V0cyBhbiBvYmplY3QgZnJvbSB0aGUgb2JqZWN0IHBvb2wgb3IgY3JlYXRlcyBhIG5ldyBvbmUgaWYgdGhlIHBvb2wgaXMgZW1wdHkuXG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBvYmplY3QgZnJvbSB0aGUgcG9vbC5cbiAqL1xuZnVuY3Rpb24gZ2V0T2JqZWN0KCkge1xuICByZXR1cm4gb2JqZWN0UG9vbC5wb3AoKSB8fCB7XG4gICAgJ2FycmF5JzogbnVsbCxcbiAgICAnY2FjaGUnOiBudWxsLFxuICAgICdjcml0ZXJpYSc6IG51bGwsXG4gICAgJ2ZhbHNlJzogZmFsc2UsXG4gICAgJ2luZGV4JzogMCxcbiAgICAnbnVsbCc6IGZhbHNlLFxuICAgICdudW1iZXInOiBudWxsLFxuICAgICdvYmplY3QnOiBudWxsLFxuICAgICdwdXNoJzogbnVsbCxcbiAgICAnc3RyaW5nJzogbnVsbCxcbiAgICAndHJ1ZSc6IGZhbHNlLFxuICAgICd1bmRlZmluZWQnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBudWxsXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0T2JqZWN0O1xuIiwiLyoqXG4gKiBMby1EYXNoIDIuNC4xIChDdXN0b20gQnVpbGQpIDxodHRwOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIG1vZGVybiBleHBvcnRzPVwibnBtXCIgLW8gLi9ucG0vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxMyBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS41LjIgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHA6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIFVzZWQgdG8gcG9vbCBhcnJheXMgYW5kIG9iamVjdHMgdXNlZCBpbnRlcm5hbGx5ICovXG52YXIgb2JqZWN0UG9vbCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFBvb2w7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB3aGVuIG9wdGltaXphdGlvbnMgYXJlIGVuYWJsZWQgZm9yIGxhcmdlIGFycmF5cyAqL1xudmFyIGxhcmdlQXJyYXlTaXplID0gNzU7XG5cbm1vZHVsZS5leHBvcnRzID0gbGFyZ2VBcnJheVNpemU7XG4iLCIvKipcbiAqIExvLURhc2ggMi40LjEgKEN1c3RvbSBCdWlsZCkgPGh0dHA6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgbW9kZXJuIGV4cG9ydHM9XCJucG1cIiAtbyAuL25wbS9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDEzIFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjUuMiA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cDovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xudmFyIG1heFBvb2xTaXplID0gcmVxdWlyZSgnbG9kYXNoLl9tYXhwb29sc2l6ZScpLFxuICAgIG9iamVjdFBvb2wgPSByZXF1aXJlKCdsb2Rhc2guX29iamVjdHBvb2wnKTtcblxuLyoqXG4gKiBSZWxlYXNlcyB0aGUgZ2l2ZW4gb2JqZWN0IGJhY2sgdG8gdGhlIG9iamVjdCBwb29sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byByZWxlYXNlLlxuICovXG5mdW5jdGlvbiByZWxlYXNlT2JqZWN0KG9iamVjdCkge1xuICB2YXIgY2FjaGUgPSBvYmplY3QuY2FjaGU7XG4gIGlmIChjYWNoZSkge1xuICAgIHJlbGVhc2VPYmplY3QoY2FjaGUpO1xuICB9XG4gIG9iamVjdC5hcnJheSA9IG9iamVjdC5jYWNoZSA9IG9iamVjdC5jcml0ZXJpYSA9IG9iamVjdC5vYmplY3QgPSBvYmplY3QubnVtYmVyID0gb2JqZWN0LnN0cmluZyA9IG9iamVjdC52YWx1ZSA9IG51bGw7XG4gIGlmIChvYmplY3RQb29sLmxlbmd0aCA8IG1heFBvb2xTaXplKSB7XG4gICAgb2JqZWN0UG9vbC5wdXNoKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWxlYXNlT2JqZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBtYXApIHtcblx0dmFyIHJlc3VsdCA9IHt9O1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IG1hcChvYmpba2V5XSwga2V5LCBvYmopO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgb25jZSA9IHJlcXVpcmUoXCJvbmNlXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZShcInBhcnNlLWhlYWRlcnNcIilcblxuXG52YXIgWEhSID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3BcbnZhciBYRFIgPSBcIndpdGhDcmVkZW50aWFsc1wiIGluIChuZXcgWEhSKCkpID8gWEhSIDogd2luZG93LlhEb21haW5SZXF1ZXN0XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlWEhSXG5cbmZ1bmN0aW9uIGNyZWF0ZVhIUihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgbG9hZEZ1bmMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCAheGhyLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG4gICAgXG4gICAgdmFyIGZhaWx1cmVSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBib2R5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBlcnJvckZ1bmMoZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIGlmKCEgZXZ0IGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgICAgICAgZXZ0ID0gbmV3IEVycm9yKFwiXCIrZXZ0KVxuICAgICAgICB9XG4gICAgICAgIGV2dC5zdGF0dXNDb2RlID0gMFxuICAgICAgICBjYWxsYmFjayhldnQsIGZhaWx1cmVSZXNwb25zZSlcbiAgICB9XG5cbiAgICAvLyB3aWxsIGxvYWQgdGhlIGRhdGEgJiBwcm9jZXNzIHRoZSByZXNwb25zZSBpbiBhIHNwZWNpYWwgcmVzcG9uc2Ugb2JqZWN0XG4gICAgZnVuY3Rpb24gbG9hZEZ1bmMoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpXG4gICAgICAgIFxuICAgICAgICB2YXIgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBmYWlsdXJlUmVzcG9uc2VcbiAgICAgICAgdmFyIGVyciA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcHRpb25zID0geyB1cmk6IG9wdGlvbnMgfVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrKVxuXG4gICAgdmFyIHhociA9IG9wdGlvbnMueGhyIHx8IG51bGxcblxuICAgIGlmICgheGhyKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvcnMgfHwgb3B0aW9ucy51c2VYRFIpIHtcbiAgICAgICAgICAgIHhociA9IG5ldyBYRFIoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhociA9IG5ldyBYSFIoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleVxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciB0aW1lb3V0VGltZXJcblxuICAgIGlmIChcImpzb25cIiBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlzSnNvbiA9IHRydWVcbiAgICAgICAgaGVhZGVyc1tcIkFjY2VwdFwiXSB8fCAoaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiKSAvL0Rvbid0IG92ZXJyaWRlIGV4aXN0aW5nIGFjY2VwdCBoZWFkZXIgZGVjbGFyZWQgYnkgdXNlclxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZWFkeXN0YXRlY2hhbmdlXG4gICAgeGhyLm9ubG9hZCA9IGxvYWRGdW5jXG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvckZ1bmNcbiAgICAvLyBJRTkgbXVzdCBoYXZlIG9ucHJvZ3Jlc3MgYmUgc2V0IHRvIGEgdW5pcXVlIGZ1bmN0aW9uLlxuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJRSBtdXN0IGRpZVxuICAgIH1cbiAgICB4aHIub250aW1lb3V0ID0gZXJyb3JGdW5jXG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmksICFzeW5jKVxuICAgIC8vaGFzIHRvIGJlIGFmdGVyIG9wZW5cbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gISFvcHRpb25zLndpdGhDcmVkZW50aWFsc1xuICAgIFxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIC8vIG5vdCBzZXR0aW5nIHRpbWVvdXQgb24gdGhlIHhociBvYmplY3QsIGJlY2F1c2Ugb2Ygb2xkIHdlYmtpdHMgZXRjLiBub3QgaGFuZGxpbmcgdGhhdCBjb3JyZWN0bHlcbiAgICAvLyBib3RoIG5wbSdzIHJlcXVlc3QgYW5kIGpxdWVyeSAxLnggdXNlIHRoaXMga2luZCBvZiB0aW1lb3V0LCBzbyB0aGlzIGlzIGJlaW5nIGNvbnNpc3RlbnRcbiAgICBpZiAoIXN5bmMgJiYgb3B0aW9ucy50aW1lb3V0ID4gMCApIHtcbiAgICAgICAgdGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgeGhyLmFib3J0KFwidGltZW91dFwiKTtcbiAgICAgICAgfSwgb3B0aW9ucy50aW1lb3V0KzIgKTtcbiAgICB9XG5cbiAgICBpZiAoeGhyLnNldFJlcXVlc3RIZWFkZXIpIHtcbiAgICAgICAgZm9yKGtleSBpbiBoZWFkZXJzKXtcbiAgICAgICAgICAgIGlmKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSl7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZWFkZXJzIGNhbm5vdCBiZSBzZXQgb24gYW4gWERvbWFpblJlcXVlc3Qgb2JqZWN0XCIpXG4gICAgfVxuXG4gICAgaWYgKFwicmVzcG9uc2VUeXBlXCIgaW4gb3B0aW9ucykge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGVcbiAgICB9XG4gICAgXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiYgXG4gICAgICAgIHR5cGVvZiBvcHRpb25zLmJlZm9yZVNlbmQgPT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgICBvcHRpb25zLmJlZm9yZVNlbmQoeGhyKVxuICAgIH1cblxuICAgIHhoci5zZW5kKGJvZHkpXG5cbiAgICByZXR1cm4geGhyXG5cblxufVxuXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHt9O1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCJtb2R1bGUuZXhwb3J0cyA9IG9uY2Vcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkgcmV0dXJuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbn1cbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuIiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59IiwiLy8gYmVjYXVzZSBvZiBhdXRvcHJlZml4ZXIgZm9yIG5vZGUgZG9lc24ndCB3b3JrIGluIGJyb3dzZXJcbm1vZHVsZS5leHBvcnRzID0gd2luZG93LmF1dG9wcmVmaXhlcjsiLCIvLyBiZWNhdXNlIG9mIFJ4IGRvZXNuJ3Qgd29yayBpbiBzdHJpY3QgbW9kZSB3aGljaCBpcyBmb3JjZWQgYnkgdHJhY2V1ciB3aGVuIHVzaW5nIEVTNiBNb2R1bGVzXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SeDsiLCJpbXBvcnQgQ3ljbGUgZnJvbSAnY3ljbGVqcyc7XG5cbnZhciBJbnB1dEludGVudCA9IEN5Y2xlLmNyZWF0ZUludGVudChbICdpbnB1dFRleHQnIF0sIGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlQ2hhbmdlOiB2aWV3LmlucHV0VGV4dC5tYXAoZXYgPT4gZXYudGFyZ2V0LnZhbHVlKVxuICAgIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRJbnRlbnQ7IiwiaW1wb3J0IEN5Y2xlIGZyb20gJ2N5Y2xlanMnO1xuXG52YXIgU2V0dGluZ3NJbnRlbnQgPSBDeWNsZS5jcmVhdGVJbnRlbnQoWyAnc2V0dGluZ3NDaGFuZ2UnIF0sIGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0dGluZ3NDaGFuZ2U6IHZpZXcuc2V0dGluZ3NDaGFuZ2UubWFwKGV2ID0+IGV2LnRhcmdldC52YWx1ZSlcbiAgICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzSW50ZW50OyIsImltcG9ydCBDeWNsZSBmcm9tICdjeWNsZWpzJztcblxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vc2VydmljZXMvc3RvcmFnZSc7XG5cblxudmFyIElucHV0TW9kZWwgPSBDeWNsZS5jcmVhdGVNb2RlbChbICdzb3VyY2VDaGFuZ2UnIF0sIGZ1bmN0aW9uIChpbnRlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IGludGVudC5zb3VyY2VDaGFuZ2VcbiAgICAgICAgICAgIC5zdGFydFdpdGgoc3RvcmFnZS5yZWFkKCdpbnB1dCcpKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2F2ZSgnaW5wdXQnLCBpbnB1dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9KVxuICAgIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRNb2RlbDsiLCJpbXBvcnQgQ3ljbGUgZnJvbSAnY3ljbGVqcyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5cbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2UnO1xuXG5cbnZhciBwcm9jZXNzb3IgPSBhdXRvcHJlZml4ZXIoeyBicm93c2VyczogWyc+IDElJywgJ2xhc3QgMiB2ZXJzaW9uJ10sIGNhc2NhZGU6IHRydWUgfSk7XG5cbnZhciBPdXRwdXRNb2RlbCA9IEN5Y2xlLmNyZWF0ZU1vZGVsKFsgJ3NvdXJjZUNoYW5nZScgXSwgZnVuY3Rpb24gKGludGVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeGVkOiBpbnRlbnQuc291cmNlQ2hhbmdlXG4gICAgICAgICAgICAuc3RhcnRXaXRoKHN0b3JhZ2UucmVhZCgnaW5wdXQnKSlcbiAgICAgICAgICAgIC5tYXAoc291cmNlID0+IHByb2Nlc3Nvci5wcm9jZXNzKHNvdXJjZSwgeyBzYWZlOiB0cnVlIH0pLmNzcylcbiAgICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dE1vZGVsOyIsImltcG9ydCBDeWNsZSBmcm9tICdjeWNsZWpzJztcbmltcG9ydCBSeCBmcm9tICdyeCc7XG5cbmltcG9ydCBnZXRKc29uIGZyb20gJy4uL3NlcnZpY2VzL2dldC1qc29uJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uL3NlcnZpY2VzL3N0b3JhZ2UnO1xuaW1wb3J0IFNldHRpbmdzUGFyc2VyIGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLXBhcnNlcic7XG5cblxudmFyIFNldHRpbmdzTW9kZWwgPSBDeWNsZS5jcmVhdGVNb2RlbChbICdzZXR0aW5nc0NoYW5nZScgXSwgZnVuY3Rpb24gKGludGVudCkge1xuICAgIHZhciBzZXR0aW5nc1BhcnNlcjtcbiAgICB2YXIgY2FuSVVzZURhdGEgPSBnZXRKc29uKCdodHRwczovL2Nkbi5yYXdnaXQuY29tL0Z5cmQvY2FuaXVzZS9tYXN0ZXIvZGF0YS5qc29uJykudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHNldHRpbmdzUGFyc2VyID0gbmV3IFNldHRpbmdzUGFyc2VyKGRhdGEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0dGluZ3M6IGludGVudC5zZXR0aW5nc0NoYW5nZVxuICAgICAgICAgICAgLnNraXBVbnRpbChjYW5JVXNlRGF0YSlcbiAgICAgICAgICAgIC5tZXJnZShSeC5PYnNlcnZhYmxlLmZyb21Qcm9taXNlKGNhbklVc2VEYXRhLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzUGFyc2VyLnBhcnNlKHN0b3JhZ2UucmVhZCgnc2V0dGluZ3MnKSk7XG4gICAgICAgICAgICB9KSkpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zYXZlKCdzZXR0aW5ncycsIHNldHRpbmdzUGFyc2VyLnN0cmluZ2lmeShzZXR0aW5ncykpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzO1xuICAgICAgICAgICAgfSlcbiAgICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzTW9kZWw7IiwiaW1wb3J0IG1hcFZhbHVlcyBmcm9tICdtYXAtdmFsdWVzJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcblxuXG4vLyBCcm93c2Vycywgd2hpY2ggaW50ZXJlc3RlZCBmb3IgQXV0b3ByZWZpeGVyXG52YXIgbmFtZXMgPSBbICdmaXJlZm94JywgJ2Nocm9tZScsICdzYWZhcmknLCAnaW9zX3NhZicsICdvcGVyYScsICdpZScsICdiYicsICdhbmRyb2lkJyBdO1xuXG4vLyBCcm93c2VycywgdGhhdCB3aWxsIGJlIHVzZWQgaW4gXCJsYXN0IDIgdmVyc2lvblwiIGFuZCBzYW1lIHNlbGVjdGlvbnNcbnZhciBtYWpvciA9IFsgJ2ZpcmVmb3gnLCAnY2hyb21lJywgJ3NhZmFyaScsICdpb3Nfc2FmJywgJ29wZXJhJywgJ2FuZHJvaWQnLCAnaWUnLCAnaWVfbW9iJyBdO1xuXG4vLyBOb3JtYWxpemUgQ2FuIEkgVXNlIHZlcnNpb25zIGFycmF5XG5mdW5jdGlvbiBub3JtYWxpemVWZXJzaW9ucyhhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5yZXZlcnNlKCkuZmlsdGVyKChpKSA9PiBpKTtcbn1cblxuLy8gRXhwYW5kIHZlcnNpb25zIGludGVydmFscyBmcm9tIENhbiBJIFVzZVxuZnVuY3Rpb24gZXhwYW5kVmVyc2lvbkludGVydmFscyhhcnJheSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIHNwbGl0ZWQgPSBpbnRlcnZhbC5zcGxpdCgnLScpLnNvcnQoKS5yZXZlcnNlKCk7XG4gICAgICAgIHZhciBzdWIgPSBzcGxpdGVkLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gWyBwYXJ0LCBpbnRlcnZhbCwgc3BsaXRlZC5sZW5ndGggXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0ICA9IHJlc3VsdC5jb25jYXQoc3ViKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQ29udmVydCBDYW4gSSBVc2UgZGF0YSB0byBBdXRvcHJlZml4ZXLigJlzXG5mdW5jdGlvbiBub3JtYWxpemVCcm93c2VyKGRhdGEsIG5hbWUpIHtcbiAgICB2YXIgZnV0dXJlID0gbm9ybWFsaXplVmVyc2lvbnMoZGF0YS52ZXJzaW9ucy5zbGljZSgtMywgLTEpKTtcbiAgICB2YXIgdmVyc2lvbnMgPSBleHBhbmRWZXJzaW9uSW50ZXJ2YWxzKG5vcm1hbGl6ZVZlcnNpb25zKGRhdGEudmVyc2lvbnMuc2xpY2UoMCwgLTQpKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaW5vcjogbWFqb3IuaW5kZXhPZihuYW1lKSA9PT0gLTEsXG4gICAgICAgIGZ1dHVyZTogISFmdXR1cmUubGVuZ3RoLFxuICAgICAgICB2ZXJzaW9uczogdmVyc2lvbnMubWFwKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uWzBdKSxcbiAgICAgICAgcG9wdWxhcml0eTogdmVyc2lvbnMubWFwKCh2ZXJzaW9uKSA9PiBkYXRhWyd1c2FnZV9nbG9iYWwnXVt2ZXJzaW9uWzFdXSAvIHZlcnNpb25bMl0pXG4gICAgfTtcbn1cblxuXG5mdW5jdGlvbiBub3JtYWxpemUoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZWQ6IGRhdGEudXBkYXRlZCxcbiAgICAgICAgYnJvd3NlcnM6IG1hcFZhbHVlcyhwaWNrKGRhdGEuYWdlbnRzLCBuYW1lcyksIG5vcm1hbGl6ZUJyb3dzZXIpXG4gICAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbm9ybWFsaXplOiBub3JtYWxpemVcbn07IiwiaW1wb3J0IHhociBmcm9tICd4aHInO1xuXG5cbmZ1bmN0aW9uIGdldEpzb24odXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB4aHIoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHVyaTogdXJsXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3AsIGJvZHkpIHtcbiAgICAgICAgICAgIGlmKCFlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SnNvbjsiLCJpbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5cbmltcG9ydCBjYW5pdXNlRGF0YU5vcm1hbGl6ZXIgZnJvbSAnLi9jYW5pdXNlLWRhdGEtbm9ybWFsaXplcic7XG5cblxuY2xhc3MgU2V0dGluZ3NQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGNhbml1c2VEYXRhTm9ybWFsaXplci5ub3JtYWxpemUoZGF0YSk7XG5cbiAgICAgICAgdGhpcy5fYWxpYXNlcyA9IHtcbiAgICAgICAgICAgIGZ4OiAnZmlyZWZveCcsXG4gICAgICAgICAgICBmZjogJ2ZpcmVmb3gnLFxuICAgICAgICAgICAgaW9zOiAnaW9zX3NhZicsXG4gICAgICAgICAgICBleHBsb3JlcjogJ2llJyxcbiAgICAgICAgICAgIGJsYWNrYmVycnk6ICdiYicsXG4gICAgICAgICAgICBleHBsb3Jlcm1vYmlsZTogJ2llX21vYicsXG4gICAgICAgICAgICBvcGVyYW1pbmk6ICdvcF9taW5pJyxcbiAgICAgICAgICAgIG9wZXJhbW9iaWxlOiAnb3BfbW9iJyxcbiAgICAgICAgICAgIGNocm9tZWFuZHJvaWQ6ICdhbmRfY2hyJyxcbiAgICAgICAgICAgIGZpcmVmb3hhbmRyb2lkOiAnYW5kX2ZmJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3JlcXVpcmVtZW50cyA9IHtcbiAgICAgICAgICAgIGxhc3RWZXJzaW9uczoge1xuICAgICAgICAgICAgICAgIHJlZ2V4cDogL15sYXN0IChcXGQrKSB2ZXJzaW9ucz8kL2ksXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbih2ZXJzaW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYnJvd3NlcnMoXG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YSkgPT4gZGF0YS5taW5vciA/IFtdIDogZGF0YS52ZXJzaW9ucy5zbGljZSgwLCB2ZXJzaW9ucylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFzdEJ5QnJvd3Nlcjoge1xuICAgICAgICAgICAgICAgIHJlZ2V4cDogL15sYXN0IChcXGQrKSAoXFx3KykgdmVyc2lvbnM/JC9pLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24odmVyc2lvbnMsIGJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9ieU5hbWUoYnJvd3Nlcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5zbGljZSgwLCB2ZXJzaW9ucykubWFwKChicm93c2VyVmVyc2lvbikgPT4gWyBkYXRhLm5hbWUsIGJyb3dzZXJWZXJzaW9uIF0uam9pbignICcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2xvYmFsU3RhdGlzdGljczoge1xuICAgICAgICAgICAgICAgIHJlZ2V4cDogL14+IChcXGQrKFxcLlxcZCspPyklJC8sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihwb3B1bGFyaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9icm93c2VycyhcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiBkYXRhLm1pbm9yID8gW10gOiBkYXRhLnZlcnNpb25zLmZpbHRlcigodmVyc2lvbiwgaSkgPT4gZGF0YS5wb3B1bGFyaXR5W2ldID4gcG9wdWxhcml0eSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV3ZXJUaGFuOiB7XG4gICAgICAgICAgICAgICAgcmVnZXhwOiAvXihcXHcrKSAoPj0/KVxccyooW1xcZFxcLl0rKS8sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihicm93c2VyLCBzaWduLCB2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fYnlOYW1lKGJyb3dzZXIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc2lnbiA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgPSAoKGJyb3dzZXJWZXJzaW9uKSA9PiBicm93c2VyVmVyc2lvbiA+IHZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc2lnbiA9PT0gJz49Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyID0gKChicm93c2VyVmVyc2lvbikgPT4gYnJvd3NlclZlcnNpb24gPj0gdmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5maWx0ZXIoZmlsdGVyKS5tYXAoKGJyb3dzZXJWZXJzaW9uKSA9PiBbIGRhdGEubmFtZSwgYnJvd3NlclZlcnNpb24gXS5qb2luKCcgJykpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2xkZXJUaGFuOiB7XG4gICAgICAgICAgICAgICAgcmVnZXhwOiAvXihcXHcrKSAoPD0/KVxccyooW1xcZFxcLl0rKS8sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihicm93c2VyLCBzaWduLCB2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fYnlOYW1lKGJyb3dzZXIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc2lnbiA9PT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgPSAoKGJyb3dzZXJWZXJzaW9uKSA9PiBicm93c2VyVmVyc2lvbiA8IHZlcnNpb24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoc2lnbiA9PT0gJzw9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyID0gKChicm93c2VyVmVyc2lvbikgPT4gYnJvd3NlclZlcnNpb24gPD0gdmVyc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS52ZXJzaW9ucy5maWx0ZXIoZmlsdGVyKS5tYXAoKGJyb3dzZXJWZXJzaW9uKSA9PiBbIGRhdGEubmFtZSwgYnJvd3NlclZlcnNpb24gXS5qb2luKCcgJykpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXNyOiB7XG4gICAgICAgICAgICAgICAgcmVnZXhwOiAvXihmaXJlZm94fGZmfGZ4KSBlc3IkL2ksXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgJ2ZpcmVmb3ggMzEnIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpcmVjdDoge1xuICAgICAgICAgICAgICAgIHJlZ2V4cDogL14oXFx3KykgKFtcXGRcXC5dKykkLyxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKGJyb3dzZXIsIHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9ieU5hbWUoYnJvd3Nlcik7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCh2ZXJzaW9uKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdCA9IGRhdGEuZnV0dXJlID8gZGF0YS5mdXR1cmVbMF0gOiBkYXRhLnZlcnNpb25zWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3QgPSBkYXRhLnZlcnNpb25zW2RhdGEudmVyc2lvbnMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodmVyc2lvbiA+IGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24gPSBsYXN0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmVyc2lvbiA8IGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uID0gZmlyc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyBbIGRhdGEubmFtZSwgdmVyc2lvbiBdLmpvaW4oJyAnKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJzZShyZXF1aXJlbWVudHMpIHtcbiAgICAgICAgcmVxdWlyZW1lbnRzID0gcmVxdWlyZW1lbnRzLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkID0gWyBdO1xuXG4gICAgICAgIHJlcXVpcmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcXVpcmVtZW50KSB7IFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fcmVxdWlyZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKHJlcU5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gdGhpcy5fcmVxdWlyZW1lbnRzW3JlcU5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IHJlcXVpcmVtZW50Lm1hdGNoKHJlcS5yZWdleHApO1xuXG4gICAgICAgICAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZC5jb25jYXQocmVxLnNlbGVjdC5hcHBseSh0aGlzLCBtYXRjaC5zbGljZSgxLCAtMSkpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB1bmlxKHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBzdHJpbmdpZnkoLypvYmoqLykge1xuICAgICAgICByZXR1cm4gJz4gMSUsIGxhc3QgMiB2ZXJzaW9ucywgRmlyZWZveCBFU1IsIE9wZXJhIDEyLjEnO1xuICAgIH1cblxuICAgIF9icm93c2Vycyhjcml0ZXJpYSkge1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSBbIF07XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fZGF0YS5icm93c2VycykuZm9yRWFjaChmdW5jdGlvbihicm93c2VyTmFtZSkge1xuICAgICAgICAgICAgdmFyIGJyb3dzZXJEYXRhID0gdGhpcy5fZGF0YS5icm93c2Vyc1ticm93c2VyTmFtZV07XG5cbiAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuY29uY2F0KFxuICAgICAgICAgICAgICAgIGNyaXRlcmlhKGJyb3dzZXJEYXRhKS5tYXAoKGJyb3dzZXJWZXJzaW9uKSA9PiBbIGJyb3dzZXJOYW1lLCBicm93c2VyVmVyc2lvbiBdLmpvaW4oJyAnKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBfYnlOYW1lKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbmFtZSA9IHRoaXMuX2FsaWFzZXNbbmFtZV0gfHwgbmFtZTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhLmJyb3dzZXJzW25hbWVdO1xuXG4gICAgICAgIGRhdGEubmFtZSA9IG5hbWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYXJzZXI7IiwiZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgaWYodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2F2ZShrZXksIHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZDogcmVhZCxcbiAgICBzYXZlOiBzYXZlXG59OyIsImltcG9ydCBDeWNsZSBmcm9tICdjeWNsZWpzJztcblxudmFyIGggPSBDeWNsZS5oO1xuXG52YXIgSW5wdXRWaWV3ID0gQ3ljbGUuY3JlYXRlVmlldyhbICdzb3VyY2UnIF0sIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50czogWyAnaW5wdXRUZXh0JyBdLFxuICAgICAgICB2dHJlZSQ6IG1vZGVsLnNvdXJjZS5tYXAoc291cmNlID0+IGgoJ2Rpdi5hdXRvcHJlZml4ZXJfX3ZpZXcuYXV0b3ByZWZpeGVyX192aWV3LS1pbnB1dC5hdXRvcHJlZml4ZXJfX2lucHV0Jywge30sIFtcbiAgICAgICAgICAgIGgoJ2xhYmVsLmF1dG9wcmVmaXhlcl9faW5wdXRfX2xhYmVsJywge30sJ1lvdXIgQ1NTOicpLFxuICAgICAgICAgICAgaCgndGV4dGFyZWEuYXV0b3ByZWZpeGVyX19pbnB1dF9fY29udGVudCcsIHtcbiAgICAgICAgICAgICAgICAnZXYtaW5wdXQnOiAnaW5wdXRUZXh0JyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBzb3VyY2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VmlldztcbiIsImltcG9ydCBDeWNsZSBmcm9tICdjeWNsZWpzJztcblxudmFyIGggPSBDeWNsZS5oO1xuXG52YXIgT3V0cHV0VmlldyA9IEN5Y2xlLmNyZWF0ZVZpZXcoWyAncHJlZml4ZWQnIF0sIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50czogWyBdLFxuICAgICAgICB2dHJlZSQ6IG1vZGVsLnByZWZpeGVkLm1hcChwcmVmaXhlZCA9PiBoKCdkaXYuYXV0b3ByZWZpeGVyX192aWV3LmF1dG9wcmVmaXhlcl9fdmlldy0tb3V0cHV0LmF1dG9wcmVmaXhlcl9fb3V0cHV0Jywge30sIFtcbiAgICAgICAgICAgIGgoJ2xhYmVsLmF1dG9wcmVmaXhlcl9fb3V0cHV0X19sYWJlbCcsIHt9LCdQcmVmaXhlZCBDU1M6JyksXG4gICAgICAgICAgICBoKCdvdXRwdXQuYXV0b3ByZWZpeGVyX19vdXRwdXRfX2NvbnRlbnQnLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogcHJlZml4ZWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dFZpZXc7XG4iLCJpbXBvcnQgQ3ljbGUgZnJvbSAnY3ljbGVqcyc7XG5cbnZhciBoID0gQ3ljbGUuaDtcblxudmFyIFNldHRpbmdzVmlldyA9IEN5Y2xlLmNyZWF0ZVZpZXcoWyAnc2V0dGluZ3MnIF0sIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGV2ZW50czogWyAnc2V0dGluZ0NoYW5nZScgXSxcbiAgICAgICAgdnRyZWUkOiBtb2RlbC5zZXR0aW5ncy5tYXAoc2V0dGluZ3MgPT4gaCgnZGl2LmF1dG9wcmVmaXhlcl9fdmlldy5hdXRvcHJlZml4ZXJfX3ZpZXctLXNldHRpbmdzLmF1dG9wcmVmaXhlcl9fc2V0dGluZ3MnLCB7fSwgW1xuICAgICAgICAgICAgaCgnc3BhbicsIHt9LCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXG4gICAgICAgIF0pKVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzVmlldztcbiJdfQ==

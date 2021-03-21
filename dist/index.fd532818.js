// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A7H4y":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "62d5dab885897b04655082d4fd532818";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
var _ComponentsKeyboardJs = require('./Components/Keyboard.js');
_ComponentsKeyboardJs.Keyboard();

},{"./Components/Keyboard.js":"tGFTw"}],"tGFTw":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Keyboard", function () {
  return Keyboard;
});
var _InputJs = require('./Input.js');
const Keyboard = () => {
  const colors = ['#8C705F', '#7F534B'];
  const DATA = `
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
    fill=${colors[1]} stroke="none">
    <path d="M20 5260 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19 33
    -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 340 0 307 -1 321 -20 340 -19
    19 -33 20 -340 20 -307 0 -321 -1 -340 -20z" fill="000" id="27"/>

    <path d="M902 5264 c-22 -15 -22 -16 -22 -340 0 -311 1 -325 20 -344 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -338 20 -271 0 -321 -2 -340 -16z" id="49"/>

    <path d="M1777 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 336 -16 l313 0 25 25 25 25 -3 321 c-3 304 -4 321 -22 335 -16 11 -80
    14 -341 14 -299 0 -323 -1 -338 -18z" id="50"/>

    <path d="M2657 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 334 -16 292 0 313 1 335 19 l24 19 3 304 c2 166 0 313 -3 325 -13 53
    -11 53 -359 53 -300 0 -324 -1 -339 -18z" id="51"/>

    <path d="M3537 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 333 -16 265 0 314 2 333 16 22 15 22 16 22 343 0 305 -1 329 -18 344
    -17 15 -55 17 -339 17 -297 0 -321 -1 -336 -18z" id="52"/>
    
    <path d="M4416 5264 c-9 -8 -18 -25 -21 -37 -3 -12 -5 -159 -3 -325 l3 -304
    24 -19 c22 -18 43 -19 335 -19 266 0 315 2 334 16 22 15 22 16 22 343 0 305
    -1 329 -18 344 -17 15 -55 17 -340 17 -278 0 -323 -2 -336 -16z" id="53"/>

    <path d="M5290 5260 c-19 -19 -20 -33 -20 -335 l0 -316 25 -24 24 -25 313 0
    c268 0 317 2 336 16 22 15 22 16 22 343 0 305 -1 329 -18 344 -17 15 -55 17
    -340 17 -309 0 -323 -1 -342 -20z"id="54"/>

    <path d="M6170 5260 c-19 -19 -20 -33 -20 -339 l0 -320 26 -20 c26 -20 38 -21
    340 -21 301 0 315 1 334 20 19 19 20 33 20 344 0 324 0 325 -22 340 -19 14
    -69 16 -340 16 -305 0 -319 -1 -338 -20z" id="55"/>

    <path d="M7050 5260 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -340 20 -307 0 -321 -1 -340 -20z" id="56"/>

    <path d="M7930 5260 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -340 20 -307 0 -321 -1 -340 -20z" id="57"/>

    <path d="M8807 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 336 -16 l313 0 24 25 25 24 0 316 c0 302 -1 316 -20 335 -19 19 -33 20
    -343 20 -301 0 -325 -1 -340 -18z" id="48"/>
    
    <path d="M9687 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 336 -16 l313 0 25 25 25 25 -3 321 c-3 304 -4 321 -22 335 -16 11 -80
    14 -341 14 -299 0 -323 -1 -338 -18z" id="189"/>

    <path d="M10567 5262 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 333 -16 265 0 314 2 333 16 22 15 22 16 22 343 0 305 -1 329 -18 344
    -17 15 -55 17 -339 17 -297 0 -321 -1 -336 -18z" id="187" />

    <path d="M11447 5262 c-15 -17 -17 -55 -17 -345 l0 -327 24 -15 c20 -14 101
    -15 670 -13 628 3 648 4 662 22 11 16 14 79 14 338 0 305 -1 319 -20 338 -20
    20 -33 20 -668 20 -616 0 -650 -1 -665 -18z" id="8" />

    <path d="M22 4404 c-22 -15 -22 -16 -22 -338 0 -262 3 -326 14 -342 14 -18 33
    -19 499 -22 466 -2 485 -2 508 17 l24 19 3 304 c2 166 0 313 -3 325 -13 55 3
    53 -518 53 -421 0 -485 -2 -505 -16z" id="9" />

    <path d="M1227 4402 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    69 -16 339 -16 l318 0 20 26 c20 26 21 38 21 340 0 301 -1 315 -20 334 -19 19
    -33 20 -343 20 -301 0 -325 -1 -340 -18z" id="81" />

    <path d="M2106 4404 c-9 -8 -16 -23 -16 -32 0 -9 0 -156 -1 -327 0 -305 1
    -310 22 -327 19 -16 51 -18 336 -18 l314 0 24 25 25 24 0 306 c0 302 -3 337
    -34 357 -6 4 -156 8 -333 8 -279 0 -324 -2 -337 -16z" id="87"/>

    <path d="M2984 4406 c-18 -14 -19 -29 -19 -341 l0 -327 24 -19 c22 -18 43 -19
    336 -19 293 0 314 1 336 19 l24 19 3 304 c2 166 0 313 -3 325 -13 53 -11 53
    -359 53 -262 0 -326 -3 -342 -14z" id="69"/>

    <path d="M3860 4400 c-19 -19 -20 -33 -20 -331 0 -306 3 -341 34 -361 6 -4
    153 -8 326 -8 270 0 319 2 338 16 22 15 22 16 22 343 0 305 -1 329 -18 344
    -17 15 -55 17 -340 17 -309 0 -323 -1 -342 -20z" id="82" />

    <path d="M4740 4400 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19
    33 -20 338 -20 271 0 321 2 340 16 22 15 22 16 22 343 0 305 -1 329 -18 344
    -17 15 -55 17 -340 17 -309 0 -323 -1 -342 -20z" id="84"/>

    <path d="M5616 4398 c-14 -19 -16 -69 -16 -340 0 -305 1 -319 20 -338 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 343 0 301 -1 325 -18 340
    -17 15 -55 17 -345 17 -325 0 -326 0 -341 -22z" id="89"/>

    <path d="M6497 4402 c-15 -17 -17 -55 -17 -340 0 -309 1 -323 20 -342 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 338 0 271 -2 321 -16 340
    -15 22 -16 22 -343 22 -305 0 -329 -1 -344 -18z" id="85"/>

    <path d="M7377 4402 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    69 -16 340 -16 305 0 319 1 338 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -343 20 -301 0 -325 -1 -340 -18z" id="73"/>

    <path d="M8257 4402 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 338 -16 173 0 320 4 326 8 31 20 34 55 34 361 0 298 -1 312 -20 331
    -19 19 -33 20 -343 20 -301 0 -325 -1 -340 -18z" id="79"/>

    <path d="M9136 4404 c-9 -8 -18 -25 -21 -37 -3 -12 -5 -159 -3 -325 l3 -304
    24 -19 c22 -18 43 -19 336 -19 293 0 314 1 336 19 l24 19 0 327 c0 312 -1 327
    -19 341 -16 11 -80 14 -342 14 -280 0 -325 -2 -338 -16z" id="80"/>

    <path d="M10024 4412 c-31 -20 -34 -55 -34 -357 l0 -306 25 -24 24 -25 314 0
    c285 0 317 2 336 18 20 17 21 24 21 327 0 171 0 318 0 327 0 9 -7 24 -16 32
    -13 14 -58 16 -337 16 -177 0 -327 -4 -333 -8z" id="219"/>

    <path d="M10894 4406 c-18 -14 -19 -31 -22 -335 l-3 -321 25 -25 25 -25 313 0
    c268 0 317 2 336 16 22 15 22 16 22 344 0 285 -2 331 -16 344 -13 14 -58 16
    -338 16 -262 0 -326 -3 -342 -14z" id="221"/>

    <path d="M11776 4404 c-9 -8 -18 -25 -21 -37 -3 -12 -5 -159 -3 -325 l3 -304
    24 -19 c23 -19 42 -19 508 -17 466 3 485 4 499 22 11 16 14 80 14 342 0 322 0
    323 -22 338 -20 14 -84 16 -505 16 -424 0 -483 -2 -497 -16z" id="220"/>

    <path d="M17 3542 c-15 -17 -17 -55 -17 -338 0 -175 4 -324 8 -330 21 -32 50
    -34 652 -34 l601 0 24 25 25 24 0 316 c0 302 -1 316 -20 335 -20 20 -33 20
    -638 20 -587 0 -620 -1 -635 -18z" id="20"/>

    <path d="M1487 3542 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 336 -16 l313 0 24 25 25 24 0 316 c0 302 -1 316 -20 335 -19 19 -33 20
    -343 20 -301 0 -325 -1 -340 -18z" id="65"/>

    <path d="M2367 3542 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 336 -16 l313 0 25 25 25 25 -3 321 c-3 304 -4 321 -22 335 -16 11 -80
    14 -341 14 -299 0 -323 -1 -338 -18z" id="83"/>

    <path d="M3246 3544 c-14 -13 -16 -59 -16 -344 0 -328 0 -329 22 -344 19 -14
    68 -16 333 -16 265 0 314 2 333 16 22 15 22 16 22 344 0 285 -2 331 -16 344
    -13 14 -58 16 -339 16 -281 0 -326 -2 -339 -16z" id="68"/>

    <path d="M4126 3544 c-14 -13 -16 -59 -16 -344 0 -328 0 -329 22 -344 19 -14
    68 -16 333 -16 265 0 314 2 333 16 22 15 22 16 22 343 0 305 -1 329 -18 344
    -17 15 -55 17 -340 17 -278 0 -323 -2 -336 -16z" id="70"/>

    <path d="M5004 3546 c-18 -14 -19 -31 -22 -335 l-3 -321 25 -25 25 -25 313 0
    c268 0 317 2 336 16 22 15 22 16 22 343 0 305 -1 329 -18 344 -17 15 -55 17
    -338 17 -261 0 -324 -3 -340 -14z" id="71"/>

    <path d="M5880 3540 c-19 -19 -20 -33 -20 -335 l0 -316 25 -24 24 -25 316 0
    c302 0 316 1 335 20 19 19 20 33 20 343 0 301 -1 325 -18 340 -17 15 -55 17
    -340 17 -309 0 -323 -1 -342 -20z" id="72"/>

    <path d="M6760 3540 c-19 -19 -20 -33 -20 -339 0 -345 0 -343 53 -356 12 -3
    161 -5 330 -3 292 3 309 4 323 22 22 31 21 642 -2 674 -15 22 -16 22 -340 22
    -311 0 -325 -1 -344 -20z" id="74"/>

    <path d="M7636 3538 c-23 -32 -24 -643 -2 -674 14 -18 31 -19 323 -22 169 -2
    318 0 330 3 53 13 53 11 53 356 0 306 -1 320 -20 339 -19 19 -33 20 -344 20
    -324 0 -325 0 -340 -22z" id="75"/>

    <path d="M8517 3542 c-15 -17 -17 -55 -17 -340 0 -309 1 -323 20 -342 19 -19
    33 -20 335 -20 l316 0 24 25 25 24 0 316 c0 302 -1 316 -20 335 -19 19 -33 20
    -343 20 -301 0 -325 -1 -340 -18z" id="76"/>

    <path d="M9397 3542 c-15 -17 -17 -55 -17 -340 0 -309 1 -323 20 -342 19 -19
    33 -20 335 -20 l316 0 25 25 25 25 -3 321 c-3 304 -4 321 -22 335 -16 11 -80
    14 -341 14 -299 0 -323 -1 -338 -18z" id="186"/>

    <path d="M10277 3542 c-15 -17 -17 -55 -17 -345 0 -325 0 -326 22 -341 19 -14
    68 -16 333 -16 265 0 314 2 333 16 22 15 22 16 22 344 0 285 -2 331 -16 344
    -13 14 -58 16 -338 16 -300 0 -324 -1 -339 -18z" id="222"/>

    <path d="M11156 3542 c-15 -17 -16 -52 -14 -348 l3 -328 25 -13 c20 -10 195
    -13 798 -13 776 0 802 1 824 34 4 6 8 155 8 332 0 298 -1 322 -18 337 -17 16
    -88 17 -814 17 -760 0 -796 -1 -812 -18z" id="13"/>

    <path d="M17 2672 c-15 -17 -17 -55 -17 -339 0 -297 1 -321 18 -336 17 -16 84
    -17 753 -17 619 0 738 2 755 14 18 14 19 29 19 339 0 260 -3 327 -14 340 -12
    16 -77 17 -756 17 -706 0 -743 -1 -758 -18z" id="16-L"/>

    <path d="M1722 2678 c-17 -17 -17 -669 0 -686 17 -17 669 -17 686 0 17 17 17
    669 0 686 -17 17 -669 17 -686 0z" id="90"/>

    <path d="M2602 2678 c-17 -17 -17 -669 0 -686 17 -17 669 -17 686 0 17 17 17
    669 0 686 -17 17 -669 17 -686 0z" id="88"/>

    <path d="M3476 2668 c-14 -19 -16 -68 -16 -333 0 -265 2 -314 16 -333 15 -22
    16 -22 344 -22 285 0 331 2 344 16 14 13 16 58 16 339 0 281 -2 326 -16 339
    -13 14 -59 16 -344 16 -328 0 -329 0 -344 -22z" id="67"/>

    <path d="M4356 2668 c-14 -19 -16 -68 -16 -333 0 -265 2 -314 16 -333 15 -22
    16 -22 344 -22 285 0 331 2 344 16 14 13 16 58 16 339 0 281 -2 326 -16 339
    -13 14 -59 16 -344 16 -328 0 -329 0 -344 -22z" id="86"/>

    <path d="M5236 2668 c-14 -19 -16 -68 -16 -333 0 -265 2 -314 16 -333 15 -22
    16 -22 343 -22 305 0 329 1 344 18 15 17 17 55 17 339 0 297 -1 321 -18 336
    -17 15 -55 17 -345 17 -325 0 -326 0 -341 -22z" id="66"/>

    <path d="M6117 2672 c-15 -17 -17 -55 -17 -339 0 -297 1 -321 18 -336 17 -15
    55 -17 344 -17 302 0 326 1 341 18 15 17 17 55 17 339 0 297 -1 321 -18 336
    -17 15 -55 17 -344 17 -302 0 -326 -1 -341 -18z" id="78"/>

    <path d="M6997 2672 c-15 -17 -17 -55 -17 -339 0 -297 1 -321 18 -336 17 -15
    55 -17 345 -17 325 0 326 0 341 22 14 19 16 68 16 333 0 265 -2 314 -16 333
    -15 22 -16 22 -343 22 -305 0 -329 -1 -344 -18z" id="77"/>

    <path d="M7876 2674 c-14 -13 -16 -58 -16 -339 0 -281 2 -326 16 -339 13 -14
    59 -16 344 -16 328 0 329 0 344 22 14 19 16 68 16 333 0 265 -2 314 -16 333
    -15 22 -16 22 -344 22 -285 0 -331 -2 -344 -16z" id="188"/>

    <path d="M8750 2671 c-6 -13 -10 -137 -10 -336 0 -199 4 -323 10 -336 10 -18
    25 -19 344 -19 298 0 335 2 347 17 11 13 14 80 14 338 0 258 -3 325 -14 338
    -12 15 -49 17 -347 17 -319 0 -334 -1 -344 -19z" id="190"/>

    <path d="M9632 2678 c-9 -9 -12 -99 -12 -343 0 -244 3 -334 12 -343 17 -17
    669 -17 686 0 17 17 17 669 0 686 -17 17 -669 17 -686 0z" id="191"/>

    <path d="M10512 2678 c-9 -9 -12 -98 -12 -339 0 -284 2 -330 16 -343 14 -14
    130 -16 1133 -16 1070 0 1119 1 1134 18 15 17 17 55 17 339 0 297 -1 321 -18
    336 -17 16 -110 17 -1138 17 -858 0 -1123 -3 -1132 -12z" id="16-R"/>

    <path d="M20 1820 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19 33
    -20 503 -20 479 0 484 0 503 21 18 20 19 40 19 341 l0 320 -24 19 c-22 18 -45
    19 -502 19 -466 0 -480 -1 -499 -20z" id="17-L"/>

    <path d="M1232 1824 c-22 -15 -22 -16 -22 -343 0 -305 1 -329 18 -344 17 -15
    55 -17 338 -17 175 0 324 4 330 8 31 20 34 55 34 357 l0 306 -25 24 -24 25
    -313 0 c-268 0 -317 -2 -336 -16z" id="91"/>

    <path d="M2112 1824 c-22 -15 -22 -15 -22 -344 0 -329 0 -329 22 -344 20 -14
    84 -16 498 -16 414 0 478 2 498 16 22 15 22 15 22 344 0 329 0 329 -22 344
    -20 14 -84 16 -498 16 -414 0 -478 -2 -498 -16z" id="18-L"/>

    <path d="M3315 1815 l-25 -24 0 -309 c0 -298 1 -310 21 -336 l20 -26 2822 0
    c1552 0 2827 4 2833 8 31 20 34 55 34 357 l0 306 -25 24 -24 25 -2816 0 -2816
    0 -24 -25z" id="32"/>

    <path d="M9142 1824 c-22 -15 -22 -16 -22 -343 0 -305 1 -329 18 -344 17 -15
    55 -17 339 -17 297 0 321 1 336 18 15 17 17 55 17 345 0 325 0 326 -22 341
    -19 14 -68 16 -333 16 -265 0 -314 -2 -333 -16z" id="18-R"/>
    
    <path d="M10022 1824 c-22 -15 -22 -16 -22 -343 0 -305 1 -329 18 -344 17 -15
    55 -17 339 -17 297 0 321 1 336 18 15 17 17 55 17 345 0 325 0 326 -22 341
    -19 14 -68 16 -333 16 -265 0 -314 -2 -333 -16z" id="93"/>

    <path d="M10902 1824 c-22 -15 -22 -15 -22 -344 0 -329 0 -329 22 -344 20 -14
    84 -16 500 -16 465 0 479 1 498 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -498 20 -416 0 -480 -2 -500 -16z" id="17-R"/>

    <path d="M12100 1820 c-19 -19 -20 -33 -20 -340 0 -307 1 -321 20 -340 19 -19
    33 -20 340 -20 307 0 321 1 340 20 19 19 20 33 20 340 0 307 -1 321 -20 340
    -19 19 -33 20 -340 20 -307 0 -321 -1 -340 -20z"/>
    
    </g>`;
  document.querySelector("#keyboard-svg").innerHTML = DATA;
  class keyModel {
    constructor(keyCode, keyValue) {
      (this.keyCode = keyCode, this.keyValue = keyValue);
    }
  }
  const KEYS = [69, 123];
  const KEYOBJS = [];
  KEYS.forEach(key => {
    const keyObj = new keyModel(key, '#000');
    KEYOBJS.push(keyObj);
  });
  console.log(KEYOBJS);
  const SVG = document.querySelector("#keyboard-svg");
  const INPUT = document.querySelector("#text-input");
  INPUT.addEventListener("keydown", e => {
    if (e.which === 16) {
      e.code === 'ShiftLeft' ? SVG.getElementById("16-L").setAttribute("fill", colors[0]) : SVG.getElementById("16-R").setAttribute("fill", colors[0]);
    } else if (e.which === 17) {
      e.code === 'ControlLeft' ? SVG.getElementById("17-L").setAttribute("fill", colors[0]) : SVG.getElementById("17-R").setAttribute("fill", colors[0]);
    } else if (e.which === 18) {
      e.code === 'AltLeft' ? SVG.getElementById("18-L").setAttribute("fill", colors[0]) : SVG.getElementById("18-R").setAttribute("fill", colors[0]);
    } else {
      SVG.getElementById(`${e.which.toString()}`).setAttribute("fill", colors[0]);
    }
  });
  INPUT.addEventListener("keyup", e => {
    if (e.which === 16) {
      e.code === 'ShiftLeft' ? SVG.getElementById("16-L").setAttribute("fill", colors[1]) : SVG.getElementById("16-R").setAttribute("fill", colors[1]);
    } else if (e.which === 17) {
      e.code === 'ControlLeft' ? SVG.getElementById("17-L").setAttribute("fill", colors[1]) : SVG.getElementById("17-R").setAttribute("fill", colors[1]);
    } else if (e.which === 18) {
      e.code === 'AltLeft' ? SVG.getElementById("18-L").setAttribute("fill", colors[1]) : SVG.getElementById("18-R").setAttribute("fill", colors[1]);
    } else {
      SVG.getElementById(`${e.which.toString()}`).setAttribute("fill", colors[1]);
    }
  });
  const returned = [];
  let counter = 0;
  ('This is the text to type').split(" ").forEach(word => {
    returned.push(word + ' ');
  });
  INPUT.addEventListener('input', () => {
    _InputJs.Input(INPUT, returned, counter);
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./Input.js":"49Fhm"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"49Fhm":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Input", function () {
  return Input;
});
const Input = (INPUT, returnedText, counter) => {
  const returned = returnedText;
  let currentWordCounter = counter;
  let typed = INPUT.value;
  let currentWord = returned[currentWordCounter];
  console.log(currentWordCounter);
  if (typed === currentWord) {
    ++currentWordCounter;
    INPUT.value = '';
    console.log(currentWord);
    return "correct";
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["A7H4y","4ee1I"], "4ee1I", "parcelRequirecf66")

//# sourceMappingURL=index.fd532818.js.map

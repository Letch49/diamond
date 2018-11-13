// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"dist/game.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
// eslint-disable-next-line no-global-assign
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;

        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
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

  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  return newRequire;
}({
  "src/disableButtons.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var disableButtons = function disableButtons(elements) {
      elements.forEach(function (el) {
        el.disabled = true;
      });
    };

    var _default = disableButtons;
    exports.default = _default;
  }, {}],
  "src/flatten.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    var flatten = function flatten(array) {
      return array.reduce(function (acc, el) {
        if (Array.isArray(el)) {
          flatten(el).forEach(function (element) {
            acc.push(element);
          });
          return acc;
        }

        return _toConsumableArray(acc).concat([el]);
      }, []);
    };

    var _default = flatten;
    exports.default = _default;
  }, {}],
  "node_modules/micromodal/dist/micromodal.min.js": [function (require, module, exports) {
    var define;
    !function (e, o) {
      "object" == _typeof(exports) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.MicroModal = o();
    }(this, function () {
      "use strict";

      var e = function e(_e, o) {
        if (!(_e instanceof o)) throw new TypeError("Cannot call a class as a function");
      },
          o = function () {
        function e(e, o) {
          for (var t = 0; t < o.length; t++) {
            var i = o[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }

        return function (o, t, i) {
          return t && e(o.prototype, t), i && e(o, i), o;
        };
      }(),
          t = function t(e) {
        if (Array.isArray(e)) {
          for (var o = 0, t = Array(e.length); o < e.length; o++) {
            t[o] = e[o];
          }

          return t;
        }

        return Array.from(e);
      };

      return function () {
        var i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
            n = function () {
          function n(o) {
            var i = o.targetModal,
                a = o.triggers,
                r = void 0 === a ? [] : a,
                s = o.onShow,
                l = void 0 === s ? function () {} : s,
                c = o.onClose,
                d = void 0 === c ? function () {} : c,
                u = o.openTrigger,
                f = void 0 === u ? "data-micromodal-trigger" : u,
                h = o.closeTrigger,
                v = void 0 === h ? "data-micromodal-close" : h,
                g = o.disableScroll,
                m = void 0 !== g && g,
                b = o.disableFocus,
                y = void 0 !== b && b,
                w = o.awaitCloseAnimation,
                k = void 0 !== w && w,
                p = o.debugMode,
                E = void 0 !== p && p;
            e(this, n), this.modal = document.getElementById(i), this.config = {
              debugMode: E,
              disableScroll: m,
              openTrigger: f,
              closeTrigger: v,
              onShow: l,
              onClose: d,
              awaitCloseAnimation: k,
              disableFocus: y
            }, r.length > 0 && this.registerTriggers.apply(this, t(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
          }

          return o(n, [{
            key: "registerTriggers",
            value: function value() {
              for (var e = this, o = arguments.length, t = Array(o), i = 0; i < o; i++) {
                t[i] = arguments[i];
              }

              t.forEach(function (o) {
                o.addEventListener("click", function () {
                  return e.showModal();
                });
              });
            }
          }, {
            key: "showModal",
            value: function value() {
              this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add("is-open"), this.setFocusToFirstNode(), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.onShow(this.modal);
            }
          }, {
            key: "closeModal",
            value: function value() {
              var e = this.modal;
              this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement.focus(), this.config.onClose(this.modal), this.config.awaitCloseAnimation ? this.modal.addEventListener("animationend", function o() {
                e.classList.remove("is-open"), e.removeEventListener("animationend", o, !1);
              }, !1) : e.classList.remove("is-open");
            }
          }, {
            key: "scrollBehaviour",
            value: function value(e) {
              if (this.config.disableScroll) {
                var o = document.querySelector("body");

                switch (e) {
                  case "enable":
                    Object.assign(o.style, {
                      overflow: "initial",
                      height: "initial"
                    });
                    break;

                  case "disable":
                    Object.assign(o.style, {
                      overflow: "hidden",
                      height: "100vh"
                    });
                }
              }
            }
          }, {
            key: "addEventListeners",
            value: function value() {
              this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
            }
          }, {
            key: "removeEventListeners",
            value: function value() {
              this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
            }
          }, {
            key: "onClick",
            value: function value(e) {
              e.target.hasAttribute(this.config.closeTrigger) && (this.closeModal(), e.preventDefault());
            }
          }, {
            key: "onKeydown",
            value: function value(e) {
              27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.maintainFocus(e);
            }
          }, {
            key: "getFocusableNodes",
            value: function value() {
              var e = this.modal.querySelectorAll(i);
              return Object.keys(e).map(function (o) {
                return e[o];
              });
            }
          }, {
            key: "setFocusToFirstNode",
            value: function value() {
              if (!this.config.disableFocus) {
                var e = this.getFocusableNodes();
                e.length && e[0].focus();
              }
            }
          }, {
            key: "maintainFocus",
            value: function value(e) {
              var o = this.getFocusableNodes();

              if (this.modal.contains(document.activeElement)) {
                var t = o.indexOf(document.activeElement);
                e.shiftKey && 0 === t && (o[o.length - 1].focus(), e.preventDefault()), e.shiftKey || t !== o.length - 1 || (o[0].focus(), e.preventDefault());
              } else o[0].focus();
            }
          }]), n;
        }(),
            a = null,
            r = function r(e, o) {
          var t = [];
          return e.forEach(function (e) {
            var i = e.attributes[o].value;
            void 0 === t[i] && (t[i] = []), t[i].push(e);
          }), t;
        },
            s = function s(e) {
          if (!document.getElementById(e)) return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'" + e + "'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="' + e + '"></div>'), !1;
        },
            l = function l(e) {
          if (e.length <= 0) return console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'), !1;
        },
            c = function c(e, o) {
          if (l(e), !o) return !0;

          for (var t in o) {
            s(t);
          }

          return !0;
        };

        return {
          init: function init(e) {
            var o = Object.assign({}, {
              openTrigger: "data-micromodal-trigger"
            }, e),
                i = [].concat(t(document.querySelectorAll("[" + o.openTrigger + "]"))),
                a = r(i, o.openTrigger);
            if (!0 !== o.debugMode || !1 !== c(i, a)) for (var s in a) {
              var l = a[s];
              o.targetModal = s, o.triggers = [].concat(t(l)), new n(o);
            }
          },
          show: function show(e, o) {
            var t = o || {};
            t.targetModal = e, !0 === t.debugMode && !1 === s(e) || (a = new n(t), a.showModal());
          },
          close: function close() {
            a.closeModal();
          }
        };
      }();
    });
  }, {}],
  "src/gameEnigne.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateArrayImages = exports.drawCanvas = exports.table = exports.clearChest = exports.clickChest = exports.drawChests = exports.setImg = void 0;

    var _flatten = _interopRequireDefault(require("./flatten.js"));

    var _micromodalMin = _interopRequireDefault(require("../node_modules/micromodal/dist/micromodal.min.js"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * 
     * @param {int} num is a level of complexity
     */


    var table = function table(num) {
      num = new Number(num) + 1;
      var arr = new Array();
      var temp_arr = new Array();

      for (var i = 1; i < num; i++) {
        for (var j = 1; j < num; j++) {
          temp_arr.push({
            x: j * 60,
            y: i * 60,
            size: 50
          });
        }

        arr.push(temp_arr);
        temp_arr = [];
      }

      return (0, _flatten.default)(arr);
    };

    exports.table = table;

    var drawTable = function drawTable(ctx, table, size) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;

      for (var i = 0; i < table.length; i++) {
        var el = table[i];
        ctx.strokeRect(el.x, el.y, size, size);
      }
    };

    var setImg = function setImg(src) {
      var img = new Image();
      img.src = src;
      return img;
    };
    /**
     * 
     * @param {string} cnvId is id of canvas
     * @param {array:objects} table is array of objects
     * @param {function} fn is get a `game`
     */


    exports.setImg = setImg;

    var drawCanvas = function drawCanvas(cnvId, table, fn, size) {
      var canvas = document.createElement('canvas');
      canvas.setAttribute('id', cnvId);
      canvas.setAttribute('width', 900);
      canvas.setAttribute('height', 450);
      var body = document.querySelector('#body');
      body.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      drawTable(ctx, table, size);
      return fn(canvas, ctx, table, 2, size, table.length);
    };
    /**
     * 
     * @param {array} table is array of objects
     * @param {int} end last value
     * @param {array} arr is array of uniq table
     */


    exports.drawCanvas = drawCanvas;

    var generateArrayImages = function generateArrayImages(table, end, arr, step) {
      if (table.length === 0) {
        return arr;
      }

      if (step === 0) {
        var _idx = Math.floor(Math.random() * table.length);

        var _pusher = table[_idx];
        arr.push({
          x: _pusher.x,
          y: _pusher.y,
          isClick: false,
          height: 50,
          width: 50
        });
        table.splice(_idx, 1);
      }

      var idx = table.length > 1 ? Math.floor(Math.random() * table.length) : 0;
      var pusher = table[idx];
      arr.push({
        x: pusher.x,
        y: pusher.y,
        isClick: false,
        height: 50,
        width: 50
      });
      table.splice(idx, 1);
      return arr;
    };

    exports.generateArrayImages = generateArrayImages;

    var drawChests = function drawChests(ctx, arr, img, size) {
      arr.forEach(function (e) {
        ctx.drawImage(img, e.x, e.y, size, size);
      });
      return arr;
    };

    exports.drawChests = drawChests;

    var clickChest = function clickChest(ev, arr, cnv, ctx, size, chestEmpty, chestDiamond, score) {
      var x = ev.pageX - cnv.offsetLeft;
      var y = ev.pageY - cnv.offsetTop;
      var rnd = Math.floor(Math.random() * 100);
      ctx.font = '20px Segeo UI';

      for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        var _ref = [el.x, el.x + el.width, el.y, el.y + el.height],
            xMin = _ref[0],
            xMax = _ref[1],
            yMin = _ref[2],
            yMax = _ref[3];

        if (x > xMin && x < xMax && y > yMin && y < yMax) {
          if (arr[i]['isClick'] === true) {
            gameEnd(score);
          }

          if (rnd > 50) {
            score += 1;
            ctx.clearRect(el.x, el.y, size, size);
            ctx.drawImage(chestDiamond, el.x, el.y, size, size);
            arr[i]['isClick'] = true; // ctx.fillText('lasdfoajsfdasjdfiasdf', 50,50, 100);

            if (arr.every(function (e) {
              return e.isClick === true;
            })) {
              gameWin(score);
            }
          } else {
            ctx.clearRect(el.x, el.y, size, size);
            ctx.drawImage(chestEmpty, el.x, el.y, size, size);
          }

          break;
        }
      }

      return score;
    };

    exports.clickChest = clickChest;

    var clearChest = function clearChest(ctx, arr) {
      arr.forEach(function (el) {
        ctx.clearRect(el.x, el.y, el.width, el.height);
      });
    };

    exports.clearChest = clearChest;

    var modal = function modal(score, text) {
      _micromodalMin.default.init();

      _micromodalMin.default.show('modal-1');

      var title = document.querySelector('.modal__title');
      title.innerHTML = text;
      var el = document.querySelector('.modal__p');
      el.innerHTML = "\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ".concat(score);
    };

    var gameEnd = function gameEnd(score) {
      modal(score, 'Очень жаль');
    };

    var gameWin = function gameWin(score) {
      modal(score, 'Поздравляем');
    };
  }, {
    "./flatten.js": "src/flatten.js",
    "../node_modules/micromodal/dist/micromodal.min.js": "node_modules/micromodal/dist/micromodal.min.js"
  }],
  "game.js": [function (require, module, exports) {
    "use strict";

    var _disableButtons = _interopRequireDefault(require("./src/disableButtons.js"));

    var _gameEnigne = require("./src/gameEnigne.js");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * 
     * @param {string} cnv is id of canvas
     * @param {array:objects} table is array of objects. ex: {x, y, width, height, isCLick}
     * @param {int} start ???
     * @param {int} finish is the next element 
     * @param {int} size is a size of image, blocks
     * @param {array:objects} arrayOfImg is a uniq array of table
     */


    var game = function game(cnv, ctx, table) {
      var finish = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;
      var size = arguments.length > 4 ? arguments[4] : undefined;
      var len = arguments.length > 5 ? arguments[5] : undefined;
      var arrayOfImg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
      var step = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var score = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var last = arguments.length > 9 ? arguments[9] : undefined;
      ctx.font = '16px Segeo UI';
      ctx.fillStyle = 'white';
      ctx.fillText("\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ".concat(last), 20, 20);
      ctx.fillStyle = 'black';
      ctx.fillText("\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ".concat(score), 20, 20);
      var chest = (0, _gameEnigne.setImg)('images/chest-close.png');
      var chestEmpty = (0, _gameEnigne.setImg)('images/chest-empty.png');
      var chestDiamond = (0, _gameEnigne.setImg)('images/chest-ok.png');
      var arrayOfImages = (0, _gameEnigne.generateArrayImages)(table, finish, arrayOfImg, step);

      chest.onload = function () {
        (0, _gameEnigne.drawChests)(ctx, arrayOfImages, chest, size);
      };

      cnv.addEventListener('click', function (e) {
        var newScore = (0, _gameEnigne.clickChest)(e, arrayOfImages, cnv, ctx, size, chestEmpty, chestDiamond, score);
        setTimeout(function () {
          (0, _gameEnigne.clearChest)(ctx, arrayOfImages);
        }, 400);
        finish += finish > len ? 0 : 1;
        setTimeout(function () {
          game(cnv, ctx, table, finish, size, len, arrayOfImages, 1, newScore, score);
        }, 500);
      }, {
        once: true
      });
    };
    /**
     * 
     * @param {string} cnvId is id of canvas
     */


    var main = function main(cnvId, size) {
      var compl = document.querySelectorAll('button');
      compl.forEach(function (el) {
        el.addEventListener('click', function () {
          var tbl = (0, _gameEnigne.table)(el.dataset.compl);
          (0, _disableButtons.default)(compl);
          (0, _gameEnigne.drawCanvas)(cnvId, tbl, game, size);
        });
      });
    };

    main('#cnv', 50);
  }, {
    "./src/disableButtons.js": "src/disableButtons.js",
    "./src/gameEnigne.js": "src/gameEnigne.js"
  }],
  "../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "36890" + '/');

      ws.onmessage = function (event) {
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          console.clear();
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              hmrAccept(global.parcelRequire, asset.id);
            }
          });
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
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
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAccept(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAccept(bundle.parent, id);
      }

      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
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
          cb();
        });

        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAccept(global.parcelRequire, id);
      });
    }
  }, {}]
}, {}, ["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "game.js"], null);
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37166" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/game.js"], null)
//# sourceMappingURL=/game.ad75af61.map
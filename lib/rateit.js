(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rateit", [], factory);
	else if(typeof exports === 'object')
		exports["rateit"] = factory();
	else
		root["rateit"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithms/elo.js":
/*!*******************************!*\
  !*** ./src/algorithms/elo.js ***!
  \*******************************/
/*! exports provided: Elo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elo", function() { return Elo; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Elo =
/*#__PURE__*/
function () {
  function Elo(config) {
    _classCallCheck(this, Elo);

    _defineProperty(this, "_k", 32);

    _defineProperty(this, "_defaultRating", 1500);

    if (config) {
      this._k = config.k || 32;
      this._defaultRating = config.defaultRating || 1500;
    }
  }

  _createClass(Elo, [{
    key: "_getE",
    value: function _getE(pRating, oRating) {
      return 1 / (1 + Math.pow(10, (oRating - pRating) / 400));
    }
  }, {
    key: "_getElo",
    value: function _getElo(rating, s, E) {
      var k;

      if (typeof this._k === 'function') {
        k = this._k(rating);
      } else {
        k = this._k;
      }

      return rating + Math.round(k * (s - E));
    }
  }, {
    key: "getRatingsByMatch",
    value: function getRatingsByMatch(winnerRating, looserRating, draw) {
      var winnerE = this._getE(winnerRating, looserRating);

      var looserE = this._getE(looserRating, winnerRating);

      var winnerS = draw ? 0.5 : 1;
      var looserS = draw ? 0.5 : 0;
      return [this._getElo(winnerRating, winnerS, winnerE), this._getElo(looserRating, looserS, looserE)];
    }
  }, {
    key: "getRatingsByPlayers",
    value: function getRatingsByPlayers(ratings) {
      return [];
    }
  }, {
    key: "getRatingsByTeams",
    value: function getRatingsByTeams(teams) {
      return [[]];
    }
  }, {
    key: "defaultRating",
    get: function get() {
      return this._defaultRating;
    }
  }]);

  return Elo;
}();



/***/ }),

/***/ "./src/algorithms/index.js":
/*!*********************************!*\
  !*** ./src/algorithms/index.js ***!
  \*********************************/
/*! exports provided: Elo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elo */ "./src/algorithms/elo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elo", function() { return _elo__WEBPACK_IMPORTED_MODULE_0__["Elo"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, Elo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rateIt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rateIt */ "./src/rateIt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _rateIt__WEBPACK_IMPORTED_MODULE_0__["RateIt"]; });

/* harmony import */ var _algorithms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms */ "./src/algorithms/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elo", function() { return _algorithms__WEBPACK_IMPORTED_MODULE_1__["Elo"]; });




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Player =
/*#__PURE__*/
function () {
  function Player(id, rating) {
    _classCallCheck(this, Player);

    _defineProperty(this, "id", '');

    _defineProperty(this, "_rating", void 0);

    _defineProperty(this, "_history", []);

    this.id = id;
    this._rating = rating;

    this._history.push(rating);
  }

  _createClass(Player, [{
    key: "rating",
    get: function get() {
      return this._rating;
    },
    set: function set(rating) {
      this._rating = rating;

      this._history.push(rating);
    }
  }, {
    key: "history",
    get: function get() {
      return this._history;
    },
    set: function set(rating) {
      this._history.push(rating);
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/rateIt.js":
/*!***********************!*\
  !*** ./src/rateIt.js ***!
  \***********************/
/*! exports provided: RateIt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateIt", function() { return RateIt; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}



var RateIt =
/*#__PURE__*/
function () {
  function RateIt(algorithm) {
    _classCallCheck(this, RateIt);

    _defineProperty(this, "_algorithm", void 0);

    _defineProperty(this, "_players", new Map());

    this._algorithm = algorithm;
  }

  _createClass(RateIt, [{
    key: "addPlayer",
    value: function addPlayer(id, place, rating) {
      var player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](id, rating || this._algorithm.defaultRating);

      this._players.set(id, player);

      return player;
    }
  }, {
    key: "race",
    value: function race(positions) {
      positions.forEach(function (position) {});
    }
  }, {
    key: "duel",
    value: function duel(p1, p2) {
      var draw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var _this$_algorithm$getR = this._algorithm.getRatingsByMatch(p1.rating, p2.rating, draw),
          _this$_algorithm$getR2 = _slicedToArray(_this$_algorithm$getR, 2),
          p1Rating = _this$_algorithm$getR2[0],
          p2Rating = _this$_algorithm$getR2[1];

      var _p1 = this.players.get(p1.id);

      var _p2 = this.players.get(p2.id);

      if (_p1) {
        _p1.rating = p1Rating;
      }

      if (_p2) {
        _p2.rating = p2Rating;
      }

      return {
        getRanking: this.getRanking.bind(this)
      };
    }
  }, {
    key: "getRanking",
    value: function getRanking() {
      var players = _toConsumableArray(this.players.values());

      return players.sort(function (p1, p2) {
        return p1 && p2 ? p2.rating - p1.rating : 0;
      });
    }
  }, {
    key: "players",
    get: function get() {
      return this._players;
    }
  }, {
    key: "algorithm",
    get: function get() {
      return this._algorithm;
    }
  }]);

  return RateIt;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXRlaXQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3JhdGVpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yYXRlaXQvLi9zcmMvYWxnb3JpdGhtcy9lbG8uanMiLCJ3ZWJwYWNrOi8vcmF0ZWl0Ly4vc3JjL2FsZ29yaXRobXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmF0ZWl0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3JhdGVpdC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcmF0ZWl0Ly4vc3JjL3JhdGVJdC5qcyJdLCJuYW1lcyI6WyJFbG8iLCJjb25maWciLCJwUmF0aW5nIiwib1JhdGluZyIsIk1hdGgiLCJyYXRpbmciLCJzIiwiRSIsImsiLCJ3aW5uZXJSYXRpbmciLCJsb29zZXJSYXRpbmciLCJkcmF3Iiwid2lubmVyRSIsImxvb3NlckUiLCJ3aW5uZXJTIiwibG9vc2VyUyIsInJhdGluZ3MiLCJ0ZWFtcyIsIlBsYXllciIsIlJhdGVJdCIsImlkIiwicGxhY2UiLCJwbGF5ZXIiLCJwb3NpdGlvbnMiLCJwMSIsInAyIiwicDFSYXRpbmciLCJwMlJhdGluZyIsIl9wMSIsIl9wMiIsImdldFJhbmtpbmciLCJwbGF5ZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQs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LGVBQVMsQ0FBVEEsUUFBa0Isb0JBQVksQ0FBOUJBO0FBR0Q7Ozt5QkFFSUMsRSxFQUFZQyxFLEVBQW1DO0FBQUEsVUFBdkJkLElBQXVCLHVFQUFQLEtBQU87O0FBQUEsa0NBQ3JCLGtDQUFrQ2EsRUFBRSxDQUFwQyxRQUE2Q0MsRUFBRSxDQUEvQyxRQURxQixJQUNyQixDQURxQjtBQUFBO0FBQUEsVUFDM0NDLFFBRDJDO0FBQUEsVUFDakNDLFFBRGlDOztBQUVsRCxVQUFNQyxHQUFHLEdBQUcsaUJBQWlCSixFQUFFLENBQS9CLEVBQVksQ0FBWjs7QUFDQSxVQUFNSyxHQUFHLEdBQUcsaUJBQWlCSixFQUFFLENBQS9CLEVBQVksQ0FBWjs7QUFFQSxlQUFTO0FBQ1BHLFdBQUcsQ0FBSEE7QUFDRDs7QUFDRCxlQUFTO0FBQ1BDLFdBQUcsQ0FBSEE7QUFDRDs7QUFFRCxhQUFPO0FBQUNDLGtCQUFVLEVBQUU7QUFBYixPQUFQO0FBQ0Q7OztpQ0FFeUI7QUFDeEIsVUFBTUMsT0FBb0Isc0JBQU8sYUFBakMsTUFBaUMsRUFBUCxDQUExQjs7QUFFQSxhQUFPLE9BQU8sQ0FBUCxLQUFhO0FBQUEsZUFBYVAsRUFBRSxJQUFGQSxLQUFXQyxFQUFFLENBQUZBLFNBQVlELEVBQUUsQ0FBekJBLFNBQWI7QUFBcEIsT0FBTyxDQUFQO0FBQ0Q7Ozt3QkF6Q2E7QUFDWixhQUFPLEtBQVA7QUFDRDs7O3dCQUVlO0FBQ2QsYUFBTyxLQUFQO0FBQ0QiLCJmaWxlIjoicmF0ZWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyYXRlaXRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmF0ZWl0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJhdGVpdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHtBbGdvcml0aG19IGZyb20gJy4uL3R5cGVzJztcblxuY2xhc3MgRWxvIGltcGxlbWVudHMgQWxnb3JpdGhtIHtcbiAgX2s6IG51bWJlciB8IChudW1iZXIpPT5udW1iZXIgPSAzMjtcbiAgX2RlZmF1bHRSYXRpbmc6IG51bWJlciA9IDE1MDA7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBPYmplY3QpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLl9rID0gY29uZmlnLmsgfHwgMzI7XG4gICAgICB0aGlzLl9kZWZhdWx0UmF0aW5nID0gY29uZmlnLmRlZmF1bHRSYXRpbmcgfHwgMTUwMDtcbiAgICB9XG4gIH1cblxuICBfZ2V0RShwUmF0aW5nOiBudW1iZXIsIG9SYXRpbmc6IG51bWJlcikge1xuICAgIHJldHVybiAxIC8gKDEgKyBNYXRoLnBvdygxMCwgKG9SYXRpbmcgLSBwUmF0aW5nKSAvIDQwMCkpO1xuICB9XG5cbiAgX2dldEVsbyhyYXRpbmc6IG51bWJlciwgczogbnVtYmVyLCBFOiBudW1iZXIpIHtcbiAgICBsZXQgaztcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgayA9IHRoaXMuX2socmF0aW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgayA9IHRoaXMuX2s7XG4gICAgfVxuICAgIHJldHVybiByYXRpbmcgKyBNYXRoLnJvdW5kKGsgKiAocyAtIEUpKTtcbiAgfVxuXG4gIGdldCBkZWZhdWx0UmF0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UmF0aW5nO1xuICB9XG5cbiAgZ2V0UmF0aW5nc0J5TWF0Y2god2lubmVyUmF0aW5nOiBudW1iZXIsIGxvb3NlclJhdGluZzogbnVtYmVyLCBkcmF3OiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHdpbm5lckUgPSB0aGlzLl9nZXRFKHdpbm5lclJhdGluZywgbG9vc2VyUmF0aW5nKTtcbiAgICBjb25zdCBsb29zZXJFID0gdGhpcy5fZ2V0RShsb29zZXJSYXRpbmcsIHdpbm5lclJhdGluZyk7XG4gICAgY29uc3Qgd2lubmVyUyA9IGRyYXcgPyAwLjUgOiAxO1xuICAgIGNvbnN0IGxvb3NlclMgPSBkcmF3ID8gMC41IDogMDtcblxuICAgIHJldHVybiBbXG4gICAgICB0aGlzLl9nZXRFbG8od2lubmVyUmF0aW5nLCB3aW5uZXJTLCB3aW5uZXJFKSxcbiAgICAgIHRoaXMuX2dldEVsbyhsb29zZXJSYXRpbmcsIGxvb3NlclMsIGxvb3NlckUpXG4gICAgXTtcbiAgfVxuXG4gIGdldFJhdGluZ3NCeVBsYXllcnMocmF0aW5nczogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UmF0aW5nc0J5VGVhbXModGVhbXM6IFtudW1iZXJbXV0pOiBbbnVtYmVyW11dIHtcbiAgICByZXR1cm4gW1tdXTtcbiAgfVxufVxuXG5leHBvcnQge0Vsb307XG4iLCJleHBvcnQge0Vsb30gZnJvbSAnLi9lbG8nO1xuIiwiZXhwb3J0IHtSYXRlSXQgYXMgZGVmYXVsdH0gZnJvbSAnLi9yYXRlSXQnO1xuZXhwb3J0IHtFbG99IGZyb20gJy4vYWxnb3JpdGhtcyc7XG4iLCIvLyBAZmxvd1xuXG5jbGFzcyBQbGF5ZXIge1xuICBpZCA9ICcnO1xuICBfcmF0aW5nOiBudW1iZXI7XG4gIF9oaXN0b3J5OiBudW1iZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHJhdGluZzogbnVtYmVyKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuX3JhdGluZyA9IHJhdGluZztcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2gocmF0aW5nKTtcbiAgfVxuXG4gIGdldCByYXRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGluZztcbiAgfVxuXG4gIHNldCByYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcbiAgICB0aGlzLl9yYXRpbmcgPSByYXRpbmc7XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKHJhdGluZyk7XG4gIH1cblxuICBnZXQgaGlzdG9yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5faGlzdG9yeTtcbiAgfVxuXG4gIHNldCBoaXN0b3J5KHJhdGluZzogbnVtYmVyKSB7XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKHJhdGluZyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIvLyBAZmxvd1xuaW1wb3J0IHR5cGUge0FsZ29yaXRobX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxudHlwZSBQbGF5ZXJNYXAgPSBNYXA8c3RyaW5nLCA/UGxheWVyPjtcblxuY2xhc3MgUmF0ZUl0IHtcbiAgX2FsZ29yaXRobTogQWxnb3JpdGhtO1xuICBfcGxheWVyczogUGxheWVyTWFwID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGFsZ29yaXRobTogQWxnb3JpdGhtKSB7XG4gICAgdGhpcy5fYWxnb3JpdGhtID0gYWxnb3JpdGhtO1xuICB9XG5cbiAgZ2V0IHBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcnM7XG4gIH1cblxuICBnZXQgYWxnb3JpdGhtKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGdvcml0aG07XG4gIH1cblxuICBhZGRQbGF5ZXIoaWQ6IHN0cmluZywgcGxhY2U6IG51bWJlciwgcmF0aW5nOiBudW1iZXIpIHtcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKGlkLCByYXRpbmcgfHwgdGhpcy5fYWxnb3JpdGhtLmRlZmF1bHRSYXRpbmcpO1xuXG4gICAgdGhpcy5fcGxheWVycy5zZXQoaWQsIHBsYXllcik7XG5cbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG5cbiAgcmFjZShwb3NpdGlvbnM6IFBsYXllcltdIHwgW1BsYXllcltdXSkge1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKHBvc2l0aW9uID0+IHtcblxuICAgIH0pO1xuICB9XG5cbiAgZHVlbChwMTogUGxheWVyLCBwMjogUGxheWVyLCBkcmF3OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBbcDFSYXRpbmcsIHAyUmF0aW5nXSA9IHRoaXMuX2FsZ29yaXRobS5nZXRSYXRpbmdzQnlNYXRjaChwMS5yYXRpbmcsIHAyLnJhdGluZywgZHJhdyk7XG4gICAgY29uc3QgX3AxID0gdGhpcy5wbGF5ZXJzLmdldChwMS5pZCk7XG4gICAgY29uc3QgX3AyID0gdGhpcy5wbGF5ZXJzLmdldChwMi5pZCk7XG5cbiAgICBpZiAoX3AxKSB7XG4gICAgICBfcDEucmF0aW5nID0gcDFSYXRpbmc7XG4gICAgfVxuICAgIGlmIChfcDIpIHtcbiAgICAgIF9wMi5yYXRpbmcgPSBwMlJhdGluZztcbiAgICB9XG5cbiAgICByZXR1cm4ge2dldFJhbmtpbmc6IHRoaXMuZ2V0UmFua2luZy5iaW5kKHRoaXMpfTtcbiAgfVxuXG4gIGdldFJhbmtpbmcoKTogKD9QbGF5ZXIpW10ge1xuICAgIGNvbnN0IHBsYXllcnM6ICg/UGxheWVyKVtdID0gWy4uLnRoaXMucGxheWVycy52YWx1ZXMoKV07XG5cbiAgICByZXR1cm4gcGxheWVycy5zb3J0KChwMSwgcDIpID0+IChwMSAmJiBwMiA/IHAyLnJhdGluZyAtIHAxLnJhdGluZyA6IDApKTtcbiAgfVxufVxuXG5leHBvcnQge1JhdGVJdH07XG4iXSwic291cmNlUm9vdCI6IiJ9
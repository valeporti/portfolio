/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/jsx");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(44);

var _reduxDevtoolsLogMonitor = __webpack_require__(45);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(46);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)((0, _jsx3.default)(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, (0, _jsx3.default)(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleAddPost = toggleAddPost;
exports.toggleActiveMenu = toggleActiveMenu;
// Export Constants
var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
var TOGGLE_ACTIVE_MENU = exports.TOGGLE_ACTIVE_MENU = 'TOGGLE_ACTIVE_MENU';

// Export Actions
function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

function toggleActiveMenu() {
  return {
    type: TOGGLE_ACTIVE_MENU
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000
};

exports.default = config;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizationData = exports.enabledLanguages = undefined;

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(56);

var _keys2 = _interopRequireDefault(_keys);

var _reactIntl = __webpack_require__(2);

var _intl = __webpack_require__(57);

var _intl2 = _interopRequireDefault(_intl);

var _intlLocalesSupported = __webpack_require__(58);

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

__webpack_require__(59);

var _en = __webpack_require__(60);

var _en2 = _interopRequireDefault(_en);

var _en3 = __webpack_require__(61);

var _en4 = _interopRequireDefault(_en3);

__webpack_require__(62);

var _fr = __webpack_require__(63);

var _fr2 = _interopRequireDefault(_fr);

var _fr3 = __webpack_require__(64);

var _fr4 = _interopRequireDefault(_fr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// list of available languages
var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

// this object will have language-specific data added to it which will be placed in the state when that language is active
// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
var localizationData = exports.localizationData = {};

// here you bring in 'intl' browser polyfill and language-specific polyfills
// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
// as well as react-intl's language-specific data
// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


// need Intl polyfill, Intl not supported in Safari


if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and patch the constructors we need with the polyfill's.
    global.Intl.NumberFormat = _intl2.default.NumberFormat;
    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = _intl2.default;
}

// use this to allow nested messages, taken from docs:
// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
function flattenMessages() {
  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return (0, _keys2.default)(nestedMessages).reduce(function (messages, key) {
    var value = nestedMessages[key];
    var prefixedKey = prefix ? prefix + '.' + key : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      (0, _assign2.default)(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

// bring in intl polyfill, react-intl, and app-specific language data

(0, _reactIntl.addLocaleData)(_en2.default);
localizationData.en = _en4.default;
localizationData.en.messages = flattenMessages(localizationData.en.messages);

(0, _reactIntl.addLocaleData)(_fr2.default);
localizationData.fr = _fr4.default;
localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SWITCH_LANGUAGE = undefined;

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

exports.switchLanguage = switchLanguage;

var _setup = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

function switchLanguage(newLang) {
  return (0, _extends3.default)({
    type: SWITCH_LANGUAGE
  }, _setup.localizationData[newLang]);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleActiveHS = toggleActiveHS;
exports.contactNameInput = contactNameInput;
exports.contactEmailInput = contactEmailInput;
exports.contactMessInput = contactMessInput;
exports.contactInduInput = contactInduInput;
exports.contactPurpInput = contactPurpInput;
// Export Constants
var TOGGLE_ACTIVE_HARDSKILLS = exports.TOGGLE_ACTIVE_HARDSKILLS = 'TOGGLE_ACTIVE_HARDSKILLS';
var CONTACT_NAME = exports.CONTACT_NAME = 'CONTACT_NAME';
var CONTACT_EMAIL = exports.CONTACT_EMAIL = 'CONTACT_EMAIL';
var CONTACT_MESSAGE = exports.CONTACT_MESSAGE = 'CONTACT_MESSAGE';
var CONTACT_PURPOSE = exports.CONTACT_PURPOSE = 'CONTACT_PURPOSE';
var CONTACT_INDUSTRY = exports.CONTACT_INDUSTRY = 'CONTACT_INDUSTRY';

// Export Actions
function toggleActiveHS(bool) {
    return {
        type: TOGGLE_ACTIVE_HARDSKILLS,
        bool: bool
    };
}
function contactNameInput(text) {
    return {
        type: CONTACT_NAME,
        text: text
    };
}
function contactEmailInput(text) {
    return {
        type: CONTACT_EMAIL,
        text: text
    };
}
function contactMessInput(text) {
    return {
        type: CONTACT_MESSAGE,
        text: text
    };
}
function contactInduInput(text) {
    return {
        type: CONTACT_INDUSTRY,
        text: text
    };
}
function contactPurpInput(text) {
    return {
        type: CONTACT_PURPOSE,
        text: text
    };
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(21);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(9);

var _reactRouter = __webpack_require__(5);

var _reactIntl = __webpack_require__(2);

var _axios = __webpack_require__(72);

var _axios2 = _interopRequireDefault(_axios);

var _HardSkills = __webpack_require__(73);

var _HardSkills2 = _interopRequireDefault(_HardSkills);

var _SoftSkills = __webpack_require__(75);

var _SoftSkills2 = _interopRequireDefault(_SoftSkills);

var _Resume = __webpack_require__(76);

var _Resume2 = _interopRequireDefault(_Resume);

var _Contact = __webpack_require__(77);

var _Contact2 = _interopRequireDefault(_Contact);

var _About = __webpack_require__(78);

var _About2 = _interopRequireDefault(_About);

var _Profile = {
  "Profile": "_2r2Fqb8dxukgKX2N18lfLS",
  "githubchart": "_3Jzxv-esB3V_8Co_k-A7eC"
};

var _Profile2 = _interopRequireDefault(_Profile);

var _code = '/' + "6eb5583ff3d41a36fc457d37398cf277.jpg";

var _code2 = _interopRequireDefault(_code);

var _reactVisibilitySensor = __webpack_require__(27);

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

var _ProfileActions = __webpack_require__(20);

var _http = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import Actions 


// Import Images


//Import Components
var _ref = (0, _jsx3.default)('img', {
  src: 'http://ghchart.rshah.org/valeporti',
  alt: 'Valentin Portillo Github chart'
});

//Other funcitonalities


// Import Style


var _ref2 = (0, _jsx3.default)(_About2.default, {});

var _ref3 = (0, _jsx3.default)(_SoftSkills2.default, {});

var _ref4 = (0, _jsx3.default)(_Resume2.default, {});

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile(props) {
    (0, _classCallCheck3.default)(this, Profile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).call(this, props));
    //console.log(props);


    _this.toggleActiveHS = function (isVisible) {
      _this.props.toggleActiveHS(isVisible);
    };

    _this.contactNameInput = function (text) {
      _this.props.contactNameInput(text);
    };

    _this.contactEmailInput = function (text) {
      _this.props.contactEmailInput(text);
    };

    _this.contactMessInput = function (text) {
      _this.props.contactMessInput(text);
    };

    _this.contactInduInput = function (text) {
      _this.props.contactInduInput(text);
    };

    _this.contactPurpInput = function (text) {
      _this.props.contactPurpInput(text);
    };

    _this.pueba = function (text) {
      console.log(text);
    };

    _this.handleSentMail = function (event) {
      event.preventDefault();
      console.log('in handle');
      console.log(_this.props);
      var data = {
        name: _this.props.prof.contactName,
        mail: _this.props.prof.contactMail,
        mess: _this.props.prof.contactMess,
        indu: _this.props.prof.contactIndu,
        purp: _this.props.prof.contactPurp,
        courtesy_mes: _this.props.intl.messages.SentMessage
      };
      var contactMessInput = _this.props.contactMessInput;
      var contactEmailInput = _this.props.contactEmailInput;
      var contactNameInput = _this.props.contactNameInput;
      var contactInduInput = _this.props.contactInduInput;
      var contactPurpInput = _this.props.contactPurpInput;
      var messageSent = _this.props.intl.messages.SentMessage;
      var messageNotSent = _this.props.intl.messages.MessageSentFail;
      var WaitForIt = _this.props.intl.messages.WaitForIt;
      contactEmailInput('');
      contactNameInput('');
      contactInduInput('');
      contactPurpInput('');
      contactMessInput(WaitForIt);
      (0, _axios2.default)({
        method: 'get',
        url: '/profile/sendMail',
        params: data
      }).then(function (response) {
        if (response.status == 200 && response.data.hasOwnProperty('success')) {
          contactMessInput(messageSent);
          setTimeout(function () {
            contactMessInput('');
          }, 10000);
        } else {
          contactMessInput(messageNotSent);
          setTimeout(function () {
            contactMessInput('');
          }, 4000);
        }
        console.log(response);
      }).catch(function (error) {
        contactEmailInput('');
        contactNameInput('');
        contactInduInput('');
        contactPurpInput('');
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error);
        contactMessInput(messageNotSent);
        setTimeout(function () {
          contactMessInput('');
        }, 3000);
      });
    };

    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: 'render',
    value: function render() {
      var githubCalendar = _ref;
      return (0, _jsx3.default)('div', {
        className: _Profile2.default.Profile
      }, void 0, (0, _jsx3.default)('a', {
        name: 'About'
      }, void 0, (0, _jsx3.default)('div', {
        className: _Profile2.default.fastAbout
      }, void 0, _ref2), (0, _jsx3.default)('div', {
        className: _Profile2.default.githubchart
      }, void 0, (0, _jsx3.default)('a', {
        href: 'https://github.com/valeporti/',
        target: '_blank'
      }, void 0, githubCalendar))), (0, _jsx3.default)('a', {
        name: 'Skills'
      }, void 0, (0, _jsx3.default)('div', {
        className: _Profile2.default.skillsSec
      }, void 0, _ref3, (0, _jsx3.default)(_reactVisibilitySensor2.default, {
        onChange: this.toggleActiveHS,
        partialVisibility: true,
        minTopValue: 100
      }, void 0, (0, _jsx3.default)(_HardSkills2.default, {
        toggleActiveHS: this.toggleActiveHS,
        isVisible: this.props.prof.activeHS
      })))), (0, _jsx3.default)('a', {
        name: 'Resume'
      }, void 0, (0, _jsx3.default)('div', {
        className: _Profile2.default.ResumeSec
      }, void 0, _ref4)), (0, _jsx3.default)('a', {
        name: 'Contact'
      }, void 0, (0, _jsx3.default)('div', {
        className: _Profile2.default.ContactSec
      }, void 0, (0, _jsx3.default)(_Contact2.default, {
        contactNameInput: this.contactNameInput,
        contactName: this.props.prof.contactName,
        contactEmailInput: this.contactEmailInput,
        contactMail: this.props.prof.contactMail,
        contactMessInput: this.contactMessInput,
        contactMess: this.props.prof.contactMess,
        contactPurpInput: this.contactPurpInput,
        contactPurp: this.props.prof.contactPurp,
        contactInduInput: this.contactInduInput,
        contactIndu: this.props.prof.contactIndu,
        handleSentMail: this.handleSentMail
      }))));
    }
  }]);
  return Profile;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  //console.log(state.prof);
  return {
    prof: state.prof,
    intl: state.intl
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleActiveHS: function toggleActiveHS(bool) {
      dispatch((0, _ProfileActions.toggleActiveHS)(bool));
    },
    contactNameInput: function contactNameInput(text) {
      dispatch((0, _ProfileActions.contactNameInput)(text));
    },
    contactEmailInput: function contactEmailInput(text) {
      dispatch((0, _ProfileActions.contactEmailInput)(text));
    },
    contactMessInput: function contactMessInput(text) {
      dispatch((0, _ProfileActions.contactMessInput)(text));
    },
    contactInduInput: function contactInduInput(text) {
      dispatch((0, _ProfileActions.contactInduInput)(text));
    },
    contactPurpInput: function contactPurpInput(text) {
      dispatch((0, _ProfileActions.contactPurpInput)(text));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Profile);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactIntl = __webpack_require__(2);

var _Projects = __webpack_require__(80);

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_Projects2.default, {}));

// Import Style

// Import Actions

// Import Selectors

// Import Components


function ProfileProjects(props) {
    return _ref;
}

exports.default = ProfileProjects;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(8);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

exports.default = _mongoose2.default.model('Post', postSchema);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(31);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(8);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(32);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(33);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(34);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _webpack = __webpack_require__(11);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = __webpack_require__(35);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _webpackDevMiddleware = __webpack_require__(40);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(41);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _store = __webpack_require__(42);

var _reactRedux = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(66);

var _reactRouter = __webpack_require__(5);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(67);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(84);

var _post = __webpack_require__(86);

var _post2 = _interopRequireDefault(_post);

var _Profile = __webpack_require__(90);

var _Profile2 = _interopRequireDefault(_Profile);

var _dummyData = __webpack_require__(94);

var _dummyData2 = _interopRequireDefault(_dummyData);

var _config = __webpack_require__(15);

var _config2 = _interopRequireDefault(_config);

var _serveFavicon = __webpack_require__(95);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(96).config(); //get all the env varibales available in variables

// Webpack Requirements


// Initialize the Express App
var app = new _express2.default();

// Set Development modes checks
var isDevMode = process.env.NODE_ENV === 'development' || false;
var isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

// React And Redux Setup


// Import required modules


//Other extensions
//let favicon = require('serve-favicon');


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  (0, _dummyData2.default)();
});

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
app.use((0, _serveFavicon2.default)(_path2.default.resolve(__dirname, 'public', 'favicon.ico')));
app.use('/api', _post2.default);
app.use('/profile', _Profile2.default);

//app.use(favicon(path.resolve(__dirname, '../client')));
//console.log(path.resolve(__dirname, '../client'));

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
  //<link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n      \n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + (0, _stringify2.default)(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

console.log('in server');
console.log(_routes2.default);
// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)((0, _jsx3.default)(_reactRedux.Provider, {
        store: store
      }, void 0, (0, _jsx3.default)(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _reactRedux = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpack = __webpack_require__(11);
var cssnext = __webpack_require__(36);
var postcssFocus = __webpack_require__(37);
var postcssReporter = __webpack_require__(38);
var CopyWebpackPlugin = __webpack_require__(39);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  node: {
    fs: 'empty'
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    //publicPath: 'http://0.0.0.0:8000/',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: (0, _stringify2.default)(true),
      'NODE_ENV': (0, _stringify2.default)('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(43);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _DevTools = __webpack_require__(12);

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reducers = __webpack_require__(47);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main store function
 */
function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _AppReducer = __webpack_require__(48);

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _PostReducer = __webpack_require__(49);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _IntlReducer = __webpack_require__(54);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _ProfileReducer = __webpack_require__(65);

var _ProfileReducer2 = _interopRequireDefault(_ProfileReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer


// Import Reducers
exports.default = (0, _redux.combineReducers)({
  app: _AppReducer2.default,
  posts: _PostReducer2.default,
  intl: _IntlReducer2.default,
  prof: _ProfileReducer2.default
}); /**
     * Root Reducer
     */

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShowAddPost = undefined;

var _AppActions = __webpack_require__(13);

// Initial State
var initialState = {
  showAddPost: false,
  activeMenu: false
}; // Import Actions


var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _AppActions.TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
      };
    case _AppActions.TOGGLE_ACTIVE_MENU:
      return {
        activeMenu: !state.activeMenu
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
  return state.app.showAddPost;
};

// Export Reducer
exports.default = AppReducer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = exports.getPosts = undefined;

var _toConsumableArray2 = __webpack_require__(50);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _PostActions = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial State
var initialState = { data: [] };

var PostReducer = function PostReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _PostActions.ADD_POST:
      return {
        data: [action.post].concat((0, _toConsumableArray3.default)(state.data))
      };

    case _PostActions.ADD_POSTS:
      return {
        data: action.posts
      };

    case _PostActions.DELETE_POST:
      return {
        data: state.data.filter(function (post) {
          return post.cuid !== action.cuid;
        })
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
var getPosts = exports.getPosts = function getPosts(state) {
  return state.posts.data;
};

// Get post by cuid
var getPost = exports.getPost = function getPost(state, cuid) {
  return state.posts.data.filter(function (post) {
    return post.cuid === cuid;
  })[0];
};

// Export Reducer
exports.default = PostReducer;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
exports.addPost = addPost;
exports.addPostRequest = addPostRequest;
exports.addPosts = addPosts;
exports.fetchPosts = fetchPosts;
exports.fetchPost = fetchPost;
exports.deletePost = deletePost;
exports.deletePostRequest = deletePostRequest;

var _apiCaller = __webpack_require__(52);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var ADD_POST = exports.ADD_POST = 'ADD_POST';
var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

// Export Actions
function addPost(post) {
  return {
    type: ADD_POST,
    post: post
  };
}

function addPostRequest(post) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content
      }
    }).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts: posts
  };
}

function fetchPosts() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts').then(function (res) {
      dispatch(addPosts(res.posts));
    });
  };
}

function fetchPost(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
      return dispatch(addPost(res.post));
    });
  };
}

function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid: cuid
  };
}

function deletePostRequest(cuid) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
      return dispatch(deletePost(cuid));
    });
  };
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = callApi;

var _isomorphicFetch = __webpack_require__(53);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(15);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: { 'content-type': 'application/json' },
    method: method,
    body: (0, _stringify2.default)(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return _promise2.default.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(55);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _setup = __webpack_require__(17);

var _IntlActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = (0, _extends3.default)({
  locale: initLocale,
  enabledLanguages: _setup.enabledLanguages
}, _setup.localizationData[initLocale] || {});

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _IntlActions.SWITCH_LANGUAGE:
      {
        var type = action.type,
            actionWithoutType = (0, _objectWithoutProperties3.default)(action, ['type']); // eslint-disable-line

        return (0, _extends3.default)({}, state, actionWithoutType);
      }

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("intl");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("intl-locales-supported");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  messages: {
    siteTitle: 'Valentin Portillo Portfolio',
    addPost: 'Add Post',
    switchLanguage: 'Switch Language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete Post',
    createNewPost: 'Create new post',
    authorName: 'Author\'s Name',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    submit: 'Submit',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n      } as of {date}',
    profileTitle: 'Profile',
    menuAbout: 'About',
    menuSkills: 'Skills',
    menuResume: 'Resume',
    menuContact: 'Contact',
    menuProjects: 'Projects',
    Me1: 'Hello! :)',
    Me2: 'Developped software for business needs since my first job. Got curious and motivated by the achievable with fullstack developement. Besides, I also got impressed by the impact that one could have by understanding data and showing it as the decision tool. By matching these two facts, I decided then to add to my knowledge Data Science which is interesting and mindblowing.',
    Me3: 'Currently, I want to focus on the path of software engineering or fullstack developement since finding algorithmic solutions, improving code, creating products and adding up to the client\'s value still are the subjects that stimulate me the most.',
    Me4: 'As you can see downwards, I\'ve used several languages professionnaly, VBA for two years, PHP (Laravel) for more than one year, Javascript and python for two years. In my personal projects, the one that dominate is Javascript stack. And on research or academic projects, the language I\'ve most used is python.  \n        For databases, I\'ve used indefferently MongoDB and MySQL depending on the project. As an add up, the buinesses where I\'ve developed software are management, finance, research and real estate I would say.',
    MeConc: 'Finally, if you\'ve arrived to this part of my small introduction, feel free to contact me and ask me for my projects and path. There\'s a link at the end. I invite you to take a look in my projects, to my "rolling résumé" and if you still don\'t want to contact me (by the end there\'s mail, linkedin ...), maybe you can give me any feedback, why not. Anyway, thank you and good recruitment! :)',
    KeyW: 'Key Words',
    KeyWords: 'Software Engineering, FullStack Development, Data Science, Computer Science, Artificial Intelligence, Automation, Business Analysis, Project Management, Operational Research, Entrepreneurship',
    //Soft Skills
    SS1: 'Analytic',
    SS2: 'Commitment',
    SS3: 'Problem Solver',
    SS4: 'Learner',
    SS5: 'Team-Work',
    SS6: 'Add Value',
    SS7: 'Hands On',
    ss11: '& Curious',
    ss12: 'Logic, Reasoning, Dig deeper',
    ss21: 'Deliver Ended Products',
    ss31: 'Find the root',
    ss32: 'Develop a logical step-by-step',
    ss33: 'Deliver a system',
    ss41: 'Self-taught',
    ss42: 'Enthousiastic',
    ss43: 'Ask questions',
    ss51: 'Know How',
    ss52: 'Social',
    ss53: 'Ask & Answer',
    ss61: 'Proposals',
    ss62: 'Business/Product Understanding',
    ss71: 'Try new stuff',
    ss72: 'Eager to Create',
    //hardSkills
    ttLang: 'Languages',
    ttProgLang: 'Programming Languages',
    ttStacks: 'Stacks',
    ttFrameworks: 'Frameworks/Libraries',
    ttOther: 'Other',
    //Resume
    ResHighShool: ' Lycée Franco Mexicain (High School)',
    ResHighShoolSpe: 'Engineering Science Specialization',
    ResUniv: 'Universidad Nacional Autónoma de México - UNAM',
    ResUnivSpe: 'Bachelor of Science in Civil Engineering',
    ResDiploIMEI: 'Intelligent Building Mexican Institute - IMEI',
    ResDiploIMEISpe: 'Speciality - Intelligent & Sustainable Buildings Technology',
    ResStudClubCICM: 'CICM Students Club Memeber',
    ResStageIUNAM: 'Traineeship at a InnovaUNAM (business incubator)',
    ResSolarDec: 'Solar Decathlon Europe 2014',
    ResSolarDecRole: 'Leader, Civil Engineering Responsible',
    ResSolarDecPrices: 'Won 3 prices (1° Engineering, 2° Urbanism, 3° Sustainability)',
    ResThesis: 'Author and Expositor of an article regarding my bachelor thesis (\'Analysis, Design and Construction of the CASA TEAM project\')',
    ResICAF: 'ICA FLUOR',
    ResICAFRole: 'Project Engineer',
    ResICAFDesc: 'Program follow up, alerts, recovery plan, management level reports, forecasts, productivity.',
    ResICAFAchi: 'Follow Up Automation',
    ResJacEng: 'Jacobs Engineering',
    ResJacEngRole: 'Project Scheduler',
    ResJacEngDesc: 'Interactive planning, Master Plan and WBS creation, program follow up, alerts, forecasts, productivity, recovery plan, management level reports, and resources graph.',
    ResJacEngAchi: 'Follow Up Automation',
    ResCitiB: 'Citi Banamex',
    ResCitiBRole: 'Project Manager Jr. / IT Business Analyst',
    ResCitiBDesc: 'Intermediary between business, software developers and specialists. IT BA SDLC deliverables. Data Qty & Project Controls RPA, data analysis and visualization. Requirements and solutions analysis.',
    ResCitiBAchi: 'Follow Up Automation',
    ResDiploTUDelft: 'TUDelft - TPM1x: Creative Problem Solving and Decision Making',
    ResDiploHarv: 'Harvard - CS50: Introduction to Computer Science',
    ResDiploFCCFront: 'FreeCodeCamp - Front End Certification',
    ResDiploSAOpSys: 'Saylor Academy - CS401: Operating Systems',
    ResMutuo: 'Mutuo Financiera',
    ResMutuoRole: 'Software Engineer',
    ResMutuoDesc: 'Internal software development (MVC) and API, RPA for different projects (get/analyze and deduce from data) using Laravel framework mainly and VBA.',
    ResMutuoAchi: 'Projects Follow Up Automation, Scalability, Financial Projects',
    ResDiploSAIntroDB: 'Saylor Academy - CS403: Introduction to Modern Databases',
    ResDiploSAAlgorithm: 'Saylor Academy - CS303: Algorithms',
    ResIMT: 'Institut Mines Télécom - IMT',
    ResIMTP: 'IMT Project',
    ResIMTSpe: 'Master of Science in Data Science',
    ResIMTCours: 'Artificial Intelligence, Languages and Logic, Graphs, Software Engineering, Mathematics {Proba, Stat, Alg}, Signal Processing, Operational Research, Big Data, Data Mining',
    ResIMTP1: 'Project: City Heating Network Optimization using a Genetic Algorithm',
    ResIMTP2: 'Project: Ship Detection using Satellite Images (IA, Statistiques)',
    ResIMTP3: 'Project: Compiler Expr - Pfx type (Lexer, Parser, NLP, Functional Programming)',
    ResIMTP4: 'Project: Infection Simulation and Social Netwoks treatment (Graphes)',
    ResIMTP5: 'Project: Candidate\'s profile recommandation (RH)',
    ResIRH: 'Rent Platform',
    ResIRHRole: 'Side Project',
    ResIRHDesc: 'Develop a Web Application to handle Rents',
    ResIMTRole: 'Data Science Internship',
    ResIMTDesc: 'Clustering over features from ECG signals to find the partitions candidates to be hearbeats',
    ResIMTCHLG: 'Challenge IMT Disrupt’ Campus 2019',
    ResIMTCHLGRole: 'Competitor',
    ResIMTCHLGDesc: 'Artificial Intelligence 4 day event with conferences, activities, meet ups with enterprises and case study. For me, the study case was for BNP for their new "Innovation Center" BivWak. It was about an Identification Process using AI',
    ResAMA: 'Amadeus',
    ResAMARole: 'Data Science Intern',
    ResAMADesc: 'Détection de Fraude. Recherche, application et différentiation des méthodes. Proposer et implémenter le détecteur (règles et ML).',
    //Form
    Name: 'Name',
    Send: 'Send',
    Email: 'Email',
    Industry: 'Industry',
    Purpose: 'Purpose',
    WriteToMe: 'Write me :)',
    SentMessage: 'Message Sent!! :). Thank you for contacting me, I\'ll respond ASAP. Have a nice day!',
    MessageSentFail: 'Mesage NOT Sent :(, please. try later or contact me directly to my e-mail: valentin.pg@outlook.com. Thanks!',
    WaitForIt: 'Wait for it ...',

    //Time
    January: 'January',
    February: 'February',
    March: 'March',
    June: 'June',
    September: 'September',
    October: 'October',
    December: 'December',
    ToDate: 'To Date',

    //Projects
    click_for_more: 'Click to know more',
    project_comp_title: 'Compiler PFX - EXPR',
    project_comp_description: 'Create a compiler using the pfx-expr framework. By using a lexer and a parser, the "new programming language" is identified and all of its operations ordered in a pipe (expr) wich will be afterwards calculated recursively (pfx). The "new language" handles variables and lambda calculations as functions.',
    project_comp_context: 'Functional Programming, NLP, Languages and Logic',
    project_comp_status: 'Click to see the code',

    project_irent_description: 'Develop a Rent Plataform so that traditional businesses (thinking more in real state managers) can control the properties they manage. From comunication, reports, contracts to payments and data visualization/analysis',

    project_valhalla_status: 'Sorry, "Valhalla" is private, but you can click and access to the public page :)',
    project_valhalla_title: 'Fintech Core Banking System (ERP)',
    project_valhalla_role: 'Software Engineer',
    project_valhalla_context: 'Fintech / RPA',
    project_valhalla_description: 'We wanted to create our own software in order to model every product and financial products as we wanted. So, there you will find a huge related database, clients, products, financial products and all you can imagine to automate and help business ...',

    project_datavis_status: 'Click on the links :)',
    project_datavis_title: 'Data Visualization',
    project_datavis_role: 'Student',
    project_datavis_context: 'Data Visualization',
    project_datavis_description: 'Data is one of the most valuable things for business and, one of the most enlightening tools on decision making, so it was a must.',

    project_pm_status: "Sorry, private projects because of sensitive information, but there's a video :)",
    project_pm_title: 'Project Management Tool Dev.',
    project_pm_role: 'Project Manager / Software Engineer',
    project_pm_context: 'Project / Product Management / RPA',
    project_pm_description: 'In order to avoid errors and excel on projects follow up, I created in ICA FLUOR, Jacobs, Citi Banamex, and Mutuo Financiera files like this one for myself as PM or to the PMOffice.',

    project_ttt_status: "Click to Play :)",
    project_ttt_title: 'Tic-Tac-Toe Game',
    project_ttt_role: 'Student',
    project_ttt_context: 'Artificial Inteligence Principles',
    project_ttt_description: 'When studing the AI principles, this was a project to preactice and understand better this example.',

    project_cs50final_status: "Click to See :)",
    project_cs50final_title: 'CS50 Final - Final Project',
    project_cs50final_role: 'Student',
    project_cs50final_context: 'Web development',
    project_cs50final_description: 'The final project, I chose to do a coffee management software. If you want to understand its functionaliity, watch the video, click in the title.',

    project_cs50p8_status: "Click to See :)",
    project_cs50p8_title: 'CS50 Pset8 - Google Maps & Search',
    project_cs50p8_role: 'Student',
    project_cs50p8_context: 'Web development',
    project_cs50p8_description: 'A project left for the Pset8 during the CS50 course.',

    project_cs50p7_status: "Click to See :)",
    project_cs50p7_title: 'CS50 Pset7 - Stock Exchange',
    project_cs50p7_role: 'Student',
    project_cs50p7_context: 'Web development',
    project_cs50p7_description: ' A project left for the Pset7 during the CS50 course.',

    project_fccback_status: "Click on the links :)",
    project_fccback_title: 'Some Back-End projects',
    project_fccback_role: 'Student',
    project_fccback_context: 'Learning NodeJS mainly and some frameworks',
    project_fccback_description: 'Learning the principles of a server, using Node as javascript in the backend, learning about security and frameworks related.',

    project_fccfront_status: "Click To See the whole :)",
    project_fccfront_title: 'Some Front-End projects',
    project_fccfront_role: 'Student',
    project_fccfront_context: 'Learning UI / UX and software engineering',
    project_fccfront_description: 'By doing this projects, I followed user stories, had to use algorithms in order to create what I was asked to.',

    project_ds_multiple_title: 'Some interesting DS projects',
    project_ds_multiple_role: 'Student',
    project_ds_multiple_context: 'MSc Data Science',
    project_ds_multiple_description: 'Approached several subjects with different tools and methodology: NLP, AI, ML, Graphs, Operational Research among the most interesting subjects I believe.'

  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'fr',
  messages: {
    siteTitle: 'MERN blog de démarrage',
    addPost: 'Ajouter Poster',
    switchLanguage: 'Changer la Langue',
    twitterMessage: 'Nous sommes sur Twitter',
    by: 'Par',
    deletePost: 'Supprimer le message',
    createNewPost: 'Créer un nouveau message',
    authorName: 'Nom de l\'auteur',
    postTitle: 'Titre de l\'article',
    postContent: 'Contenu après',
    submit: 'Soumettre',
    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n      } as of {date} (in real app this would be translated to French)',
    profileTitle: 'Profil',
    menuAbout: 'À propos',
    menuSkills: 'Compétences',
    menuResume: 'Résumé',
    menuContact: 'Contacter',
    menuProjects: 'Projets',
    Me1: 'Hello! :)',
    Me2: 'Développé du logiciel pour le besoin métier à partir de mon premier emploi. Curieux et motivé par le réalisable avec fullstack developement. De plus, l\'impact que l\'on pouvait avoir en comprenant les données et les montrant comme un outil de décision m\'a impressionné. En liant ces deux faits, j\'ai décidé d\'ajouter à mes connaissances la Data Science qui est intéressante et surprenante.',
    Me3: 'Actuellement, je veux me focaliser sur le software engineerig ou fullstack developement puisque trouver des solutions algorithmiques, améliorer le code, créer des produits qui ajoutent de la valeur sont les sujets qui me stimulent le plus toujours.',
    Me4: 'Comme vous pouvez noter plus en bas, je connais plusieurs langages professionnellement, VBA pour deux ans, PHP (Laravel) pour plus d\'un an, Javascript et python pour deux ans. Dans mes projets personnels, le stack Javascript domine. Dans des projets de recherche et acad\xE9miques, c\'est python.\n         Pour des bases de donn\xE9es, j\'utilise indiff\xE9remment MongoDB et MySQL en accord au projet. J\'ajoute que les m\xE9tiers o\xF9 j\'ai appliqu\xE9 le d\xE9veloppement ce sont en gestion, finances, recherche et l\'immobilier.',
    MeConc: 'Finalement, si vous êtes arrivés à cette partie de ma petite introduction, n\'hésitez pas à me contacter et me demander au sujet de mes projets et parcours. Il y a un link au final. Je vous invite à regarder mes projets, mon "résumé roulant" et si vous n\'êtes pas encore motivé à me contacter (à la fin, le mail et mon linkedin se trouvent), vous pouvez me donner un feedback. De toute façon, merci et bon recrutement ! :)',
    KeyW: 'Mots Clés',
    KeyWords: 'Software Engineering, FullStack Development, Data Science, Computer Science, Artificial Intelligence, Automation, Business Analysis, Project Management, Operational Research, Entrepreneurship',
    //Soft Skills
    SS1: 'Analytique',
    SS2: 'Engagé',
    SS3: 'Résolveur de problèmes',
    SS4: 'Apprenant',
    SS5: 'Travail en équipe',
    SS6: 'Ajouter de la valeur',
    SS7: '"Hands On"',
    ss11: '& Curieux',
    ss12: 'Logique, Raisonnement, Approfondir',
    ss21: 'Délivrer des produits finis',
    ss31: 'Trouver la cause',
    ss32: 'Développer un processus logique',
    ss33: 'Délivrer un système',
    ss41: 'Autodidacte',
    ss42: 'Enthousiaste',
    ss43: 'Poser des questions',
    ss51: 'Savoir faire',
    ss52: 'Social',
    ss53: 'Demander & Répondre',
    ss61: 'Propositions',
    ss62: 'Compréhension du Business/Produit',
    ss71: 'Essayer des nouvelles choses',
    ss72: 'Entthousiaste à créer',
    //hardSkills
    ttLang: 'Langues',
    ttProgLang: 'Langues de programmation',
    ttStacks: 'Stacks',
    ttFrameworks: 'Frameworks/Librairies',
    ttOther: 'Autres',
    //Resume
    ResHighShool: ' Lycée Franco Mexicain',
    ResHighShoolSpe: 'Spécialité  Sciences de l\'ingénieur',
    ResUniv: 'Universidad Nacional Autónoma de México - UNAM',
    ResUnivSpe: 'Licence en Sciences Génie Civil',
    ResDiploIMEI: 'Institut Mexicain du Bâtiment Intelligent - IMEI',
    ResDiploIMEISpe: 'Spécialité - Technologie des Bâtiments Intelligents et Durables',
    ResStudClubCICM: 'CICM Membre du club d\'étudiants',
    ResStageIUNAM: 'Stage en InnovaUNAM (incubateur d\'entreprises)',
    ResSolarDec: 'Solar Decathlon Europe 2014',
    ResSolarDecRole: 'Leader, Responsable Génie Civil',
    ResSolarDecPrices: 'Gagné 3 prix (1° Ingénierie, 2° Urbanisme, 3° Durabilité)',
    ResThesis: 'Auteur et Expositeur de l\'article concernant ma thèse (Analyse, Conception et Construction du projet CASA UNAM)',
    ResICAF: 'ICA FLUOR',
    ResICAFRole: 'Ingénieur de Projet',
    ResICAFDesc: 'Suivi du programme, alertes, plan de récupération, prévisions, productivité, rapports niveau gestion.',
    ResICAFAchi: 'Automatisation du suivi du programme',
    ResJacEng: 'Jacobs Engineering',
    ResJacEngRole: 'Planificateur de Projet',
    ResJacEngDesc: 'Planification interactive, plan directeur, création du WBS, suivi du programme, alertes, prévisions, productivité. Plan de récupération, rapports niveau gestion.',
    ResJacEngAchi: 'Automatisation du suivi du programme',
    ResCitiB: 'Citi Banamex',
    ResCitiBRole: 'Chef de projet Junior. / IT Business Analyst',
    ResCitiBDesc: 'Intermédiaire entre la partie commerciale/d\'affaires, développeurs de logiciel, et spécialistes. IT BA SDLC livrables, qualité des données et contrôle de projet RPA, analyse des données et visualisation. Analyse des exigences et des solutions. Méthode : SDLC.',
    ResCitiBAchi: 'Automatisation du suivi du programme',
    ResDiploTUDelft: 'TUDelft - TPM1x: Creative Problem Solving and Decision Making',
    ResDiploHarv: 'Harvard - CS50: Introduction to Computer Science',
    ResDiploFCCFront: 'FreeCodeCamp - Front End Certification',
    ResDiploSAOpSys: 'Saylor Academy - CS401: Operating Systems',
    ResMutuo: 'Mutuo Financiera',
    ResMutuoRole: 'Software Engineer',
    ResMutuoDesc: 'Développement du software interne, BPA & RPA pour des différents projets (obtenir/analyser et déduire des données). Méthode : Agile.',
    ResMutuoAchi: 'Automatisation du suivi des projets, évolutivité, projets financiers',
    ResDiploSAIntroDB: 'Saylor Academy - CS403: Introduction to Modern Databases',
    ResDiploSAAlgorithm: 'Saylor Academy - CS303: Algorithms',
    ResIMT: 'Institut Mines Télécom - IMT',
    ResIMTP: 'Projet IMT',
    ResIMTSpe: 'Master of Science en Sciences des Données',
    ResIMTCours: 'Intelligence Artificielle, Langages et Logique, Graphes, Génie Logiciel, Mathématiques { Proba, Stat, Alg }, Traitement des signaux, Recherche Opérationnelle, Big Data, Data Mining',
    ResIMTP1: 'Projet: Algorithme génétique pour l\'optimisation d\'un réseau de chauffage',
    ResIMTP2: 'Projet: Détection Navire en utilisant imagerie satellite, IA et Statistiques',
    ResIMTP3: 'Projet: Compilateur type Expr - Pfx (Lexer, Parser, NLP, Programmation Fonctionelle)',
    ResIMTP4: 'Projet: Simulation Infection et traitement réseaux sociaux (Graphes)',
    ResIMTP5: 'Projet: Recommandation de profils à des postes de travail (RH)',
    ResIRH: 'Plataforme de Location Habitation',
    ResIRHRole: 'Projet Personel',
    ResIRHDesc: 'Déveloper une Application Web pour gèrer la location habitation',
    ResIMTRole: 'Stagiaire Data Science',
    ResIMTDesc: 'Classification non supervisée de caractéristiques obtenues de signaux ECG pour trouver des groupes indiquant battements de cœur',
    ResIMTCHLG: 'Challenge IMT Disrupt’ Campus 2019',
    ResIMTCHLGRole: 'Participant',
    ResIMTCHLGDesc: 'Évenement de 4 jours dédiés à l\'Intelligence Artificielle avec des conférences, activités, rencontres avec des entreprises et un étude de cas. Pour moi, l\'étude de cas était pour BNP, pour leur nouvel "centre d\'innovation" BivWak. C\'était une manière de identification en utilisant l\'IA.',
    ResAMA: 'Amadeus',
    ResAMARole: 'Data Science Intern',
    ResAMADesc: 'Fraud Detection. Research, implement and differentiate among methods. Pipeline proposal for data processing.',
    //Form
    Name: 'Prénom',
    Send: 'Envoyer',
    Email: 'Courrier électronique',
    Industry: 'Industrie',
    Purpose: 'Objectif',
    WriteToMe: 'Écris-moi :)',
    SentMessage: 'Message envoyé!! :). Merci de me contacter, je me mettrai en contact avec vous. Bonne journée!',
    MessageSentFail: 'Message PAS envoyé :(, essayez de nouveau plus tard s-v-p, ou contactez moi directement à mon courrier électronique: valentin.pg@outlook.com. Merci!',
    WaitForIt: 'Wait for it ...',
    //Time
    January: 'Janvier',
    February: 'Février',
    March: 'Mars',
    June: 'Juin',
    September: 'Septembre',
    October: 'Octobre',
    December: 'Décembre',
    ToDate: 'Á aujourd\'hui',

    //Projects
    click_for_more: 'Clickez pour voir plus',
    project_comp_title: 'Compilateur PFX - EXPR',
    project_comp_description: 'Créer un compilateur en utilisant le cadre pfx-expr. En utilisant un lexer et un parser, le nouvel "langage de programmation" est identifié et toutes ses opérations ordonnées dans une pipe (expr) laquelle sera calculée après récursivement (pfx). Le nouveau langage utilise variables et lambda calcul.',
    project_comp_context: 'Programmation Fonctionelle, NLP, Langages et Logique',
    project_comp_status: 'Click pour voir le code',

    project_irent_description: 'Développer une plateforme web pour la gestion de la location habitation pour les entreprises traditionneles (en pensant plutôt en un administrateur immobilier pour qu\'elles puissent controler les proprietés qu\'elles gèrent. Dés la communication, raports, contrats, jusqu\'à paiements et visualisation et analyse des données.',

    project_valhalla_status: 'Désolé, "Valhalla" est privé, mais vous pouvez cliquer dessus et accéder à la page publique :)',
    project_valhalla_title: 'Fintech Core Banking System (ERP)',
    project_valhalla_role: 'Software Engineer',
    project_valhalla_context: 'Fintech / RPA',
    project_valhalla_description: 'Nous voulions créer notre propre logiciel pour modeler chaque produit et produit financier. Alors, vous y trouveriez une énorme structure de base de données, clients, products, financial products, et tout ce que vous pouvez imaginer pour automatiser et aider le business ...',

    project_datavis_status: 'Cliquez sur les links :)',
    project_datavis_title: 'Visualisasion des données',
    project_datavis_role: 'Étudiant',
    project_datavis_context: 'Visualisasion des données',
    project_datavis_description: "Les données sont une des choses les plus précieuses pour le commerce et, une des outils les plus révélateurs pour la prise de décisions, alors, c'était à faire.",

    project_pm_status: "Désolé, projets privés à cause d'information sensible, mais il y a une vidéo :)",
    project_pm_title: 'Outil de Suivi de Projets',
    project_pm_role: 'Project Manager / Software Engineer',
    project_pm_context: 'Gestion du Projet / Produit / RPA',
    project_pm_description: "Pour éviter des erreurs et briller au suivi de projet, j'ai créé en ICA FLUOR, Jacobs, Citi Banamex, et Mutuo Financiera des fichiers comme celui ci pour moi comme PM ou pour le PMOffice.",

    project_ttt_status: "Cliquez pour jouer :)",
    project_ttt_title: 'Jeu Tic-Tac-Toe',
    project_ttt_role: 'Étudiant',
    project_ttt_context: "Principes de l'Intéligence Artificielle",
    project_ttt_description: "En étudiant les principes de l'IA, c'est un projet pour pratiquer et bien comprendre cet exemple.",

    project_cs50final_status: "Cliquez pour voir :)",
    project_cs50final_title: 'CS50 Final - Projet Final',
    project_cs50final_role: 'Étudiant',
    project_cs50final_context: 'Développement Web',
    project_cs50final_description: "Pour le projet final, j'ai choisi de faire un logiciel pour la gestion d'une cafétéria. Si vous voulez comprendre son fonctionnement, regardez la vidéo ou cliquez sur le titre.",

    project_cs50p8_status: "Cliquez pour voir :)",
    project_cs50p8_title: 'CS50 Pset8 - Google Maps & Search',
    project_cs50p8_role: 'Étudiant',
    project_cs50p8_context: 'Développement Web',
    project_cs50p8_description: 'Un projet fait pour le TP8 pendant le cours CS50.',

    project_cs50p7_status: "Cliquez pour voir :)",
    project_cs50p7_title: 'CS50 Pset7 - Stock Exchange',
    project_cs50p7_role: 'Étudiant',
    project_cs50p7_context: 'Développement Web',
    project_cs50p7_description: 'Un projet fait pour le TP7 pendant le cours CS50.',

    project_fccback_status: "Cliquez sur les links :)",
    project_fccback_title: 'Quelques projets Back-End',
    project_fccback_role: 'Étudiant',
    project_fccback_context: 'Apprenant principalement NodeJS et quelques frameworks',
    project_fccback_description: "J'ai appris les principes d'un serveur avec Node comme javascript en Back End, la sécurité et d'autres 'frameworks' liés.",

    project_fccfront_status: "Cliquez pour voir plusieurs examples :)",
    project_fccfront_title: 'Quelques projets Front-End',
    project_fccfront_role: 'Étudiant',
    project_fccfront_context: 'Apprenant UI / UX et software engineering',
    project_fccfront_description: "En faisant ces projets, j'ai dû poursuivre des histoires d'utilisateur, utiliser des algorithmes pour créer ce qu¿on me demandait.",

    project_ds_multiple_title: 'Quelques projets DS intéressants',
    project_ds_multiple_role: 'Étudiant',
    project_ds_multiple_context: 'MSc Data Science',
    project_ds_multiple_description: 'Abordé plusieurs sujets avec des outils différents et méthodologie: NLP, AI, ML, Graphes, Operational Research sont ceux les plus interessants je pense.'
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

var _ProfileActions = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial State
var initialState = {
  activeHS: false,
  contactName: '',
  contactMail: '',
  contactMess: '',
  contactPurp: '',
  contactIndu: ''
}; // Import Actions


var ProfileReducer = function ProfileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  //sconsole.log(state);
  switch (action.type) {
    case _ProfileActions.TOGGLE_ACTIVE_HARDSKILLS:
      return (0, _assign2.default)({}, state, state.activeHS = action.bool);
    case _ProfileActions.CONTACT_NAME:
      return (0, _assign2.default)({}, state, state.contactName = action.text);
    case _ProfileActions.CONTACT_EMAIL:
      return (0, _assign2.default)({}, state, state.contactMail = action.text);
    case _ProfileActions.CONTACT_MESSAGE:
      return (0, _assign2.default)({}, state, state.contactMess = action.text);
    case _ProfileActions.CONTACT_INDUSTRY:
      return (0, _assign2.default)({}, state, state.contactIndu = action.text);
    case _ProfileActions.CONTACT_PURPOSE:
      return (0, _assign2.default)({}, state, state.contactPurp = action.text);
    default:
      return state;
  }
};

exports.default = ProfileReducer;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(5);

var _App = __webpack_require__(68);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
/* eslint-disable global-require */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  //require('./modules/Post/pages/PostListPage/PostListPage');
  //require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  __webpack_require__(26);
  __webpack_require__(28);
  __webpack_require__(82);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = (0, _jsx3.default)(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, (0, _jsx3.default)(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(26).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}), (0, _jsx3.default)(_reactRouter.Route, {
  path: '/projects',
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(28).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(21);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(22);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(23);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = {
  "container": "_4uEyKcd5WHob5qPzotT7"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(10);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _DevTools = __webpack_require__(12);

var _DevTools2 = _interopRequireDefault(_DevTools);

var _Header = __webpack_require__(69);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(70);

var _Footer2 = _interopRequireDefault(_Footer);

var _Menu = __webpack_require__(71);

var _Menu2 = _interopRequireDefault(_Menu);

var _AppActions = __webpack_require__(13);

var _IntlActions = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Actions


// Import Style
var _ref = (0, _jsx3.default)(_DevTools2.default, {});

// Import Components


var _ref2 = (0, _jsx3.default)(_Footer2.default, {});

var App = exports.App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    //console.log('in app');
    //console.log(props);
    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.toggleAddPostSection = function () {
      _this.props.toggleAddPost();
    };

    _this.toggleActiveMenu = function () {
      _this.props.toggleActiveMenu();
    };

    _this.state = { isMounted: false };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return (0, _jsx3.default)('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(_reactHelmet2.default, {
        title: 'Valentin Portillo',
        titleTemplate: '%s - Portfolio App',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), (0, _jsx3.default)(_Header2.default, {
        switchLanguage: function switchLanguage(lang) {
          return _this2.props.switchLanguage(lang);
        },
        intl: this.props.intl,
        toggleAddPost: this.toggleAddPostSection
      }), (0, _jsx3.default)(_Menu2.default, {
        toggleActiveMenu: this.toggleActiveMenu,
        activeMenu: this.props.app.activeMenu
      }), (0, _jsx3.default)('div', {
        className: _App2.default.container
      }, void 0, this.props.children), _ref2));
    }
  }]);
  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
    app: store.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAddPost: function toggleAddPost() {
      dispatch((0, _AppActions.toggleAddPost)());
    },
    toggleActiveMenu: function toggleActiveMenu() {
      dispatch((0, _AppActions.toggleActiveMenu)());
    },
    switchLanguage: function switchLanguage(lang) {
      dispatch((0, _IntlActions.switchLanguage)(lang));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.Header = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(5);

var _reactIntl = __webpack_require__(2);

var _Header = {
  "logoContainer": "_1ANnkybYFv_VU4IKJe8yzB",
  "logo": "LNLY14D54Y1IQaktsExe3",
  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
  "content": "_1eavAvnySzoZc5rld6Q4pa",
  "site-title": "UfFn6muOcOBjkVI5_yltp",
  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
};

var _Header2 = _interopRequireDefault(_Header);

var _logo = '/' + "60639a815b4b0850c03fe0c8fb02e19a.jpg";

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
var _ref = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'switchLanguage'
}));
//image


function Header(props, context) {
  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
    return (0, _jsx3.default)('li', {
      onClick: function onClick() {
        return props.switchLanguage(lang);
      },
      className: lang === props.intl.locale ? _Header2.default.selected : ''
    }, lang, lang);
  });
  return (0, _jsx3.default)('div', {
    className: _Header2.default.header
  }, void 0, (0, _jsx3.default)('div', {
    className: _Header2.default['language-switcher']
  }, void 0, (0, _jsx3.default)('div', {
    className: _Header2.default.logoContainer
  }, void 0, (0, _jsx3.default)('img', {
    src: _logo2.default,
    className: _Header2.default.logo
  })), (0, _jsx3.default)('ul', {}, void 0, _ref, languageNodes)));
}

Header.contextTypes = {};

exports.default = Header;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(2);

var _Footer = {
  "footer": "_3vPEi87A1wyh1iLR3bsBGf",
  "link": "_12r2cwHY4o3zmpY9EM-tdR"
};

var _Footer2 = _interopRequireDefault(_Footer);

var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
var _ref = (0, _jsx3.default)('p', {}, void 0, '\xA9 2020 \xB7 V \xB7 Valentin Portillo');

// Import Images


var _ref2 = (0, _jsx3.default)('i', {
  className: 'fab fa-linkedin-in'
});

var _ref3 = (0, _jsx3.default)('i', {
  className: 'fab fa-codepen'
});

var _ref4 = (0, _jsx3.default)('i', {
  className: 'fab fa-github'
});

var _ref5 = (0, _jsx3.default)('i', {
  className: 'fab fa-free-code-camp'
});

function Footer() {
  //<div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
  return (0, _jsx3.default)('div', {
    className: _Footer2.default.footer
  }, void 0, _ref, (0, _jsx3.default)('p', {
    className: _Footer2.default.links
  }, void 0, (0, _jsx3.default)('a', {
    className: _Footer2.default.link,
    href: 'https://www.linkedin.com/in/valeporti/',
    target: '_Blank'
  }, void 0, _ref2), (0, _jsx3.default)('a', {
    className: _Footer2.default.link,
    href: 'https://codepen.io/valeporti/',
    target: '_Blank'
  }, void 0, _ref3), (0, _jsx3.default)('a', {
    className: _Footer2.default.link,
    href: 'https://github.com/valeporti/',
    target: '_Blank'
  }, void 0, _ref4), (0, _jsx3.default)('a', {
    className: _Footer2.default.link,
    href: 'https://www.freecodecamp.org/valeporti/',
    target: '_Blank'
  }, void 0, _ref5)));
}

exports.default = Footer;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _Menu = {
  "menu": "GC-bt9xizfp_NBLe2iKy3",
  "menuactive": "_1Mju_60oV7YXUDh8X2uNYf",
  "menuContent": "UjJCMHGVmDoSPk5DhfaPE"
};

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('i', {});

var _ref2 = (0, _jsx3.default)('i', {});

var _ref3 = (0, _jsx3.default)('i', {});

function Menu(props, context) {
  //console.log('onmenu');
  //console.log(props);
  var activeMenu = props.activeMenu;
  var activeMenuClass = _Menu2.default.menu;
  //console.log(styles);
  activeMenu ? activeMenuClass = _Menu2.default.menu : activeMenuClass = '';

  return (0, _jsx3.default)('div', {
    className: !activeMenu && _Menu2.default.menu || _Menu2.default.menuactive
  }, void 0, (0, _jsx3.default)('span', {
    onClick: props.toggleActiveMenu
  }, void 0, _ref, _ref2, _ref3), (0, _jsx3.default)('div', {
    className: _Menu2.default.menuContent
  }, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/#About'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'menuAbout'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('div', {}, void 0, txt);
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/#Skills'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'menuSkills'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('div', {}, void 0, txt);
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/#Resume'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'menuResume'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('div', {}, void 0, txt);
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/#Contact'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'menuContact'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('div', {}, void 0, txt);
  }))), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: '/projects'
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'menuProjects'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('div', {}, void 0, txt);
  }))))));
}

exports.default = Menu;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _HardSkills = {
  "hardSkills": "_19pL_sAR5fa2a3uwcb9u-v",
  "hardLanguages": "_1TLznByRZM-1e6Rgmy2Wgz",
  "hardProgramming": "_1bWK3XbVRC_NP1r4afYT_j",
  "hardStacks": "_2cN_7HHoMwgAJXerTtIPyo",
  "hardOther": "_2Fc7ZLBy1hRwA5BMiLOJrT",
  "hardFrame": "_145YBbKq6BrNF_IXdIPCua",
  "hardTitle": "_2lE5ju1ujaxx1BuVZZSoRn"
};

var _HardSkills2 = _interopRequireDefault(_HardSkills);

var _SkillBar = __webpack_require__(74);

var _SkillBar2 = _interopRequireDefault(_SkillBar);

var _reactVisibilitySensor = __webpack_require__(27);

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Import Components
var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ttLang'
});

//Other funcitonalities


// Import Style


var _ref2 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ttProgLang'
});

var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ttStacks'
});

var _ref4 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ttFrameworks'
});

var _ref5 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ttOther'
});

function HardSkills(props, context) {
  var isVisible = props.isVisible;
  var hard_program_arr = [{ name: 'PHP', percentage: 100 }, { name: 'C', percentage: 80 }, { name: 'JS', percentage: 100 }, { name: 'VBA', percentage: 100 }, { name: 'Python', percentage: 100 }, { name: 'Matlab', percentage: 60 }, { name: 'Java', percentage: 80 }, { name: 'OCAML', percentage: 80 }, { name: 'Scala', percentage: 80 }];
  var hard_langs_arr = [{ name: 'Français', percentage: 100 }, { name: 'English', percentage: 100 }, { name: 'Español', percentage: 100 }, { name: 'Italiano', percentage: 60 }];
  var hard_stacks_arr = [{ name: 'LARAVEL', percentage: 100 }, { name: 'MERN', percentage: 100 }, { name: 'Hadoop', percentage: 100 }, { name: 'PyNLP', percentage: 80 }, { name: 'PyML', percentage: 100 }, { name: 'PyData', percentage: 100 }];
  var hard_frame_arr = [{ name: 'ExpressJS', percentage: 100 }, { name: 'React/Redux', percentage: 100 }, { name: 'D3.js', percentage: 80 }, { name: 'Mongoose', percentage: 100 }, { name: 'Spark', percentage: 80 }, { name: 'Scikit-L', percentage: 80 }, { name: 'Keras', percentage: 80 }];
  var hard_others_arr = [{ name: 'HTML', percentage: 100 }, { name: 'CSS', percentage: 80 }, { name: 'SQL', percentage: 100 }, { name: 'Git', percentage: 100 }, { name: 'NPM', percentage: 80 }, { name: 'Mongo', percentage: 100 }];
  var hard_programs = void 0;
  var hard_langs = void 0;
  var hard_other = void 0;
  var hard_frame = void 0;
  var hard_stack = void 0;
  if (isVisible) {
    hard_programs = hard_program_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: skill.percentage
      }, index);
    });
    hard_langs = hard_langs_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: skill.percentage
      }, index);
    });
    hard_other = hard_others_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: skill.percentage
      }, index);
    });
    hard_frame = hard_frame_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: skill.percentage
      }, index);
    });
    hard_stack = hard_stacks_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: skill.percentage
      }, index);
    });
  } else {
    hard_programs = hard_program_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: 0
      }, index);
    });
    hard_langs = hard_langs_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: 0
      }, index);
    });
    hard_other = hard_others_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: 0
      }, index);
    });
    hard_frame = hard_frame_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: 0
      }, index);
    });
    hard_stack = hard_stacks_arr.map(function (skill, index) {
      return (0, _jsx3.default)(_SkillBar2.default, {
        name: skill.name,
        percentage: 0
      }, index);
    });
  }

  return (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardSkills
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardLanguages
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardTitle
  }, void 0, _ref), hard_langs), (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardProgramming
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardTitle
  }, void 0, _ref2), hard_programs), (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardStacks
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardTitle
  }, void 0, _ref3), hard_stack), (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardFrame
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardTitle
  }, void 0, _ref4), hard_frame), (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardOther
  }, void 0, (0, _jsx3.default)('div', {
    className: _HardSkills2.default.hardTitle
  }, void 0, _ref5), hard_other));
}

exports.default = HardSkills;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SkillBar = {
  "progLan": "_1dg04KHs90Ev6_Ig6bALs9",
  "progLanName": "_4yVyZyVKsXab0azfxN1v3",
  "progLanBar": "_3GwNdWVjxt6Xhqcx6FW8MH",
  "bar": "_3FNpF4cNeV3JeZFtfKhCBD"
};

var _SkillBar2 = _interopRequireDefault(_SkillBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SkillBar(props, context) {
  return (0, _jsx3.default)('div', {
    className: _SkillBar2.default.progLan
  }, void 0, (0, _jsx3.default)('div', {
    className: _SkillBar2.default.progLanName
  }, void 0, props.name), (0, _jsx3.default)('div', {
    className: _SkillBar2.default.progLanBar
  }, void 0, (0, _jsx3.default)('div', {
    className: _SkillBar2.default.bar,
    style: { width: props.percentage + '%' }
  }, void 0, props.percentage, '%')));
}

// Import Style
exports.default = SkillBar;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _SoftSkills = {
  "title": "_1QHs7zGOca7ETShMRukKl6",
  "softSkills": "_22f8Bmw7-ugqrksbZt1MhZ",
  "softSkill": "_1gbk2F5MoDh6PWVV_Sd4Nu",
  "softTtl": "_1T17th15uBObDt5GExa81q",
  "ulSoft": "bLzL1QHjWS_2eA8Rd7g0y",
  "octagonContent": "_19KD4RH-tagtAewgpWeHzq",
  "octagon": "_1d2xyg-AHrwvIJtFhQnNBx"
};

var _SoftSkills2 = _interopRequireDefault(_SoftSkills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'menuSkills'
});

var _ref2 = (0, _jsx3.default)('i', {
  className: 'fas fa-code-branch'
});

var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS1'
});

var _ref4 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss11'
}));

var _ref5 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss12'
}));

var _ref6 = (0, _jsx3.default)('i', {
  className: 'fas fa-thermometer-full'
});

var _ref7 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS2'
});

var _ref8 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss21'
}));

var _ref9 = (0, _jsx3.default)('i', {
  className: 'fas fa-lightbulb'
});

var _ref10 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS3'
});

var _ref11 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss31'
}));

var _ref12 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss32'
}));

var _ref13 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss33'
}));

var _ref14 = (0, _jsx3.default)('i', {
  className: 'fas fa-graduation-cap'
});

var _ref15 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS4'
});

var _ref16 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss41'
}));

var _ref17 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss42'
}));

var _ref18 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss43'
}));

var _ref19 = (0, _jsx3.default)('i', {
  className: 'fas fa-users'
});

var _ref20 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS5'
});

var _ref21 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss51'
}));

var _ref22 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss52'
}));

var _ref23 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss53'
}));

var _ref24 = (0, _jsx3.default)('i', {
  className: 'fas fa-chart-line'
});

var _ref25 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS6'
});

var _ref26 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss61'
}));

var _ref27 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss62'
}));

var _ref28 = (0, _jsx3.default)('i', {
  className: 'fas fa-shapes'
});

var _ref29 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'SS7'
});

var _ref30 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss71'
}));

var _ref31 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ss72'
}));

function SoftSkills(props, context) {
  return (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkills
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.title
  }, void 0, '{', ' ', _ref, ' ', '}'), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref2)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref3), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref4, _ref5)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref6)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref7), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref8)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref9)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref10), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref11, _ref12, _ref13)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref14)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref15), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref16, _ref17, _ref18)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref19)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref20), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref21, _ref22, _ref23)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref24)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref25), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref26, _ref27)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softSkill
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagon
  }, void 0, (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.octagonContent
  }, void 0, _ref28)), (0, _jsx3.default)('div', {
    className: _SoftSkills2.default.softTtl
  }, void 0, _ref29), (0, _jsx3.default)('ul', {
    className: _SoftSkills2.default.ulSoft
  }, void 0, _ref30, _ref31)));
}

exports.default = SoftSkills;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _Resume = {
  "Resume": "_173eGuaD9qBUHbZI4FVUbI",
  "logo": "_1ZajcUQsDMI9zGvIw64SCl",
  "item": "b4aPs5jMAU9O9NrF0GBTi",
  "title": "_2xdfUZLV5WbwT-8OMXmV1p",
  "header": "_34hihLCUFeLblg79eAgKUL",
  "footer": "_3kWQGuCSyc5PBuz_KIHwNl",
  "certificate": "_2SOvAbmxSqbr7Czmt53fvZ",
  "spacing": "mz7E-4V8kehwT5xlmUkvK",
  "timeline": "_2nA3ZG1p1UWDPdLzS74pCh",
  "year": "_3lXu9hJnCj8jB8zInbZ1Tz",
  "price": "_1s3Bu9gqL8TLD_OtTUz4ai"
};

var _Resume2 = _interopRequireDefault(_Resume);

var _tridisap = '/' + "533c150a3d35c034b0044ca1f4d7be59.jpg";

var _tridisap2 = _interopRequireDefault(_tridisap);

var _logo_mutuo = "data:image/png;base64,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";

var _logo_mutuo2 = _interopRequireDefault(_logo_mutuo);

var _logo_bnmx = '/' + "9767abafddd7a8ef1f3fa239dd662dea.png";

var _logo_bnmx2 = _interopRequireDefault(_logo_bnmx);

var _logo_casa = '/' + "b2d6c919690b79f16bff6048c51f3b6f.png";

var _logo_casa2 = _interopRequireDefault(_logo_casa);

var _logo_cicm = '/' + "313de4e40669890b2c237ec00f0cf486.png";

var _logo_cicm2 = _interopRequireDefault(_logo_cicm);

var _logo_icaf = "data:image/png;base64,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";

var _logo_icaf2 = _interopRequireDefault(_logo_icaf);

var _logo_imei = '/' + "cb30993b573366d18123c7566013e8ce.jpg";

var _logo_imei2 = _interopRequireDefault(_logo_imei);

var _logo_innova = '/' + "611ed793986ced1f3654446ba29e4e9f.jpg";

var _logo_innova2 = _interopRequireDefault(_logo_innova);

var _logo_jacobs = '/' + "55a1968cfad6a845c924f3f65ab037da.jpg";

var _logo_jacobs2 = _interopRequireDefault(_logo_jacobs);

var _logo_lfm = '/' + "feae78a7d04da900bf54aecd8f77f995.jpg";

var _logo_lfm2 = _interopRequireDefault(_logo_lfm);

var _logo_solar = '/' + "6e116f08124f151e55af40756f51d2ed.png";

var _logo_solar2 = _interopRequireDefault(_logo_solar);

var _logo_unam = '/' + "4bf0ea6ded64a56e6a4218c4233b389b.png";

var _logo_unam2 = _interopRequireDefault(_logo_unam);

var _logo_imt = '/' + "5b5364e1b962ac314acba276c5520fec.png";

var _logo_imt2 = _interopRequireDefault(_logo_imt);

var _icond = '/' + "8c1b64d1d019a41fb8b4b6ad22854eb2.png";

var _icond2 = _interopRequireDefault(_icond);

var _ama_logo = "data:image/png;base64,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";

var _ama_logo2 = _interopRequireDefault(_ama_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Style
var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'menuResume'
});

// Import Images


var _ref2 = (0, _jsx3.default)('h3', {}, void 0, '2006');

var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResHighShool'
});

var _ref4 = (0, _jsx3.default)('li', {}, void 0, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResHighShoolSpe'
}));

var _ref5 = (0, _jsx3.default)('h3', {}, void 0, '2009');

var _ref6 = (0, _jsx3.default)('h4', {}, void 0, '2009 - 2014');

var _ref7 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResUniv'
});

var _ref8 = (0, _jsx3.default)('li', {}, void 0, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResUnivSpe'
}));

var _ref9 = (0, _jsx3.default)('h3', {}, void 0, '2010');

var _ref10 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'June'
}), ' - ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
}));

var _ref11 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploIMEI'
});

var _ref12 = (0, _jsx3.default)('li', {}, void 0, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploIMEISpe'
}));

var _ref13 = (0, _jsx3.default)('h3', {}, void 0, '2011');

var _ref14 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResStudClubCICM'
});

var _ref15 = (0, _jsx3.default)('h3', {}, void 0, '2013');

var _ref16 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResStageIUNAM'
});

var _ref17 = (0, _jsx3.default)('h4', {}, void 0, ' 2013 - 2014');

var _ref18 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResSolarDec'
});

var _ref19 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResSolarDecRole'
})));

var _ref20 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResSolarDecPrices'
}));

var _ref21 = (0, _jsx3.default)('h3', {}, void 0, '2014');

var _ref22 = (0, _jsx3.default)('h4', {}, void 0, '2014 - 2015');

var _ref23 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResThesis'
});

var _ref24 = (0, _jsx3.default)('h4', {}, void 0, '2014 - 2015');

var _ref25 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResICAF'
});

var _ref26 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResICAFRole'
})));

var _ref27 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResICAFDesc'
}));

var _ref28 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResICAFAchi'
}));

var _ref29 = (0, _jsx3.default)('h3', {}, void 0, '2016');

var _ref30 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'January'
}));

var _ref31 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResJacEng'
});

var _ref32 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResJacEngRole'
})));

var _ref33 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResJacEngDesc'
}));

var _ref34 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResJacEngAchi'
}));

var _ref35 = (0, _jsx3.default)('h4', {}, void 0, 'July');

var _ref36 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResCitiB'
});

var _ref37 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResCitiBRole'
})));

var _ref38 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResCitiBDesc'
}));

var _ref39 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResCitiBAchi'
}));

var _ref40 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'December'
}));

var _ref41 = (0, _jsx3.default)('a', {
  href: 'https://courses.edx.org/certificates/b99704bf002e444fbf37d4497b8d695a',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploTUDelft'
}));

var _ref42 = (0, _jsx3.default)('a', {
  href: 'https://courses.edx.org/certificates/1fe3bc4a26ef40ca84be1cca1ad877f2',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploHarv'
}));

var _ref43 = (0, _jsx3.default)('h3', {}, void 0, '2017');

var _ref44 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'March'
}));

var _ref45 = (0, _jsx3.default)('a', {
  href: 'https://www.freecodecamp.org/valeporti/front-end-certification',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploFCCFront'
}));

var _ref46 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
}));

var _ref47 = (0, _jsx3.default)('a', {
  href: 'https://certificates.saylor.org/hd2657mm',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploSAOpSys'
}));

var _ref48 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
}));

var _ref49 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResMutuo'
});

var _ref50 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResMutuoRole'
})));

var _ref51 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResMutuoDesc'
}));

var _ref52 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResMutuoAchi'
}));

var _ref53 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'October'
}));

var _ref54 = (0, _jsx3.default)('a', {
  href: 'https://certificates.saylor.org/ft456bop',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploSAIntroDB'
}));

var _ref55 = (0, _jsx3.default)('h3', {}, void 0, '2018');

var _ref56 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'February'
}));

var _ref57 = (0, _jsx3.default)('a', {
  href: 'https://certificates.saylor.org/yh5jzfie',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResDiploSAAlgorithm'
}));

var _ref58 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
});

var _ref59 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ToDate'
});

var _ref60 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMT'
});

var _ref61 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTSpe'
})));

var _ref62 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTCours'
}));

var _ref63 = (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP'
})), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP1'
}))));

var _ref64 = (0, _jsx3.default)('h3', {}, void 0, '2019');

var _ref65 = (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP'
})), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP2'
}))));

var _ref66 = (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP'
})), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP3'
}))));

var _ref67 = (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP'
})), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP4'
}))));

var _ref68 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'January'
}), ' - ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ToDate'
}), ' (FullStack)');

var _ref69 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIRH'
});

var _ref70 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIRHRole'
})));

var _ref71 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIRHDesc'
}));

var _ref72 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'June'
}));

var _ref73 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTCHLG'
});

var _ref74 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTCHLGRole'
})));

var _ref75 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTCHLGDesc'
}));

var _ref76 = (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'June'
}), ' - ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
}));

var _ref77 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMT'
});

var _ref78 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTRole'
})));

var _ref79 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTDesc'
}));

var _ref80 = (0, _jsx3.default)('h3', {}, void 0, '2020');

var _ref81 = (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP'
})), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIMTP5'
}))));

var _ref82 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'September'
});

var _ref83 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ToDate'
});

var _ref84 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResAMA'
});

var _ref85 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('strong', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResAMARole'
})));

var _ref86 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResAMADesc'
}));

function Resume(props, context) {
  var date = new Date();

  return (0, _jsx3.default)('div', {
    className: _Resume2.default.Resume
  }, void 0, (0, _jsx3.default)('div', {
    className: _Resume2.default.title
  }, void 0, '{', ' ', _ref, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Resume2.default.header
  }), (0, _jsx3.default)('div', {
    className: _Resume2.default.item
  }, void 0, (0, _jsx3.default)('div', {
    className: _Resume2.default.timeline
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref2, (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://www.lfm.edu.mx',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_lfm2.default
  })), ' ', _ref3), _ref4))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref5, (0, _jsx3.default)('section', {}, void 0, _ref6, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.unam.mx/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_unam2.default
  })), ' ', _ref7), _ref8))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref9, (0, _jsx3.default)('section', {}, void 0, _ref10, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://imei.org.mx/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_imei2.default
  })), ' ', _ref11), _ref12))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref13, (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://cicm.org.mx/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_cicm2.default
  })), _ref14)))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref15, (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://www.innovacion.unam.mx/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_innova2.default
  })), _ref16, ' '))), (0, _jsx3.default)('section', {}, void 0, _ref17, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://www.solardecathlon2014.fr/en/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_solar2.default
  })), _ref18, (0, _jsx3.default)('a', {
    href: 'http://arquitectura.unam.mx/casa.html',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_casa2.default
  }))), _ref19, _ref20))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref21, (0, _jsx3.default)('section', {}, void 0, _ref22, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://es.calameo.com/read/0047443879e7a02232cf6',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _tridisap2.default
  })), _ref23))), (0, _jsx3.default)('section', {}, void 0, _ref24, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.linkedin.com/company/ica-fluor/?originalSubdomain=mx',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_icaf2.default
  })), _ref25), _ref26, _ref27, _ref28))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref29, (0, _jsx3.default)('section', {}, void 0, _ref30, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'http://www.jacobs.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_jacobs2.default
  })), _ref31), _ref32, _ref33, _ref34)), (0, _jsx3.default)('section', {}, void 0, _ref35, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.banamex.com/citibanamex/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_bnmx2.default
  })), _ref36), _ref37, _ref38, _ref39)), (0, _jsx3.default)('section', {}, void 0, _ref40, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref41), (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref42)))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref43, (0, _jsx3.default)('section', {}, void 0, _ref44, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref45))), (0, _jsx3.default)('section', {}, void 0, _ref46, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref47))), (0, _jsx3.default)('section', {}, void 0, _ref48, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://mutuofinanciera.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_mutuo2.default
  })), _ref49), _ref50, _ref51, _ref52)), (0, _jsx3.default)('section', {}, void 0, _ref53, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref54)))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref55, (0, _jsx3.default)('section', {}, void 0, _ref56, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {
    className: _Resume2.default.certificate
  }, void 0, _ref57))), (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, _ref58, ' - ', _ref59, ' (', date.getMonth() + 1, ' / ', date.getFullYear(), ')'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.imt-atlantique.fr/fr/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_imt2.default
  })), ' ', _ref60), _ref61, _ref62)), _ref63), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref64, _ref65, _ref66, _ref67, (0, _jsx3.default)('section', {}, void 0, _ref68, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.irent.haus',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _icond2.default
  })), 'IRent Haus: ', _ref69), _ref70, _ref71)), (0, _jsx3.default)('section', {}, void 0, _ref72, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.imt.fr/en/education/imt-disruptcampus/challenge-imt/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_imt2.default
  })), ' ', _ref73), _ref74, _ref75)), (0, _jsx3.default)('section', {}, void 0, _ref76, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.imt-atlantique.fr/fr/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    className: _Resume2.default.logo,
    src: _logo_imt2.default
  })), ' ', _ref77), _ref78, _ref79))), (0, _jsx3.default)('section', {
    className: _Resume2.default.year
  }, void 0, _ref80, _ref81, (0, _jsx3.default)('section', {}, void 0, (0, _jsx3.default)('h4', {}, void 0, _ref82, ' - ', _ref83, ' (', date.getMonth() + 1, ' / ', date.getFullYear(), ')'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
    href: 'https://amadeus.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('img', {
    style: { verticalAlign: 'middle', width: '60px' },
    src: _ama_logo2.default
  })), ' ', _ref84), _ref85, _ref86))), (0, _jsx3.default)('div', {
    className: _Resume2.default.spacing
  })))), (0, _jsx3.default)('div', {
    className: _Resume2.default.footer
  }));
}

exports.default = Resume;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _Contact = {
  "Contact": "_2g7AZKBUt3_TzgO6RHhEOa",
  "title": "mpiKZfcpjHiBXhSnCepfP",
  "formMain": "_2Okywfb8Z05TYBGgB7FnRL",
  "formDiv": "FDwXYJaJDnTImKk_jjVy2",
  "feedbackInput": "_2HdMyMVHmH2tVFh2IPqA6i",
  "inputIcon": "_1f2wFvnJScN0_XOJDz_aIF",
  "button": "s9qgizK8IIWu52WNowvZQ"
};

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'menuContact'
});

// Import Style


var _ref2 = (0, _jsx3.default)('i', {
  className: 'fas fa-user'
});

var _ref3 = (0, _jsx3.default)('i', {
  className: 'fas fa-at'
});

var _ref4 = (0, _jsx3.default)('i', {
  className: 'fas fa-industry'
});

var _ref5 = (0, _jsx3.default)('i', {
  className: 'fas fa-thumbtack'
});

var _ref6 = (0, _jsx3.default)('i', {
  className: 'far fa-hand-point-right'
});

var _ref7 = (0, _jsx3.default)('div', {
  className: 'ease'
});

function Contact(props, context) {
  //console.log(props);
  return (0, _jsx3.default)('div', {
    className: _Contact2.default.Contact
  }, void 0, (0, _jsx3.default)('div', {
    className: _Contact2.default.title
  }, void 0, '{', ' ', _ref, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Contact2.default.formMain
  }, void 0, (0, _jsx3.default)('div', {
    className: _Contact2.default.formDiv
  }, void 0, (0, _jsx3.default)('form', {
    className: _Contact2.default.form,
    action: '/profile/sendMail',
    onSubmit: props.handleSentMail
  }, void 0, (0, _jsx3.default)('p', {
    className: _Contact2.default.inputCont
  }, void 0, (0, _jsx3.default)('span', {
    className: _Contact2.default.inputIcon
  }, void 0, _ref2), (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'Name'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('input', {
      name: 'name',
      type: 'text',
      className: _Contact2.default.feedbackInput,
      placeholder: txt,
      id: 'name',
      value: props.contactName,
      onChange: function onChange(event) {
        return props.contactNameInput(event.target.value);
      }
    });
  })), (0, _jsx3.default)('p', {
    className: _Contact2.default.inputCont
  }, void 0, (0, _jsx3.default)('span', {
    className: _Contact2.default.inputIcon
  }, void 0, _ref3), (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'Email'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('input', {
      name: 'email',
      type: 'text',
      className: _Contact2.default.feedbackInput,
      id: 'email',
      placeholder: txt,
      value: props.contactMail,
      onChange: function onChange(event) {
        return props.contactEmailInput(event.target.value);
      }
    });
  })), (0, _jsx3.default)('p', {
    className: _Contact2.default.inputCont
  }, void 0, (0, _jsx3.default)('span', {
    className: _Contact2.default.inputIcon
  }, void 0, _ref4), (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'Industry'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('input', {
      name: 'industry',
      type: 'text',
      className: _Contact2.default.feedbackInput,
      id: 'industry',
      placeholder: txt,
      value: props.contactIndu,
      onChange: function onChange(event) {
        return props.contactInduInput(event.target.value);
      }
    });
  })), (0, _jsx3.default)('p', {
    className: _Contact2.default.inputCont
  }, void 0, (0, _jsx3.default)('span', {
    className: _Contact2.default.inputIcon
  }, void 0, _ref5), (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'Purpose'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('input', {
      name: 'purpose',
      type: 'text',
      className: _Contact2.default.feedbackInput,
      id: 'purpose',
      placeholder: txt,
      value: props.contactPurp,
      onChange: function onChange(event) {
        return props.contactPurpInput(event.target.value);
      }
    });
  })), (0, _jsx3.default)('p', {
    className: _Contact2.default.inputCont
  }, void 0, (0, _jsx3.default)('span', {
    className: _Contact2.default.inputIcon
  }, void 0, _ref6), (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'WriteToMe'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('textarea', {
      name: 'text',
      className: _Contact2.default.feedbackInput,
      id: 'comment',
      placeholder: txt,
      value: props.contactMess,
      onChange: function onChange(event) {
        return props.contactMessInput(event.target.value);
      }
    });
  })), (0, _jsx3.default)('div', {
    className: _Contact2.default.submit
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: 'Send'
  }, void 0, function (txt) {
    return (0, _jsx3.default)('input', {
      type: 'submit',
      value: txt,
      className: _Contact2.default.button
    });
  }), _ref7)))));
}

exports.default = Contact;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _About = {
  "title": "_3qWwVqZcSy1WB5bvHFeDG_",
  "about": "_3Atl2Be86z628vXcxKVQ04",
  "aboutCont": "_1qBeDIK47DTi1nPLcrEi6D",
  "icon": "_13Rs1yJvPWs7IrCkPcfGy6",
  "presentation": "ZsJiKQWEKOBYr_4mKWAuu",
  "intitle": "_2JIYBAga3ewhLoVMiq-L1P",
  "name": "_3QcGnWursdhGKIhnr2qW7d",
  "smallDescription": "_3ioMW5ltMtButC2vzt9vqi"
};

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'menuAbout'
});

// Import Style


var _ref2 = (0, _jsx3.default)('i', {
  className: 'fas fa-terminal'
});

var _ref3 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'Me1'
}));

var _ref4 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'Me2'
}));

var _ref5 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'Me3'
}));

var _ref6 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'Me4'
}));

var _ref7 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'MeConc'
}));

var _ref8 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'KeyW'
});

var _ref9 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'KeyWords'
}));

function About(props, context) {
  return (0, _jsx3.default)('div', {
    className: _About2.default.about
  }, void 0, (0, _jsx3.default)('div', {
    className: _About2.default.title
  }, void 0, '{', ' ', _ref, ' ', '}'), (0, _jsx3.default)('div', {
    className: _About2.default.aboutCont
  }, void 0, (0, _jsx3.default)('div', {
    className: _About2.default.icon
  }, void 0, _ref2), (0, _jsx3.default)('div', {
    className: _About2.default.presentation
  }, void 0, (0, _jsx3.default)('p', {
    className: _About2.default.name
  }, void 0, 'Valentin Portillo'), (0, _jsx3.default)('p', {
    className: _About2.default.intitle
  }, void 0, 'Software Engineer / Data Scientist'), (0, _jsx3.default)('div', {
    className: _About2.default.smallDescription
  }, void 0, _ref3, _ref4, _ref5, _ref6, _ref7), (0, _jsx3.default)('p', {
    className: _About2.default.intitle
  }, void 0, _ref8), (0, _jsx3.default)('div', {
    className: _About2.default.smallDescription
  }, void 0, _ref9))));
}

exports.default = About;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _Projects = {
  "Projects": "nZogPQomuVG1AgmrF0Iy5",
  "project_display": "_2XSf0UE5rLVj4ebxM-BbQf",
  "project_alert": "_3-M8Kh_uvWEwfV8eHrwT_f",
  "project_status": "_2rgsURR8BYLHAvBm6AgqTG",
  "project_status_icon_neg": "_297aWkAtRZj5Ibou-npQ1d",
  "project_status_icon_pos": "_2Amu5VP798uDWETzoEmzsk",
  "project_status_text": "_25dcPq-XO-UoqulhUnCtEP",
  "project_content": "_2MD4BlNr5_D4Apyyu_GXJx",
  "project_title": "_34vMMLlzxQ3mCncv0othvB",
  "title_link": "b8_-P5B15i2eovr6Mvw9q",
  "project_photo": "_3VVqxF07Ow_i3N3XZERQ7H",
  "description": "c3GXDR7OxlmLYyfWmJYQo"
};

var _Projects2 = _interopRequireDefault(_Projects);

var _Project = __webpack_require__(81);

var _Project2 = _interopRequireDefault(_Project);

var _pm_report = '/' + "97f22daa7ea4fc6c01f5dfffe968c8fd.png";

var _pm_report2 = _interopRequireDefault(_pm_report);

var _p = '/' + "cdeed49deec3a206bcf18625da779f8b.png";

var _p2 = _interopRequireDefault(_p);

var _p3 = '/' + "fb302f941302908f0a900072290f90e0.png";

var _p4 = _interopRequireDefault(_p3);

var _cs50_final = '/' + "68101e4b1cbf0eeed91b4bc81b74386a.png";

var _cs50_final2 = _interopRequireDefault(_cs50_final);

var _tic_tac_toe = '/' + "0af56865f260ac5dfedb0e1ae201db68.png";

var _tic_tac_toe2 = _interopRequireDefault(_tic_tac_toe);

var _who_am_i = '/' + "c7f65df91c12b2bae78e1dda383a59d8.png";

var _who_am_i2 = _interopRequireDefault(_who_am_i);

var _front_proj = '/' + "b1da53e944faf2e98f52ccb3ed87d295.png";

var _front_proj2 = _interopRequireDefault(_front_proj);

var _data_plot = '/' + "518106fa9bd5df094860028026ad0062.png";

var _data_plot2 = _interopRequireDefault(_data_plot);

var _mutuo_valhalla = '/' + "660172f5cadaefd98b06aec0eaabc626.png";

var _mutuo_valhalla2 = _interopRequireDefault(_mutuo_valhalla);

var _icond = '/' + "8c1b64d1d019a41fb8b4b6ad22854eb2.png";

var _icond2 = _interopRequireDefault(_icond);

var _exprpfx = '/' + "3be926340003bdcea722a5505e00bbdc.png";

var _exprpfx2 = _interopRequireDefault(_exprpfx);

var _ship_detect = '/' + "f41f311ceb555589eb7d2bb8c5e90672.jpg";

var _ship_detect2 = _interopRequireDefault(_ship_detect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Images


// Import Style
var _ref = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://drive.google.com/file/d/1Gr0sIoUy7WHez5vw1O7YhusLXqNSoajt/view?usp=sharing'
}, void 0, 'Profile-Job matcher'));

var _ref2 = (0, _jsx3.default)('p', {}, void 0, 'Ship Detection ', (0, _jsx3.default)('a', {
  href: 'https://drive.google.com/file/d/1kpq-1Cow1GGDxBXbHUxgPtMH9D6eoShn/view?usp=sharing'
}, void 0, 'Read'), '+', (0, _jsx3.default)('a', {
  href: 'https://github.com/valeporti/detection_navire'
}, void 0, 'Code'));

var _ref3 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://drive.google.com/file/d/1zii3cds5TGAtWBTh9OWT_U1CMQL7uqsE/view?usp=sharing'
}, void 0, 'Pandemic Simulator'));

var _ref4 = (0, _jsx3.default)('p', {}, void 0, 'Optimization with Genetic Algorithm ', (0, _jsx3.default)('a', {
  href: 'https://drive.google.com/file/d/1wZVd4X-8VA-nZrYYQ8gx5JfuX5ErhRpV/view?usp=sharing'
}, void 0, 'Read'), '+', (0, _jsx3.default)('a', {
  href: 'https://github.com/valeporti/imt/tree/master/imt_or/proj/py'
}, void 0, 'Code'));

var _ref5 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref6 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_status'
});

var _ref7 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIRH'
});

var _ref8 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref9 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref10 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'ResIRHRole'
});

var _ref11 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref12 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref13 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_irent_description'
});

var _ref14 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref15 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_status'
});

var _ref16 = (0, _jsx3.default)('hr', {});

var _ref17 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://github.com/valeporti/imt/tree/home/imt_ll/proj/final',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_comp_status'
})));

var _ref18 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://drive.google.com/file/d/1xB3BDNgIf_vEIXdAhi6_UPcfwnvweu4H/view?usp=sharing',
  target: '_blank'
}, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'click_for_more'
})));

var _ref19 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_comp_title'
});

var _ref20 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref21 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref22 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_role'
});

var _ref23 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref24 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_comp_context'
});

var _ref25 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref26 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_comp_description'
});

var _ref27 = (0, _jsx3.default)('i', {
  className: 'fas fa-ban'
});

var _ref28 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_valhalla_status'
});

var _ref29 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_valhalla_title'
});

var _ref30 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref31 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref32 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_valhalla_role'
});

var _ref33 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref34 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_valhalla_context'
});

var _ref35 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref36 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_valhalla_description'
});

var _ref37 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref38 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_status'
});

var _ref39 = (0, _jsx3.default)('hr', {});

var _ref40 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://codepen.io/valeporti/full/KqvdQB/',
  target: '_blank'
}, void 0, 'Heat Map'));

var _ref41 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://codepen.io/valeporti/full/XgVxJr/',
  target: '_blank'
}, void 0, 'Force Directed Graph'));

var _ref42 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://codepen.io/valeporti/full/EXZREY/',
  target: '_blank'
}, void 0, 'Scatter Plot'));

var _ref43 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_title'
});

var _ref44 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref45 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref46 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_role'
});

var _ref47 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref48 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_context'
});

var _ref49 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref50 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_datavis_description'
});

var _ref51 = (0, _jsx3.default)('i', {
  className: 'fas fa-ban'
});

var _ref52 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_status'
});

var _ref53 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_title'
});

var _ref54 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref55 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref56 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_role'
});

var _ref57 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref58 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_context'
});

var _ref59 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref60 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_description'
});

var _ref61 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref62 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_ttt_status'
});

var _ref63 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_ttt_title'
});

var _ref64 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref65 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref66 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_ttt_role'
});

var _ref67 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref68 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_ttt_context'
});

var _ref69 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref70 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_ttt_description'
});

var _ref71 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref72 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50final_status'
});

var _ref73 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50final_title'
});

var _ref74 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref75 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref76 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50final_role'
});

var _ref77 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref78 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50final_context'
});

var _ref79 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref80 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50final_description'
});

var _ref81 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref82 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_status'
});

var _ref83 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_title'
});

var _ref84 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref85 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref86 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_role'
});

var _ref87 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref88 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_context'
});

var _ref89 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref90 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p8_description'
});

var _ref91 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref92 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p7_status'
});

var _ref93 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p7_title'
});

var _ref94 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref95 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref96 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p7_role'
});

var _ref97 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref98 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p7_context'
});

var _ref99 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref100 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_cs50p7_description'
});

var _ref101 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref102 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccback_status'
});

var _ref103 = (0, _jsx3.default)('hr', {});

var _ref104 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://timestamp-vp.herokuapp.com/',
  target: '_blank'
}, void 0, 'TimeStamp'));

var _ref105 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://whoami-vp.herokuapp.com/',
  target: '_blank'
}, void 0, 'Who Am I'));

var _ref106 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://urlshort-vp.herokuapp.com/',
  target: '_blank'
}, void 0, 'Short URL'));

var _ref107 = (0, _jsx3.default)('p', {}, void 0, (0, _jsx3.default)('a', {
  href: 'https://imagesearch-vp.herokuapp.com/',
  target: '_blank'
}, void 0, 'Image Search'));

var _ref108 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccback_title'
});

var _ref109 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref110 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref111 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccback_role'
});

var _ref112 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref113 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccback_context'
});

var _ref114 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref115 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccback_description'
});

var _ref116 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref117 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccfront_status'
});

var _ref118 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccfront_title'
});

var _ref119 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref120 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref121 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccfront_role'
});

var _ref122 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref123 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccfront_context'
});

var _ref124 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

var _ref125 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_fccfront_description'
});

function Projects(props, context) {
  return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.Projects
  }, void 0, (0, _jsx3.default)(_Project2.default, {
    is_available: true,
    all_is_link: false,
    status: 'project_datavis_status',
    id_title: 'project_ds_multiple_title',
    id_role: 'project_ds_multiple_role',
    id_description: 'project_ds_multiple_description',
    id_context: 'project_ds_multiple_context',
    links: [_ref, _ref2, _ref3, _ref4],
    img_photo: (0, _jsx3.default)('img', {
      className: _Projects2.default.project_photo,
      style: { width: '11em' },
      src: _ship_detect2.default
    })
  }), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://www.irent.haus',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref5), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref6)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref7, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    style: { width: '11em' },
    src: _icond2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref8, ' Mongo, React/Redux, ExpressJS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref9, ' ', _ref10), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref11, ' PropTech'), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref12, ' ', _ref13))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref14), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref15, _ref16, _ref17, _ref18)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref19, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    style: { width: '15em' },
    src: _exprpfx2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref20, ' OCAML'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref21, ' ', _ref22), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref23, ' ', _ref24, ','), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref25, ' ', _ref26))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://mutuofinanciera.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_neg
  }, void 0, _ref27), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref28)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref29, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _mutuo_valhalla2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref30, ' PHP, SQL, NoSQL, JS, Mongo, LARAVEL'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref31, ' ', _ref32), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref33, ' ', _ref34), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref35, ' ', _ref36))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref37), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref38, _ref39, _ref40, _ref41, _ref42)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref43, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _data_plot2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref44, ' D3.JS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref45, ' ', _ref46), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref47, ' ', _ref48), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref49, ' ', _ref50))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://youtu.be/wxJ1JsdVFV0',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_neg
  }, void 0, _ref51), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref52)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref53, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _pm_report2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref54, ' VBA, Excel'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref55, ' ', _ref56), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref57, ' ', _ref58), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref59, ' ', _ref60))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://tictactoe-vp.herokuapp.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref61), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref62)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref63, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _tic_tac_toe2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref64, ' HTML, CSS, JS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref65, ' ', _ref66), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref67, ' ', _ref68), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref69, ' ', _ref70))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://cs50final-vp.herokuapp.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref71), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref72)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', (0, _jsx3.default)('a', {
    className: _Projects2.default.title_link,
    href: 'https://www.youtube.com/watch?v=h7MBIub-5ao',
    target: '_blank'
  }, void 0, ' ', _ref73, ' '), ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _cs50_final2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref74, ' PHP, SQL, HTML, CSS, JS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref75, ' ', _ref76), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref77, ' ', _ref78), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref79, ' ', _ref80))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://cs50pset8-vp.herokuapp.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref81), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref82)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', (0, _jsx3.default)('a', {
    className: _Projects2.default.title_link,
    href: 'https://www.youtube.com/watch?v=p1TmkL_FyP0',
    target: '_blank'
  }, void 0, ' ', _ref83, ' '), '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _p4.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref84, ' PHP, SQL, HTML, CSS, JS, Google API'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref85, ' ', _ref86), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref87, ' ', _ref88), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref89, ' ', _ref90))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://cs50pset7-vp.herokuapp.com/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref91), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref92)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', (0, _jsx3.default)('a', {
    className: _Projects2.default.title_link,
    href: 'https://www.youtube.com/watch?v=cLSDylyk2MI',
    target: '_blank'
  }, void 0, ' ', _ref93, ' '), '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _p2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref94, ' PHP, SQL, HTML, CSS, JS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref95, ' ', _ref96), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref97, ' ', _ref98), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref99, ' ', _ref100))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref101), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref102, _ref103, _ref104, _ref105, _ref106, _ref107)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref108, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _who_am_i2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref109, ' NodeJS, ExpressJS'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref110, ' ', _ref111), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref112, ' ', _ref113), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref114, ' ', _ref115))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, (0, _jsx3.default)('a', {
    href: 'https://codepen.io/valeporti/',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, _ref116), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref117)))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', _ref118, ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, (0, _jsx3.default)('img', {
    className: _Projects2.default.project_photo,
    src: _front_proj2.default
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref119, ' HTML, CSS, JS, React, Redux'), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref120, ' ', _ref121), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref122, ' ', _ref123), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref124, ' ', _ref125)))));
}

/*
<div className="w-dyn-item w-col w-col-4">
  <a data-w-id="deef80b3-5eb9-c030-7f16-eed40bc18ab4" href="/projects/cooking-labs" className="thumb-proyectos w-inline-block" style="will-change: transform; transform: translateX(2.5005px) translateY(2.49965px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);">
    <img width="181" src="https://uploads-ssl.webflow.com/5a7495484f34370001335c75/5ae7422fd99a3d5c33d5d990_Thumb.jpg" className="thumb-proyectos-imagen" />
    <div className="thumbs-divcontent">
      <h3 className="heading-thumbs margen10">Cooking Labs</h3>
      <div className="text-block">Rural economic development through food innovation.</div>
    </div>
  </a>
</div>
*/

exports.default = Projects;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

exports.default = Project;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(2);

var _Projects = {
  "Projects": "nZogPQomuVG1AgmrF0Iy5",
  "project_display": "_2XSf0UE5rLVj4ebxM-BbQf",
  "project_alert": "_3-M8Kh_uvWEwfV8eHrwT_f",
  "project_status": "_2rgsURR8BYLHAvBm6AgqTG",
  "project_status_icon_neg": "_297aWkAtRZj5Ibou-npQ1d",
  "project_status_icon_pos": "_2Amu5VP798uDWETzoEmzsk",
  "project_status_text": "_25dcPq-XO-UoqulhUnCtEP",
  "project_content": "_2MD4BlNr5_D4Apyyu_GXJx",
  "project_title": "_34vMMLlzxQ3mCncv0othvB",
  "title_link": "b8_-P5B15i2eovr6Mvw9q",
  "project_photo": "_3VVqxF07Ow_i3N3XZERQ7H",
  "description": "c3GXDR7OxlmLYyfWmJYQo"
};

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 
 * @param {{ is_available, all_is_link, status, links:Array<{href, text}>, id_title, img_photo, languages, id_role, id_context, id_description }} props 
 * @param {*} context 
 */
var _ref = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref2 = (0, _jsx3.default)('i', {
  className: 'fas fa-ban'
});

var _ref3 = (0, _jsx3.default)(_reactIntl.FormattedMessage, {
  id: 'project_pm_status'
});

var _ref4 = (0, _jsx3.default)('i', {
  className: 'fas fa-check-circle'
});

var _ref5 = (0, _jsx3.default)('i', {
  className: 'fas fa-ban'
});

var _ref6 = (0, _jsx3.default)('hr', {});

var _ref7 = (0, _jsx3.default)('i', {
  className: 'fas fa-flask'
});

var _ref8 = (0, _jsx3.default)('i', {
  className: 'far fa-address-card'
});

var _ref9 = (0, _jsx3.default)('i', {
  className: 'fas fa-briefcase'
});

var _ref10 = (0, _jsx3.default)('i', {
  className: 'fas fa-comment'
});

function Project(props, context) {
  var is_available = props.is_available,
      all_is_link = props.all_is_link,
      status = props.status,
      links = props.links,
      id_title = props.id_title,
      img_photo = props.img_photo,
      languages = props.languages,
      id_role = props.id_role,
      id_context = props.id_context,
      id_description = props.id_description;


  return (0, _jsx3.default)('div', {
    className: _Projects2.default.project_display
  }, void 0, all_is_link ? (0, _jsx3.default)('a', {
    href: 'https://youtu.be/wxJ1JsdVFV0',
    target: '_blank'
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_neg
  }, void 0, is_available ? _ref : _ref2), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, _ref3)))) : (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_alert
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_icon_pos
  }, void 0, is_available ? _ref4 : _ref5), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_status_text
  }, void 0, (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: status
  }), _ref6, links.map(function (e) {
    return e;
  }))))), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_content
  }, void 0, (0, _jsx3.default)('div', {
    className: _Projects2.default.project_title
  }, void 0, '{', ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: id_title
  }), ' ', '}'), (0, _jsx3.default)('div', {
    className: _Projects2.default.project_photo
  }, void 0, img_photo), (0, _jsx3.default)('div', {
    className: _Projects2.default.technologies
  }, void 0, _ref7, languages), (0, _jsx3.default)('div', {
    className: _Projects2.default.worked_as
  }, void 0, _ref8, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: id_role
  })), (0, _jsx3.default)('div', {
    className: _Projects2.default.context
  }, void 0, _ref9, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: id_context
  }), ','), (0, _jsx3.default)('div', {
    className: _Projects2.default.description
  }, void 0, _ref10, ' ', (0, _jsx3.default)(_reactIntl.FormattedMessage, {
    id: id_description
  }))));
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(1);

var _jsx3 = _interopRequireDefault(_jsx2);

var _slicedToArray2 = __webpack_require__(83);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = PDFS;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { Document, Page } from 'react-pdf/dist/entry.webpack';

//import ship from '../../../../images/pdfs/ship_detection.pdf'

function PDFS(props) {
  var _useState = useState(1),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      pageNumber = _useState2[0],
      setPageNumber = _useState2[1];

  /* onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  } */

  function onItemClick(_ref) {
    var itemPageNumber = _ref.pageNumber;

    setPageNumber(itemPageNumber);
  }

  //const { pageNumber, numPages } = this.state;
  console.log(props);

  return (0, _jsx3.default)(Document, {
    file: ship
  }, void 0, (0, _jsx3.default)(Outline, {
    onItemClick: onItemClick
  }), (0, _jsx3.default)(Page, {
    pageNumber: pageNumber || 1
  }));
}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(85);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(14);

var _promise2 = _interopRequireDefault(_promise);

exports.sequence = sequence;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return _promise2.default.resolve(results);
  };

  return runner();
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(7);

var _post = __webpack_require__(87);

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

exports.default = router;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.getPost = getPost;
exports.deletePost = deletePost;

var _post = __webpack_require__(29);

var _post2 = _interopRequireDefault(_post);

var _cuid = __webpack_require__(88);

var _cuid2 = _interopRequireDefault(_cuid);

var _sanitizeHtml = __webpack_require__(89);

var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
function getPosts(req, res) {
  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */

//import slug from 'limax';
function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  var newPost = new _post2.default(req.body.post);

  // Let's sanitize inputs
  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);

  //newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = (0, _cuid2.default)();
  newPost.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
function getPost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
function deletePost(req, res) {
  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(function () {
      res.status(200).end();
    });
  });
}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(7);

var _Profile = __webpack_require__(91);

var ProfileController = _interopRequireWildcard(_Profile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

router.route('/sendMail').get(ProfileController.sendMail);

exports.default = router;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSomething = getSomething;
exports.sendMail = sendMail;

var _Profile = __webpack_require__(92);

var _Profile2 = _interopRequireDefault(_Profile);

var _nodemailer = __webpack_require__(93);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSomething(req, res) {
    return res.status(200).end();
}

function sendMail(req, res) {
    //console.log(req);
    var name = req.query.name;
    var mess = req.query.mess;
    var mail = req.query.mail;
    var indu = req.query.indu;
    var purp = req.query.purp;
    var courtesy_mes = req.query.courtesy_mes;

    //nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport

    var transporter = _nodemailer2.default.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SEC, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: '"' + process.env.MAIL_NAME + '" <' + process.env.MAIL_USERNAME + '>', // sender address
        to: [process.env.MAIL_MINE, mail], // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Name: ' + name + ' && Purpose: ' + purp + ' && Industry: ' + indu + ' && Message ' + mess, // plain text body
        html: '<p>' + courtesy_mes + '</p>' + '<p><b>Name: ' + name + '</b></p> <p><b>Mail: ' + mail + '</b></p> <p><b>Purpose: ' + purp + '</b></p> <p><b>Industry: ' + indu + '</b></p> <p><b>Message ' + mess + '</b>' // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Mail not sent!!' });
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', _nodemailer2.default.getTestMessageUrl(info));

        return res.status(200).json({ success: 'Mail Sent!!' });
    });
    //});

    //console.log(req.query);
    //return res.send('lol');
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(8);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ProfileSchema = new Schema({});

exports.default = _mongoose2.default.model('Profile', ProfileSchema);

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  _post2.default.count().exec(function (err, count) {
    if (count > 0) {
      return;
    }

    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    _post2.default.create([post1, post2], function (error) {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
};

var _post = __webpack_require__(29);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })
/******/ ]);
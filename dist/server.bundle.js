/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(1);
	
	var _intl = __webpack_require__(61);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(62);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(63);
	
	var _en = __webpack_require__(71);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(34);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(64);
	
	var _fr = __webpack_require__(72);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(35);
	
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
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(73);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(75);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(74);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(10);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _redux = __webpack_require__(6);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(1);
	
	var _axios = __webpack_require__(58);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _HardSkills = __webpack_require__(47);
	
	var _HardSkills2 = _interopRequireDefault(_HardSkills);
	
	var _SoftSkills = __webpack_require__(50);
	
	var _SoftSkills2 = _interopRequireDefault(_SoftSkills);
	
	var _Resume = __webpack_require__(48);
	
	var _Resume2 = _interopRequireDefault(_Resume);
	
	var _Contact = __webpack_require__(46);
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	var _About = __webpack_require__(45);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _Profile = {
	  "Profile": "g8aguRPlFsvVKJMLkJYe1"
	};
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var _code = '/' + "6eb5583ff3d41a36fc457d37398cf277.jpg";
	
	var _code2 = _interopRequireDefault(_code);
	
	var _reactVisibilitySensor = __webpack_require__(17);
	
	var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);
	
	var _ProfileActions = __webpack_require__(15);
	
	var _http = __webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//Import Components
	
	
	// Import Style
	
	
	// Import Images
	
	
	//Other funcitonalities
	
	
	//Import Actions 
	
	
	var _ref = _jsx(_About2.default, {});
	
	var _ref2 = _jsx(_SoftSkills2.default, {});
	
	var _ref3 = _jsx(_Resume2.default, {});
	
	var Profile = function (_Component) {
	  _inherits(Profile, _Component);
	
	  function Profile(props) {
	    _classCallCheck(this, Profile);
	
	    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
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
	        purp: _this.props.prof.contactPurp
	      };
	      var contactMessInput = _this.props.contactMessInput;
	      var contactEmailInput = _this.props.contactEmailInput;
	      var contactNameInput = _this.props.contactNameInput;
	      var contactInduInput = _this.props.contactInduInput;
	      var contactPurpInput = _this.props.contactPurpInput;
	      var messageSent = _this.props.intl.messages.SentMessage;
	      var messageNotSent = _this.props.intl.messages.MessageSentFail;
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
	          }, 3000);
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
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _Profile2.default.Profile
	      }, void 0, _jsx('a', {
	        name: 'About'
	      }, void 0, _jsx('div', {
	        className: _Profile2.default.fastAbout
	      }, void 0, _ref)), _jsx('a', {
	        name: 'Skills'
	      }, void 0, _jsx('div', {
	        className: _Profile2.default.skillsSec
	      }, void 0, _ref2, _jsx(_reactVisibilitySensor2.default, {
	        onChange: this.toggleActiveHS,
	        partialVisibility: true,
	        minTopValue: 100
	      }, void 0, _jsx(_HardSkills2.default, {
	        toggleActiveHS: this.toggleActiveHS,
	        isVisible: this.props.prof.activeHS
	      })))), _jsx('a', {
	        name: 'Resume'
	      }, void 0, _jsx('div', {
	        className: _Profile2.default.ResumeSec
	      }, void 0, _ref3)), _jsx('a', {
	        name: 'Contact'
	      }, void 0, _jsx('div', {
	        className: _Profile2.default.ContactSec
	      }, void 0, _jsx(_Contact2.default, {
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

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
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

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-visibility-sensor");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(2);
	
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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _App = __webpack_require__(36);
	
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
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  //require('./modules/Post/pages/PostListPage/PostListPage');
	  //require('./modules/Post/pages/PostDetailPage/PostDetailPage');
	  __webpack_require__(14);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    Promise.resolve().catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	      cb(null, __webpack_require__(14).default);
	    }).bind(null, __webpack_require__));
	  }
	}));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(6);
	
	var _reduxThunk = __webpack_require__(76);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(12);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(51);
	
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

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
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
	
	var _post = __webpack_require__(16);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _Profile = __webpack_require__(53);
	
	var ProfileController = _interopRequireWildcard(_Profile);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	router.route('/sendMail').get(ProfileController.sendMail);
	
	exports.default = router;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _post = __webpack_require__(54);
	
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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(57);
	
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

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(9);
	var cssnext = __webpack_require__(68);
	var postcssFocus = __webpack_require__(69);
	var postcssReporter = __webpack_require__(70);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: '/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("dotenv");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("serve-favicon");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
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
	    menuAbout: 'Main',
	    menuSkills: 'Skills',
	    menuResume: 'Resume',
	    menuContact: 'Contact',
	    Me1: 'I\'m a Universidad Nacional Autónoma de México (UNAM) Graduate, right now looking for a master.',
	    Me2: 'I\'ve worked in Project Management, Business Analysis and Software Developement. Being Software Development my favorite and mainly working in back-end Developement.',
	    Me3: 'Always interested in Computer Science deepening knowledge and challenges.',
	    KeyW: 'Key Words',
	    //Soft Skills
	    SS1: 'Analytic',
	    SS2: 'Commitment',
	    SS3: 'Problem Solver',
	    SS4: 'Learner',
	    SS5: 'Team-Work',
	    SS6: 'Add Value',
	    ss11: 'Understand the requirements',
	    ss12: 'Develop according to needs',
	    ss21: 'Deliver Ended Products',
	    ss31: 'Find the root',
	    ss32: 'Develop a logical step-by-step',
	    ss33: 'Deliver a system',
	    ss41: 'Self-taught',
	    ss42: 'Enthousiastic',
	    ss43: 'Versatile',
	    ss51: 'Know How',
	    ss52: 'Social',
	    ss53: 'Ask & Answer',
	    ss61: 'Proposals',
	    ss62: 'Business / ethical directed reasoning',
	    //hardSkills
	    ttLang: 'Languages',
	    ttProgLang: 'Programming Languages',
	    ttStacks: 'Stacks',
	    ttFrameworks: 'Frameworks',
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
	    ResMutuoRole: 'Software Developer',
	    ResMutuoDesc: 'Internal software development (MVC) and API, RPA for different projects (get/analyze and deduce from data) using Laravel framework mainly and VBA.',
	    ResMutuoAchi: 'Projects Follow Up Automation, Scalability, Financial Projects',
	    ResDiploSAIntroDB: 'Saylor Academy - CS403: Introduction to Modern Databases',
	    ResDiploSAAlgorithm: 'Saylor Academy - CS303: Algorithms',
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
	    ToDate: 'To Date'
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
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
	    menuAbout: 'Main',
	    menuSkills: 'Compétences',
	    menuResume: 'Resumé',
	    menuContact: 'Contacter',
	    Me1: 'Je suis gradué de l\'Universidad Nacional Autónoma de México (UNAM), et en ce moment, je cherche de faire un master.',
	    Me2: 'J\'ai de l\'éxpérience en gestion de projets, analyse du commerce et développement de logiciel. Étant le développement de logiciel mon préféré et travaillant principalement en développement back-end',
	    Me3: 'Toujours intéressé en approfondir mes connaissances sur informatique et défis.',
	    KeyW: 'Mots Clés',
	    //Soft Skills
	    SS1: 'Analytique',
	    SS2: 'Engagé',
	    SS3: 'Résolveur de problèmes',
	    SS4: 'Apprenant',
	    SS5: 'Travail en équipe',
	    SS6: 'Ajouter de la valeur',
	    ss11: 'Comprendre les requis',
	    ss12: 'Développer en fonction des besoins',
	    ss21: 'Délivrer des produits finis',
	    ss31: 'Trouver la cause',
	    ss32: 'Développer un processus logique',
	    ss33: 'Délivrer un système',
	    ss41: 'Autodidacte',
	    ss42: 'Enthousiaste',
	    ss43: 'Polyvalent',
	    ss51: 'Savoir faire',
	    ss52: 'Social',
	    ss53: 'Demander & Répondre',
	    ss61: 'Propositions',
	    ss62: 'Raisonement étique et vers le commerce',
	    //hardSkills
	    ttLang: 'Langues',
	    ttProgLang: 'Langues de programmation',
	    ttStacks: 'Stacks',
	    ttFrameworks: 'Frameworks',
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
	    ResMutuoRole: 'Software Developer',
	    ResMutuoDesc: 'Développement du software interne, BPA & RPA pour des différents projets (obtenir/analyser et déduire des données). Méthode : Agile.',
	    ResMutuoAchi: 'Automatisation du suivi des projets, évolutivité, projets financiers',
	    ResDiploSAIntroDB: 'Saylor Academy - CS403: Introduction to Modern Databases',
	    ResDiploSAAlgorithm: 'Saylor Academy - CS303: Algorithms',
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
	    ToDate: 'Á aujourd\'hui'
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _App = {
	  "container": "_15uqt7TaQcflNYjiD0-re1"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(8);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(12);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(39);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(38);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Menu = __webpack_require__(40);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _AppActions = __webpack_require__(11);
	
	var _IntlActions = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var _ref = _jsx(_DevTools2.default, {});
	
	var _ref2 = _jsx(_Footer2.default, {});
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.toggleAddPost();
	    };
	
	    _this.toggleActiveMenu = function () {
	      _this.props.toggleActiveMenu();
	    };
	
	    console.log('in app');
	    console.log(props);
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Valentin Portillo',
	        titleTemplate: '%s - Portfolio App',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        switchLanguage: function switchLanguage(lang) {
	          return _this2.props.switchLanguage(lang);
	        },
	        intl: this.props.intl,
	        toggleAddPost: this.toggleAddPostSection
	      }), _jsx(_Menu2.default, {
	        toggleActiveMenu: this.toggleActiveMenu,
	        activeMenu: this.props.app.activeMenu
	      }), _jsx('div', {
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(11);
	
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Images
	
	
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Footer = {
	  "footer": "_1oiRVDtQ6fOWkhBVWcRyE_",
	  "link": "_1M8Aa_r3WWMyEGTUUUQ2ov"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";
	
	var _headerBk2 = _interopRequireDefault(_headerBk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('p', {}, void 0, '\xA9 2018 \xB7 V \xB7 Valentin Portillo');
	
	var _ref2 = _jsx('i', {
	  className: 'fab fa-linkedin-in'
	});
	
	var _ref3 = _jsx('i', {
	  className: 'fab fa-codepen'
	});
	
	var _ref4 = _jsx('i', {
	  className: 'fab fa-github'
	});
	
	var _ref5 = _jsx('i', {
	  className: 'fab fa-free-code-camp'
	});
	
	function Footer() {
	  //<div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
	  return _jsx('div', {
	    className: _Footer2.default.footer
	  }, void 0, _ref, _jsx('p', {
	    className: _Footer2.default.links
	  }, void 0, _jsx('a', {
	    className: _Footer2.default.link,
	    href: 'https://www.linkedin.com/in/valeporti/',
	    target: '_Blank'
	  }, void 0, _ref2), _jsx('a', {
	    className: _Footer2.default.link,
	    href: 'https://codepen.io/valeporti/',
	    target: '_Blank'
	  }, void 0, _ref3), _jsx('a', {
	    className: _Footer2.default.link,
	    href: 'https://github.com/valeporti/',
	    target: '_Blank'
	  }, void 0, _ref4), _jsx('a', {
	    className: _Footer2.default.link,
	    href: 'https://www.freecodecamp.org/valeporti/',
	    target: '_Blank'
	  }, void 0, _ref5)));
	}
	
	exports.default = Footer;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	//image
	
	
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Header = {
	  "logoContainer": "_2i_fnEFvmOkgetIjk5CmDs",
	  "logo": "_34cZaLcfrnwFllCl-QejH-",
	  "header": "_3EGjKVGKCGTGQn_m_YASdF",
	  "content": "_391cv5n_RFU0K9SBOjXDEt",
	  "site-title": "_11V45Tl3_Hdy_ARI53CW9g",
	  "add-post-button": "XrNjmGRHH_vMEgGeC3S75",
	  "language-switcher": "X6vAu1vEuRDWiN2kDvA_z",
	  "selected": "_3ecuVjN6tTUWkR7u3Co3s"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _logo = '/' + "60639a815b4b0850c03fe0c8fb02e19a.jpg";
	
	var _logo2 = _interopRequireDefault(_logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'switchLanguage'
	}));
	
	function Header(props, context) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _jsx('li', {
	      onClick: function onClick() {
	        return props.switchLanguage(lang);
	      },
	      className: lang === props.intl.locale ? _Header2.default.selected : ''
	    }, lang, lang);
	  });
	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default['language-switcher']
	  }, void 0, _jsx('div', {
	    className: _Header2.default.logoContainer
	  }, void 0, _jsx('img', {
	    src: _logo2.default,
	    className: _Header2.default.logo
	  })), _jsx('ul', {}, void 0, _ref, languageNodes)));
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = Header;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Menu = {
	  "menu": "xofNtDw5hAIknDfdV8cn",
	  "menuactive": "_2tEManmJIhxQfp-fwpF3Go",
	  "menuContent": "_1zAIpX8reszmOFtxEH6Uzg"
	};
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx('i', {});
	
	var _ref2 = _jsx('i', {});
	
	var _ref3 = _jsx('i', {});
	
	function Menu(props, context) {
	  //console.log('onmenu');
	  //console.log(props);
	  var activeMenu = props.activeMenu;
	  var activeMenuClass = _Menu2.default.menu;
	  //console.log(styles);
	  activeMenu ? activeMenuClass = _Menu2.default.menu : activeMenuClass = '';
	
	  return _jsx('div', {
	    className: !activeMenu && _Menu2.default.menu || _Menu2.default.menuactive
	  }, void 0, _jsx('span', {
	    onClick: props.toggleActiveMenu
	  }, void 0, _ref, _ref2, _ref3), _jsx('div', {
	    className: _Menu2.default.menuContent
	  }, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: '#About'
	  }, void 0, _jsx(_reactIntl.FormattedMessage, {
	    id: 'menuAbout'
	  }, void 0, function (txt) {
	    return _jsx('div', {}, void 0, txt);
	  }))), _jsx('li', {}, void 0, _jsx('a', {
	    href: '#Skills'
	  }, void 0, _jsx(_reactIntl.FormattedMessage, {
	    id: 'menuSkills'
	  }, void 0, function (txt) {
	    return _jsx('div', {}, void 0, txt);
	  }))), _jsx('li', {}, void 0, _jsx('a', {
	    href: '#Resume'
	  }, void 0, _jsx(_reactIntl.FormattedMessage, {
	    id: 'menuResume'
	  }, void 0, function (txt) {
	    return _jsx('div', {}, void 0, txt);
	  }))), _jsx('li', {}, void 0, _jsx('a', {
	    href: '#Contact'
	  }, void 0, _jsx(_reactIntl.FormattedMessage, {
	    id: 'menuContact'
	  }, void 0, function (txt) {
	    return _jsx('div', {}, void 0, txt);
	  }))))));
	}
	
	exports.default = Menu;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(10);
	
	var _IntlActions = __webpack_require__(13);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
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
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
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

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(42);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
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

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ProfileActions = __webpack_require__(15);
	
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
	      return Object.assign({}, state, state.activeHS = action.bool);
	    case _ProfileActions.CONTACT_NAME:
	      return Object.assign({}, state, state.contactName = action.text);
	    case _ProfileActions.CONTACT_EMAIL:
	      return Object.assign({}, state, state.contactMail = action.text);
	    case _ProfileActions.CONTACT_MESSAGE:
	      return Object.assign({}, state, state.contactMess = action.text);
	    case _ProfileActions.CONTACT_INDUSTRY:
	      return Object.assign({}, state, state.contactIndu = action.text);
	    case _ProfileActions.CONTACT_PURPOSE:
	      return Object.assign({}, state, state.contactPurp = action.text);
	    default:
	      return state;
	  }
	};
	
	exports.default = ProfileReducer;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _About = {
	  "title": "_1uhaiz6yzDy745eZSQLcdK",
	  "about": "_3bMuzY67GqXHi5lkXbR9P8",
	  "aboutCont": "_1mwUAj2BeLqRxt3HKoj3wF",
	  "icon": "_2JfvMC0Inqc0zBq2oPeFbB",
	  "presentation": "_2pYINd4tQeZtMHQFoa25mQ",
	  "intitle": "_1fDy25OOTvfJRf0profTm6",
	  "name": "_3pDFDIwZmXL6FQABXbjYBZ",
	  "smallDescription": "_2NlirkAfNcRJDCMwMYfvqx"
	};
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'menuAbout'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fas fa-terminal'
	});
	
	var _ref3 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'Me1'
	}));
	
	var _ref4 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'Me2'
	}));
	
	var _ref5 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'Me3'
	}));
	
	var _ref6 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'KeyW'
	});
	
	var _ref7 = _jsx('p', {}, void 0, 'TDD, SCRUM, RPA');
	
	function About(props, context) {
	  return _jsx('div', {
	    className: _About2.default.about
	  }, void 0, _jsx('div', {
	    className: _About2.default.title
	  }, void 0, '{', ' ', _ref, ' ', '}'), _jsx('div', {
	    className: _About2.default.aboutCont
	  }, void 0, _jsx('div', {
	    className: _About2.default.icon
	  }, void 0, _ref2), _jsx('div', {
	    className: _About2.default.presentation
	  }, void 0, _jsx('p', {
	    className: _About2.default.name
	  }, void 0, 'Valentin Portillo Galvan'), _jsx('p', {
	    className: _About2.default.intitle
	  }, void 0, 'Software Developer'), _jsx('div', {
	    className: _About2.default.smallDescription
	  }, void 0, _ref3, _ref4, _ref5), _jsx('p', {
	    className: _About2.default.intitle
	  }, void 0, _ref6), _jsx('div', {
	    className: _About2.default.smallDescription
	  }, void 0, _ref7))));
	}
	
	exports.default = About;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Contact = {
	  "Contact": "PoK3HVlDnId_B7p9ECX6b",
	  "title": "nTzZMG3ferwBjvQQkehP7",
	  "formMain": "_18oLveu6D4f-1xLucrPJp6",
	  "formDiv": "oms3vj-CVOviGNUOL538K",
	  "feedbackInput": "_1BhSP8eGAkQKrXvjLNfXM",
	  "inputIcon": "_15EHKGSQjo0jIrueX-BchH",
	  "button": "_2ykcpoOASe3iceX0otZnD6"
	};
	
	var _Contact2 = _interopRequireDefault(_Contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'menuContact'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fas fa-user'
	});
	
	var _ref3 = _jsx('i', {
	  className: 'fas fa-at'
	});
	
	var _ref4 = _jsx('i', {
	  className: 'fas fa-industry'
	});
	
	var _ref5 = _jsx('i', {
	  className: 'fas fa-thumbtack'
	});
	
	var _ref6 = _jsx('i', {
	  className: 'far fa-hand-point-right'
	});
	
	var _ref7 = _jsx('div', {
	  className: 'ease'
	});
	
	function Contact(props, context) {
	  //console.log(props);
	  return _jsx('div', {
	    className: _Contact2.default.Contact
	  }, void 0, _jsx('div', {
	    className: _Contact2.default.title
	  }, void 0, '{', ' ', _ref, ' ', '}'), _jsx('div', {
	    className: _Contact2.default.formMain
	  }, void 0, _jsx('div', {
	    className: _Contact2.default.formDiv
	  }, void 0, _jsx('form', {
	    className: _Contact2.default.form,
	    action: '/profile/sendMail',
	    onSubmit: props.handleSentMail
	  }, void 0, _jsx('p', {
	    className: _Contact2.default.inputCont
	  }, void 0, _jsx('span', {
	    className: _Contact2.default.inputIcon
	  }, void 0, _ref2), _jsx(_reactIntl.FormattedMessage, {
	    id: 'Name'
	  }, void 0, function (txt) {
	    return _jsx('input', {
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
	  })), _jsx('p', {
	    className: _Contact2.default.inputCont
	  }, void 0, _jsx('span', {
	    className: _Contact2.default.inputIcon
	  }, void 0, _ref3), _jsx(_reactIntl.FormattedMessage, {
	    id: 'Email'
	  }, void 0, function (txt) {
	    return _jsx('input', {
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
	  })), _jsx('p', {
	    className: _Contact2.default.inputCont
	  }, void 0, _jsx('span', {
	    className: _Contact2.default.inputIcon
	  }, void 0, _ref4), _jsx(_reactIntl.FormattedMessage, {
	    id: 'Industry'
	  }, void 0, function (txt) {
	    return _jsx('input', {
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
	  })), _jsx('p', {
	    className: _Contact2.default.inputCont
	  }, void 0, _jsx('span', {
	    className: _Contact2.default.inputIcon
	  }, void 0, _ref5), _jsx(_reactIntl.FormattedMessage, {
	    id: 'Purpose'
	  }, void 0, function (txt) {
	    return _jsx('input', {
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
	  })), _jsx('p', {
	    className: _Contact2.default.inputCont
	  }, void 0, _jsx('span', {
	    className: _Contact2.default.inputIcon
	  }, void 0, _ref6), _jsx(_reactIntl.FormattedMessage, {
	    id: 'WriteToMe'
	  }, void 0, function (txt) {
	    return _jsx('textarea', {
	      name: 'text',
	      className: _Contact2.default.feedbackInput,
	      id: 'comment',
	      placeholder: txt,
	      value: props.contactMess,
	      onChange: function onChange(event) {
	        return props.contactMessInput(event.target.value);
	      }
	    });
	  })), _jsx('div', {
	    className: _Contact2.default.submit
	  }, void 0, _jsx(_reactIntl.FormattedMessage, {
	    id: 'Send'
	  }, void 0, function (txt) {
	    return _jsx('input', {
	      type: 'submit',
	      value: txt,
	      className: _Contact2.default.button
	    });
	  }), _ref7)))));
	}
	
	exports.default = Contact;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	//Import Components
	
	
	//Other funcitonalities
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _HardSkills = {
	  "hardSkills": "_3jK1CTRwtFVprKe0EfZPrU",
	  "hardLanguages": "_2dg_InDz61q4_igQRSLp2h",
	  "hardProgramming": "_1WHAcVYmsB_EDETgy7UyAb",
	  "hardStacks": "_3ZtM2Wr_khvj77almdcLaB",
	  "hardOther": "owOpKmuGIkepcRBJ_NQck",
	  "hardFrame": "_28CVvn_FmCY6aD-JKBuRWR",
	  "hardTitle": "_3srugcNiyIELXf97R6IDbt"
	};
	
	var _HardSkills2 = _interopRequireDefault(_HardSkills);
	
	var _SkillBar = __webpack_require__(49);
	
	var _SkillBar2 = _interopRequireDefault(_SkillBar);
	
	var _reactVisibilitySensor = __webpack_require__(17);
	
	var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ttLang'
	});
	
	var _ref2 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ttProgLang'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ttStacks'
	});
	
	var _ref4 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ttFrameworks'
	});
	
	var _ref5 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ttOther'
	});
	
	function HardSkills(props, context) {
	  var isVisible = props.isVisible;
	  var hard_program_arr = [{ name: 'PHP', percentage: 90 }, { name: 'C', percentage: 60 }, { name: 'JS', percentage: 90 }, { name: 'VBA', percentage: 90 }, { name: 'Python', percentage: 60 }];
	  var hard_langs_arr = [{ name: 'Français', percentage: 90 }, { name: 'English', percentage: 90 }, { name: 'Español', percentage: 90 }, { name: 'Italiano', percentage: 60 }];
	  var hard_stacks_arr = [{ name: 'LARAVEL', percentage: 80 }, { name: 'MERN', percentage: 60 }];
	  var hard_frame_arr = [{ name: 'Node.js', percentage: 80 }, { name: 'React', percentage: 90 }, { name: 'Redux', percentage: 80 }, { name: 'Express.js', percentage: 80 }, { name: 'D3.js', percentage: 80 }, { name: 'Mongoose', percentage: 60 }];
	  var hard_others_arr = [{ name: 'HTML', percentage: 90 }, { name: 'CSS', percentage: 70 }, { name: 'SQL', percentage: 80 }, { name: 'NoSQL', percentage: 70 }, { name: 'Git', percentage: 80 }, { name: 'NPM', percentage: 70 }];
	  var hard_programs = void 0;
	  var hard_langs = void 0;
	  var hard_other = void 0;
	  var hard_frame = void 0;
	  var hard_stack = void 0;
	  if (isVisible) {
	    hard_programs = hard_program_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: skill.percentage
	      }, index);
	    });
	    hard_langs = hard_langs_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: skill.percentage
	      }, index);
	    });
	    hard_other = hard_others_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: skill.percentage
	      }, index);
	    });
	    hard_frame = hard_frame_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: skill.percentage
	      }, index);
	    });
	    hard_stack = hard_stacks_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: skill.percentage
	      }, index);
	    });
	  } else {
	    hard_programs = hard_program_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: 0
	      }, index);
	    });
	    hard_langs = hard_langs_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: 0
	      }, index);
	    });
	    hard_other = hard_others_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: 0
	      }, index);
	    });
	    hard_frame = hard_frame_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: 0
	      }, index);
	    });
	    hard_stack = hard_stacks_arr.map(function (skill, index) {
	      return _jsx(_SkillBar2.default, {
	        name: skill.name,
	        percentage: 0
	      }, index);
	    });
	  }
	
	  return _jsx('div', {
	    className: _HardSkills2.default.hardSkills
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardLanguages
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardTitle
	  }, void 0, _ref), hard_langs), _jsx('div', {
	    className: _HardSkills2.default.hardProgramming
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardTitle
	  }, void 0, _ref2), hard_programs), _jsx('div', {
	    className: _HardSkills2.default.hardStacks
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardTitle
	  }, void 0, _ref3), hard_stack), _jsx('div', {
	    className: _HardSkills2.default.hardFrame
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardTitle
	  }, void 0, _ref4), hard_frame), _jsx('div', {
	    className: _HardSkills2.default.hardOther
	  }, void 0, _jsx('div', {
	    className: _HardSkills2.default.hardTitle
	  }, void 0, _ref5), hard_other));
	}
	
	exports.default = HardSkills;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	// Import Images
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Resume = {
	  "Resume": "_1Lx-TgykcEBiRsWS2zalRs",
	  "logo": "_3B7R-o5QtaKACnevtwDBYc",
	  "item": "_2DUT_ly0PFPONt7rvxj40d",
	  "title": "_7gwf1659Hg8FbHsp-ge67",
	  "header": "tfLR168bppB-LUA8kmcCe",
	  "footer": "_3vthwxOly1Nnh43bvWfxxn",
	  "certificate": "_3awZgpF_fILIbPdeI5tywN",
	  "spacing": "t6So6-imhrrk7-owPVWAp",
	  "timeline": "_2vHZ9kLtj8A2WLz--Ojk4b",
	  "year": "_38k-qixJJb-BaXpIsQ5Q5A",
	  "price": "A16KZB5_QWLYDoQcp8w67"
	};
	
	var _Resume2 = _interopRequireDefault(_Resume);
	
	var _tridisap = '/' + "533c150a3d35c034b0044ca1f4d7be59.jpg";
	
	var _tridisap2 = _interopRequireDefault(_tridisap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'menuResume'
	});
	
	var _ref2 = _jsx('h3', {}, void 0, '2006');
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResHighShool'
	});
	
	var _ref4 = _jsx('li', {}, void 0, ' ', _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResHighShoolSpe'
	}));
	
	var _ref5 = _jsx('h3', {}, void 0, '2009');
	
	var _ref6 = _jsx('h4', {}, void 0, '2009 - 2014');
	
	var _ref7 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResUniv'
	});
	
	var _ref8 = _jsx('li', {}, void 0, ' ', _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResUnivSpe'
	}));
	
	var _ref9 = _jsx('h3', {}, void 0, '2010');
	
	var _ref10 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'June'
	}), ' - ', _jsx(_reactIntl.FormattedMessage, {
	  id: 'September'
	}));
	
	var _ref11 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploIMEI'
	});
	
	var _ref12 = _jsx('li', {}, void 0, ' ', _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploIMEISpe'
	}));
	
	var _ref13 = _jsx('h3', {}, void 0, '2011');
	
	var _ref14 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResStudClubCICM'
	});
	
	var _ref15 = _jsx('h3', {}, void 0, '2013');
	
	var _ref16 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResStageIUNAM'
	});
	
	var _ref17 = _jsx('h4', {}, void 0, ' 2013 - 2014');
	
	var _ref18 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResSolarDec'
	});
	
	var _ref19 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResSolarDecRole'
	})));
	
	var _ref20 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResSolarDecPrices'
	}));
	
	var _ref21 = _jsx('h3', {}, void 0, '2014');
	
	var _ref22 = _jsx('h4', {}, void 0, '2014 - 2015');
	
	var _ref23 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResThesis'
	});
	
	var _ref24 = _jsx('h4', {}, void 0, '2014 - 2015');
	
	var _ref25 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResICAF'
	});
	
	var _ref26 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResICAFRole'
	})));
	
	var _ref27 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResICAFDesc'
	}));
	
	var _ref28 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResICAFAchi'
	}));
	
	var _ref29 = _jsx('h3', {}, void 0, '2016');
	
	var _ref30 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'January'
	}));
	
	var _ref31 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'January'
	});
	
	var _ref32 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResJacEngRole'
	})));
	
	var _ref33 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResJacEngDesc'
	}));
	
	var _ref34 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResJacEngAchi'
	}));
	
	var _ref35 = _jsx('h4', {}, void 0, 'July');
	
	var _ref36 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResCitiB'
	});
	
	var _ref37 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResCitiBRole'
	})));
	
	var _ref38 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResCitiBDesc'
	}));
	
	var _ref39 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResCitiBAchi'
	}));
	
	var _ref40 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'December'
	}));
	
	var _ref41 = _jsx('a', {
	  href: 'https://courses.edx.org/certificates/b99704bf002e444fbf37d4497b8d695a',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploTUDelft'
	}));
	
	var _ref42 = _jsx('a', {
	  href: 'https://courses.edx.org/certificates/1fe3bc4a26ef40ca84be1cca1ad877f2',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploHarv'
	}));
	
	var _ref43 = _jsx('h3', {}, void 0, '2017');
	
	var _ref44 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'March'
	}));
	
	var _ref45 = _jsx('a', {
	  href: 'https://www.freecodecamp.org/valeporti/front-end-certification',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploFCCFront'
	}));
	
	var _ref46 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'September'
	}));
	
	var _ref47 = _jsx('a', {
	  href: 'https://certificates.saylor.org/hd2657mm',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploSAOpSys'
	}));
	
	var _ref48 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'September'
	});
	
	var _ref49 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ToDate'
	});
	
	var _ref50 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResMutuo'
	});
	
	var _ref51 = _jsx('li', {}, void 0, _jsx('strong', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResMutuoRole'
	})));
	
	var _ref52 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResMutuoDesc'
	}));
	
	var _ref53 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResMutuoAchi'
	}));
	
	var _ref54 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'October'
	}));
	
	var _ref55 = _jsx('a', {
	  href: 'https://certificates.saylor.org/ft456bop',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploSAIntroDB'
	}));
	
	var _ref56 = _jsx('h3', {}, void 0, '2018');
	
	var _ref57 = _jsx('h4', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'February'
	}));
	
	var _ref58 = _jsx('a', {
	  href: 'https://certificates.saylor.org/yh5jzfie',
	  target: '_blank'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ResDiploSAAlgorithm'
	}));
	
	function Resume(props, context) {
	  var date = new Date();
	
	  return _jsx('div', {
	    className: _Resume2.default.Resume
	  }, void 0, _jsx('div', {
	    className: _Resume2.default.title
	  }, void 0, '{', ' ', _ref, ' ', '}'), _jsx('div', {
	    className: _Resume2.default.header
	  }), _jsx('div', {
	    className: _Resume2.default.item
	  }, void 0, _jsx('div', {
	    className: _Resume2.default.timeline
	  }, void 0, _jsx('div', {}, void 0, _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref2, _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'http://www.lfm.edu.mx',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/LogoLFMcirc.jpg'
	  })), ' ', _ref3), _ref4))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref5, _jsx('section', {}, void 0, _ref6, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://www.unam.mx/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/_2634437_orig.png'
	  })), ' ', _ref7), _ref8))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref9, _jsx('section', {}, void 0, _ref10, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://imei.org.mx/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://www.mundohvacr.com.mx/wp-content/uploads/2014/07/A00075883.jpg'
	  })), ' ', _ref11), _ref12))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref13, _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'http://cicm.org.mx/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://cicm.org.mx/wp-content/themes/CICM%20copia/img/logo_vector.png'
	  })), _ref14)))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref15, _jsx('section', {}, void 0, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'http://www.innovacion.unam.mx/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://thawing-coast-2960.herokuapp.com/images/InnovaUNAM.jpg'
	  })), _ref16, ' '))), _jsx('section', {}, void 0, _ref17, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'http://www.solardecathlon2014.fr/en/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://blog.polylogis.fr/wp-content/uploads/2014/07/Banni%C3%A8re_sde2014.png'
	  })), _ref18, _jsx('a', {
	    href: 'http://arquitectura.unam.mx/casa.html',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/4548697_orig.png'
	  }))), _ref19, _ref20))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref21, _jsx('section', {}, void 0, _ref22, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://es.calameo.com/read/0047443879e7a02232cf6',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: _tridisap2.default
	  })), _ref23))), _jsx('section', {}, void 0, _ref24, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://www.linkedin.com/company/ica-fluor/?originalSubdomain=mx',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'http://www.gulfdiving.com.mx/wp-content/uploads/2017/09/ica-fluor.png'
	  })), _ref25), _ref26, _ref27, _ref28))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref29, _jsx('section', {}, void 0, _ref30, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'http://www.jacobs.com/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'https://miningconnection.com/images/logos/jacobs_logo.jpg'
	  })), _ref31), _ref32, _ref33, _ref34)), _jsx('section', {}, void 0, _ref35, _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://www.banamex.com/citibanamex/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'https://www.banamex.com/assets/img/citibanamex-logo.png'
	  })), _ref36), _ref37, _ref38, _ref39)), _jsx('section', {}, void 0, _ref40, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref41), _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref42)))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref43, _jsx('section', {}, void 0, _ref44, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref45))), _jsx('section', {}, void 0, _ref46, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref47))), _jsx('section', {}, void 0, _jsx('h4', {}, void 0, _ref48, ' - ', _ref49, ' (', date.getMonth() + 1, ' / ', date.getFullYear(), ')'), _jsx('ul', {}, void 0, _jsx('li', {}, void 0, _jsx('a', {
	    href: 'https://mutuofinanciera.com/',
	    target: '_blank'
	  }, void 0, _jsx('img', {
	    className: _Resume2.default.logo,
	    src: 'https://mutuofinanciera.com/images/Logo.jpg'
	  })), _ref50), _ref51, _ref52, _ref53)), _jsx('section', {}, void 0, _ref54, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref55)))), _jsx('section', {
	    className: _Resume2.default.year
	  }, void 0, _ref56, _jsx('section', {}, void 0, _ref57, _jsx('ul', {}, void 0, _jsx('li', {
	    className: _Resume2.default.certificate
	  }, void 0, _ref58)))), _jsx('div', {
	    className: _Resume2.default.spacing
	  })))), _jsx('div', {
	    className: _Resume2.default.footer
	  }));
	}
	
	exports.default = Resume;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	// Import Style
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SkillBar = {
	  "progLan": "_13dl54bYeLaHUEsCdO4J5U",
	  "progLanName": "_1lY2kogbcNPtFO_gfAeCnL",
	  "progLanBar": "_3SQOPjHUZ47hKGNsaSg0r8",
	  "bar": "_2OiTMigYvrTQNSSM7SlgU1"
	};
	
	var _SkillBar2 = _interopRequireDefault(_SkillBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function SkillBar(props, context) {
	  return _jsx('div', {
	    className: _SkillBar2.default.progLan
	  }, void 0, _jsx('div', {
	    className: _SkillBar2.default.progLanName
	  }, void 0, props.name), _jsx('div', {
	    className: _SkillBar2.default.progLanBar
	  }, void 0, _jsx('div', {
	    className: _SkillBar2.default.bar,
	    style: { width: props.percentage + '%' }
	  }, void 0, props.percentage, '%')));
	}
	
	exports.default = SkillBar;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _SoftSkills = {
	  "title": "_2S8zpYD3L_sMYWx9rnAzvd",
	  "softSkills": "_2RZC4T8mZFmui_IDXo5Ty3",
	  "softSkill": "_1zJK-hvCVEMjAK_-0GmTeP",
	  "softTtl": "_6cqD55-std720T1sifD5H",
	  "ulSoft": "_10DEm_sYkK260kKKZModS5",
	  "octagonContent": "_27kiaCT6eHIuXlzQ-qI6ab",
	  "octagon": "dnmzjZM7IGNUqXoQxdNut"
	};
	
	var _SoftSkills2 = _interopRequireDefault(_SoftSkills);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ref = _jsx(_reactIntl.FormattedMessage, {
	  id: 'menuSkills'
	});
	
	var _ref2 = _jsx('i', {
	  className: 'fas fa-code-branch'
	});
	
	var _ref3 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS1'
	});
	
	var _ref4 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss11'
	}));
	
	var _ref5 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss12'
	}));
	
	var _ref6 = _jsx('i', {
	  className: 'fas fa-thermometer-full'
	});
	
	var _ref7 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS2'
	});
	
	var _ref8 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss21'
	}));
	
	var _ref9 = _jsx('i', {
	  className: 'fas fa-lightbulb'
	});
	
	var _ref10 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS3'
	});
	
	var _ref11 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss31'
	}));
	
	var _ref12 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss32'
	}));
	
	var _ref13 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss33'
	}));
	
	var _ref14 = _jsx('i', {
	  className: 'fas fa-graduation-cap'
	});
	
	var _ref15 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS4'
	});
	
	var _ref16 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss41'
	}));
	
	var _ref17 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss42'
	}));
	
	var _ref18 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss43'
	}));
	
	var _ref19 = _jsx('i', {
	  className: 'fas fa-users'
	});
	
	var _ref20 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS5'
	});
	
	var _ref21 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss51'
	}));
	
	var _ref22 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss52'
	}));
	
	var _ref23 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss53'
	}));
	
	var _ref24 = _jsx('i', {
	  className: 'fas fa-chart-line'
	});
	
	var _ref25 = _jsx(_reactIntl.FormattedMessage, {
	  id: 'SS6'
	});
	
	var _ref26 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss61'
	}));
	
	var _ref27 = _jsx('li', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'ss62'
	}));
	
	function SoftSkills(props, context) {
	  return _jsx('div', {
	    className: _SoftSkills2.default.softSkills
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.title
	  }, void 0, '{', ' ', _ref, ' ', '}'), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref2)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref3), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref4, _ref5)), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref6)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref7), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref8)), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref9)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref10), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref11, _ref12, _ref13)), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref14)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref15), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref16, _ref17, _ref18)), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref19)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref20), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref21, _ref22, _ref23)), _jsx('div', {
	    className: _SoftSkills2.default.softSkill
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagon
	  }, void 0, _jsx('div', {
	    className: _SoftSkills2.default.octagonContent
	  }, void 0, _ref24)), _jsx('div', {
	    className: _SoftSkills2.default.softTtl
	  }, void 0, _ref25), _jsx('ul', {
	    className: _SoftSkills2.default.ulSoft
	  }, void 0, _ref26, _ref27)));
	}
	
	exports.default = SoftSkills;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(6);
	
	var _AppReducer = __webpack_require__(37);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(43);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(41);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _ProfileReducer = __webpack_require__(44);
	
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

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(65);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(7);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getSomething = getSomething;
	exports.sendMail = sendMail;
	
	var _Profile = __webpack_require__(55);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var _nodemailer = __webpack_require__(67);
	
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
	
	    _nodemailer2.default.createTestAccount(function (err, account) {
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
	            to: process.env.MAIL_MINE, // list of receivers
	            subject: 'Hello ✔', // Subject line
	            text: 'Name: ' + name + 'Purpose: ' + purp + 'Industry: ' + indu + ' && Message ' + mess, // plain text body
	            html: '<b>Name: ' + name + 'Purpose: ' + purp + 'Industry: ' + indu + ' && Message ' + mess + '</b>' // html body
	        };
	        // send mail with defined transport object
	        transporter.sendMail(mailOptions, function (error, info) {
	            if (error) {
	                console.log(error);
	                return res.status(500).json({ error: 'Mail not sent!!' });
	            }
	            console.log('Message sent: %s', info.messageId);
	            // Preview only available when sending through an Ethereal account
	            console.log('Preview URL: %s', _nodemailer2.default.getTestMessageUrl(info));
	
	            return res.status(200).json({ success: 'Mail Sent!!' });
	        });
	    });
	
	    //console.log(req.query);
	    //return res.send('lol');
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(16);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(59);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(66);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(77);
	
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
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
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

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var ProfileSchema = new Schema({});
	
	exports.default = _mongoose2.default.model('Profile', ProfileSchema);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(27);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(26);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(29);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(18);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(9);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(25);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(32);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(33);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(20);
	
	var _reactRedux = __webpack_require__(2);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(30);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(8);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(19);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(24);
	
	var _post = __webpack_require__(23);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _Profile = __webpack_require__(22);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var _dummyData = __webpack_require__(21);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(7);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _serveFavicon = __webpack_require__(31);
	
	var _serveFavicon2 = _interopRequireDefault(_serveFavicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(28).config(); //get all the env varibales available in variables
	
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
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n      \n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
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
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
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

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
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
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("nodemailer");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ }
/******/ ]);
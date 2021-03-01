"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MiniLive = _interopRequireDefault(require("../MiniLive"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function startPositions(lives) {
  var positions = ['left', 'active', 'right'];
  return lives.map(function (live, index) {
    return _objectSpread(_objectSpread({}, live), {}, {
      position: positions[index]
    });
  });
}

function Carousel(_ref) {
  var lives = _ref.lives;

  var _useState = (0, _react.useState)(startPositions(lives)),
      _useState2 = _slicedToArray(_useState, 2),
      livesState = _useState2[0],
      setLivesState = _useState2[1];

  var lastPosition = livesState.length - 1;

  var getIndexLeft = function getIndexLeft(index) {
    return index === 0 ? lastPosition : index - 1;
  };

  var getIndexRight = function getIndexRight(index) {
    return (index + 1) % livesState.length;
  };

  var handleClick = function handleClick(event, index) {
    setLivesState(function (lives) {
      var goLives = lives.map(function (live) {
        delete live.position;
        return live;
      });
      goLives[index].position = 'active';
      goLives[getIndexRight(index)].position = 'right';
      goLives[getIndexLeft(index)].position = 'left';
      return goLives;
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.CarouselStyle, null, livesState.map(function (live, index) {
    return /*#__PURE__*/_react.default.createElement(_MiniLive.default, _extends({
      key: live.url
    }, live, {
      onClick: function onClick(event) {
        return handleClick(event, index);
      }
    }));
  }));
}

var live = {
  url: _propTypes.default.string.isRequired,
  avatar: _propTypes.default.string.isRequired,
  altAvatar: _propTypes.default.string.isRequired,
  screen: _propTypes.default.string.isRequired,
  altScreen: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  game: _propTypes.default.string.isRequired,
  active: _propTypes.default.bool,
  left: _propTypes.default.bool,
  right: _propTypes.default.bool
};

var lives = _propTypes.default.arrayOf(live).isRequired;

Carousel.propTypes = {
  lives: lives
};
var _default = Carousel;
exports.default = _default;
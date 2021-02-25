"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StreamerOn(_ref) {
  var avatar = _ref.avatar,
      alt = _ref.alt;
  return /*#__PURE__*/_react.default.createElement(_styles.StreamerOnStyle, null, /*#__PURE__*/_react.default.createElement(_styles.Streamer, {
    src: avatar,
    alt: alt,
    live: true
  }), /*#__PURE__*/_react.default.createElement(_styles.Live, null, "Live"));
}

StreamerOn.propTypes = {
  avatar: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired
};
var _default = StreamerOn;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StreamerOn = _interopRequireDefault(require("../StreamerOn"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MiniLive(_ref) {
  var avatar = _ref.avatar,
      altAvatar = _ref.altAvatar,
      screen = _ref.screen,
      altScreen = _ref.altScreen,
      position = _ref.position,
      title = _ref.title,
      name = _ref.name,
      game = _ref.game,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement(_styles.MiniLiveStyle, {
    position: position,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperScreen, null, /*#__PURE__*/_react.default.createElement(_StreamerOn.default, {
    avatar: avatar,
    alt: altAvatar
  }), /*#__PURE__*/_react.default.createElement(_styles.Screen, {
    src: screen,
    alt: altScreen
  })), /*#__PURE__*/_react.default.createElement(_styles.Titles, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), /*#__PURE__*/_react.default.createElement(_styles.Name, null, name), /*#__PURE__*/_react.default.createElement(_styles.Game, null, game)));
}

MiniLive.defaultProps = {
  position: '',
  onClick: function onClick() {}
};
MiniLive.propTypes = {
  avatar: _propTypes.default.string.isRequired,
  altAvatar: _propTypes.default.string.isRequired,
  screen: _propTypes.default.string.isRequired,
  altScreen: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  game: _propTypes.default.string.isRequired,
  position: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = MiniLive;
exports.default = _default;
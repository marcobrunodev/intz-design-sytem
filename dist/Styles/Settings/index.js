"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Colors = _interopRequireDefault(require("./Colors"));

var _Gaps = _interopRequireDefault(require("./Gaps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Settings = function Settings() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Colors.default, null), /*#__PURE__*/_react.default.createElement(_Gaps.default, null));
};

var _default = Settings;
exports.default = _default;
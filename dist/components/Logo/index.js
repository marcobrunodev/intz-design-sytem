"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logoIntzTv = _interopRequireDefault(require("../../assets/images/logo-intz-tv.png"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Logo = _styledComponents.default.img.attrs({
  src: _logoIntzTv.default
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var _default = Logo;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = exports.Link = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = _styledComponents.default.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-decoration: none;\n"])));

exports.Link = Link;

var Logo = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.Logo = Logo;
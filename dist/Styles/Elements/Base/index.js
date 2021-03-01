"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Base = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  html,\n  body {\n    min-width: 320px;\n    font-size: 10px;\n  }\n\n  body {\n    background-color: var(--color-black);\n    font-family: \"Roboto\", sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])));
var _default = Base;
exports.default = _default;
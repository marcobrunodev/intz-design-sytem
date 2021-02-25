"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamerOnStyle = exports.Live = exports.Streamer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _live = _interopRequireDefault(require("../../assets/images/live.png"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Streamer = (0, _styledComponents.default)(_Avatar.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n"])));
exports.Streamer = Streamer;

var Live = _styledComponents.default.dd(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  background-color: var(--color-live);\n  color: var(--color-intz);\n  padding: calc(var(--gap-smallest) / 2);\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  border-radius: 0.5rem;\n  transform: translateY(-50%);\n\n  &::before {\n    content: url(", ");\n    margin-right: calc(var(--gap-smallest) / 2);\n  }\n"])), _live.default);

exports.Live = Live;

var StreamerOnStyle = _styledComponents.default.dl(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 7rem;\n"])));

exports.StreamerOnStyle = StreamerOnStyle;
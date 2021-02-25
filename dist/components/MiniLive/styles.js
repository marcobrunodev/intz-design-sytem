"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniLiveStyle = exports.WrapperScreen = exports.Screen = exports.Titles = exports.Title = exports.Name = exports.Game = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("../StreamerOn/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Game = _styledComponents.default.h4(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  transform: translate(-100%);\n  transition: transform 200ms 780ms ease-in-out;\n"])));

exports.Game = Game;

var Name = _styledComponents.default.h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: var(--gap-smallest);\n  transform: translate(-100%);\n  transition: transform 200ms 680ms ease-in-out;\n"])));

exports.Name = Name;

var Title = _styledComponents.default.h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 1.8rem;\n  transform: translate(-100%);\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: transform 200ms 600ms ease-in-out;\n"])));

exports.Title = Title;

var Titles = _styledComponents.default.hgroup(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  color: var(--color-intz);\n  font-weight: 500;\n  font-size: 1.2rem;\n  border-left: 1px solid var(--color-twitch);\n  border-bottom: 1px solid var(--color-twitch);\n  padding: var(--gap-smallest);\n  transform: scaleY(0);\n  transform-origin: top left;\n  transition: transform 200ms 400ms ease-in-out, opacity 200ms ease-in-out;\n  overflow: hidden;\n"])));

exports.Titles = Titles;

var Screen = _styledComponents.default.img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));

exports.Screen = Screen;

var WrapperScreen = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: var(--gap-smallest);\n  border: 1px solid var(--color-twitch);\n\n  & > ", " {\n    position: absolute;\n    width: 70px;\n    left: var(--gap-smallest);\n    top: var(--gap-smallest);\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-twitch);\n    opacity: 0.8;\n    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n    transition: transform 200ms 200ms ease-in-out;\n  }\n"])), _styles.StreamerOnStyle);

exports.WrapperScreen = WrapperScreen;

var hasActive = function hasActive(_ref) {
  var position = _ref.position;
  return position === 'active' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    z-index: 10;\n    transform: scale(1) translate(0);\n\n    & > ", "::before {\n      transform: skew(-26deg) translateX(-50%);\n    }\n\n    & > ", " {\n      transform: scaleY(1);\n\n      & > * {\n        transform: translateX(0);\n      }\n    }\n  "])), WrapperScreen, Titles);
};

var hasRight = function hasRight(_ref2) {
  var position = _ref2.position;
  return position === 'right' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    transform: scale(0.8) translate(30%, -5%);\n\n    & > ", " {\n      opacity: 0;\n    }\n\n    & > ", " {\n      &::before {\n        background-color: var(--color-success);\n      }\n      border-color: var(--color-success);\n    }\n  "])), Titles, WrapperScreen);
};

var hasLeft = function hasLeft(_ref3) {
  var position = _ref3.position;
  return position === 'left' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    transform: scale(0.8) translate(-30%, -5%);\n\n    & > ", " {\n      opacity: 0;\n    }\n\n    & > ", " {\n      &::before {\n        background-color: var(--color-live);\n      }\n      border-color: var(--color-live);\n    }\n  "])), Titles, WrapperScreen);
};

var MiniLiveStyle = _styledComponents.default.article(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  max-width: 285px;\n  cursor: pointer;\n  transform: scale(0.2) translate(0);\n  transition: transform 200ms ease-in-out;\n\n  ", ";\n  ", ";\n  ", ";\n"])), hasRight, hasLeft, hasActive);

exports.MiniLiveStyle = MiniLiveStyle;
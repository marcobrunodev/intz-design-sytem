"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sponsor(_ref) {
  var as = _ref.as,
      link = _ref.link,
      src = _ref.src,
      alt = _ref.alt;

  var hasAs = function hasAs() {
    return as ? /*#__PURE__*/_react.default.createElement(_styles.Link, {
      as: as,
      href: link
    }, /*#__PURE__*/_react.default.createElement(_styles.Logo, {
      src: src,
      alt: alt
    })) : /*#__PURE__*/_react.default.createElement(_styles.Link, {
      as: as,
      to: link
    }, /*#__PURE__*/_react.default.createElement(_styles.Logo, {
      src: src,
      alt: alt
    }));
  };

  return hasAs();
}

Sponsor.defaultProps = {
  as: 'a'
};
Sponsor.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  link: _propTypes.default.string.isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired
};
var _default = Sponsor;
exports.default = _default;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { StatusAlert } from '@edx/paragon';
import PropTypes from 'prop-types';
import { APP_CONFIG_INITIALIZED, mergeConfig, subscribe } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { ENGLISH_IETF_TAG, SPANISH_IETF_TAG, UKRAINIAN_IETF_TAG, IETF_TAGS_TO_CLOSE_BUTTON_LABEL, IETF_TAGS_TO_CONTAINER_ROLE_LABEL, IETF_TAGS_TO_LANGUAGE_CODE } from '../constants';
import { getIETFTag, getPolicyHTML, getIETFTagFromLanguageCode, hasViewedCookieBanner, createHasViewedCookieBanner } from '../utilities';
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    LANGUAGE_PREFERENCE_COOKIE_NAME: process.env.LANGUAGE_PREFERENCE_COOKIE_NAME || 'openedx-language-preference',
    COOKIE_POLICY_VIEWED_COOKIE_NAME: process.env.COOKIE_POLICY_VIEWED_COOKIE_NAME || 'cookieconsent_status'
    // COOKIE_POLICY_COOKIE_DOMAIN: process.env.COOKIE_POLICY_COOKIE_DOMAIN,
  }, 'Cookie Policy Banner additional config');
});
var CookieBanner = /*#__PURE__*/function (_Component) {
  function CookieBanner(props) {
    var _this;
    _classCallCheck(this, CookieBanner);
    _this = _callSuper(this, CookieBanner, [props]);
    _this.onClose = _this.onClose.bind(_this);
    _this.state = {
      open: false
    };
    return _this;
  }
  _inherits(CookieBanner, _Component);
  return _createClass(CookieBanner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleDisplay(!hasViewedCookieBanner(this.props.isViewedCookieName, this.context.config.COOKIE_POLICY_COOKIE_DOMAIN));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.open === true) {
        if (document.querySelectorAll('.edx-cookie-banner .btn') && document.querySelectorAll('.edx-cookie-banner .btn').length > 0) {
          document.querySelectorAll('.edx-cookie-banner .btn')[0].blur();
        }
      }
    }
  }, {
    key: "onClose",
    value: function onClose(event) {
      var _this2 = this;
      this.setState({
        open: false
      }, function () {
        createHasViewedCookieBanner(_this2.props.isViewedCookieName, _this2.context.config.COOKIE_POLICY_COOKIE_DOMAIN);
        _this2.props.onClose(event);
      });
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay(open) {
      this.setState({
        open: open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        languageCode = _this$props.languageCode,
        policyText = _this$props.policyText;
      var open = this.state.open;
      var ietfTag = languageCode ? getIETFTagFromLanguageCode(languageCode) : getIETFTag();
      var LMS_BASE_URL = this.context.config.LMS_BASE_URL;
      var SITE_NAME = this.context.config.SITE_NAME;
      if (open) {
        return /*#__PURE__*/React.createElement("div", {
          lang: IETF_TAGS_TO_LANGUAGE_CODE[ietfTag],
          className: "edx-cookie-banner-wrapper",
          role: "complementary",
          "aria-label": IETF_TAGS_TO_CONTAINER_ROLE_LABEL(SITE_NAME)[ietfTag],
          "aria-live": "polite"
        }, /*#__PURE__*/React.createElement(StatusAlert, {
          className: "edx-cookie-banner",
          open: this.state.open,
          closeButtonAriaLabel: IETF_TAGS_TO_CLOSE_BUTTON_LABEL(SITE_NAME)[ietfTag],
          dialog: /*#__PURE__*/React.createElement("span", {
            dangerouslySetInnerHTML: {
              __html: getPolicyHTML(ietfTag, policyText, LMS_BASE_URL)
            }
          }),
          onClose: this.onClose
        }));
      }
      return false;
    }
  }]);
}(Component);
CookieBanner.contextType = AppContext;
CookieBanner.defaultProps = {
  onClose: function onClose() {},
  languageCode: undefined,
  policyText: {},
  isViewedCookieName: null
};
CookieBanner.propTypes = {
  onClose: PropTypes.func,
  languageCode: PropTypes.string,
  policyText: PropTypes.shape(_defineProperty(_defineProperty(_defineProperty({}, ENGLISH_IETF_TAG, PropTypes.string), SPANISH_IETF_TAG, PropTypes.string), UKRAINIAN_IETF_TAG, PropTypes.string)),
  isViewedCookieName: PropTypes.string
};
export default CookieBanner;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ensureConfig, getConfig } from '@edx/frontend-platform';
ensureConfig(['LMS_BASE_URL', 'SITE_NAME'], 'Cookie Policy Banner component constants');

// Read the env variables
var _getConfig = getConfig(),
  LMS_BASE_URL = _getConfig.LMS_BASE_URL,
  SITE_NAME = _getConfig.SITE_NAME;
// end of env vars reading

// general constants
var LOCALHOST = 'localhost';
var COOKIE_POLICY_PAGE_URL = "".concat(LMS_BASE_URL, "/cookies");
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
var ENGLISH_IETF_TAG = 'en';
var SPANISH_IETF_TAG = 'es-419';
var UKRAINIAN_IETF_TAG = 'uk';
var DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
var ENGLISH_LANGUAGE_CODE = 'en';
var SPANISH_LANGUAGE_CODE = 'es';
var UKRAINIAN_LANGUAGE_CODE = 'uk';
var IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG, UKRAINIAN_IETF_TAG]);
var IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze(_defineProperty(_defineProperty({}, ENGLISH_IETF_TAG, "Notice about use of cookies on ".concat(SITE_NAME, ".")), SPANISH_IETF_TAG, "Aviso sobre el uso de cookies en ".concat(SITE_NAME, ".")));
var IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze(_defineProperty(_defineProperty({}, ENGLISH_IETF_TAG, "Close the notice about use of cookies on ".concat(SITE_NAME, ".")), SPANISH_IETF_TAG, "Cerrar aviso sobre el uso de cookies en ".concat(SITE_NAME, ".")));
var bannerLinkOpen = "<a href=\"".concat(COOKIE_POLICY_PAGE_URL, "\" class=\"policy-link\" target=\"_blank\">");
var bannerLinkClose = '</a>';
var IETF_TAGS_TO_BANNER_TEXT = Object.freeze(_defineProperty(_defineProperty(_defineProperty({}, ENGLISH_IETF_TAG, "We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in ".concat(bannerLinkOpen, "Cookie Policy").concat(bannerLinkClose, ". For a complete overview of all cookies used, please see your personal settings.\n  ")), SPANISH_IETF_TAG, "Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga m\xE1s informaci\xF3n al respecto en ".concat(bannerLinkOpen, "Pol\xEDtica de cookies").concat(bannerLinkClose, ". Para obtener una descripci\xF3n completa de todas las cookies utilizadas, consulte su configuraci\xF3n personal.")), UKRAINIAN_IETF_TAG, "\u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0444\u0430\u0439\u043B\u0438 cookie \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456, \u0449\u043E\u0431 \u043F\u043E\u043A\u0440\u0430\u0449\u0438\u0442\u0438 \u0432\u0430\u0448 \u0434\u043E\u0441\u0432\u0456\u0434 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0446\u0435\u0439 \u0432\u0435\u0431\u0441\u0430\u0439\u0442, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0457\u0445\u043D\u0456\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C. \u0414\u043E\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435 \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 ".concat(bannerLinkOpen, "\u041F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookie").concat(bannerLinkClose, ". \u0414\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443 \u0432\u0441\u0456\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 cookie, \u0449\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u0441\u0432\u043E\u0457 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F.")));
var IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze(_defineProperty(_defineProperty(_defineProperty({}, ENGLISH_IETF_TAG, ENGLISH_LANGUAGE_CODE), SPANISH_IETF_TAG, SPANISH_LANGUAGE_CODE), UKRAINIAN_IETF_TAG, UKRAINIAN_LANGUAGE_CODE));
var LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze(_defineProperty(_defineProperty(_defineProperty({}, ENGLISH_LANGUAGE_CODE, ENGLISH_IETF_TAG), SPANISH_LANGUAGE_CODE, SPANISH_IETF_TAG), UKRAINIAN_LANGUAGE_CODE, UKRAINIAN_IETF_TAG));
// end of i18n constants

var getPolicyHTML = function getPolicyHTML(tag) {
  var overrideText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (overrideText[tag]) {
    return overrideText[tag];
  }
  var linkClose = '</a>';
  if (tag === SPANISH_IETF_TAG) {
    var _linkOpen = '<a href="https://edx.org/es/edx-privacy-policy" class="policy-link" target = "_blank">';
    return "edX y sus Miembros usan cookies y otras tecnolog\xEDas de seguimiento para fines de rendimiento, an\xE1lisis y marketing. Al usar este sitio web, aceptas este uso. Obt\xE9n m\xE1s informaci\xF3n sobre estas tecnolog\xEDas en la ".concat(_linkOpen, "Pol\xEDtica de privacidad").concat(linkClose, ".");
  }
  var linkOpen = '<a href="https://edx.org/edx-privacy-policy" class="policy-link" target = "_blank">';
  return "edX and its Members use cookies and other tracking technologies for performance, analytics, and marketing purposes. By using this website, you accept this use. Learn more about these technologies in the ".concat(linkOpen, "Privacy Policy").concat(linkClose, ".");
};
export { ENGLISH_IETF_TAG, SPANISH_IETF_TAG, UKRAINIAN_IETF_TAG, DEFAULT_IETF_TAG, ENGLISH_LANGUAGE_CODE, IETF_TAGS, IETF_TAGS_TO_CONTAINER_ROLE_LABEL, IETF_TAGS_TO_CLOSE_BUTTON_LABEL, IETF_TAGS_TO_BANNER_TEXT, IETF_TAGS_TO_LANGUAGE_CODE, LANGUAGE_CODE_TO_IETF_TAGS, LOCALHOST, COOKIE_POLICY_PAGE_URL, getPolicyHTML };
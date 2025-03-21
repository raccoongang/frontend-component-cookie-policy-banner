import Cookie from 'universal-cookie';
import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { DEFAULT_IETF_TAG, IETF_TAGS, LANGUAGE_CODE_TO_IETF_TAGS, LOCALHOST, getIetfTagToBannerText } from './constants';
ensureConfig(['SESSION_COOKIE_DOMAIN', 'COOKIE_POLICY_COOKIE_DOMAIN', 'COOKIE_POLICY_VIEWED_COOKIE_NAME'], 'Cookie Policy Banner component utilities');

// Setting path to '/' to be applied to all subdomains
// Setting maxAge to 2^31 -1
// because Number.SAFE_MAX_INTEGER does not get processed properly by the browser
// nor does the max Date defined in http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
var getCookieCreationData = function getCookieCreationData() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var domain;
  var name = cookieName || getConfig().COOKIE_POLICY_VIEWED_COOKIE_NAME;
  if (window.location.hostname.indexOf(LOCALHOST) >= 0) {
    domain = LOCALHOST;
  } else {
    domain = getConfig().COOKIE_POLICY_COOKIE_DOMAIN;
  }
  return {
    cookieName: name,
    domain: domain,
    path: '/',
    maxAge: 2147483647
  };
};
var getIETFTag = function getIETFTag() {
  var cookie = new Cookie(getConfig().SESSION_COOKIE_DOMAIN);
  var ietfTag = cookie.get(getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME);
  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }
  return ietfTag;
};
var getIETFTagFromLanguageCode = function getIETFTagFromLanguageCode(languageCode) {
  var ietfTag = LANGUAGE_CODE_TO_IETF_TAGS[languageCode];
  if (!ietfTag || IETF_TAGS.indexOf(ietfTag) <= -1) {
    return DEFAULT_IETF_TAG;
  }
  return ietfTag;
};
var createHasViewedCookieBanner = function createHasViewedCookieBanner() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cookieCreationData = getCookieCreationData(cookieName);
  if (!!cookieCreationData && !!cookieCreationData.cookieName && !!cookieCreationData.domain && !!cookieCreationData.path && !!cookieCreationData.maxAge) {
    return new Cookie().set(cookieCreationData.cookieName, 'dismiss',
    // for consistency with legacy cookie policy banner
    {
      domain: cookieCreationData.domain,
      path: cookieCreationData.path,
      maxAge: cookieCreationData.maxAge
    });
  }
  return false;
};
var hasViewedCookieBanner = function hasViewedCookieBanner() {
  var cookieName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var cookieCreationData = getCookieCreationData(cookieName);
  return !!cookieCreationData && !!new Cookie().get(cookieCreationData.cookieName);
};
var getPolicyHTML = function getPolicyHTML(tag) {
  var overrideText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var LMS_BASE_URL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  if (overrideText[tag]) {
    return overrideText[tag];
  }
  return getIetfTagToBannerText(LMS_BASE_URL)[tag];
};
export { getIETFTag, createHasViewedCookieBanner, hasViewedCookieBanner, getCookieCreationData, getIETFTagFromLanguageCode, getPolicyHTML };
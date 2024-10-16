import { ensureConfig, getConfig } from '@edx/frontend-platform';

ensureConfig(['LMS_BASE_URL', 'SITE_NAME'], 'Cookie Policy Banner component constants');

// Read the env variables
const { LMS_BASE_URL, SITE_NAME } = getConfig();
// end of env vars reading

// general constants
const LOCALHOST = 'localhost';
const PRIVACY_POLICY_PAGE_URL = `${LMS_BASE_URL}/privacy`;
const COOKIE_POLICY_PAGE_URL = `${LMS_BASE_URL}/cookies`;
const TOC_POLICY_PAGE_URL = `${LMS_BASE_URL}/terms-and-conditions`;
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
const ENGLISH_IETF_TAG = 'en';
const SPANISH_IETF_TAG = 'es-419';
const DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
const ENGLISH_LANGUAGE_CODE = 'en';
const SPANISH_LANGUAGE_CODE = 'es';

const IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG]);

const IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Close the notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Cerrar aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const bannerPrivacyLinkOpen = `<a href="${PRIVACY_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerPrivacyLinkClose = '</a>';
const bannerCookiesLinkOpen = `<a href="${COOKIE_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerCookiesLinkClose = '</a>';
const bannerTermsLinkOpen = `<a href="${TOC_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerTermsLinkClose = '</a>';
const IETF_TAGS_TO_BANNER_TEXT = Object.freeze({
  [ENGLISH_IETF_TAG]: `We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we’ll assume that you are happy to receive all cookies on the website.
  <br>
  ${bannerPrivacyLinkOpen}Privacy notice${bannerPrivacyLinkClose} / ${bannerCookiesLinkOpen}Cookie notice${bannerCookiesLinkClose} / ${bannerTermsLinkOpen}Terms and conditions${bannerTermsLinkClose}
  `,
  [SPANISH_IETF_TAG]: `Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga más información al respecto en ${bannerCookiesLinkOpen}Política de cookies${bannerCookiesLinkClose}. Para obtener una descripción completa de todas las cookies utilizadas, consulte su configuración personal.`,
});
const IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze({
  [ENGLISH_IETF_TAG]: ENGLISH_LANGUAGE_CODE,
  [SPANISH_IETF_TAG]: SPANISH_LANGUAGE_CODE,
});
const LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze({
  [ENGLISH_LANGUAGE_CODE]: ENGLISH_IETF_TAG,
  [SPANISH_LANGUAGE_CODE]: SPANISH_IETF_TAG,
});
// end of i18n constants

const getPolicyHTML = (tag, overrideText = {}) => {
  if (overrideText[tag]) {
    return overrideText[tag];
  }

  const linkClose = '</a>';

  if (tag === SPANISH_IETF_TAG) {
    const linkOpen = '<a href="https://edx.org/es/edx-privacy-policy" class="policy-link" target = "_blank">';
    return `edX y sus Miembros usan cookies y otras tecnologías de seguimiento para fines de rendimiento, análisis y marketing. Al usar este sitio web, aceptas este uso. Obtén más información sobre estas tecnologías en la ${linkOpen}Política de privacidad${linkClose}.`;
  }

  const linkOpen = '<a href="https://edx.org/edx-privacy-policy" class="policy-link" target = "_blank">';
  return `edX and its Members use cookies and other tracking technologies for performance, analytics, and marketing purposes. By using this website, you accept this use. Learn more about these technologies in the ${linkOpen}Privacy Policy${linkClose}.`;
};

export {
  ENGLISH_IETF_TAG,
  SPANISH_IETF_TAG,
  DEFAULT_IETF_TAG,
  ENGLISH_LANGUAGE_CODE,
  IETF_TAGS,
  IETF_TAGS_TO_CONTAINER_ROLE_LABEL,
  IETF_TAGS_TO_CLOSE_BUTTON_LABEL,
  IETF_TAGS_TO_BANNER_TEXT,
  IETF_TAGS_TO_LANGUAGE_CODE,
  LANGUAGE_CODE_TO_IETF_TAGS,
  LOCALHOST,
  COOKIE_POLICY_PAGE_URL,
  getPolicyHTML,
};

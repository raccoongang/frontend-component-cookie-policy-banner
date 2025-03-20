import { ensureConfig, getConfig } from '@edx/frontend-platform';

ensureConfig(['LMS_BASE_URL', 'SITE_NAME'], 'Cookie Policy Banner component constants');

// Read the env variables
const { LMS_BASE_URL, SITE_NAME } = getConfig();
// end of env vars reading

// general constants
const LOCALHOST = 'localhost';
const COOKIE_POLICY_PAGE_URL = `${LMS_BASE_URL}/cookies`;
// end general constants

// i18n related constants
// https://en.wikipedia.org/wiki/IETF_language_tag
const ENGLISH_IETF_TAG = 'en';
const SPANISH_IETF_TAG = 'es-419';
const UKRAINIAN_IETF_TAG = 'uk';
const DEFAULT_IETF_TAG = ENGLISH_IETF_TAG;
const ENGLISH_LANGUAGE_CODE = 'en';
const SPANISH_LANGUAGE_CODE = 'es';
const UKRAINIAN_LANGUAGE_CODE = 'uk';

const IETF_TAGS = Object.freeze([ENGLISH_IETF_TAG, SPANISH_IETF_TAG, UKRAINIAN_IETF_TAG]);

const IETF_TAGS_TO_CONTAINER_ROLE_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const IETF_TAGS_TO_CLOSE_BUTTON_LABEL = Object.freeze({
  [ENGLISH_IETF_TAG]: `Close the notice about use of cookies on ${SITE_NAME}.`,
  [SPANISH_IETF_TAG]: `Cerrar aviso sobre el uso de cookies en ${SITE_NAME}.`,
});
const bannerLinkOpen = `<a href="${COOKIE_POLICY_PAGE_URL}" class="policy-link" target="_blank">`;
const bannerLinkClose = '</a>';
const IETF_TAGS_TO_BANNER_TEXT = Object.freeze({
  [ENGLISH_IETF_TAG]: `We use cookies on this site to enhance your user experience. By using this website, you accept this use. Learn more about it in ${bannerLinkOpen}Cookie Policy${bannerLinkClose}. For a complete overview of all cookies used, please see your personal settings.
  `,
  [SPANISH_IETF_TAG]: `Utilizamos cookies en este sitio para mejorar su experiencia de usuario. Al utilizar este sitio web, usted acepta este uso. Obtenga más información al respecto en ${bannerLinkOpen}Política de cookies${bannerLinkClose}. Para obtener una descripción completa de todas las cookies utilizadas, consulte su configuración personal.`,
  [UKRAINIAN_IETF_TAG]: `Ми використовуємо файли cookie на цьому сайті, щоб покращити ваш досвід користувача. Використовуючи цей вебсайт, ви погоджуєтесь з їхнім використанням. Докладніше читайте в ${bannerLinkOpen}Політиці використання файлів cookie${bannerLinkClose}. Для перегляду всіх файлів cookie, що використовуються, будь ласка, перегляньте свої особисті налаштування.`,
});
const IETF_TAGS_TO_LANGUAGE_CODE = Object.freeze({
  [ENGLISH_IETF_TAG]: ENGLISH_LANGUAGE_CODE,
  [SPANISH_IETF_TAG]: SPANISH_LANGUAGE_CODE,
  [UKRAINIAN_IETF_TAG]: UKRAINIAN_LANGUAGE_CODE,
});
const LANGUAGE_CODE_TO_IETF_TAGS = Object.freeze({
  [ENGLISH_LANGUAGE_CODE]: ENGLISH_IETF_TAG,
  [SPANISH_LANGUAGE_CODE]: SPANISH_IETF_TAG,
  [UKRAINIAN_LANGUAGE_CODE]: UKRAINIAN_IETF_TAG,
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
  UKRAINIAN_IETF_TAG,
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

import React from 'react';
import { storiesOf } from '@storybook/react';
import CookiePolicyBanner from './index';
import { FRENCH_CA_IETF_TAG, SPANISH_IETF_TAG, ENGLISH_IETF_TAG } from '../constants';

import './_storybook-styles.scss';

const policyText = {
  [FRENCH_CA_IETF_TAG]: 'Nous avons mis à jour notre <a href="https://edx.org/edx-privacy-policy" class="policy-link" target = "blank">Politique de confidentialité</a> afin de mieux refléter la façon dont nous recueillons, utilisons et partageons vos données.',
  [SPANISH_IETF_TAG]: 'Hemos actualizado nuestra <a href="https://edx.org/es/edx-privacy-policy" class="policy-link" target = "_blank">Política de Privacidad</a> para mejor reflejar cómo coleccionamos, usamos y compartimos sus datos.',
  [ENGLISH_IETF_TAG]: 'We\'ve updated our <a href="https://edx.org/edx-privacy-policy" class="policy-link" target = "_blank">Privacy Policy</a> to better reflect how we collect, use and share your data.',
};
storiesOf('Cookie Policy Banner', CookiePolicyBanner)
  .add('basic usage', () => (<CookiePolicyBanner />))
  .add('overridden policy text', () => (<CookiePolicyBanner policyText={policyText} />))
  .add('languageCode "fr-ca" override', () => (<CookiePolicyBanner languageCode="fr-ca" />))
  .add('languageCode "es" override', () => (<CookiePolicyBanner languageCode="es" />))
  .add('languageCode "fr-ca" overridden policy text', () => (<CookiePolicyBanner policyText={policyText} languageCode="fr-ca" />))
  .add('languageCode "es" overridden policy text', () => (<CookiePolicyBanner policyText={policyText} languageCode="es" />))
  .add('languageCode "en" override', () => (<CookiePolicyBanner languageCode="en" />))
  .add('languageCode "en" overridden policy text', () => (<CookiePolicyBanner policyText={policyText} languageCode="en" />))
  .add('languageCode override with unsupported language', () => (<CookiePolicyBanner languageCode="notsupported" />))
  .add('languageCode "notsupported" overridden policy text', () => (<CookiePolicyBanner policyText={policyText} languageCode="notsupported" />));

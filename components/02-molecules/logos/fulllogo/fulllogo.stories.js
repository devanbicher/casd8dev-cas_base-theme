import React from 'react';

import fulllogo from './fulllogo.twig';

import fulllogoData from './fulllogo.yml';

/**
 * Storybook Definition.
 */
 export default { title: 'Molecules/Logos/Full CAS Logo' };

 export const fullCasLogo = () => (
   <div dangerouslySetInnerHTML={{ __html: fulllogo(fulllogoData) }} />
 );
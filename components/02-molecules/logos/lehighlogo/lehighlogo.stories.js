import React from 'react';

import lehighlogo from './lehighlogo.twig';

import logodata from './lehighlogo.yml';
/**
 * Storybook Definition.
 */
 export default { title: 'Molecules/Logos/Lehigh Logo' };

 export const lehighLogo = () => (
   <div dangerouslySetInnerHTML={{ __html: lehighlogo(logodata) }} />
 );
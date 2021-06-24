import React from 'react';

import caslogo from './caslogo.twig';

import caslogoData from './caslogo.yml';

/**
 * Storybook Definition.
 */
 export default { title: 'Molecules/Logos/CAS Logo' };

 export const casLogo = () => (
   <div dangerouslySetInnerHTML={{ __html: caslogo(caslogoData) }} />
 );
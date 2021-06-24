import React from 'react';

import address from './footer-address.twig';

import addressData from './footer-address.yml';

/**
 * Storybook Definition.
 */
 export default { title: 'Molecules/Blocks/FooterAddress' };

 export const Department = () => (
   <div dangerouslySetInnerHTML={{ __html: address(addressData) }} />
 );
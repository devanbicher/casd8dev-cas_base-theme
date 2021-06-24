import React from 'react';

import department from './department.twig';

import departmentData from './department.yml';

/**
 * Storybook Definition.
 */
 export default { title: 'Molecules/Department' };

 export const Department = () => (
   <div dangerouslySetInnerHTML={{ __html: department(departmentData) }} />
 );
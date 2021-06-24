import React from 'react';

import fullWidthTwig from './full-width.twig';
import withSidebarTwig from './with-sidebar.twig';

import mainMenu from '../02-molecules/menus/main-menu/main-menu.yml';
import socialMenu from '../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../02-molecules/menus/inline/inline-menu.yml';
import departmentData from '../02-molecules/department/department.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Layouts' };

export const fullWidth = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: fullWidthTwig({ ...mainMenu, ...departmentData,  ...socialMenu, ...footerMenu }),
    }}
  />
);
export const withSidebar = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: withSidebarTwig({ ...mainMenu, ...departmentData, ...socialMenu, ...footerMenu }),
    }}
  />
);

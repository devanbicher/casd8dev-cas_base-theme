import React from 'react';

import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';
import siteBanner from './site-banner/site-banner.twig';

import footerSocial from '../../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../../02-molecules/menus/inline/inline-menu.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/topnav/topnav.yml';
import departmentData from '../../02-molecules/department/department.yml';
import bannerData from './site-banner/banner.yml';

import '../../02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: footerTwig({ ...footerSocial, ...footerMenu }),
    }}
  />
);
export const banner = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteBanner({ ...bannerData, ...breadcrumbData }),
    }}
  />
);
export const header = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteHeader({
        ...breadcrumbData,
        ...mainMenuData,
        ...departmentData,
      }),
    }}
  />
);

export interface Tab {
  tabname: string;
  path: string;
}
/**
 * Tab objects representing different routes.
 */
const cookiePreferencesPageRouteTab: Tab = {
  tabname: 'Cookie Preferences',
  path: '/cookie-preferences',
};
const securityPageRouteTab: Tab = { tabname: 'Security', path: '/security' };
const legalPageRouteTab: Tab = { tabname: 'Legal', path: '/legal' };
const privacyPageRouteTab: Tab = {
  tabname: 'Privacy',
  path: '/privacy-policy',
};
/**
 * Maps footer labels to link
 */
export const footerLinks: Tab[] = [
  cookiePreferencesPageRouteTab,
  securityPageRouteTab,
  legalPageRouteTab,
  privacyPageRouteTab,
];

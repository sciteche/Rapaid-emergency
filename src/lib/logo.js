// Logo URLs
const LIGHT_MODE_LOGO = "https://storage.googleapis.com/hostinger-horizons-assets-prod/893739fa-72f1-4dd8-9ba3-cea36df74da6/1b2d51e2ae7a035a634171273b188ee7.png";
const DARK_MODE_LOGO = "Rapaiddark.png";

export function getLogoUrl(theme) {
  if (!theme || theme === 'system') {
    // Check system preference
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? DARK_MODE_LOGO : LIGHT_MODE_LOGO;
  }
  
  return theme === 'dark' ? DARK_MODE_LOGO : LIGHT_MODE_LOGO;
}

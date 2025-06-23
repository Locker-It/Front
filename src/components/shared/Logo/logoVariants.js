import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';

export const getLogoStyles = () => ({
  NAVBAR: {
    content: `url(${logoDark})`,
    height: '2.5rem',
    objectFit: 'contain',
  },
  HERO: {
    content: `url(${logoLight})`,
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    objectFit: 'contain',
    display: 'block',
  },
  DEFAULT: {
    content: `url(${logoLight})`,
    height: '40px',
    objectFit: 'contain',
  },
});

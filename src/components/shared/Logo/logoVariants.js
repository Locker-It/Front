import logoDark from '../../../assets/logo-dark.png';
import logoLight from '../../../assets/logo-light.png';

export const getLogoStyles = () => ({
  NAVBAR: {
    src: logoDark,
    height: '2.5rem',
    objectFit: 'contain',
  },
  HERO: {
    src: logoLight,
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    objectFit: 'contain',
    display: 'block',
  },
  DEFAULT: {
    src: logoLight,
    height: '40px',
    objectFit: 'contain',
  },
});

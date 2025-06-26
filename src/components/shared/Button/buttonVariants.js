import { BUTTON_VARIANTS } from '../../../constants/types.js';

export const getButtonStyles = (theme) => ({
  [BUTTON_VARIANTS.FILLED]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    borderRadius: 8,
    padding: '8px 20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
  },

  [BUTTON_VARIANTS.OUTLINED]: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    fontWeight: 600,
    borderRadius: 8,
    padding: '8px 20px',
    border: `2px solid ${theme.palette.primary.main}`,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  [BUTTON_VARIANTS.TEXT]: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    textTransform: 'none',
    fontWeight: 500,
    padding: '6px 12px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      textDecoration: 'underline',
    },
  },

  [BUTTON_VARIANTS.NAVBAR]: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    fontWeight: 500,
    padding: '6px 16px',
    borderRadius: 6,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
  },

  [BUTTON_VARIANTS.DEFAULT]: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.primary,
    fontWeight: 500,
    borderRadius: 8,
    padding: '8px 16px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
});

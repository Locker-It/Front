import { Box } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../../theme/theme.js';

export const FooterContainer = styled(Box)({
  backgroundColor: theme.palette.grey[100],
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: '1.5rem 2rem',
  textAlign: 'center',
  fontSize: '0.9rem',
  color: theme.palette.grey[700],
  marginTop: 'auto',
});

export const FooterLinks = styled(Box)({
  marginTop: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
});

export const footerTextStyle = {
  marginBottom: '0.2rem',
};


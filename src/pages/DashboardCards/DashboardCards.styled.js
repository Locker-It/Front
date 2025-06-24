import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import theme from '../../theme/theme';

export const DashboardContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10rem',
  padding: '2rem',
});

export const ActionCard = styled(Box)({
  borderRadius: '1rem',
  padding: '2rem',
  textAlign: 'center',
  boxShadow: theme.customShadows.main,
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const sharedGridProps = {
  container: true,
  spacing: 4,
  justifyContent: 'center',
};

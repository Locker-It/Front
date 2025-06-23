import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../../theme/theme.js';

export const CustomAppBar = styled(AppBar)({
  backgroundColor: theme.palette.grey[900],
});

export const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export const Section = styled(Box)(({ align = 'left' }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent:
    align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
  gap: '1.5rem',
}));

export const LeftSection = styled(Section)({ justifyContent: 'flex-start' });
export const CenterSection = styled(Section)({ justifyContent: 'center' });
export const RightSection = styled(Section)({ justifyContent: 'flex-end' });

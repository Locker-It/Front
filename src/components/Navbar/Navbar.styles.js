import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/system';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.navbar.main,
  color: theme.palette.navbar.contrastText,
}));

export const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  gap: '2rem',
  whiteSpace: 'nowrap',
});

export const Section = styled(Box)(({ align = 'left' }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent:
    align === 'center'
      ? 'center'
      : align === 'right'
        ? 'flex-end'
        : 'flex-start',
  gap: '1.5rem',
}));

export const LeftSection = styled(Section)({ justifyContent: 'flex-start' });
export const CenterSection = styled(Section)({ justifyContent: 'center' });
export const RightSection = styled(Section)({ justifyContent: 'flex-end' });

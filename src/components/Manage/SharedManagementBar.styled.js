import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import theme from '../../theme/theme';

export const containerOuterBox = {
  position: 'relative',
  width: '80rem',
};

export const StyledAppBar = styled(AppBar)({
  position: 'static',
  color: 'default',
  '& .MuiTab-root': {
    backgroundColor: theme.palette.background.default,
  },
});

export const tabPanelStyle = {
  p: 3,
};

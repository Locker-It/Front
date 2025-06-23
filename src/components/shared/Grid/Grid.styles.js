import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const defaultColumns = { xs: 4, sm: 8, md: 12 };
export const defaultSpacing = { xs: 2, md: 3 };
export const defaultItemSize = { xs: 2, sm: 4, md: 4 };
export const defaultStyle = {};

export const StyledBox = styled(Box)(() => ({
  width: '100%',
  flexGrow: 1,
}));


export const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
}));

export const StyledItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

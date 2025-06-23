import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontWeight: 'bold',
}));

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  marginInline: 'auto',
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

export const FormWrapper = styled(Box)({
  width: '100%',
});

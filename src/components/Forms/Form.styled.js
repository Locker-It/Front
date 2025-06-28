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

export const DropzoneContainer = styled(Box)(({ theme }) => ({
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: theme.spacing(2),
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#fff',
  '&.active': {
    backgroundColor: '#f9f9f9',
  },
}));

export const PreviewImage = styled('img')({
  marginTop: '10px',
  maxWidth: '100%',
  maxHeight: '13rem',
});

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LoaderWrapper = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1300,
});

import { styled } from '@mui/material/styles';
import { DialogActions, Stack } from '@mui/material';

export const StyledDialogActions = styled(DialogActions)(() => ({
  padding: '1rem',
}));

export const iconStyle = {
  fontSize: '2.5rem',
};

export const ModalHeaderStack = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
}));

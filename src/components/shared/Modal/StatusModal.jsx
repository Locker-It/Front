import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

import SharedTypography from '../Text/SharedTypography';
import ActionButton from '../Button/ActionButton';
import {
  StyledDialogActions,
  iconStyle,
  ModalHeaderStack,
} from './StatusModal.styles';
import { MODAL_TYPES } from '../../../constants/types';

export const StatusModal = ({
  open,
  onClose,
  type,
  title,
  message,
  confirmText = MODAL_TYPES.CONFIRM_TEXT,
}) => {
  const isSuccess = type === MODAL_TYPES.SUCCESS;

  const icon = isSuccess ? (
    <CheckCircleIcon color="success" sx={iconStyle} />
  ) : (
    <ErrorIcon color="error" sx={iconStyle} />
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <ModalHeaderStack>
          {icon}
          <SharedTypography variant="h6">{title}</SharedTypography>
        </ModalHeaderStack>
      </DialogTitle>
      <DialogContent>
        <SharedTypography variant="body1">{message}</SharedTypography>
      </DialogContent>
      <StyledDialogActions>
        <ActionButton
          onClick={onClose}
          variant="contained"
          color={isSuccess ? 'primary' : 'error'}
          autoFocus
          fullWidth
        >
          {confirmText}
        </ActionButton>
      </StyledDialogActions>
    </Dialog>
  );
};

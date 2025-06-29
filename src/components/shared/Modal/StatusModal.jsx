import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

import {
  StyledDialogActions,
  iconStyle,
  ModalHeaderStack,
} from './StatusModal.styles';
import { BUTTON_VARIANTS, MODAL_TYPES } from '../../../constants/types';
import ActionButton from '../Button/ActionButton';
import SharedTypography from '../Text/SharedTypography';

export const StatusModal = ({
  open,
    onClose,
    onConfirm,
    type,
    title,
    message,
    confirmText = MODAL_TYPES.CONFIRM_TEXT,
    cancelText = MODAL_TYPES.CANCEL_TEXT,
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
      {onConfirm && onClose && (
        <StyledDialogActions>
          <ActionButton
            onClick={onClose}
            styleType={BUTTON_VARIANTS.OUTLINED}
            fullWidth
          >
            {cancelText}
          </ActionButton>
          <ActionButton
            onClick={onConfirm}
            styleType={BUTTON_VARIANTS.FILLED}
            fullWidth
          >
            {confirmText}
          </ActionButton>
        </StyledDialogActions>
      )}

      {!onConfirm && onClose && (
        <StyledDialogActions>
          <ActionButton
            onClick={onClose}
            styleType={BUTTON_VARIANTS.FILLED}
            autoFocus
            fullWidth
          >
            {confirmText}
          </ActionButton>
        </StyledDialogActions>
      )}
    </Dialog>
  );
};

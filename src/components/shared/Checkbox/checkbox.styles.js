import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&.Mui-checked': {
    color: theme.palette.secondary.main,
  },
}));

export const StyledLabel = styled('label')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

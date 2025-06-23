import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';


export const StyledSelect = styled(Select)(() => ({
  width: '12.5rem',
  '& .MuiSelect-indicator': {
    transition: '0.2s',
    '&.Mui-expanded': {
      transform: 'rotate(-180deg)',
    },
  },
}));


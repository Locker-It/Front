import theme from "../../theme/theme";

export const chipStyles = (selectedLockerId, currentId) => ({
    minWidth: '18.75rem',
    justifyContent: 'flex-start',
    borderColor:
      selectedLockerId === currentId
        ? theme.palette.primary.main
        : theme.palette.divider,
    color:
      selectedLockerId === currentId
        ? theme.palette.primary.main
        : theme.palette.text.primary,
    fontWeight: selectedLockerId === currentId ? 'bold' : 'normal',
    borderWidth: selectedLockerId === currentId ? '0.125rem' : '0.0625rem',
    borderStyle: 'solid',
    '&:hover': {
      borderColor: theme.palette.secondary.main,
    },
  });
  
  export const lockerStackStyle = {
    mt: 1,
    gap: 1,
  };
  
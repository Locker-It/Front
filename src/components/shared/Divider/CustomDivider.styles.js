import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.divider,
}));

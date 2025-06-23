import TextField from "@mui/material/TextField";
import React from "react";

import { inputStyles } from "./SearchInput.styled";
import { PLACEHOLDERS } from "../../constants/text";

const SearchInput = ({ value, onChange, placeholder = PLACEHOLDERS.SEARCH, sx = {} }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ ...inputStyles, ...sx }}
    />
  );
};

export default SearchInput;

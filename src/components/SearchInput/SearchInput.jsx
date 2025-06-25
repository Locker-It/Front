import React from "react";

import TextField from "@mui/material/TextField";

import { inputStyles } from "./SearchInput.styled";
import { PLACEHOLDERS } from "../../constants/hardText.js";

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

import React from 'react';
import { StyledSelect } from './Select.styles';
import { MenuItem } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useSelect } from './useSelect';
import { UI_TEXT } from '../../../constants/text';

const renderSelectValue = (selected, currentOptions, currentPlaceholder) => {
  if (selected === '' || selected === undefined) {
    return currentPlaceholder;
  }

  const selectedOption = currentOptions.find(
    (option) => option.value === selected,
  );
  return selectedOption ? selectedOption.label : currentPlaceholder;
};

export const SharedSelect = ({
  currentOptions = [],
  currentPlaceholder = UI_TEXT.SELECT_AN_OPTION,
  value,
  onChange,
}) => {
  const {
    value: selectedValue,
    handleChange,
    currentOptions: optionsFromHook,
    currentPlaceholder: placeholderFromHook,
  } = useSelect(value, currentOptions, currentPlaceholder);

  const handleSelectChange = (event) => {
    handleChange(event);
    onChange(event.target.value);
  };

  return (
    <StyledSelect
      value={value}
      onChange={handleSelectChange}
      displayEmpty
      IconComponent={KeyboardArrowDown}
      renderValue={(selected) =>
        renderSelectValue(selected, currentOptions, currentPlaceholder)
      }
    >
      {currentOptions.map((opt, index) => (
        //TODO give id based key key={_id}
        <MenuItem key={`${opt.value}-${index}`} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

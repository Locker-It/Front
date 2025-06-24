import React, { useState } from 'react';

import { StyledCheckbox, StyledLabel } from './checkbox.styles.js';

export default function SharedCheckbox({
  label = '',
  initialChecked = false,
  onChange = () => {},
}) {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (event) => {
    const newValue = event.target.checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <StyledLabel>
      <StyledCheckbox checked={checked} onChange={handleChange} />
      {label}
    </StyledLabel>
  );
}

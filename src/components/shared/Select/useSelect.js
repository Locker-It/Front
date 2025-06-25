import { useState } from 'react';

import {UI_TEXT} from '../../../constants/hardText.js'

export const useSelect = (initialValue = '', initialOptions = [], initialPlaceholder = UI_TEXT.SELECT_AN_OPTION) => {
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(initialOptions);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    options,
    setOptions,
    placeholder,
    setPlaceholder,
    handleChange,
  };
};

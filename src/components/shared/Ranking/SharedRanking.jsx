import React, { useState } from 'react';

import { StyledRating, RatingWrapper } from './Ranking.styles';

const DEFAULT_INITIAL_RANKING = 0;
const DEFAULT_MAX_RANKING = 5;
const RANKING_INPUT_NAME = 'shared-ranking';

export default function SharedRanking({
  label = '',
  initialValue = DEFAULT_INITIAL_RANKING,
  max = DEFAULT_MAX_RANKING,
  onChange = () => {},
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <RatingWrapper>
      {label && <span>{label}</span>}
      {/* Temporarily disabled ranking stars */}
      <StyledRating
        name={RANKING_INPUT_NAME}
        value={value}
        onChange={handleChange}
        max={max}
        readOnly={true}
      />
    </RatingWrapper>
  );
}

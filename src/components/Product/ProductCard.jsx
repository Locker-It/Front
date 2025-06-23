import { CardContent, CardActionArea } from '@mui/material';
import React from 'react';

import { StyledCard } from './Product.styled.js';
import { UI_TEXT } from '../../constants/text';
import { addSignShekel  } from '../../utils/converting.js';
import { SharedImage } from '../shared/Image/SharedImage.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const ProductCard = ({
  id,
  images,
  name,
  price,
  rating,
  onSelect,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <CardActionArea onClick={() => onSelect(id)}>
        <SharedImage src={images} alt={name} />

        <CardContent>
          <SharedTypography variant={UI_TEXT.SUBTITLE1_VARIANT}>
            {name}
          </SharedTypography>

          <SharedTypography variant="body2">
            {addSignShekel (price)}
          </SharedTypography>

        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;

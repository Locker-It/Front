import React from 'react';

import { CardContent, CardActionArea } from '@mui/material';

import { StyledCard } from './Product.styled.js';
import { addSignShekel  } from '../../utils/converting.js';
import { SharedImage } from '../shared/Image/SharedImage.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const ProductCard = ({
  id,
  images,
  name,
  price,
  onSelect,
}) => {
  return (
    <StyledCard>
      <CardActionArea onClick={() => onSelect(id)}>
        <SharedImage src={images} alt={name} />

        <CardContent>
          <SharedTypography variant="h5">
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

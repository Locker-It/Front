import React from 'react';
import { CardContent, CardActionArea } from '@mui/material';
import {
  StyledCard,
  UnavailableOverlay,
  NotAvailableBadge,
} from './Product.styled.js';
import { addSignShekel } from '../../utils/converting.js';
import { SharedImage } from '../shared/Image/SharedImage.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import { STATUSES } from '../../constants/hardText.js';

const ProductCard = ({
  id,
  images,
  name,
  price,
  onSelect,
  status,
  ...props
}) => {
  const isUnavailable = status === 'unavailable';

  return (
    <StyledCard {...props} unavailable={isUnavailable}>
      {isUnavailable && (
        <UnavailableOverlay>
          <NotAvailableBadge> {STATUSES.NOT_AVAILABLE}</NotAvailableBadge>
        </UnavailableOverlay>
      )}

      <CardActionArea onClick={() => !isUnavailable && onSelect(id)}>
        <SharedImage src={images} alt={name} />
        <CardContent>
          <SharedTypography variant="h5">{name}</SharedTypography>
          <SharedTypography variant="body2">
            {addSignShekel(price)}
          </SharedTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;

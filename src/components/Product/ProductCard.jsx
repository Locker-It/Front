import { CardContent, CardActionArea } from '@mui/material';

import {
  StyledCard,
  UnavailableOverlay,
  NotAvailableBadge,
} from './Product.styles.js';
import { STATUSES } from '../../constants/hardText.js';
import { TEXT_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import { SharedImage } from '../shared/Image/SharedImage.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const ProductCard = ({ id, images, name, price, status, onSelect }) => {
  const isUnavailable = status === STATUSES.UNAVAILABLE;

  return (
    <StyledCard unavailable={isUnavailable}>
      {isUnavailable && (
        <UnavailableOverlay>
          <NotAvailableBadge>{STATUSES.NOT_AVAILABLE}</NotAvailableBadge>
        </UnavailableOverlay>
      )}

      <CardActionArea onClick={() => !isUnavailable && onSelect(id)}>
        <SharedImage src={images} alt={name} />
        <CardContent>
          <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
            {name}
          </SharedTypography>
          <SharedTypography variant={TEXT_VARIANTS.DEFAULT}>
            {addSignShekel(price)}
          </SharedTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default ProductCard;

import { Grid, Box, Divider } from '@mui/material';

import {
  GridContainer,
  EmptyCartContainer,
  CartContainer,
  CartItemCard,
  ProductImage,
  ProductContent,
  SummaryCard,
  SummaryRowWrapper,
  StyledDivider,
} from './Cart.styles';
import { SharedImage } from '../../components/shared/Image/SharedImage.jsx';
import { CART_TEXT } from '../../constants/hardText.js';
import { TEXT_VARIANTS, BUTTON_VARIANTS } from '../../constants/types.js';
import { addSignShekel } from '../../utils/converting.js';
import { LOCKER_LOCATION } from '../../utils/textTemplates.js';
import ActionButton from '../shared/Button/ActionButton.jsx';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

const Cart = ({
  items,
  total,
  onContinue,
  handleItemRemove,
  isLoading = false,
  isError = false,
}) => {
  const validItems = Array.isArray(items) ? items : [];
  const isCartEmpty = validItems.length === 0;
  const canPurchase = !isCartEmpty && total > 0;

  if (isLoading || isError || isCartEmpty) {
    const status = isLoading
      ? CART_TEXT.CART_LOADING
      : isError
        ? CART_TEXT.CART_ERROR
        : CART_TEXT.CART_EMPTY;

    return (
      <EmptyCartContainer>
        <SharedTypography variant={TEXT_VARIANTS.PAGE_TITLE}>
          {CART_TEXT.CART_TITLE}
        </SharedTypography>
        <SharedTypography variant={TEXT_VARIANTS.STATUS_TEXT}>
          {status}
        </SharedTypography>
      </EmptyCartContainer>
    );
  }

  return (
    <CartContainer>
      <GridContainer container spacing={4}>
        <Grid item xs={12} md={9}>
          <SharedTypography variant={TEXT_VARIANTS.PAGE_TITLE}>
            {CART_TEXT.CART_TITLE}
          </SharedTypography>

          {validItems.map(({ id, images, name, price, lockerId }) => (
            <CartItemCard key={id}>
              <SharedImage src={images} alt={name} style={ProductImage} />

              <ProductContent>
                <SharedTypography variant={TEXT_VARIANTS.PRODUCT_TITLE}>
                  {name}
                </SharedTypography>

                <SharedTypography variant={TEXT_VARIANTS.PRODUCT_PRICE}>
                  {addSignShekel(price)}
                </SharedTypography>

                <SharedTypography variant={TEXT_VARIANTS.PRODUCT_LOCATION}>
                  {LOCKER_LOCATION.LOCKER_LABEL(
                    lockerId?.lockerNumber ?? '',
                    lockerId?.location ?? '',
                  )}
                </SharedTypography>

                <ActionButton
                  onClick={() => handleItemRemove(id)}
                  styleType={BUTTON_VARIANTS.OUTLINED}
                >
                  {CART_TEXT.REMOVE_BUTTON}
                </ActionButton>
              </ProductContent>
            </CartItemCard>
          ))}
        </Grid>

        <Grid item xs={12} md={3}>
          <SummaryCard>
            <SharedTypography variant={TEXT_VARIANTS.SECTION_TITLE}>
              {CART_TEXT.ORDER_SUMMARY}
            </SharedTypography>

            <SummaryRowWrapper>
              <SharedTypography variant={TEXT_VARIANTS.SUMMARY_ROW}>
                {CART_TEXT.SUBTOTAL}
              </SharedTypography>
              <SharedTypography variant={TEXT_VARIANTS.SUMMARY_ROW}>
                {addSignShekel(total)}
              </SharedTypography>
            </SummaryRowWrapper>

            <StyledDivider />

            <SummaryRowWrapper>
              <SharedTypography variant={TEXT_VARIANTS.SECTION_TOTAL}>
                {CART_TEXT.CART_TOTAL}
              </SharedTypography>
              <SharedTypography variant={TEXT_VARIANTS.SECTION_TOTAL}>
                {addSignShekel(total)}
              </SharedTypography>
            </SummaryRowWrapper>

            <ActionButton
              onClick={onContinue}
              disabled={!canPurchase}
              fullWidth
              styleType={BUTTON_VARIANTS.FILLED}
              sx={{ mt: 3 }}
            >
              {CART_TEXT.CONTINUE_TO_PURCHASE}
            </ActionButton>
          </SummaryCard>
        </Grid>
      </GridContainer>
    </CartContainer>
  );
};

export default Cart;

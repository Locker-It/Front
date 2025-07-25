import { Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { getTextStyles } from '../shared/Text/textVariants';

const defaultTextColor = getTextStyles().DEFAULT.color;

export const StyledCard = styled(Card)(({ theme, unavailable }) => ({
  width: '15rem',
  height: '17rem',
  position: 'relative',
  overflow: 'hidden',
  transition: theme.transitions.card || 'all 0.3s ease',
  filter: unavailable ? 'grayscale(100%) brightness(0.8)' : 'none',
  pointerEvents: unavailable ? 'none' : 'auto',
  '&:hover': unavailable
    ? {}
    : {
        transform: 'translateY(-0.3125rem)',
        boxShadow: theme.customShadows.cardHover,
      },
}));

export const UnavailableOverlay = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  backdropFilter: 'blur(0.125rem)',
  background: 'linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const NotAvailableBadge = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.disabledCard.background,
  color: defaultTextColor,
  padding: `${theme.spacing(1 / 2)} ${theme.spacing(1)}`,
  borderRadius: '1.25rem',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '1rem',
  boxShadow: theme.customShadows.main,
}));

export const BigStyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '37.5rem',
  margin: '0 auto',
  borderRadius: theme.shape.custom.roundedLg,
}));

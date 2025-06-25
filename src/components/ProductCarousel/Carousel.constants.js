import theme from '../../theme/theme.js';

export const SLIDES_TO_SHOW_DEFAULT = 4;
export const AUTOPLAY_SPEED_MS = 2000;

export const RESPONSIVE_BREAKPOINTS = [
  {
    breakpoint: theme.breakpoints.values.lg,
    settings: { slidesToShow: 3 },
  },
  {
    breakpoint: theme.breakpoints.values.md,
    settings: { slidesToShow: 2 },
  },
  {
    breakpoint: theme.breakpoints.values.sm,
    settings: { slidesToShow: 1 },
  },
];

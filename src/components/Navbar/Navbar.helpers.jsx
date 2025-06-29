import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';

export const mainNavItems = [
  { to: ROUTER_PATHS.HOME, label: BUTTON_TEXT.HOME },
  { to: ROUTER_PATHS.ABOUT, label: BUTTON_TEXT.ABOUT },
  { to: ROUTER_PATHS.PRODUCTS, label: BUTTON_TEXT.PRODUCTS },
];

export const cartNavItem = { to: ROUTER_PATHS.CART, label: BUTTON_TEXT.CART };

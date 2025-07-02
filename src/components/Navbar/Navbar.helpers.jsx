import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';

export const mainNavItems = [
  { to: ROUTER_PATHS.HOME, label: BUTTON_TEXT.HOME },
  { to: ROUTER_PATHS.ABOUT, label: BUTTON_TEXT.ABOUT },
  { to: ROUTER_PATHS.PRODUCTS, label: BUTTON_TEXT.PRODUCTS },
];

export const loggedInItems = [
  { to: ROUTER_PATHS.CART, label: BUTTON_TEXT.CART },
  { to: ROUTER_PATHS.ADD_PRODUCT, label: BUTTON_TEXT.SELL_PRODUCT,
  }
];


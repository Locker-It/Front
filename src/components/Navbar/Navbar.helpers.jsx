import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';
import { UI_TEXT } from '../../constants/hardText.js';
export const mainNavItems = [
  { to: ROUTER_PATHS.HOME, label: BUTTON_TEXT.HOME },
  { to: ROUTER_PATHS.PRODUCTS, label: BUTTON_TEXT.PRODUCTS },
];

export const getLoggedInItems = (role) => {
  const commonItems = [
    { to: ROUTER_PATHS.CART, label: BUTTON_TEXT.CART },
    { to: ROUTER_PATHS.ADD_PRODUCT, label: BUTTON_TEXT.SELL_PRODUCT },
  ];

  const dashboard =
    role === UI_TEXT.ADMIN
      ? { to: ROUTER_PATHS.MANAGER_PAGE, label: BUTTON_TEXT.DASHBOARD }
      : { to: ROUTER_PATHS.CUSTOMER_PAGE, label: BUTTON_TEXT.DASHBOARD };

  return [...commonItems, dashboard];
};

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ORDER_PROCESS: '/orderProcess',
  MANAGER_PAGE: '/managerPage',
  CUSTOMER_PAGE: '/customerPage',
  PRODUCT_DETAILS: '/products/:id',
  CART: '/cart',
  ADD_TO_CART: '/add-to-cart',
  REMOVE_FROM_CART: '/remove-from-cart',
  DASHBOARD_CARDS: '/dashboardCards',
  ADD_PRODUCT: '/dashboardCards/newproduct',
  AUTH_REFRESH: '/auth/refresh',
  PRODUCT_ID_PARAM: ':id',
  LOGOUT: '/auth/logout',
  CURRENT_USER: '/auth/me',
  DASHBOARD: '/dashboard',
  LOCKERS: '/lockers',
  AVAILABLE_LOCKERS: '/available-lockers',

};

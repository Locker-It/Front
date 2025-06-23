export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  USERS: '/users',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ORDER_PROCESS: '/orderProcess',
  MANAGER_PAGE: '/managerPage',
  CUSTOMER_PAGE: '/customerPage',
  PRODUCT_DETAILS: '/products/:id',
  CART: '/cart',
  DASHBOARD_CARDS: '/dashboardCards',
  ADD_PRODUCT: '/dashboardCards/newproduct',
  AUTH_REFRESH: '/auth/refresh',
  PRODUCT_ID_PARAM: ':id',
  LOGOUT: '/auth/logout',
  CURRENT_USER: '/auth/me'
};

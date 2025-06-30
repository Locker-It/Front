import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import { authApi } from '../services/authApi';
import { cartApi } from '../services/cartApi';
import { availableLockerApi } from '../services/availableLockerApi';
import { lockerApi } from '../services/lockerApi';
import { productApi } from '../services/product/productApi.js';
import { purchaseApi } from '../services/purchaseApi.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [availableLockerApi.reducerPath]: availableLockerApi.reducer,
    [lockerApi.reducerPath]: lockerApi.reducer,
    [purchaseApi.reducerPath]: purchaseApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      cartApi.middleware,
      productApi.middleware,
      availableLockerApi.middleware,
      lockerApi.middleware,
      purchaseApi.middleware,
    ),
});

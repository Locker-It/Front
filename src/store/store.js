import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import { authApi } from '../services/authApi';
import { cartApi } from '../services/cartApi';
import { productApi } from '../services/productApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      cartApi.middleware,
      productApi.middleware,
    ),
});

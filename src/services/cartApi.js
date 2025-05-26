import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/routerPaths';
import { ROUTES } from '../constants/routerPaths';
import { HTTP_METHODS } from '../constants/httpMethods';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_SERVER_URL }),
  endpoints: (builder) => ({
    AddToCart: builder.mutation({
      query: (product) => ({
        url: ROUTES.CART,
        method: HTTP_METHODS.POST,
        body: product,
      }),
    }),
    getCart: builder.query({
      query: () => ROUTES.CART,
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.CART}/${productId}`,
        method: HTTP_METHODS.DELETE,
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;

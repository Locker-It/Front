import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithSession } from './baseQueryWithSession';
import { HTTP_METHODS } from '../constants/httpMethods';
import { TAG_TYPES } from '../constants/types';
import { BASE_URL, ROUTES } from '../constants/routerPaths';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: baseQueryWithSession,
  tagTypes: [TAG_TYPES.CART],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.PRODUCTS}/${productId}${ROUTES.ADD_TO_CART}`,
        method: HTTP_METHODS.PATCH,
      }),
      invalidatesTags: [TAG_TYPES.CART, TAG_TYPES.PRODUCT],
    }),

    getCart: builder.query({
      query: () => `${ROUTES.PRODUCTS}${ROUTES.CART}`,
      providesTags: [TAG_TYPES.CART, TAG_TYPES.PRODUCT],
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.PRODUCTS}/${productId}${ROUTES.REMOVE_FROM_CART}`,
        method: HTTP_METHODS.PATCH,
      }),
      invalidatesTags: [TAG_TYPES.CART, TAG_TYPES.PRODUCT],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartApi;

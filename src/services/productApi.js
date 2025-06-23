import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTP_METHODS } from '../constants/httpMethods';
import { ROUTES } from '../constants/routerPaths';
import { TAG_TYPES } from '../constants/types.js';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_SERVER_URL }),
  tagTypes: [TAG_TYPES.PRODUCT],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ROUTES.PRODUCTS,
      providesTags: [TAG_TYPES.PRODUCT],
    }),
    getNewestProducts: builder.query({
      query: () => `${ROUTES.PRODUCTS}?limit=8&sort=newest`,
      providesTags: [TAG_TYPES.PRODUCT],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${ROUTES.PRODUCTS}/${productId}`,
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: [TAG_TYPES.PRODUCT],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, updatedData }) => ({
        url: `${ROUTES.PRODUCTS}/${productId}`,
        method: HTTP_METHODS.PATCH,
        body: updatedData,
      }),
      invalidatesTags: [TAG_TYPES.PRODUCT],
    }),
    getProductById: builder.query({
      query: (id) => `${ROUTES.PRODUCTS}/${id}`,
      providesTags: (result, error, id) => [{ type: TAG_TYPES.PRODUCT, id }],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: ROUTES.PRODUCTS,
        method: HTTP_METHODS.POST,
        body: newProduct,
      }),
      invalidatesTags: [TAG_TYPES.PRODUCT],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNewestProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddProductMutation,
  useGetProductByIdQuery,
} = productApi;

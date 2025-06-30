import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithSession } from './baseQueryWithSession';
import { HTTP_METHODS } from '../constants/httpMethods';
import { ROUTES } from '../constants/routes.constants';
import { TAG_TYPES } from '../constants/types';

export const purchaseApi = createApi({
  reducerPath: 'purchaseApi',
  baseQuery: baseQueryWithSession,
  tagTypes: [TAG_TYPES.PURCHASE, TAG_TYPES.PRODUCT, TAG_TYPES.LOCKER],
  endpoints: (builder) => ({
    createPurchase: builder.mutation({
      query: (body) => ({
        url: ROUTES.PURCHASES,
        method: HTTP_METHODS.POST,
        body,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: TAG_TYPES.PURCHASE },
        { type: TAG_TYPES.PRODUCT },
        { type: TAG_TYPES.LOCKER, id: productId }, 
        { type: TAG_TYPES.CART },
      ],
    }),
  }),
});

export const { useCreatePurchaseMutation } = purchaseApi;

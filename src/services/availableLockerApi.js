import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES } from '../constants/routes.constants';
import { HTTP_METHODS } from '../constants/httpMethods';
import { TAG_TYPES } from '../constants/types';

export const availableLockerApi = createApi({
  reducerPath: 'availableLockerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_SERVER_URL,
  }),
  tagTypes: [TAG_TYPES.AVAILABLE_LOCKER],
  endpoints: (builder) => ({
    getAvailableLockers: builder.query({
      query: () => `${ROUTES.AVAILABLE_LOCKERS}`,
      providesTags: [TAG_TYPES.AVAILABLE_LOCKER],
    }),

    getAvailableLockerById: builder.query({
      query: (id) => `${ROUTES.AVAILABLE_LOCKERS}/${id}`,
      providesTags: (result, error, id) => [
        { type: TAG_TYPES.AVAILABLE_LOCKER, id },
      ],
    }),

    getAvailableLockersByProductId: builder.query({
      query: (productId) => `${ROUTES.AVAILABLE_LOCKERS}/product/${productId}`, 
      providesTags: (_r, _e, productId) => [
        { type: TAG_TYPES.AVAILABLE_LOCKER, id: productId },
      ],
    }),

    addAvailableLocker: builder.mutation({
      query: (data) => ({
        url: ROUTES.AVAILABLE_LOCKERS,
        method: HTTP_METHODS.POST,
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.AVAILABLE_LOCKER],
    }),

    deleteAvailableLocker: builder.mutation({
      query: (id) => ({
        url: `${ROUTES.AVAILABLE_LOCKERS}/${id}`,
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: [TAG_TYPES.AVAILABLE_LOCKER],
    }),

    updateAvailableLocker: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ROUTES.AVAILABLE_LOCKERS}/${id}`,
        method: HTTP_METHODS.PATCH,
        body: data,
      }),
      invalidatesTags: [TAG_TYPES.AVAILABLE_LOCKER],
    }),
  }),
});

export const {
  useGetAvailableLockersQuery,
  useGetAvailableLockerByIdQuery,
  useGetAvailableLockersByProductIdQuery,
  useAddAvailableLockerMutation,
  useDeleteAvailableLockerMutation,
  useUpdateAvailableLockerMutation,
} = availableLockerApi;

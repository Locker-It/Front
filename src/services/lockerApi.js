import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HTTP_METHODS } from '../constants/httpMethods';
import { ROUTES } from '../constants/routes.constants';
import { TAG_TYPES } from '../constants/types';

export const lockerApi = createApi({
  reducerPath: 'lockerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_SERVER_URL,
  }),
  tagTypes: [TAG_TYPES.LOCKER],
  endpoints: (builder) => ({
    getAllLockers: builder.query({
      query: () => `${ROUTES.LOCKERS}`,
      providesTags: [TAG_TYPES.LOCKER],
    }),

    getLockerById: builder.query({
      query: (id) => `${ROUTES.LOCKERS}/${id}`,
      providesTags: (result, error, id) => [{ type: TAG_TYPES.LOCKER, id }],
    }),

    addLocker: builder.mutation({
      query: (newLocker) => ({
        url: ROUTES.LOCKERS,
        method: HTTP_METHODS.POST,
        body: newLocker,
      }),
      invalidatesTags: [TAG_TYPES.LOCKER],
    }),

    updateLocker: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `${ROUTES.LOCKERS}/${id}`,
        method: HTTP_METHODS.PATCH,
        body: updatedData,
      }),
      invalidatesTags: [TAG_TYPES.LOCKER],
    }),

    deleteLocker: builder.mutation({
      query: (id) => ({
        url: `${ROUTES.LOCKERS}/${id}`,
        method: HTTP_METHODS.DELETE,
      }),
      invalidatesTags: [TAG_TYPES.LOCKER],
    }),
  }),
});

export const {
  useGetAllLockersQuery,
  useGetLockerByIdQuery,
  useAddLockerMutation,
  useUpdateLockerMutation,
  useDeleteLockerMutation,
} = lockerApi;

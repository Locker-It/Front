import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTP_METHODS } from '../constants/httpMethods.js';
import { ROUTES } from '../constants/routes.constants.js';
import { TAG_TYPES } from '../constants/types.js';

export const imageUploadApi = createApi({
  reducerPath: 'imageUploadApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    credentials: 'include',
  }),
  tagTypes: [TAG_TYPES.IMAGE],
  endpoints: (builder) => ({
    getPresignedUrl: builder.mutation({
      query: ({ filename, mimetype }) => ({
        url: ROUTES.PRESIGNED_URL,
        method: HTTP_METHODS.POST,
        body: { filename, mimetype },
      }),
    }),
  }),
});

export const {
  useGetPresignedUrlMutation,
} = imageUploadApi;

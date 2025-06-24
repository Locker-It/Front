import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithSession } from './baseQueryWithSession.js';
import { AUTH_ERRORS } from '../constants/auth.constants';
import { HTTP_METHODS } from '../constants/httpMethods';
import { ROUTES } from '../constants/routerPaths';
import { loginSuccess } from '../store/authSlice';


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithSession,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: ROUTES.LOGIN,
        method: HTTP_METHODS.POST,
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { user } = data;
          if (!user) throw new Error(AUTH_ERRORS.INVALID_TOKEN);
          dispatch(loginSuccess({ user }));
        } catch (err) {
          console.error(AUTH_ERRORS.LOGIN_FAILED, err);
        }
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: ROUTES.LOGOUT,
        method: HTTP_METHODS.POST,
      }),
    }),

    registerUser: builder.mutation({
      query: (newUser) => ({
        url: ROUTES.REGISTER,
        method: HTTP_METHODS.POST,
        body: newUser,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: ROUTES.CURRENT_USER,
        method: HTTP_METHODS.GET,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useGetCurrentUserQuery,
} = authApi;

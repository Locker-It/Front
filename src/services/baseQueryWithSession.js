import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTP_METHODS } from '../constants/httpMethods.js';
import { ROUTES } from '../constants/routes.constants.js';
import { loginSuccess, logout } from '../store/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_SERVER_URL,
  credentials: 'include',
});

export const baseQueryWithSession = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery(
      { url: ROUTES.AUTH_REFRESH, method: HTTP_METHODS.POST },
      api,
      extraOptions
    );

    if (refreshResult?.data?.user) {
      api.dispatch(loginSuccess({ user: refreshResult.data.user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

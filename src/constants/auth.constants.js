export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
};

export const AUTH_RESPONSE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  SUCCESS: 'success',
};

export const AUTH_ERRORS = {
  INVALID_LOGIN_RESPONSE: 'Invalid login response structure',
  LOGOUT_FAILED: 'Logout failed',
  LOGIN_FAILED: 'Login failed',
  GENERAL_LOGIN_ERROR: 'General login error',
  GENERAL_LOGOUT_ERROR: 'General logout error',
  UNAUTHORIZED_LOGIN: 'Invalid username or password',
  UNAUTHORIZED_LOGOUT: 'User is not logged in',
  LOGIN_ERROR: 'Login error:',
  REGISTER_FAILED: 'Registration failed',
  GENERAL_REGISTER_ERROR: 'General registration error',
  DUPLICATE_EMAIL: 'Email already exists',
  FAILED_DECODE_JWT: 'Failed to decode JWT',
  INVALID_TOKEN: 'Invalid token. Auth not restored.',

};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  LOGIN_FAILED: 'login failed',
  LOGIN_ERROR: 'Login error:',
  FAILED_DECODE_JWT: 'Failed to decode JWT:',
  INVALID_TOKEN: 'Invalid token. Auth not restored.',
};

export const ROUTES = {
  LOGIN: '/login',
};

export const USER_TOKEN_FIELDS = {
  ID: 'userId',
  USERNAME: 'username',
};

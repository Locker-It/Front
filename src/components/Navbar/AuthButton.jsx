import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';
import ActionButton from '../shared/Button/ActionButton.jsx';

function AuthButton({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  return isLoggedIn ? (
    <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={handleLogout}>
      {BUTTON_TEXT.LOGOUT}
    </ActionButton>
  ) : (
    <ActionButton
      styleType={BUTTON_VARIANTS.FILLED}
      onClick={() => navigate(ROUTER_PATHS.LOGIN)}
    >
      {BUTTON_TEXT.LOGIN}
    </ActionButton>
  );
}

export default AuthButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import { UI_TEXT } from '../../constants/text.js';
import ActionButton from '../shared/Button/ActionButton.jsx';

function AuthButton({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  return isLoggedIn ? (
    <ActionButton styleType={BUTTON_VARIANTS.FILLED} onClick={handleLogout}>
      {UI_TEXT.LOGOUT}
    </ActionButton>
  ) : (
    <ActionButton
      styleType={BUTTON_VARIANTS.FILLED}
      onClick={() => navigate(ROUTER_PATHS.LOGIN)}
    >
      {UI_TEXT.LOGIN}
    </ActionButton>
  );
}

export default AuthButton;

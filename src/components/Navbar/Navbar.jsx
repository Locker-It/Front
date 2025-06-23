import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthButton from './AuthButton.jsx';
import { mainNavItems } from './Navbar.helpers.jsx';
import {
  CustomAppBar,
  CustomToolbar,
  LeftSection,
  CenterSection,
  RightSection,
} from './Navbar.styled';
import { BUTTON_VARIANTS } from '../../constants/buttonTypes.js';
import { ERROR_MESSAGES } from '../../constants/errors.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import { useLogoutUserMutation } from '../../services/authApi.js';
import { logout } from '../../store/authSlice.js';
import UserGreeting from '../Auth/UserGreeting.jsx';
import ActionButton from '../shared/Button/ActionButton.jsx';
import SharedTypography from '../shared/Text/SharedText.jsx';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate(ROUTER_PATHS.HOME);
    } catch (error) {
      console.error(ERROR_MESSAGES.LOGOUT_FAILED, error);
    }
  };

  return (
    <CustomAppBar position="static">
      <CustomToolbar>
        <LeftSection>
          <SharedTypography variant="h6">SecondHand Store</SharedTypography>
          <UserGreeting />
        </LeftSection>

        <CenterSection>
          {mainNavItems.map(({ to, label }) => (
            <ActionButton key={to} styleType={BUTTON_VARIANTS.NAVBAR} to={to}>
              {label}
            </ActionButton>
          ))}
        </CenterSection>

        <RightSection>
          <AuthButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </RightSection>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default Navbar;

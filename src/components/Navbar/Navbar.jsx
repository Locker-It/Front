import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthButton from './AuthButton.jsx';
import { cartNavItem, mainNavItems } from './Navbar.helpers.jsx';
import {
  CustomAppBar,
  CustomToolbar,
  LeftSection,
  CenterSection,
  RightSection,
} from './Navbar.styled';
import { ERROR_MESSAGES } from '../../constants/errorMessages.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';
import { BUTTON_VARIANTS, MODAL_TYPES } from '../../constants/types.js';
import { useLogoutUserMutation } from '../../services/authApi.js';
import { logout } from '../../store/authSlice.js';
import UserGreeting from '../Auth/UserGreeting.jsx';
import ActionButton from '../shared/Button/ActionButton.jsx';
import Logo from '../shared/Logo/Logo.jsx';
import { StatusModal } from '../shared/Modal/StatusModal.jsx';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const [modalData, setModalData] = React.useState(null);

  const navItems = React.useMemo(() => {
    const items = [...mainNavItems];
    if (isLoggedIn) {
      items.push(cartNavItem);
    }
    return items;
  }, [isLoggedIn]);

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      setModalData({
        type: MODAL_TYPES.SUCCESS,
        title: MODAL_TYPES.LOGOUT_SUCCESS,
        message: MODAL_TYPES.LOGOUT_SUCCESS_MESSAGE,
      });

      setTimeout(() => {
        setModalData(null);
        navigate(ROUTER_PATHS.HOME);
      }, 2000);

    } catch (error) {
      console.error(ERROR_MESSAGES.LOGOUT_FAILED, error);
    }
  };

  return (
    <CustomAppBar position="static">
      {modalData && (
        <StatusModal
          open
          type={modalData.type}
          title={modalData.title}
          message={modalData.message}
          onClose={modalData.onClose}
        />
      )}
      <CustomToolbar>
        <LeftSection>
          <Logo variant="NAVBAR" alt="Company Logo" />
          {isLoggedIn && user?.username && (
            <UserGreeting username={user.username} />
          )}
        </LeftSection>

        <CenterSection>
          {navItems.map(({ to, label }) => (
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

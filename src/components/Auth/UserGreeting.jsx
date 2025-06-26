import React from 'react';

import { useSelector } from 'react-redux';

import { NAVBAR_TEXT } from '../../constants/hardText.js';
import { TEXT_VARIANTS } from '../../constants/types.js';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

function UserGreeting() {
  const username = useSelector((state) => state.auth.user?.username);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn || !username) return null;

  return (
    <SharedTypography variant={TEXT_VARIANTS.NAV_TITLE}>
      {NAVBAR_TEXT.HELLO_USER}{username}
    </SharedTypography>
  );
}

export default UserGreeting;

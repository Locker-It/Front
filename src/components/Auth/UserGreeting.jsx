import React from 'react';
import { useSelector } from 'react-redux';

import { UI_TEXT } from '../../constants/text.js';
import SharedTypography from '../shared/Text/SharedText.jsx';

function UserGreeting() {
  const username = useSelector((state) => state.auth.user?.username);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn || !username) return null;

  return (
    <SharedTypography variant="body1">
      {UI_TEXT.HELLO_USER}{username}
    </SharedTypography>
  );
}

export default UserGreeting;

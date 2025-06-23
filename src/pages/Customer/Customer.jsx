import React from 'react';

import { managementContainerStyle } from './Customer.styled.js';
import FloatingActionButtonZoom from '../../components/Manage/SharedManagementBar.jsx';
import { UI_TEXT } from '../../constants/text.js';

function Customer_Bar() {
  return (
    <div style={managementContainerStyle}>
      <FloatingActionButtonZoom role={UI_TEXT.CUSTOMER} />
    </div>
  );
}

export default Customer_Bar;

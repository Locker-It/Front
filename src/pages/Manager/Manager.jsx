import React from 'react';

import { managementContainerStyle } from './Manager.styled.js';
import FloatingActionButtonZoom from '../../components/Manage/SharedManagementBar.jsx';
import { UI_TEXT } from '../../constants/hardText.js';

function Manager_bar() {
  return (
    <div style={managementContainerStyle}>
      <FloatingActionButtonZoom role={UI_TEXT.MANAGER} />
    </div>
  );
}

export default Manager_bar;

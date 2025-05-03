import React from 'react';
import { managementContainerStyle } from './Manage.styled.js';
import FloatingActionButtonZoom from '../../components/shared/Management_bar/SharedManagementBar.jsx';
import { UI_TEXT } from '../../constants/text.js';
function Manager_bar() {
  return (
    <div style={managementContainerStyle}>
      <FloatingActionButtonZoom role={UI_TEXT.MANAGER} />
    </div>
  );
}

export default Manager_bar;

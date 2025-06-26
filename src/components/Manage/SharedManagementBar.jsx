import * as React from 'react';
import { useState } from 'react';

import { Box, Tabs, Tab } from '@mui/material';

import {
  tabPanelStyle,
  containerOuterBox,
  StyledAppBar,
} from './SharedManagementBar.styled';
import ManagerCustomers from './Tabs/ManagerCustomers';
import ManagerDashboard from './Tabs/ManagerDashboard';
import ManagerLockers from './Tabs/ManagerLockers';
import ManagerOrders from './Tabs/ManagerOrders';
import ManagerProducts from './Tabs/ManagerProducts';
import UserOrders from './Tabs/UserOrders';
import UserProducts from './Tabs/UserProducts';
import UserProfile from './Tabs/UserProfile';
import { BUTTON_TEXT } from '../../constants/buttons.constants.js';
import { UI_TEXT } from '../../constants/hardText.js';
import SharedTypography from '../shared/Text/SharedTypography.jsx';

function TabPanel({ children, value, index, ...other }) {
  const isHidden = value !== index;
  return (
    <SharedTypography
      component="div"
      role="tabpanel"
      hidden={isHidden}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {!isHidden && <Box sx={tabPanelStyle}>{children}</Box>}
    </SharedTypography>
  );
}

function getAccessibilityPropsForTab(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom({ role }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isManager = role === UI_TEXT.MANAGER;

  const managerTabs = [
    { label: BUTTON_TEXT.ORDER, component: <ManagerOrders /> },
    { label: BUTTON_TEXT.PRODUCTS, component: <ManagerProducts /> },
    { label: BUTTON_TEXT.CUSTOMERS, component: <ManagerCustomers /> },
    { label: BUTTON_TEXT.LOCKERS, component: <ManagerLockers /> },
    { label: BUTTON_TEXT.DASHBOARD, component: <ManagerDashboard /> },
  ];

  const customerTabs = [
    { label: BUTTON_TEXT.ORDER, component: <UserOrders /> },
    { label: BUTTON_TEXT.PRODUCTS, component: <UserProducts /> },
    { label: BUTTON_TEXT.PROFILE, component: <UserProfile /> },
  ];
  const tabs = isManager ? managerTabs : customerTabs;

  return (
    <Box style={containerOuterBox}>
      <StyledAppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="role-based tabs"
        >
          {tabs.map((tab, index) => (
            <Tab
              key={`${role}-${tab.label}`}
              label={tab.label}
              {...getAccessibilityPropsForTab(index)}
            />
          ))}
        </Tabs>
      </StyledAppBar>

      <Box>
        {tabs.map((tab, index) => (
          <TabPanel value={value} index={index} key={`${role}-${tab.label}`}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}

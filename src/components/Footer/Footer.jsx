import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import { Link } from '@mui/material';

import {
  FooterContainer,
  FooterLinks,
  footerTextStyle,
} from './Footer.styles.js';
import { UI_TEXT } from '../../constants/hardText.js';
import { ROUTES as ROUTER_PATHS } from '../../constants/routes.constants.js';
import SharedTypography from '../shared/Text/SharedTypography.jsx';
import {BUTTON_TEXT} from  '../../constants/buttons.constants.js';

function Footer() {
  return (
    <FooterContainer component="footer">
      <SharedTypography variant="body2" style={footerTextStyle}>
        © {new Date().getFullYear()} {UI_TEXT.LOCKER_IT}
      </SharedTypography>

      <FooterLinks>
        <Link component={RouterLink} to={ROUTER_PATHS.ABOUT}>
          {BUTTON_TEXT.ABOUT}
        </Link>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;

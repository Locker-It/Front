import React from 'react';
import { Link } from '@mui/material';
import {
  FooterContainer,
  FooterLinks,
  footerTextStyle,
} from './Footer.styled.js';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES as ROUTER_PATHS } from '../../constants/routerPaths.js';
import SharedTypography from '../shared/Text/SharedText.jsx';
import { UI_TEXT } from '../../constants/text';

function Footer() {
  return (
    <FooterContainer component="footer">
      <SharedTypography variant="body2" style={footerTextStyle}>
        © {new Date().getFullYear()} {UI_TEXT.SECOND_HAND_STORE}
      </SharedTypography>

      <FooterLinks>
        <Link component={RouterLink} to={ROUTER_PATHS.ABOUT}>
          About
        </Link>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;

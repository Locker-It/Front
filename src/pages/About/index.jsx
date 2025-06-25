import React from 'react';

import { motion } from 'framer-motion';

import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Box, List, ListItem } from '@mui/material';

import styles from './About.styled.js';
import ActionButton from '../../components/shared/Button/ActionButton.jsx';
import SharedGrid from '../../components/shared/Grid/SharedGrid.jsx';
import { SharedImage } from '../../components/shared/Image/SharedImage.jsx';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { ABOUT_TEXT } from '../../constants/hardText.js';
import { BUTTON_VARIANTS } from '../../constants/types.js';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function About() {


  return (
    <Box maxWidth="lg" sx={{ mx: 'auto' }}>
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.grayBackground }}>
        <SharedTypography variant="h4" sx={styles.sectionTitle}>
          {ABOUT_TEXT.TITLE}
        </SharedTypography>

        <Box sx={styles.iconText}>
          <InfoIcon />
          <SharedTypography variant="h6">{ABOUT_TEXT.WHO_ARE_WE_TITLE}</SharedTypography>
        </Box>

        <SharedTypography variant="body1" sx={styles.sectionText}>
          {ABOUT_TEXT.WHO_ARE_WE_DESC}
        </SharedTypography>
      </Box>

      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={styles.imageBox}>
        <SharedImage src="/team-photo.jpg" alt="Team" style={styles.image} />
      </Box>

      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.grayBackground }}>
        <SharedTypography variant="h5" sx={styles.sectionTitle}>
          {ABOUT_TEXT.WHY_CHOOSE_US}
        </SharedTypography>

        <SharedGrid style={styles.gridContainer}>
          <Box sx={styles.card}>
            <SharedTypography variant="h6" sx={{ color: '#3f51b5' }}>
              <LocationOnIcon /> {ABOUT_TEXT.PICKUP_LOCKERS}
            </SharedTypography>
            <SharedTypography variant="body2">{ABOUT_TEXT.PICKUP_LOCKERS_DESC}</SharedTypography>
          </Box>

          <Box sx={styles.card}>
            <SharedTypography variant="h6" sx={{ color: '#3f51b5' }}>
              <WatchLaterIcon /> {ABOUT_TEXT.AVAILABILITY}
            </SharedTypography>
            <SharedTypography variant="body2">{ABOUT_TEXT.AVAILABILITY_DESC}</SharedTypography>
          </Box>

          <Box sx={styles.card}>
            <SharedTypography variant="h6" sx={{ color: '#3f51b5' }}>
              <SecurityIcon /> {ABOUT_TEXT.PRIVACY}
            </SharedTypography>
            <SharedTypography variant="body2">{ABOUT_TEXT.PRIVACY_DESC}</SharedTypography>
          </Box>
        </SharedGrid>
      </Box>

      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.whiteBackground }}>
        <SharedTypography variant="h5" sx={styles.sectionTitle}>
          {ABOUT_TEXT.LOCATIONS_TITLE}
        </SharedTypography>

        <List sx={{ maxWidth: 400, mx: 'auto' }}>
          {ABOUT_TEXT.LOCATIONS.map((loc, i) => (
            <ListItem key={i}>• {loc}</ListItem>
          ))}
        </List>
      </Box>

      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={styles.ctaBox}>
        <SharedTypography variant="h6">{ABOUT_TEXT.CTA_TITLE}</SharedTypography>
         <ActionButton styleType={BUTTON_VARIANTS.OUTLINED}>
           {ABOUT_TEXT.CTA_BUTTON}
         </ActionButton>
      </Box>
    </Box>
  );
}

export default About;

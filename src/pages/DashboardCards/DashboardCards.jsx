import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DashboardContainer, ActionCard, sharedGridProps } from './DashboardCards.styled';
import SharedGrid from '../../components/shared/Grid/SharedGrid';
import SharedTypography from '../../components/shared/Text/SharedTypography.jsx';
import { ROUTES } from '../../constants/routerPaths';
import { UI_TEXT } from '../../constants/text';

const DashboardCards = () => {
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      <SharedGrid {...sharedGridProps}>
        <Grid item>
          <ActionCard onClick={() => navigate(ROUTES.ADD_PRODUCT)}>
            <SharedTypography variant="h5" fontWeight="bold">
              {UI_TEXT.ADD_PRODUCT}
            </SharedTypography>
            <SharedTypography variant="body2">
              {UI_TEXT.UPLOAD_PRODUCT}
            </SharedTypography>
          </ActionCard>
        </Grid>
        <Grid item>
              {/* TODO: adjust the path to customerPage and ManagerPage */}
          <ActionCard onClick={() => navigate(ROUTES.DASHBOARD)}>
            <SharedTypography variant="h5" fontWeight="bold">
              {UI_TEXT.DASHBOARD}
            </SharedTypography>
            <SharedTypography variant="body2">
              {UI_TEXT.VIEW_ANALYTICS}
            </SharedTypography>
          </ActionCard>
        </Grid>
      </SharedGrid>
    </DashboardContainer>
  );
};

export default DashboardCards;

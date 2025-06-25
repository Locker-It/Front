import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import { LoaderWrapper } from './loader.styles';

export default function FullScreenLoader() {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
}

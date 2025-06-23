import { Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { pxToRem } from '../../utils/converting';

const createSkeletonVariant = (widthPx, heightPx) =>
  styled(Skeleton)(() => ({
    width: pxToRem(widthPx),
    height: pxToRem(heightPx),
    borderRadius: '0.25rem',
  }));

export const SkeletonCardImage = createSkeletonVariant(1600, 300);
export const SkeletonTitle = createSkeletonVariant(768, 32);
export const SkeletonBodyText = createSkeletonVariant(960, 20);
export const SkeletonSmallText = createSkeletonVariant(576, 20);
export const SkeletonLabel = createSkeletonVariant(384, 20);
export const SkeletonCTAButton = createSkeletonVariant(960, 36);
export const SkeletonSubtitle = createSkeletonVariant(384, 24);
export const SkeletonLine = createSkeletonVariant(960, 16);

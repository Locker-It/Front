import React from 'react';

import { CardContent, CardActions, Stack } from '@mui/material';

import { BigStyledCard } from './Product.styles';
import {
  SkeletonCardImage,     
  SkeletonTitle,          
  SkeletonSubtitle,       
  SkeletonCTAButton,      
  SkeletonLine,           
  SkeletonBodyText,     
} from './Skeleton.styles';

const ProductSkeleton = () => (
  <BigStyledCard>
    <SkeletonCardImage variant="rectangular" /> 

    <CardContent>
      <Stack spacing={1}>
        <SkeletonTitle />          
        <SkeletonBodyText />        
        <SkeletonLine />         
      </Stack>
    </CardContent>

    <CardActions>
      <SkeletonCTAButton variant="rectangular" />
    </CardActions>

    <CardContent>
      <SkeletonSubtitle />        
      <SkeletonLine />             
      <SkeletonLine />      
    </CardContent>
  </BigStyledCard>
);

export default ProductSkeleton;

import * as React from 'react';

import {
  defaultColumns,
  defaultItemSize,
  defaultSpacing,
  StyledBox,
  StyledGrid,
  StyledItem,
} from './Grid.styles';

function SharedGrid({
  items = [],
  columns = defaultColumns,
  spacing = defaultSpacing,
  itemSize = defaultItemSize,
  style = {},
  children,
  ...rest
}) {
  return (
    <StyledBox style={style}>
      <StyledGrid container spacing={spacing} columns={columns} {...rest}>
        {items.length > 0
          ? items.map((item) => (
              <StyledGrid item key={item.id} {...itemSize}>
                <StyledItem>{item.description}</StyledItem>
              </StyledGrid>
            ))
          : children}
      </StyledGrid>
    </StyledBox>
  );
}

export default SharedGrid;

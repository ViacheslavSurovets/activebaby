import React from 'react';
import { CategoryItem } from '../CategoryItem';
import { CATEGORIES_DATA } from './data';
import { CategoryContainer } from './styles';

const Categories = ( props ) => (
  <CategoryContainer>
    {
      CATEGORIES_DATA.map ( ( { ...rest }, idx ) =>
        <CategoryItem key={ idx } { ...rest } />
      )
    }
  </CategoryContainer>
);

export default Categories;

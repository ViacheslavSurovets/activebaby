import React from 'react';
import { connect } from 'react-redux';
import { CategoryItem } from '../CategoryItem';
import { createStructuredSelector } from 'reselect';
import { selectCategoriesData } from '@redux/categories/categories.selectors';
import { CategoryContainer } from './styles';
import PropTypes from 'prop-types';

const Categories = ( { categories } ) => (
  <CategoryContainer>
    {
      categories.map ( ( { ...rest }, idx ) =>
        <CategoryItem key={ idx } { ...rest } />
      )
    }
  </CategoryContainer>
);


const mapStateToProps = createStructuredSelector ( {
  categories: selectCategoriesData
} );

export default connect ( mapStateToProps ) ( Categories );

Categories.propTypes = {
  categories: PropTypes.array
};



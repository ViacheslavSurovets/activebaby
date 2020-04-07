import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { CustomButton } from '@components';
import { CategoryItemContainer, CustomButtonWrapper, CategoryItemImg } from './styles';
import PropTypes from 'prop-types';


const CategoryItem = ( { title, imageUrl, size, history, linkUrl, match } ) => {
  const { t, i18n } = useTranslation ();
  return (
    <CategoryItemContainer size={ size }>
      <CustomButtonWrapper>
        <CustomButton onClick={ () => history.push ( linkUrl ) } width={ '100%' }
                      fontSize={ 2 }>{ t ( title ) }</CustomButton>
      </CustomButtonWrapper>
      <CategoryItemImg className='js-categoryItemImage' background={ imageUrl } />
    </CategoryItemContainer>
  );
};

export default withRouter ( CategoryItem );

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.object,
  history: PropTypes.any
};


import React, { useState } from 'react';
import {
  CategoryItemImageLink,
  CategoryItem,
  CategoryItemCustomButtonWrapper,
  CategoryItemInfoWrapper,
  CategoryItemPriceText,
  CategoryItemText,
} from './styles';
import { CustomButton } from '@components/CustomButton';
import { ShopCartIcon } from '@icons/index';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '@redux/cart/cart.actions';
import { addItemToPreviewComponent, showPortalPreviewItem } from '@redux/previewItem/previewItem.actions';


const CollectionOverviewItem = ( { item, info, addItem, addPreviewItem, showPortalPreviewItem } ) => {
  const { t } = useTranslation ();

  const { images } = item;

  const handleClickImage = async () => {
    await addPreviewItem ( item, info );
    await showPortalPreviewItem();
  };

  return (
    <CategoryItem>
      <CategoryItemImageLink onClick={ handleClickImage } background={ images[ 0 ] } to={ '#' } />
      <CategoryItemInfoWrapper>
        <CategoryItemText><CategoryItemPriceText>{ t ( 'shopItem.price' ) }:</CategoryItemPriceText> { item.price } BYN</CategoryItemText>
        <CategoryItemCustomButtonWrapper>
          <CustomButton onClick={ () => addItem ( item ) } orangeSoft width={ '4rem' }
                        height={ '3rem' }><ShopCartIcon /></CustomButton>
        </CategoryItemCustomButtonWrapper>
      </CategoryItemInfoWrapper>
    </CategoryItem>
  );
};


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch ( addItem ( item ) ),
  addPreviewItem: ( item, info ) => dispatch ( addItemToPreviewComponent ( item, info ) ),
  showPortalPreviewItem: () => dispatch ( showPortalPreviewItem () )
});

export default connect ( null, mapDispatchToProps ) ( CollectionOverviewItem );


CollectionOverviewItem.propTypes = {
  item: PropTypes.object,
  info: PropTypes.string,
  addItem: PropTypes.func,
  addPreviewItem: PropTypes.func,
  showPortalPreviewItem: PropTypes.func
};

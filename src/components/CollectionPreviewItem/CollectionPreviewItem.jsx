import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CloseIcon, CustomButton, ShopCartIcon } from '@components';
import {
  CollectionPreviewItemContainer,
  CollectionPreviewItemImage,
  CollectionPreviewItemTitle,
  CloseIconWrapper,
  CollectionPreviewItemHeader,
  CollectionPreviewItemImageWrapper,
  CustomButtonText,
  CollectionPreviewInfoText,
  CollectionPreviewInfoWrapper,
  CategoryItemTextWrapper,
  PreviewItemInfoWrapper,
  PreviewItemCustomButtonWrapper
} from './styles';
import {
  CategoryItemPriceText,
  CategoryItemText
} from '@components/CollectionOverviewItem/styles';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { closePortalPreviewItem } from '@redux/previewItem/previewItem.actions';
import { selectPreviewItemData, selectPreviewItemInfo } from '@redux/previewItem/previewItem.selectors';
import { addItem } from '@redux/cart/cart.actions';


const CollectionPreviewItem = ( { item, info, closePortalPreviewItem, addItem } ) => {

  const { t } = useTranslation ();
  return (
    <CollectionPreviewItemContainer>
      <CollectionPreviewItemHeader>
        <CollectionPreviewItemTitle>{ item.title }</CollectionPreviewItemTitle>
        <CloseIconWrapper onClick={ closePortalPreviewItem }>
          <CloseIcon color={ 'gray' } />
        </CloseIconWrapper>
      </CollectionPreviewItemHeader>

      <CollectionPreviewItemImageWrapper>
        <CollectionPreviewItemImage background={ item.images[ 0 ] } />
      </CollectionPreviewItemImageWrapper>

      <CollectionPreviewInfoWrapper>
        <CollectionPreviewInfoText>{ info }</CollectionPreviewInfoText>
      </CollectionPreviewInfoWrapper>

      <PreviewItemInfoWrapper>
        <CategoryItemTextWrapper>
          <CategoryItemText>
            <CategoryItemPriceText>{ t ( 'shopItem.price' ) }:</CategoryItemPriceText> { item.price } BYN
          </CategoryItemText>
        </CategoryItemTextWrapper>
        <PreviewItemCustomButtonWrapper>
          <CustomButton onClick={()=>addItem(item)} orangeSoft width={ '100%' } height={ '5rem' }>
            <CustomButtonText>{ t ( 'shopItem.toCart' ) }</CustomButtonText>
            <ShopCartIcon />
          </CustomButton>
        </PreviewItemCustomButtonWrapper>
      </PreviewItemInfoWrapper>
    </CollectionPreviewItemContainer>
  );
};


const mapStateToProps = createStructuredSelector({
  item: selectPreviewItemData,
  info: selectPreviewItemInfo,

});


const mapDispatchToProps = dispatch => ({
  closePortalPreviewItem: () => dispatch ( closePortalPreviewItem () ),
  addItem: item => dispatch ( addItem ( item ) ),
});

export default connect ( mapStateToProps, mapDispatchToProps ) ( CollectionPreviewItem );

CollectionPreviewItem.propTypes = {
  item: PropTypes.object,
  info: PropTypes.string,
  closePortalPreviewItem: PropTypes.func,
  addItem: PropTypes.func
};

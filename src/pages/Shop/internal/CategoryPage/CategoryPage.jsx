import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { selectCollection, selectCollections } from '@redux/shop/shop.selecors';
import { CollectionOverviewItem, CollectionPreviewItem, Portal } from '@components';
import {
  CategoryPageContainer,
  CategorySectionTitle,
  CategorySectionContainer,
  CategoryItemTitle,
  CategoryItemWrapper,
} from './styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { selectShowPortalPreviewItem } from '@redux/previewItem/previewItem.selectors';



const CategoryPage = ( { collection, showPortalPreviewItem } ) => {
  const { t, i18n } = useTranslation ();
  console.log ( collection );
  return (
    <CategoryPageContainer>
      <CategorySectionTitle>{ t ( collection.title ) }</CategorySectionTitle>

      {
        showPortalPreviewItem && <Portal component={CollectionPreviewItem} />
      }

      {
        collection.items.map ( ( section, idx ) =>
          <CategorySectionContainer key={ idx }>
            <CategoryItemTitle>{ t ( section.title ).toUpperCase () }</CategoryItemTitle>
            <CategoryItemWrapper>
              {
                section.types.map ( (item, index) =>
                  <Fragment key={index}>
                    <CollectionOverviewItem item={ item } info={section.info}/>
                  </Fragment>
                )
              }
            </CategoryItemWrapper>
          </CategorySectionContainer>
        )
      }
    </CategoryPageContainer>
  );
};

const mapStateToProps = ( state, ownProps ) => ({
  collection: selectCollection ( ownProps.match.params.collectionId ) ( state ),
  showPortalPreviewItem: selectShowPortalPreviewItem(state),
  collections: selectCollections ( state )
});




export default connect ( mapStateToProps ) ( CategoryPage );


CategoryPage.propTypes = {
  collection: PropTypes.object,
  showPortalPreviewItem: PropTypes.bool
};


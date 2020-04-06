import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectHeaderArticlesData } from '@redux/header/header.selectors';
import { DropdownGroupArticle, DropdownLink, ListItem } from '@components/Header/styles';
import Proptypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

const HeaderArticles = ( { headerArticlesData } ) => {
  const { t, i18n } = useTranslation ();

  const headerArticles = useMemo ( () => (
    headerArticlesData.map ( ( item, idx ) => {
      return {
        key: idx,
        text: t ( item.text ),
        path: item.path
      };
    } )

  ), [ i18n.language ] );

  return (
    <>
      { headerArticles.map ( item =>
        <DropdownGroupArticle key={ item.text }>
          <ListItem key={ item.text }><DropdownLink
            to={ item.path }>{ item.text }</DropdownLink></ListItem>
        </DropdownGroupArticle>
      ) }
    </>
  );
};


const mapStateToProps = createStructuredSelector ( {
  headerArticlesData: selectHeaderArticlesData
} );

export default connect ( mapStateToProps ) ( HeaderArticles );

HeaderArticles.propTypes = {
  headerArticlesData: Proptypes.array.isRequired
};


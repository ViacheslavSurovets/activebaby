import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownGroupArticle, DropdownLink, ListItem } from '@components/Header/styles';
import Proptypes from 'prop-types';

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

export default HeaderArticles;

HeaderArticles.propTypes = {
  headerArticlesData: Proptypes.array.isRequired
};


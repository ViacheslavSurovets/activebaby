import React from 'react';
import { ArticleListItem, ArticleListItemContainer } from './styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const ArticleListItemComponent = ( { article } ) => {
  const { t } = useTranslation ();
  return (
    <ArticleListItemContainer>
      <ArticleListItem to={ article.routePath }>{ t ( article.title ) }</ArticleListItem>
    </ArticleListItemContainer>
  );
};

export default ArticleListItemComponent;

ArticleListItemComponent.propTypes = {
  article: PropTypes.object
};


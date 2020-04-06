import React from 'react';
import { connect } from 'react-redux';
import { selectArticle } from '@redux/articles/articles.selectors';
import { Paragraph } from '@commonStyles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Article = ( { article } ) => {
  const { t } = useTranslation ();
  console.log ( article );
  return (
    <>
      <h1>{ t ( article.title ) }</h1>
      <Paragraph>{ t ( article.content ) }</Paragraph>
    </>
  );
};


const mapsStateToProps = ( state, ownProps ) => ({
  article: selectArticle ( ownProps.match.params.articleId ) ( state )
});

export default connect ( mapsStateToProps ) ( Article );


Article.propTypes = {
  article: PropTypes.object
};

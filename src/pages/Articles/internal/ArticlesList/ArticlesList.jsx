import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArticlesForOverview } from '@redux/articles/articles.selectors';
import { ArticleListItemComponent } from '../ArticleListitemComponent';
import PropTypes from 'prop-types';


const ArticlesList = ( { articles } ) => {

  return (
    <>
      {
        articles.map (  article =>
          <Fragment key={ article.id }>
            <ArticleListItemComponent article={ article } />
          </Fragment>
        )
      }
    </>
  );
};

const mapStateToProps = createStructuredSelector ( {
  articles: selectArticlesForOverview
} );

export default connect ( mapStateToProps ) ( ArticlesList );

ArticlesList.propTypes = {
  articles: PropTypes.array
};


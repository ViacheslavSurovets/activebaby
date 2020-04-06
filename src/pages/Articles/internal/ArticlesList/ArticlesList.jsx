import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArticlesForOverview } from '@redux/articles/articles.selectors';
import { ArticleListItemComponent } from '../ArticleListitemComponent';
import { ArticleListContainer } from './styles';
import PropTypes from 'prop-types';


const ArticlesList = ( { articles } ) => {

  return (
    <ArticleListContainer>
      {
        articles.map ( article =>
          <Fragment key={ article.id }>
            <ArticleListItemComponent article={ article } />
          </Fragment>
        )
      }
    </ArticleListContainer>
  );
};

const mapStateToProps = createStructuredSelector ( {
  articles: selectArticlesForOverview
} );

export default connect ( mapStateToProps ) ( ArticlesList );

ArticlesList.propTypes = {
  articles: PropTypes.array
};


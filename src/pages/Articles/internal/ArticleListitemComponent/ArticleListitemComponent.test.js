import React from 'react';
import { shallow } from 'enzyme';
import ArticleListItemComponent from './ArticleListItemComponent';


describe ( 'ArticleListItemComponent', () => {
  const mockArticle = {
    routePath: 'string',
    title: 'string'
  };
  it ( 'ArticleListItemComponent Snapshot', () => {
    expect ( shallow ( <ArticleListItemComponent article={ mockArticle } /> ) ).toMatchSnapshot ();
  } );
} );

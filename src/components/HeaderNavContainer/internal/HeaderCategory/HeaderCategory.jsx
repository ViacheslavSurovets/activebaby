import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { DropdownGroup, DropdownLink, ListItem } from '@components/Header/styles';
import { useTranslation } from 'react-i18next';
import { selectHeaderCategoriesData } from '@redux/header/header.selectors';
import Proptypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

const HeaderCategory = ( { headerCategoriesData } ) => {
  const { t, i18n } = useTranslation ();


  const headerCategory = useMemo ( () => (
    headerCategoriesData.map ( item => {
      return {
        key: item.id,
        listItems: item.listItems.map ( ( listItem, idx ) => {
          return {
            key: idx,
            text: t ( listItem.text ),
            path: listItem.path
          };
        } )
      };
    } )

  ), [ i18n.language ] );

  return (
    <>
      { headerCategory.map ( item =>
        <DropdownGroup key={ item.key }>
          { item.listItems.map ( ( listItem, idx ) =>
            <ListItem key={ (idx) }><DropdownLink
              to={ listItem.path }>{ listItem.text }</DropdownLink></ListItem>
          ) }
        </DropdownGroup>
      ) }
    </>
  );
};


const mapStateToProps = createStructuredSelector({
  headerCategoriesData : selectHeaderCategoriesData
});


export default connect(mapStateToProps)(HeaderCategory);

HeaderCategory.propTypes = {
  headerCategoriesData: Proptypes.array.isRequired
};

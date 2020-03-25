import React, { useMemo } from 'react';
import { DropdownGroup, DropdownLink, ListItem } from '@components/Header/styles';
import { useTranslation } from 'react-i18next';
import Proptypes from 'prop-types';

const HeaderCategory = ( { headerCategoryData } ) => {
  const { t, i18n } = useTranslation ();


  const headerCategory = useMemo ( () => (
    headerCategoryData.map ( item => {
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


export default HeaderCategory;

HeaderCategory.propTypes = {
  headerCategoryData: Proptypes.array.isRequired
};

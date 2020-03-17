import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchIcon } from '@components/icons';
import { DropdownSearchWrapper, DropdownInput, DropdownSearch } from './styles';


const HeaderSearchDropdown = () => {
  const { t } = useTranslation ();
  return (
    <DropdownSearch>
      <DropdownSearchWrapper>
        <DropdownInput type="text" placeholder={ `${ t ( 'header.headerSearchPlaceholder' ) }...` } />
        <SearchIcon width='36' height='36' />
      </DropdownSearchWrapper>
    </DropdownSearch>
  );
};

export default HeaderSearchDropdown;

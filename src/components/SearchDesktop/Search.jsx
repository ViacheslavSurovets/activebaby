import React from 'react';
import { SearchIcon, HeaderSearchDropdown } from '@components';
import {
  HeaderInput,
  HeaderSearchContainer,
  HeaderSearchWrapper,
  SearchIconWrapper
} from './styles';
import { useTranslation } from 'react-i18next';


export const searchMediaQueryBig = '@media (min-width: 972px)';
export const searchMediaQueryLow = '@media (min-width: 767px) and (max-width: 971px)';


const SearchDesktop = () => {
  const { t } = useTranslation ();
  return (
    <HeaderSearchContainer>
      <HeaderSearchWrapper>
        <HeaderInput type="text" placeholder={ `${ t ( 'header.headerSearchPlaceholder' ) }...` } />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </HeaderSearchWrapper>
      <HeaderSearchDropdown />
    </HeaderSearchContainer>
  );
};

export default SearchDesktop;

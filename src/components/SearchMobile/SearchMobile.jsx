import React from 'react';
import { SearchIcon, HeaderSearchDropdown } from '@components';
import { SearchMobileContent } from './styles';


const SearchMobile = () => (
  <SearchMobileContent>
    <SearchIcon color='white' />
    <HeaderSearchDropdown />
  </SearchMobileContent>
);

export default SearchMobile;

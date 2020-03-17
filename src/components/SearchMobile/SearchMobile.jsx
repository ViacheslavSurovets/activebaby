import React from 'react';
import { SearchIcon, HeaderSearchDropdown } from '@components';
import styled from 'styled-components';
import { tablet, mobile } from '@media';


const SearchMobileContent = styled.figure`
  display: none;
  ${ tablet },
  ${ mobile }{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 7rem;
    &:hover{
      div {
        display: flex;
      }
    }
  }
`;

const SearchMobile = () => (
  <SearchMobileContent>
    <SearchIcon color='white' />
    <HeaderSearchDropdown />
  </SearchMobileContent>
);

export default SearchMobile;

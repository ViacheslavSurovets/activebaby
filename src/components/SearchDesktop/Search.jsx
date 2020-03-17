import React from 'react';
import { SearchIcon, HeaderSearchDropdown } from '@components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { desktop } from '@utils/media';

export const searchMediaQueryBig = '@media (min-width: 972px)';
export const searchMediaQueryLow = '@media (min-width: 767px) and (max-width: 971px)';


const HeaderInput = styled.input`
   display: none; 
  ${ searchMediaQueryBig }{
    display: flex;  
    border: none;
    outline: none;
    padding-left: .5rem;
    width: 15rem; 
    font-size: 2rem;
    align-self: center;
    color: ${ ( { theme } ) => theme.header.searchColor };
    } 
`;
const HeaderSearchWrapper = styled.div`
    ${ searchMediaQueryBig }{
      display: flex;
      align-items: center;
      border: 1px solid ${ ( { theme } ) => theme.header.searchWrapperBorder };
      height: 3.5rem;
    };
  border: 1px solid ${ ( { theme } ) => theme.white };
`;

const HeaderSearchContainer = styled.div`
    display: none;
   ${ searchMediaQueryLow }{
      
      border-bottom: 1px solid ${ ( { theme } ) => theme.white };
      &:hover {
      border-bottom: 1px solid ${ ( { theme } ) => theme.header.color };
    };
  }
  ${ desktop }{
    display: flex;
    align-items: center;
    height: 6rem;
  }  
`;

const SearchIconWrapper = styled.figure`
  margin-right: .5rem;
`;


const Search = () => {
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

export default Search;

import React from 'react';
import { SearchIcon } from '@components';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { desktop } from '@utils/media';

export const searchMediaQueryBig = '@media (min-width: 972px)';
export const searchMediaQueryLow = '@media (min-width: 767px) and (max-width: 971px)';


const DropdownInput = styled.input`
  display: none; 
  ${ searchMediaQueryLow }{
    display: flex;  
    border: none;
    outline: none;
    padding-left: .5rem;
    width: 90%; 
    font-size: 3rem;
    align-self: center;
    color: ${ ( { theme } ) => theme.header.searchColor };
    }
`;


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
      border: 1px solid black;
      height: 3.5rem;
    };
  border: 1px solid white;
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


const DropdownSearch = styled.div`
  display: none;
  ${ searchMediaQueryLow }{
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:7rem;
  background:blue;
  position: absolute;
  right: 0;
  transform: translateY(100%);
  
}
`;

const DropdownSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  height: 90%;
  width: 50%;
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
      <DropdownSearch>
        <DropdownSearchWrapper>
          <DropdownInput type="text" placeholder={ `${ t ( 'header.headerSearchPlaceholder' ) }...` } />
          <SearchIcon width='36' height='36' />
        </DropdownSearchWrapper>
      </DropdownSearch>
    </HeaderSearchContainer>
  );
};

export default Search;

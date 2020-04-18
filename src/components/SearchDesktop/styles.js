import styled from 'styled-components';
import { desktop } from '@utils/media';
import { searchMediaQueryBig, searchMediaQueryLow } from '@components/SearchDesktop/Search';

export const HeaderInput = styled.input`
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
export const HeaderSearchWrapper = styled.div`
    ${ searchMediaQueryBig }{
      display: flex;
      align-items: center;
      border: 1px solid ${ ( { theme } ) => theme.header.searchWrapperBorder };
      height: 3.5rem;
    };
  border: 1px solid ${ ( { theme } ) => theme.white };
`;

export const HeaderSearchContainer = styled.div`
    display: none;
   ${ searchMediaQueryLow }{
      
      border-bottom: 1px solid ${ ( { theme } ) => theme.white };
      &:hover {
      border-bottom: 1px solid ${ ( { theme } ) => theme.header.colorOnHover };
    };
  }
  ${ desktop }{
    display: flex;
    align-items: center;
    height: 6rem;
  }  
`;

export const SearchIconWrapper = styled.figure`
  margin-right: .5rem;
`;

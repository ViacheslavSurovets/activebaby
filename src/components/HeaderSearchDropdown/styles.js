import styled, { css } from 'styled-components';
import { searchMediaQueryLow } from '@components/SearchDesktop/Search';
import { tablet, mobile } from '@media';

const stylesDropdownSearch = css`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height:7rem;
  background: ${ ( { theme } ) => theme.header.dropdownBackground };
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const DropdownSearch = styled.div`
  display: none;
  ${ tablet },
  ${ mobile }{
    ${stylesDropdownSearch};
    transform: translateY(74%);
  }
  
  ${ searchMediaQueryLow }{
    ${stylesDropdownSearch};
    transform: translateY(100%);
}
`;

export const DropdownSearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${ ( { theme } ) => theme.header.searchDropdownBorderBottom };
  height: 90%;
  width: 50%;
`;

export const DropdownInput = styled.input`
  display: none; 
  ${ tablet },
  ${ mobile },
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

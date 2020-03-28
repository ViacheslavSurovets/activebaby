import styled, { css } from 'styled-components';
import { desktop, mobile, tablet } from '@utils/media';
import { NavLink } from 'react-router-dom';
import { searchMediaQueryLow } from '../SearchDesktop/Search';

export const styleLink = css`
  display: flex;
  align-items: center;
  user-select: none;
  text-decoration: none;
  color: ${ ( { theme } ) => theme.header.linkColor };
  transition: all .3s ease;
  font-size: 1.8rem;
    &:hover{
      color: ${ ( { theme } ) => theme.header.colorOnHover };
      transition: all .3s ease;
    }
`;

export const HeaderMainContainer = styled.header`
  ${tablet},
  ${mobile}{
  position: sticky;
    top: 0;
    z-index: 10;
  }
`;

//-------------------------------- Header Info Container Black

const styleHeaderInfoContainer = css`
  display: flex;
  flex:1;
  justify-content: space-between;
  background-color: ${ ( { theme } ) => theme.header.infoContainerBackground }; 
   font-size: 1.8rem;
`;

export const HeaderInfoContainer = styled.div`
  ${ styleHeaderInfoContainer };
    height: 3.5rem;
  `;
// Header Item Wrappers
const styleHeaderItemsWrapper = css`
  color: ${ ( { theme } ) => theme.white };
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const HeaderItemsWrapperRight = styled.div`
  ${ styleHeaderItemsWrapper };
  justify-content: flex-end;
`;

export const HeaderItemsWrapperLeft = styled.div`
  ${ styleHeaderItemsWrapper };
  justify-content: space-around;
`;

// Header Items
export const styleHeaderItem = css`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  user-select: none;
    &:hover{
      color:  ${ ( { theme } ) => theme.header.colorOnHover };
    }
`;

export const ShopCartWrapper = styled.div`
${ styleHeaderItem };
 height: 100%;
 width: 4rem;
  ${ desktop }{
      width: 6rem;      
  }
`;

export const HeaderItem = styled.div`
  ${ mobile }{display: none}
  ${ tablet }{display: none}
  ${ desktop }{
    ${ styleHeaderItem };
  }
`;

//-------------------------------- Header Nav Container White

export const HeaderNavWrapper = styled.div`

`;

export const HeaderNavLink = styled ( NavLink )`
  ${ styleLink };
  border-bottom: 1px solid ${ ( { theme } ) => theme.white };
  height: 6rem;
  &:hover{
    border-bottom: 1px solid ${ ( { theme } ) => theme.header.colorOnHover };
  }
`;

export const DropdownLink = styled ( NavLink )`
  ${ styleLink };
  height: 5rem;
`;

export const HeaderNav = styled.nav`
  display: none;
  width: 100%;
  background-color: ${ ( { theme } ) => theme.header.headerNavBackground };
  position: relative;
  ${ desktop }{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
`;

export const List = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
`;

export const Dropdown = styled.ul`
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility; 
  transition-duration: 0.4s; 
  transition-delay: 0.15s; 
  border-top: 1rem solid ${ ( { theme } ) => theme.white };
  position: absolute;
  text-align: justify;
  list-style: none;
  background: ${ ( { theme } ) => theme.header.dropdownBackground };
  width: 100%;
  min-width: 50%;
  left: 0;
  z-index:1;
`;

export const DropdownGroupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const DropdownGroup = styled.div`
li:first-child{
  margin-bottom: 1rem;
  border-bottom: 1px solid ${ ( { theme } ) => theme.header.borderBottomDropdown };
}
li:first-child:hover{
  border-bottom: 1px solid ${ ( { theme } ) => theme.header.borderBottomDropdownHover };
}
`;

export const DropdownGroupArticle = styled.div`
`;


export const ListItem = styled.li`
  z-index: 2;
      &:hover{
    ul{
      opacity: 1; 
      visibility: visible;
    }
  }
`;

export const SearchItemDesktop = styled.div`
  display: flex;
  flex-basis: 10rem;
  justify-content: center;
  
  &:hover {
    ${ searchMediaQueryLow }{
      div div:nth-child(2){
      display: flex;
      }
    }
  }
`;

//---------------------------------------Logo

export const LogoDesktopWrapper = styled.div`
  ${ desktop }{
    display: flex;
    height: 8rem;
  }
`;

export const LogoTabletWrapper = styled.div`
  display: flex;
  align-items: center;
`;

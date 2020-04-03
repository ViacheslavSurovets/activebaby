import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
}

body {
    font-size: 1.6rem;
    position: relative;
}

body, html {
    height: 100%;
    max-height: 100%;
    overflow: hidden;
}

*{
box-sizing: border-box;
}

*::selection {
color: ${ ( { theme } ) => theme.blue };
background-color: ${ ( { theme } ) => theme.black };
}

#root {
    height: 100%;
}

#burger-menu-checkbox:checked ~ figure div:nth-child(1),
#burger-menu-checkbox:checked ~ figure div:nth-child(4){
    display: none;
}

#burger-menu-checkbox:checked ~ figure div:nth-child(2){
    transform: rotate(-45deg);
}

#burger-menu-checkbox:checked ~ figure div:nth-child(3){
    transform: rotate(45deg);
}

#burger-menu-checkbox:checked ~ nav {
    opacity: 1;
    visibility: visible;
    transition: .4s all .15s;
}

`;

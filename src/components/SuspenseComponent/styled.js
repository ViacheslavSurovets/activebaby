import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
  100% {
    transform: rotate(360deg);
}
`;


export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
    div{
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: calc((${props => props.size}rem) - 20% );
      height: calc((${props => props.size}rem) - 20% );
      margin: calc((${props => props.size}rem) * 0.1 );
      border: calc((${props => props.size}rem) * 0.1 ) solid;
      border-radius: 50%;
      animation: ${ spinnerAnimation } 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${ ( { theme } ) => theme.blue } transparent transparent transparent;
    }
    div:nth-child(1) {
      animation-delay: -0.45s;
    }
    div:nth-child(2) {
      animation-delay: -0.3s;
    }
    div:nth-child(3) {
      animation-delay: -0.15s;
    }
`;

export const SuspenseComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
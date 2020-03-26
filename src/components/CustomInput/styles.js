import styled, { css } from 'styled-components';


const styleInlineBlock = css`
  width: 100%;
`;

const getInlineBlock = (props) => {
  if(props.inlineBlock){
    return styleInlineBlock;
  }
  return;
};

const styleButtonSizeBig = css`
  height: 3rem;
  font-size: 2.5rem;
`;

const getButtonSize = ( props ) => {
  if(props.big){
    return styleButtonSizeBig;
  }
  return;
};



export const Input = styled.input`
  ${getInlineBlock};
  ${getButtonSize};
  outline: none;
  border: none;
  font-size: ${props => props.fontSize}rem;
  &:focus ~ label {
    transform: translateY(-120%);
    transition: all .5s;
  }
`;


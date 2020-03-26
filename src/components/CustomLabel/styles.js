import styled from 'styled-components';




export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
  transition: 300ms ease all;
  margin-top: ${ props => props.marginTop }rem;
  margin-bottom: ${ props => props.marginBottom }rem;
  margin-right: ${ props => props.marginRight }rem;
  margin-left: ${ props => props.marginLeft }rem;
  font-size: ${ props => props.fontSize }rem;
`;

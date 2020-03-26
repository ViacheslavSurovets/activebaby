import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${ props => props.marginTop }rem;
  margin-bottom: ${ props => props.marginBottom }rem;
  margin-right: ${ props => props.marginRight }rem;
  margin-left: ${ props => props.marginLeft }rem;
`;

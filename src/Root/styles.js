import styled from 'styled-components';

export const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  min-height: 50rem;
`;

export const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

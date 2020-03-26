import styled, { css } from 'styled-components';

export const commonFontColor = css`
  color: ${ ( { theme } ) => theme.darkGray };
`;

export const commonFontSize = css`
  font-size: 1.6rem;
`;

export const flexCommon = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const commonStyleTitleText = css`
  ${commonFontColor};
  font-size: 2.5rem;
`;

export const commonStyleTextTwoRem = css`
  font-size: 2rem;
`;

export const commonStyleTextThreeRem = css`
  font-size: 3rem;
`;

export const commonStyleText = css`
  ${commonFontColor};
  ${commonFontSize};
`;


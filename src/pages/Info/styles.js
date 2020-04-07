import styled from 'styled-components';
import { commonStyleTextThreeRem, commonContentWrapper } from '@src/styles/commonStylesAndStyledComponents';


export const InfoContent = styled.section`
 ${commonContentWrapper};
`;


export const TextBlue = styled.span`
  ${commonStyleTextThreeRem};
  color: ${ ( { theme } ) => theme.blue };
`;

export const TextPink = styled.span`
  ${commonStyleTextThreeRem};
  color: ${ ( { theme } ) => theme.pink }
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonLinkStyle, commonStyleTextThreeRem } from '@commonStyles';

export const ArticleListItemContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  min-height: 5rem;
  margin: 1rem auto;
`;

export const ArticleListItem = styled ( Link )`
  ${ commonLinkStyle };
  ${commonStyleTextThreeRem};
  color: ${ ( { theme } ) => theme.blue };
`;

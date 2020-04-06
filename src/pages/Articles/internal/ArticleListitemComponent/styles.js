import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonLinkStyle } from '@commonStyles';

export const ArticleListItemContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  min-height: 5rem;
  margin: 0 auto;
`;

export const ArticleListItem = styled ( Link )`
  ${ commonLinkStyle };
  color: ${ ( { theme } ) => theme.blue };
`;

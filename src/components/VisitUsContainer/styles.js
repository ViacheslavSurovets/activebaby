import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { visitUs } from '@assets/visitUs';
import { commonStyleText, commonStyleTitleText, flexCommon } from '@commonStyles';
import { mobile } from '@media';


export const VisitUsWrapper = styled.section`
  display: flex;
  flex: 1;
  ${ mobile }{
    flex-direction: column;
  }
`;

export const VisitUsImageContainer = styled ( Link )`
  background-image: url(${ visitUs });
  background-size: cover;
  width: 50vw;
  height: 30vw;
  &:hover {
    filter: opacity(75%);
  }
  ${ mobile }{
    width: 100vw;
    height: 50vw;
  }
`;

export const VisitUsContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const VisitUsContentTitle = styled.span`
   ${ flexCommon };
   ${ commonStyleTitleText };
   width: 80%;
   margin-bottom: 1rem;
`;

export const VisitUsContentText = styled.span`
  ${ flexCommon };
  ${ commonStyleText };
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

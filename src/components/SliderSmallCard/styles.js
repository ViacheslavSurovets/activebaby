import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexCommon } from '@src/styles/commonStylesAndStyledComponents';

export const Slide = styled ( Link )`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 20vw;
  text-decoration: none;
  position: relative;
`;

export const SliderSmallImage = styled.img`
  width: 100%;
  height: 80%;
`;

export const SliderSmallCardText = styled.span`
  ${ flexCommon };
  height: 20%;
  font-size: 1.6rem;
  color: ${ ( { theme } ) => theme.main.sliderSmallCard.sliderSmallCardText }
`;

export const SliderSmallLabel = styled.div`
  ${flexCommon};
   position: absolute;
   top:0;
   right: 0; 
   background:tomato; 
`;

export const SliderSmallLabelText = styled.span`
  color: white;
  font-size: 2vw;
  padding: .5vw 1vw;
`;

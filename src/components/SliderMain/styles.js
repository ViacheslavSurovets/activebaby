import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const popUpSliderMediaHuge = '@media (min-width: 400px)';
const popUpSliderMediaLow = '@media (max-width: 401px)';

const keyframePopUp = keyframes`
    from {
        opacity: 0;
    }
    to {
        transform: translateY(3rem);
        opacity: 1;
    }
    15% {
        opacity: 1;
    }
    25% {
        transform: translateY(3rem);
    }
`;

export const Slide = styled ( Link )`
  display: flex;
  background-image: url(${ props => props.background }) ;
  background-size:  cover;
  background-repeat: no-repeat;
  text-decoration: none;
  ${popUpSliderMediaLow}{
    flex-direction: column;
    width: 100vw;
    height: 140vw;

    &.js-slider-main > div { 
      opacity: 1;
    }
  }
  ${ popUpSliderMediaHuge }{
    justify-content: flex-end;
    align-items: baseline;
    width: 100vw;
    height: 75vw;
    &.js-slider-main > div { 
      animation: ${ keyframePopUp } 6s  ease 1;
      animation-fill-mode: forwards;
      opacity: 1;
    }
  }
`;

export const PopUp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  ${ popUpSliderMediaLow }{
    background: ${ ( { theme } ) => theme.main.sliderPopUp.popUpBackgroundMediaLow };
    color: ${ ( { theme } ) => theme.main.sliderPopUp.popUpColorMediaLow };
    position: static;
    height: 70vw;
  };
  ${popUpSliderMediaHuge}{
    margin-top: 5vh;
    margin-right: 2vw;
    width: 20rem;
    height: 25rem;
    opacity: 0;
    min-width: 20rem;
    min-height: 25rem;
    background: ${ ( { theme } ) => theme.main.sliderPopUp.popUpBackgroundMediaHuge };
    color: ${ ( { theme } ) => theme.main.sliderPopUp.popUpColorMediaHuge };
  };
`;


export const PopUpText = styled.span`
  font-size: 1.4rem;
`;

export const PopUpTitle = styled.span`
  font-size: 2.5rem;
`;

export const PopUpButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 50%;
  ${ popUpSliderMediaHuge }{
    width: 50%;
    font-size: 2rem;
    background-color: ${ ( { theme } ) => theme.main.sliderPopUp.popUpButtonBackgroundMediaHuge };
    color : ${ ( { theme } ) => theme.main.sliderPopUp.popUpButtonColorMediaHuge }
  };
  ${ popUpSliderMediaLow }{
    font-size: 2rem;
    background-color: ${ ( { theme } ) => theme.main.sliderPopUp.popUpButtonBackgroundMediaLow };
    color : ${ ( { theme } ) => theme.main.sliderPopUp.popUpButtonColorMediaLow }
  };
`;

export const Img = styled.img`
  display: none;
  ${popUpSliderMediaLow}{
    display: inherit;
    width: 100vw;
    height: 70vw;
  } 
`;

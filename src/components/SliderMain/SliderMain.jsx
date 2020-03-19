import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import './slider.css';

import adamex from '@assets/sliderMain/Adamex.jpg';
import cristiano from '@assets/sliderMain/Cristiano.jpeg';
import chantal from '@assets/sliderMain/Chantal.jpeg';


const slideData = [
  {
    title: 'Adamex',
    url: adamex,
    popUp: {
      info: 'info',
      title: 'Title',
      text: 'text',
      button: 'button'
    }
  },
  {
    title: 'Cristiano',
    url: cristiano,
    popUp: {
      info: 'ttt',
      title: 'ageag',
      text: 'text',
      button: 'button'
    }
  },
  {
    title: 'Chantal',
    url: chantal,
    popUp: {
      info: 'ttt',
      title: 'ageag',
      text: 'text',
      button: 'button'
    }
  }
];

const Slide = styled ( Link )`
  width: 100vw;
  height: 50vw;
  position: relative;
  background-image: url(${ props => props.background }) ;
  background-size:  100% 100%;
  background-repeat: no-repeat;
`;



const PopUp = styled.div`
  opacity: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-width: 20rem;
  min-height: 25rem;
  background: ${ ( { theme } ) => theme.main.popUpBackground };
  color: ${ ( { theme } ) => theme.main.popUpColor };
  position: absolute;
  right: 5%;
  top:10%;
`;


const PopUpText = styled.span`
  font-size: 3rem;
`;

const PopUpTitle = styled.span`
  font-size: 5rem;
`;

const PopUpButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background:white;
  color: black;
  height: 4rem;
  width: 50%;
  font-size: 3rem;
`;

const SliderMain = () => {

  // Example

// const styler = css`

//     animation: ${ keyframePopUp } 5s  ease-in-out 1;
// `;

// const keyframePopUp = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     transform: translateY(3rem);
//     opacity: 1;
//   }
//   15% {
//     opacity: 1;
//   }
//   25% {
//     transform: translateY(3rem);
//   }
// `;

  const swiperParams = {
    ContainerEl: 'figure',
    slideActiveClass: 'tu',
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 5000
    }
  };

  return (
    <Swiper { ...swiperParams } >
      { slideData.map ( ( item, idx ) =>
        <Slide to={ '#' } key={ idx } background={ item.url }>
          <PopUp>
            <PopUpText>{ item.popUp.info }</PopUpText>
            <PopUpTitle>{ item.popUp.title }</PopUpTitle>
            <PopUpText>{ item.popUp.text } </PopUpText>
            <PopUpButton>button</PopUpButton>
          </PopUp>
        </Slide>
      ) }
    </Swiper>
  );
};

export default SliderMain;

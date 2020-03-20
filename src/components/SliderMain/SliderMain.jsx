import React from 'react';
import Swiper from 'react-id-swiper';
import { adamex, chantal, cristiano } from '@assets/sliderMain';
import { PopUpButton, Slide, PopUpTitle, PopUpText, PopUp, Img } from './styles';


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

const SliderMain = () => {

  const swiperParams = {
    ContainerEl: 'figure',
    slideActiveClass: 'js-slider-main',
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
          <Img src={item.url} alt='image'/>
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

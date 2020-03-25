import React, { useCallback } from 'react';
import Swiper from '../../core/swiper';
import { PopUpButton, Slide, PopUpTitle, PopUpText, PopUp, Img } from './styles';


const SliderMain = ({ items }) => {

  const params = {
    ContainerEl: 'section',
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

  const renderItem = useCallback (
    ( { idx, url, title, popUpData } ) => (
      <Slide to={ '#' } key={ idx } background={ url }>
        <Img src={ url } alt={title} />
        <PopUp>
          <PopUpText>{ popUpData.info }</PopUpText>
          <PopUpTitle>{ popUpData.title }</PopUpTitle>
          <PopUpText>{ popUpData.text} </PopUpText>
          <PopUpButton>button</PopUpButton>
        </PopUp>
      </Slide>
    ),
    []
  );

  return (
    <Swiper params={ params }>
      { items.map ( renderItem )}
    </Swiper>
  );
};

export default SliderMain;

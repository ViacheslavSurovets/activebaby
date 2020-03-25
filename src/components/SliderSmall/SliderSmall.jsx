import React, { useCallback } from 'react';
import Swiper from '../../core/swiper';
import { SliderSmallCard } from '@components/SliderSmallCard';
import PropTypes from 'prop-types';

const SliderSmall = ( { items } ) => {
  const params = {
    initialSlide: 3,
    ContainerEl: 'section',
    slidesPerView: window.innerWidth < 750 ? 3 : 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true
  };

  const renderItem = useCallback (
    ( { idx, url, title } ) => (
      <SliderSmallCard url={ url } title={ title } key={ `slide_${ idx }` } />
    ),
    []
  );

  return (
    <Swiper params={ params }>
      { items.map ( renderItem ) }
    </Swiper>
  );
};

export default SliderSmall;

SliderSmall.propTypes = {
  items: PropTypes.array.isRequired
};

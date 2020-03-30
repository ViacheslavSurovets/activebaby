import React, { useCallback } from 'react';
import Swiper from '../../core/swiper';
import { SliderSmallCard } from '@components/SliderSmallCard';
import { SliderWrapper } from '@commonStyles';
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
    ( { idx, ...rest } ) => (
      <SliderSmallCard key={ `slide_${ idx }` } { ...rest } />
    ),
    []
  );

  return (
    <SliderWrapper>
      <Swiper params={ params }>
        { items.map ( renderItem ) }
      </Swiper>
    </SliderWrapper>
  );
};

export default SliderSmall;

SliderSmall.propTypes = {
  items: PropTypes.array.isRequired
};

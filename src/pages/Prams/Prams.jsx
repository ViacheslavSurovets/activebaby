import React from 'react';
import { SliderMain, CardContainer, SliderSmall } from '@components';
import dataSliderSmall from '@components/SliderSmall/data';
import dataMainSlider from '@components/SliderMain/dataSliderMain';

const Prams = () => (
  <>
    <SliderMain items={ dataMainSlider () } />
    <CardContainer  />
    <SliderSmall items={ dataSliderSmall () } />
  </>
);

export default Prams;

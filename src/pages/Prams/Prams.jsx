import React from 'react';
import { SliderMain, CardContainer, SliderSmall } from '@components';
import sliderSmallData from '@components/SliderSmall/data';

const Prams = () => (
  <>
    <SliderMain />
    <CardContainer />
    <SliderSmall items={ sliderSmallData () } />
  </>
);

export default Prams;

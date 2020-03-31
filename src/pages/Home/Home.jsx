import React from 'react';
import { SliderMain, CardContainer, SliderSmall, VisitUsContainer } from '@components';
import dataSliderSmall from '@components/SliderSmall/data';
import dataMainSlider from '@components/SliderMain/dataSliderMain';

const Home = () => (
  <>
    <SliderMain items={ dataMainSlider () } />
    <CardContainer  />
    <SliderSmall items={ dataSliderSmall () } />
    <SliderMain items={ dataMainSlider () } />
    <SliderSmall items={ dataSliderSmall () } />
    <VisitUsContainer />
  </>
);

export default Home;

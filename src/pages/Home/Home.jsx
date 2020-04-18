import React from 'react';
import { SliderMain, CardContainer, SliderSmall, VisitUsContainer } from '@components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectSliderHugeFirstData,
  selectSliderHugeSecondData,
  selectSliderSmallFirstData,
  selectSliderSmallSecondData
} from '@redux/homeData/homeData.selectors';
import PropTypes from 'prop-types';

const Home = ( props ) => {
  const {
    sliderHugeFirstData,
    sliderHugeSecondData,
    sliderSmallFirstData,
    sliderSmallSecondData
  } = props;
  return (
    <>
      <SliderMain items={ sliderHugeFirstData () } />
      <CardContainer />
      <SliderSmall items={ sliderSmallFirstData () } />
      <SliderMain items={ sliderHugeSecondData () } />
      <SliderSmall items={ sliderSmallSecondData () } />
      <VisitUsContainer />
    </>
  );
};

const mapStateToProps = createStructuredSelector ( {
  sliderHugeFirstData: selectSliderHugeFirstData,
  sliderHugeSecondData: selectSliderHugeSecondData,
  sliderSmallFirstData: selectSliderSmallFirstData,
  sliderSmallSecondData: selectSliderSmallSecondData
} );

export default connect ( mapStateToProps ) ( Home );


Home.propTypes = {
  sliderHugeFirstData: PropTypes.func,
  sliderHugeSecondData: PropTypes.func,
  sliderSmallFirstData: PropTypes.func,
  sliderSmallSecondData: PropTypes.func
};





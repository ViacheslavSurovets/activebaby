import SliderHugeFirstData from './sliderHugeFirstData';
import SliderHugeSecondData from './sliderHugeSecondData';
import SliderSmallFirstData from './sliderSmallFirstData';
import SliderSmallSecondData from './sliderSmallSecondData';
import CARD_CONTAINER_DATA from '@redux/homeData/cardContainerData';

const INITIAL_STATE = {
  sliderHugeFirstData: SliderHugeFirstData,
  sliderHugeSecondData: SliderHugeSecondData,
  sliderSmallFirstData: SliderSmallFirstData,
  sliderSmallSecondData: SliderSmallSecondData,
  cardContainerData: CARD_CONTAINER_DATA
};

const homeDataReducer = (state=INITIAL_STATE, action) => {
  switch (action.type ) {
    default:
      return state;
  }
};

export default homeDataReducer;

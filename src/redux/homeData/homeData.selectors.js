import { createSelector } from 'reselect';

const selectHomeData = state => state.homeData;

export const selectSliderHugeFirstData = createSelector (
  [ selectHomeData ],
  homeData => homeData.sliderHugeFirstData
);

export const selectSliderHugeSecondData = createSelector (
  [ selectHomeData ],
  homeData => homeData.sliderHugeSecondData
);

export const selectSliderSmallFirstData = createSelector (
  [ selectHomeData ],
  homeData => homeData.sliderSmallFirstData
);

export const selectSliderSmallSecondData = createSelector (
  [ selectHomeData ],
  homeData => homeData.sliderSmallSecondData
);

export const selectCardData = createSelector (
  [ selectHomeData ],
  homeData => homeData.cardContainerData
);

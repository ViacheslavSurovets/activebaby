import React from 'react';
import PropTypes from 'prop-types';
import {
  Slide,
  SliderSmallCardText,
  SliderSmallImage,
  SliderSmallLabel,
  SliderSmallLabelText
} from './styles';
import { useTranslation } from 'react-i18next';


const SliderSmallCard = ( props ) => {
  const { t } = useTranslation ();
  const { imageUrl, title, label, path } = props;

  return (
    <Slide to={path} className="swiper-slide" url={ imageUrl }>
      <SliderSmallImage src={ imageUrl } alr={ title } />
      <SliderSmallCardText>{ title }</SliderSmallCardText>
      <SliderSmallLabel>
        <SliderSmallLabelText>{ t(label) }</SliderSmallLabelText>
      </SliderSmallLabel>
    </Slide>
  );
};

export default SliderSmallCard;

SliderSmallCard.propTypes = {
  imageUrl: PropTypes.any,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};



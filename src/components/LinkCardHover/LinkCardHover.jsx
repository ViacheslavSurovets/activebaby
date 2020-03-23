import React from 'react';
import Proptypes from 'prop-types';
import { Img, LinkCard, LinkCardButton, LinkCardContentWrapper, LinkCardTitle } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

const LinkCardHover = ( { background, title, url } ) => (
  <ScrollAnimation animateIn='fadeIn' scrollableParentSelector='#js-layout'>
    <LinkCard to={ url } background={ background }>
      <Img src={ background } alt={ title } />
      <LinkCardContentWrapper>
        <LinkCardTitle className='js-title-linkCard'>{ title.toUpperCase () }</LinkCardTitle>
        <LinkCardButton className='js-fakeButton-linkCard'>button</LinkCardButton>
      </LinkCardContentWrapper>
    </LinkCard>
  </ScrollAnimation>
);

export default LinkCardHover;

LinkCardHover.propTypes = {
  background: Proptypes.string,
  title: Proptypes.string,
  url: Proptypes.string
};

import React from 'react';
import Proptypes from 'prop-types';
import {  LinkCard, LinkCardButton, LinkCardContentWrapper, LinkCardTitle } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

const LinkCardHover = ( { data } ) => {
  const {  title, imageUrl, path } = data;
  return(
    <ScrollAnimation className='js-linkCardHover'  animateIn='fadeIn' animateOnce={true} scrollableParentSelector='#js-layout'>
      <LinkCard to={ path } background={ imageUrl }>
        <LinkCardContentWrapper>
          <LinkCardTitle className='js-title-linkCard'>{ title.toUpperCase () }</LinkCardTitle>
          <LinkCardButton className='js-fakeButton-linkCard'>button</LinkCardButton>
        </LinkCardContentWrapper>
      </LinkCard>
    </ScrollAnimation>
  );
};

export default LinkCardHover;

LinkCardHover.propTypes = {
  data: Proptypes.object
};

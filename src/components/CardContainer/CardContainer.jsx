import React from 'react';
import { LinkCardHover } from '@components';
import { CardWrapper } from './styles';
import { connect } from 'react-redux';
import { selectCardData } from '@redux/homeData/homeData.selectors';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';


const CardContainer = ( { cardData } ) => {

  return(
    <CardWrapper>
      { cardData.map ( ( { id, ...rest } ) =>
        <LinkCardHover key={ id } data={ rest } />
      ) }
    </CardWrapper>
  );
};

const mapStateToProps = createStructuredSelector ( {
  cardData: selectCardData
} );

export default connect ( mapStateToProps ) ( CardContainer );

CardContainer.propTypes = {
  cardData: PropTypes.array
};

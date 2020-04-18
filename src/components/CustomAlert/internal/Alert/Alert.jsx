import React from 'react';
import { connect } from 'react-redux';
import { AlertContainer, AlertText } from '../../styles';
import { createStructuredSelector } from 'reselect';
import { selectShowAlert } from '@redux/alert/alert.selectors';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CheckedIcon, FailIcon } from '@icons';

const Alert = ( { alert } ) => {
  const { t } = useTranslation ();
  return (
    <>
      {
        alert.map ( alert =>
          <AlertContainer key={ alert.id }>
            <AlertText>{ t ( alert.msg ) }</AlertText>
            {
              alert.type === 'success' ?
                <CheckedIcon color='#00ff59' />
                :
                <FailIcon color='#fa1005' /> }
          </AlertContainer>
        )
      }
    </>
  );
};

const mapStateToProps = createStructuredSelector ( {
  alert: selectShowAlert
} );

export default connect ( mapStateToProps ) ( Alert );

Alert.propTypes = {
  alert: PropTypes.array
};

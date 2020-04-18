import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShowAlert } from '@redux/alert/alert.selectors';
import PropTypes from 'prop-types';
import { Portal } from '@components/Portal';
import { Alert } from './internal';


const CustomAlert = ( { showAlert } ) => (
  <>
    {
      showAlert.length > 0 && <Portal component={ Alert } />
    }
  </>
);


const mapStateToProps = createStructuredSelector ( {
  showAlert: selectShowAlert
} );

export default connect ( mapStateToProps ) ( CustomAlert );

CustomAlert.propTypes = {
  showAlert: PropTypes.array
};

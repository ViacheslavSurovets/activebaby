import React from 'react';
import { Form } from './styles';
import PropTypes from 'prop-types';

const CustomForm = ( { children, ...rest } ) => (
  <Form { ...rest }>
    { children }
  </Form>
);

export default CustomForm;

CustomForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};

import React from 'react';

export default { title: 'Button' };

export const CustomButton = (  ...rest ) => {

  return (
    <button { ...rest }>hello</button>
  );
};


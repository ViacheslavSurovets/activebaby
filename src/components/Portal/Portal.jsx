import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal = ( { component: ComponentPortal } ) => {
  const el = useMemo ( () =>(
    document.createElement ( 'div' )
), [] );
  el.setAttribute( 'id', 'portal' );
  useEffect ( () => {
    document.body.appendChild ( el );
    return () => {
      document.body.removeChild ( el );
    };
  }, [ el ] );

  return (
    createPortal ( <ComponentPortal /> , el )
  );
};

export default Portal;

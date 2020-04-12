import React, { Component } from 'react';
import { ErrorImageContainer, ErrorBoundaryContainer, ErrorImageText } from './styles';

class ErrorBoundary extends Component {

  constructor () {
    super ();
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError ( error ) {
    //process the error

    return { hasErrored: true };
  }


  componentDidCatch ( error, info ) {
    console.log ( error );
  }

  render () {
    if ( this.state.hasErrored ) {
      return (
        <ErrorBoundaryContainer>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png' />
          <ErrorImageText>Что-то пошло не так!</ErrorImageText>
        </ErrorBoundaryContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

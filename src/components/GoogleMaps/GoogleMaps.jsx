import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import styled from 'styled-components';
import { tablet, mobile } from '@utils/media';
import { useTranslation } from 'react-i18next';
import { InfoWindowTitleText, InfoWindowTitle } from './styles';


const Map = () => {
  const [ infoWindow, setInfoWindow ] = useState ( false );
  const { t } = useTranslation ();
  return (
    <GoogleMap
      defaultZoom={ 15 }
      defaultCenter={ { lat: 53.706212, lng: 23.857039 } }>
      <Marker position={ { lat: 53.706212, lng: 23.857039 } } onClick={ () => setInfoWindow ( true ) } />
      { infoWindow &&
      <InfoWindow position={ { lat: 53.706212, lng: 23.857039 } } onCloseClick={ () => setInfoWindow ( false ) }>
        <>
          <InfoWindowTitle>
            <InfoWindowTitleText>Active</InfoWindowTitleText>
            <InfoWindowTitleText>Baby</InfoWindowTitleText>
          </InfoWindowTitle>
          <p>{ t ( 'googleMaps.tooltipInfo' ) }</p>
        </>
      </InfoWindow> }

    </GoogleMap>
  );
};

const ContainerElement = styled.div`
  width: 90vw;
  height: 50vw;
  ${tablet}{
    height: 40rem;
  }
  ${ mobile }{
  width: 95%;
  height: 40rem;
  };
`;

const WrappedMap = withScriptjs ( withGoogleMap ( Map ) );
const key = process.env.GOOGLE_SECRET;
const GoogleMaps = () => (
  <WrappedMap
    googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ key }` }
    containerElement={ <ContainerElement /> }
    mapElement={ <div style={ { height: '100%' } } /> }
    loadingElement={ <div style={ { height: '100%' } } /> }
  />
);

export default GoogleMaps;

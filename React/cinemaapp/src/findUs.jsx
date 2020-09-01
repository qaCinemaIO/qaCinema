import React, { createRef } from 'react';

class FindUs extends React.Component {
   googleMapRef = createRef()

   createGoogleMap = () => {
       new window.google.maps.Map(this.googleMapRef.current, {
           zoom: 16,
           center: {
               lat: 53.474005,
               lng: -2.2879854
           },
           disableDefaultUI: true
       })
   }

   render() {
       return (
           <div id="google-map" ref={this.googleMapRef} style={{width: '400px', height: '300px'}} />
       )
   }
}
export default FindUs;
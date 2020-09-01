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

   componentDidMount() {
       const googleMapScript = document.createElement('script')

       googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCDQ3GLDoRqdKEgq8tb7Drm8BJ9BN2cWwM&libraries=places`
       window.document.body.appendChild(googleMapScript)

       googleMapScript.addEventListener('load', {
           googleMapRef : this.createGoogleMap()
       })
   }

   render() {
       return (
           <div id="google-map" ref={this.googleMapRef} style={{width: '400px', height: '300px'}} />
       )
   }
}
export default FindUs;
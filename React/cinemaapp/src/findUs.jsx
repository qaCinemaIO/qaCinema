import React, { createRef } from 'react';
import {Link} from 'react-router-dom';

class FindUs extends React.Component {
    googleMapRef = createRef()
    
   createGoogleMap = () => {
       var Map = new window.google.maps.Map(this.googleMapRef.current, {
           zoom: 16,
           center: {
               lat: 53.474005,
               lng: -2.2879854
           },
           disableDefaultUI: true
       })
       new window.google.maps.Marker({
           position: {lat: 53.473981, lng: -2.286328},
           map: Map
       })
   }


   componentDidMount() {
       
           this.googleMapRef = this.createGoogleMap()
       
   }

   render() {
       return ( 
           <div class="container">
             <br></br>
               <div class="row">
                <div class="col-lg">
                    

                    <h5>Getting Here:</h5>
                    <h6>Public Transport:</h6>
                    The Greater Manchester's Blue Line 'Anchorage' tram stop is directly in front of the cinema. Alternatively the Harbour city Metrolink bus stop is approx. 2 mins walk away and is served by the 50, 79 and 53 orbits bus services. After aligting at the bus stop head east along the quays for about 400 yds then turn right, following the tramway while keeping it on your left to reach the cinema.
                    <br></br>
                    <br></br>
                    <h6>By Car:</h6>
                    From the A5063 (Trafford Rd) turn on to Broadway (left if comiing from the south, right if coming from the north). Drive straight on until you reach a roundabout and take the first exit, proceed along the quays and take the first left onto Anchorage Quay. Turn right, crossing the tramway and you will see the cinema on your right.
                    <br></br>
                    <br></br>
                    <h6>Parking:</h6>
                    The U Swim carpark can be reached from Ohio Avenue nearby, accessible just off Broadway, exit on foot onto the quays, then follow the same route given for approaching fronm the Harbour city Metrolink bus stop.                  
                </div>
                <div class="col-lg">
                    <h5>Our Address:</h5>
                    QA Cinemas <br></br>
                    Anchorage 1 Anchorage Quay Salford, <br></br>
                    The Quays, <br></br>
                    Manchester, <br></br>
                    M50 3YJ <br></br>
                    <br></br>
                    <div id="google-map" ref={this.googleMapRef} marker={this.createMarker} style={{width:"550px", height:"500px"}}/>
                    <br></br>
                    <br></br>
                </div>
               </div>
               <footer class="blockquote-footer">
                &copy; Team iO 2020 &middot; <Link to="/">Home</Link> &middot; <Link to="/aboutTeam">About Our Team</Link> &middot; <Link to="/contact">Contact Us</Link>
                </footer>

           </div>
        )
   }
}
export default FindUs;
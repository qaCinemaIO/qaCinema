import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from './follows.jpg';

class Homepage extends React.Component {

    render() {
        return(
            <>
            <span class="d-block p-2 bg-dark text-white">
                <h1>Our top movies for this week</h1>
            </span>
            <div class="d-flex flex-row">
                <div class ="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
            </div>
            </>
        )

    }

   
}

export default Homepage;
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class About extends React.Component {
    
    render() {
        return(
          <div class="text-center text-wrap">
          <h2>About IO</h2>
          <p>Welcome to IO Cinema. Our mission is to change the way we enjoy movies. All of our venues offer a unique viewing experience alike no other. Need to go to the toilet during the movie, no problem! Press the button located by your cup holder to alert one of our IO ushers. They will provide you with a tablet that is live streaming your movie, so you never miss a moment!</p>
          </div>  
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="...">
                        </img>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                        </img>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="...">
                        </img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        );
      }
    

    
}

export default About;
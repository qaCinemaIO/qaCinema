import React from 'react';
import slideImage from './images/foyer.jpeg';
import slideImage2 from './images/bar.jpeg';
import slideImage3 from './images/food.jpeg';
import {Link} from 'react-router-dom';

class About extends React.Component {

    render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md"> 
                    <h1 class="text-center"> About iO </h1>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active aboutPics">
                                    <img src={slideImage} class="d-block w-100" alt="...">
                                    </img>
                                </div>
                                <div class="carousel-item">
                                    <img src={slideImage2} class="d-block w-100" alt="...">
                                    </img>
                                </div>
                                <div class="carousel-item">
                                    <img src={slideImage3} class="d-block w-100" alt="...">
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
                        <p class="text-center aboutText"> Welcome to IO Cinema. Our mission is to change the way we enjoy movies. All of our venues offer a unique viewing experience alike no other. Need to go to the toilet during the movie, no problem! Press the button located by your cup holder to alert one of our IO ushers. They will provide you with a tablet that is live streaming your movie, so you never miss a moment! 

Fancy dropping by for a movie? Or perhaps you just want to spend time in our lively foyer restaurant iO, where we serve a varied and exciting menu that changes weekly. You can even order from our restaurant during your movie, and our Ushers will deliver your food directly to your seat!
Our outdoor garden has been recently renovated and features a fully stocked bar along with a beautiful outdoor seating area! There is something for everyone at iO cinema and we cannot wait to see you! If you're spending a day (or night!) out, thanks to our exciting Salford quays location there is <Link to="/places">plenty to do </Link> nearby before or after you enjoy your Io cinemas experience.
<br></br><Link to="/aboutTeam">Click here</Link> to learn more about the team behind Io cinemas.
<br></br>You can get in touch with us <Link to="contact">here</Link>.
</p>
                        

                    </div>
                </div>
            </div>  
        )
    }


}

export default About; 

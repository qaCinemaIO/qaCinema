import React from 'react';

class About extends React.Component {

    render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md"> 
                    <h1> About iO </h1>
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active aboutPics">
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
                        

                    </div>
                </div>
            </div>  
        )
    }


}

export default About; 

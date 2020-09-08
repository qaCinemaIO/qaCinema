import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from './images/follows.jpg';
import './index.css';
import axios from 'axios';
import Seat from './SeatSelector.jsx'
import { Button } from 'reactstrap';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            button: null,
            data: null,
            movietitle: "Welcome to iO Cinema",
            movieSynopsis: "Click on the movie poster to see our top trailers for this week! Here at Chyrate our mission is to let you know which movies are worth watching! We update our site weekly with reviews on the movies I have enjoyed this week."
        }
        this.updateHomeData = this.updateHomeData.bind(this);
        this.poster = this.poster.bind(this)
    }
    async componentDidMount(){
        const response = await fetch('http://localhost:9007/viewAllmovies')
        const json = await response.json();
        this.setState({ data: json });
        // this.setState({ data: json });
        this.poster()
    }
    poster(){
        if (this.state.data !== null){
        let poster_id = 0;
       for (let i=0; i <5 ; i++) {
          let id_tag = 'Poster' + poster_id;  // #Poster0, #Poster1, etc.
          let poster_img = document.getElementById(id_tag);
          console.log(poster_img);
          poster_img.src = process.env.PUBLIC_URL + '/images/' + this.state.data[i].post_img_ref;
          poster_img.alt = this.state.data[i].alt_txt;
          poster_img.title = this.state.data[i].alt_txt;
          let a = poster_id;
          poster_img.onclick = () => this.updateHomeData(this.state.data[i],a)
          poster_id++;
        }
    }
    }
    updateHomeData(item, id){
        this.setState({button:null});
     this.setState({movieSynopsis: item.synopsis});
     this.setState({movietitle: item.title});
    this.setState({button:<><Seat screen={id}/></>});
        //    let id_tag = 'Poster' + poster_id;  // #Poster0, #Poster1, etc.
        //    let poster_img = document.getElementById(id_tag);
        //    console.log(poster_img);
    
    }



    render() {
        return(
            <>
            <span class="d-block p-2 bg-secondary text-white">
                <h1 class="text-center"> Movies showing at iO cinema this week</h1>
            </span>
            <div class="d-flex flex-row">
                <div class ="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster0" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster1" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster2" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster3" />
                </div>
                <div class="p-2">
                    <img src={logo} class="img-fluid poster" alt="Loading..." height="100" id="Poster4" />
                </div>
            </div>
            <div class="p-2 movieDescArea">
                <h2 id="movieTitle" class="text-center">{this.state.movietitle}</h2>
                <p id="movieInfo" class="text-center">
                {this.state.movieSynopsis}
                </p>
                {this.state.button}
            </div>
            </>
        )

    }

   
}

export default Homepage;
import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from './images/follows.jpg';
import './index.css';
import axios from 'axios';


class Homepage extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:9007/viewAllmovies')
        .then(function (response) {
          // console.log(response);
    
          let data = response.data
          console.log(data);
        
          let poster_id = 0;

          data.forEach((item) => {
            console.log(item);
            let id_tag = 'Poster' + poster_id;  // #Poster0, #Poster1, etc.
            let poster_img = document.getElementById(id_tag);
            console.log(poster_img);
            poster_img.src = process.env.PUBLIC_URL + '/images/' + item.post_img_ref;
            poster_img.alt = item.alt_txt;
            poster_img.title = item.alt_txt;
            poster_img.onclick = function() { updateHomeData(item) }
            
            // poster_img.click(function() { updateHomeData(item)});
            poster_id++;

            //poster_img = $(id_tag);
            //poster_img.attr('src', item.post_img_ref);
            //poster_img.attr('alt', item.alt_txt);
            //poster_img.attr('title', item.synopsis);
            //poster_img.attr('length', item.duration)
            //poster_img.click(function() { updateHomeData(item); });
            //poster_id++;
        });
        })
        .catch(function (error) {
          console.log(error);
        })

        function updateHomeData(item) {
            console.log(item);
            let movie_info = document.getElementById('movieInfo');
            let movie_title = document.getElementById('movieTitle');
            
            movie_info.innerHTML = item.synopsis ;
            movie_title.innerHTML = item.title;

            //    let id_tag = 'Poster' + poster_id;  // #Poster0, #Poster1, etc.
            //    let poster_img = document.getElementById(id_tag);
            //    console.log(poster_img);
        }
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
                <h2 id="movieTitle" class="text-center">Welcome to iO Cinema</h2>
                <p id="movieInfo" class="text-center">
                Click on the movie poster to see our top trailers for this week!
                Here at Chyrate our mission is to let you know which movies are worth watching!
                We update our site weekly with reviews on the movies I have enjoyed this week.
                </p>
            </div>

            </>
        )

    }

   
}

export default Homepage;
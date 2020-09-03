import React from 'react';
import axios from 'axios';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          synopsis: '',
          director: '',
          age_rating: '',
          starring: '',
          releaseDate: '',
          duration: 0,
          writers: '',
          genre: 'default'
        }
    }

    handleSubmit(e) {
      e.preventDefault();
  
      axios({
        method: "POST", 
        url:"http://localhost:9007/addmovie", 
        data:  {
          "title": this.state.title,
          "synopsis": this.state.synopsis,
          "director": this.state.director,
          "age_rating": this.state.age_rating,
          "release_date": this.state.releaseDate,
          "duration_min": this.state.duration,
          "writers": this.state.writers,
          "fk_genre_id": parseInt(this.state.genre.charAt(0))
        }
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    componentDidMount() {
    axios.get('http://localhost:9007/genres')
    .then(function (response) {
      // console.log(response);

      let data = response.data
      console.log(data);
      for (let x=0; x<data.length; x++) {
        document.getElementById('genreselect').innerHTML+=`<option >${data[x].idgenres} ${data[x].genre_name}</option>`
      }
      
    })
    .catch(function (error) {
      console.log(error);
    })
    }
    render() {
        return(
            <div class="container">
              <form id="newmovie">
                <div class="formgroup">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="synopsis">Synopsis</label>
                  <textarea className="form-control" rows="5" value={this.state.synopsis} onChange={this.onSynChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="director">Director</label>
                  <input type="text" className="form-control" value={this.state.director} onChange={this.onDirectorChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="age_rating">Age Rating</label>
                  <input type="text" className="form-control" value={this.state.age_rating} onChange={this.onRatingChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="Starring">Starring</label>
                  <input type="text" className="form-control" value={this.state.starring} onChange={this.onStarringChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="releasedate">Release Date</label>
                  <input type="date" className="form-control" value={this.state.releaseDate} onChange={this.onRelDateChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="duration">Duration (min)</label>
                  <input type="number" className="form-control" value={this.state.duration} onChange={this.onDurationChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="writers">Writers</label>
                  <input type="text" className="form-control" value={this.state.writers} onChange={this.onWritersChange.bind(this)} required/>    
                </div>
                <div class="formgroup">
                  <label htmlFor="genre">Genre</label>
                  <select id="genreselect" className="form-control" value={this.state.genre} onChange={this.onGenreChange.bind(this)} required>        
                  </select>
                  <br></br>
                  <button type="submit" className="btn btn-primary">Submit</button>  
                </div>
              </form>
              
            </div>
        )
    }

    onTitleChange(event) {
        this.setState({title: event.target.value})
    }
    onSynChange(event) {
        this.setState({synopsis: event.target.value})
    }
    onDirectorChange(event) {
        this.setState({director: event.target.value})
    }
    onRatingChange(event) {
        this.setState({age_rating: event.target.value})
  }
    onStarringChange(event) {
        this.setState({starring: event.target.value})
    }
    onRelDateChange(event) {
        this.setState({releaseDate: event.target.value})
    }
    onDurationChange(event) {
        this.setState({duration: event.target.value})
    }
    onWritersChange(event) {
        this.setState({writers: event.target.value})
    }
    onGenreChange(event) {
      this.setState({genre: event.target.value})
  }

}
export default AddMovie
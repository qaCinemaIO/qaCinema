import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          synopsis: '',
          director: '',
          age_rating: '',
          starring: '',
          releaseDate: new Date(),
          duration: 0,
          writers: '',
          genre:''
        }
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
                  <label htmlFor="Starring">Starring</label>
                  <input type="text" className="form-control" value={this.state.starring} onChange={this.onStarringChange.bind(this)} required/>    
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
    onStarringChange(event) {
        this.setState({starring: event.target.value})
    }

}
export default AddMovie
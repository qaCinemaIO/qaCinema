import React from 'react';
import axios from 'axios';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  
    handleSubmit(e) {
        e.preventDefault();
    
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

  render() {
   return(

     <div class="container">
       <div class="row">
         <div class="col-md">
           <h6>Contact QA cinemas for all of your cinema needs!</h6>
           <p id="getintouch">The easiest way to get in touch is by dropping us a message using the form on this page. Alternatively you can contact us by phone and one of our dedicated team will do everything they can to assist you.</p>
           <br></br>

           <h6>Our Address</h6>
           QA Cinemas <br></br>
           Anchorage 1 Anchorage Quay Salford, <br></br>
           The Quays, <br></br>
           Manchester, <br></br>
           M50 3YJ <br></br>
           <br></br>
           <br></br>

           <h6>Telephone</h6>
           0118 999 881 99 9119 7253

         </div>
         <div class="col-md">
         <h2>Send us a message</h2>
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" class="needs-validation">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
          <div class="invalid-feedback">
        Please provide a valid email address.
          </div>
      </div>
      <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" className="form-control"  value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required/>
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }
  
  }
  
  export default Contact;
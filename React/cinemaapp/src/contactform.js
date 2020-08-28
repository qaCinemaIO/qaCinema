import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

         </div>
         <div class="col-md">
         <h2>Send us a message</h2>
     <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" class="needs-validation">
      <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
      </FormGroup>
      <FormGroup>
          <Label htmlFor="exampleInputEmail1">Email address</Label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
          <div class="invalid-feedback">
        Please provide a valid email address.
          </div>
      </FormGroup>
      <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" className="form-control"  value={this.state.subject} onChange={this.onSubjectChange.bind(this)} required/>
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
      </div>
      <Button type="submit" className="btn btn-primary">Submit</Button>
      </Form>
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
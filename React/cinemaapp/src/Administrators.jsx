import React, { createRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import FireState from './fireState';
import Login from './Login';
import AddMovie from './addMovie';




class AdminLogin extends React.Component {

    constructor(props)
    {
        super(props)
        this.state={
            show:true,
            content:null,
            error:null
        }
        this.errorFunc = this.errorFunc.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    errorFunc(){
        this.setState({error:<p style={{color:"red"}}>Incorrect Username or Password</p>})
    }


    handleModal()
    {
        this.setState({show:!this.state.show})
        this.setState({content:<AddMovie/>})
        
    }
  //  onClick={()=>{this.handleModal()}}
 //  onHide={()=>this.handleModal()}
    
    

   render() {
       return ( 
           <div>
           <div>
               <Modal backdrop="static" show={this.state.show}>
                   <Modal.Header>
                       <div className="header">
                       <p style={{color: "black"}}>This section is for Admins only!</p>
                       </div>
                       </Modal.Header>
                   <Modal.Body>
                       {this.state.error}
                       <Login error={this.errorFunc}  modal={this.handleModal}/>
                   </Modal.Body>
                   <Modal.Footer>
                     <a href='http://localhost:3000/'><button>back</button></a>
                   </Modal.Footer>
               </Modal>
               </div>
               <div>
                   {this.state.content}  
               </div>
               <footer class="blockquote-footer">
                &copy; Team iO 2020 &middot; <Link to="/">Home</Link> &middot; <Link to="/aboutTeam">About Our Team</Link> &middot; <Link to="/contact">Contact Us</Link>
                </footer>

               </div>
           
       )
   }






}
export default AdminLogin;
import React, { createRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Homepage from './Homepage';
import FireState from './fireState';
import Login from './Login';
import AddMovie from './addMovie';



class AdminLogin extends React.Component {

    constructor()
    {
        super()
        this.state={
            show:true
        }
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
        
    }
  //  onClick={()=>{this.handleModal()}}
  // onHide={()=>this.handleModal()}
    
    

   render() {
       return ( 
           <div>
           <div>
               <Modal backdrop="static" show={this.state.show}>
                   <Modal.Header closeButton>Modal Head Part</Modal.Header>
                   <Modal.Body>
                       <Login modal={this.handleModal}/>
                   </Modal.Body>
                   <Modal.Footer>
                   </Modal.Footer>
               </Modal>
               </div>
               <div>
                   <AddMovie></AddMovie>
               </div>
               </div>
           
       )
   }
}
export default AdminLogin;
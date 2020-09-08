import React, { createRef } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Homepage from './Homepage';
import FireState from './fireState';
import Login from './Login';



class AdminLogin extends React.Component {

    constructor()
    {
        super()
        this.state={
            show:true
        }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
        
    }
  //  onClick={()=>{this.handleModal()}}
    
    

   render() {
       return ( 
           <div>
               <Modal backdrop="static" show={this.state.show} onHide={()=>this.handleModal()} >
                   <Modal.Header closeButton>Modal Head Part</Modal.Header>
                   <Modal.Body>
                       <Login/>
                   </Modal.Body>
                   <Modal.Footer>
                   </Modal.Footer>
               </Modal>
              
               </div>
           
       )
   }
}
export default AdminLogin;
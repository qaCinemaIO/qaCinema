import React, { createRef } from 'react';
import { Button, Modal } from 'react-bootstrap'


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

   render() {
       return ( 
           <div>
               <Modal data-backdrop="false" show={this.state.show} onHide={()=>this.handleModal()} >
                   <Modal.Header closeButton>Modal Head Part</Modal.Header>
                   <Modal.Body>
                       Hi, React modal is here
                   </Modal.Body>
                   <Modal.Footer>
                       <Button onClick={()=>{this.handleModal()}}>
                           Close Modal
                       </Button>
                   </Modal.Footer>
               </Modal>
              
               </div>
           
       )
   }
}
export default AdminLogin;
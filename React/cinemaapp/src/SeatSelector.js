
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { createPortal } from 'react-dom';
let SeatRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

function tablePopulator(){
console.log("Hello");
}
class Example extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        tablePopulator();
    }

    render() {
        return (
            <div>
                {/*   */}
                <Button color='danger' onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
<<<<<<< HEAD
                        
=======
                    <table class="table table-borderless table-dark">
                            <tbody>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
>>>>>>> LucaSeatSel
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
    
}

export default Example;
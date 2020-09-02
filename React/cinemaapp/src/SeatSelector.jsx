
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import { createPortal } from 'react-dom';
import Seat from './Seat';
import axios from 'axios';

let SeatRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

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
    }
    createSomething = () => {
        let seatTable = [];
        let fetchplace;
        SeatUpdate(fetchplace);
        for (let i = 0; i < SeatRow.length; i++) {
            
            let seats = [];
            let b = SeatRow[i];
            for (let a = 1; a <= 20; a++) {
                seats.push(<td><Seat row={b} num={a} seatd={SeatUpdate(fetchplace)}/></td>)
                fetchplace++;
            }
            seatTable.push(<tr>{seats}</tr>)
        }
        return seatTable;
    }
    render() {
        return (
            <div>
                {/*   */}
                <Button color='danger' onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="xl">
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>

                        <Table dark responsive>
                            <tbody>
                                {this.createSomething()}
                            </tbody>
                        </Table>
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
function SeatUpdate(i){
    axios.get('http://localhost:9007/info')
  .then(function (response) {
      console.log(response.data[i]);
    return response.data[i];
  })
  .catch(function (error) {
    console.log(error);
  });
}
export default Example;
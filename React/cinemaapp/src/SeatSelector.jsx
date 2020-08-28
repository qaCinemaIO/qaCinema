
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import { createPortal } from 'react-dom';
import Seat from './Seat';

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
        for (let i = 0; i < SeatRow.length; i++) {
            let seats = [];
            let b = SeatRow[i];
            for (let a = 1; a <= 20; a++) {
                seats.push(<td><Seat row={b} num={a} /></td>)
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

                        <Table dark>
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

export default Example;
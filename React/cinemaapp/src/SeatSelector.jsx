
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import { createPortal } from 'react-dom';
import Seat from './Seat';
import axios from 'axios';
let seatnum;
let SeatRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: "hello"
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:9007/info')
        const json = await response.json();
        this.setState({ data: json });
        
    }   
 createSomething(){
    if(this.state.data !== "hello"){
        let seatTable = [];
        let seatnum = 0;
        let occu = this.state.data[seatnum].seatOccupied;
        console.log(occu);
        for (let i = 0; i < SeatRow.length; i++) {

            let seats = [];
            let b = SeatRow[i];
            for (let a = 1; a <= 20; a++) {
                seats.push(<td><Seat row={b} num={a} data={occu} /></td>)
                seatnum++;
            }
            seatTable.push(<tr>{seats}</tr>)
        }
        return seatTable;
    }else{
        return <h1>Loading...</h1>
    }
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

export default Example;
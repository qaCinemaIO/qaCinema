
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import { createPortal } from 'react-dom';
import Seat from './Seat';
let seatnum;
let SeatRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: null,
            modal: false,
            data: "0",
            table: 0,
            payment: []
        };

        this.toggle = this.toggle.bind(this);
        this.payment = this.payment.bind(this);
        this.adult = this.adult.bind(this);
        this.child = this.child.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        this.createSomething();
    }
    async componentDidMount() {
        const response = await fetch('http://localhost:9007/info')
        const json = await response.json();
        this.setState({ data: json });
        
    }   
    payment(a){
        this.setState({tickets:<ModalFooter><Button color="secondary" onClick={() => this.adult(a)}>Adult</Button><Button color="secondary" onClick={() => this.child(a)}>Child</Button>{' '}</ModalFooter>});
    }
    adult(a){
        
        this.state.payment.push([a,"Adult"]);
        // this.setState({payment:{b}});
        console.log(this.state.payment);
        this.setState({tickets:<ModalFooter><Button color="danger">Purchase Tickets</Button></ModalFooter>});
    }
    child(a){
        let b = this.state.payment;
        b.push(["Child"]);
        this.setState({payment:{b}});
        this.setState({tickets:<ModalFooter><Button color="Danger">Purchase Tickets</Button></ModalFooter>})
    }
 createSomething(){

    if(this.state.data !== "0"){
        let seatTable = [];
        let occu = this.state.data;
        let c = 0;
        for (let i = 0; i < SeatRow.length-1; i++) {
            
            let seats = [];
            let b = SeatRow[i];
            for (let a = 1; a <= 20; a++) {
                seats.push(<td><Seat row={b} num={a} data={occu[c].seatOccupied} pay={this.payment} /></td>)
                c++;
            }
            seatTable.push(<tr>{seats}</tr>)
        }
        this.setState({table: <Table dark responsive><tbody>{seatTable}</tbody></Table>});
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
                                {this.state.table}
                    </ModalBody>
                    {this.state.tickets}
                </Modal>
            </div>
        );
    }

}

export default Example;
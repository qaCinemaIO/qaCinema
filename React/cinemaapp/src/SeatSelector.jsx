
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import Seat from './Seat';
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
let SeatRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: null,
            modal: false,
            data: "0",
            table: 0,
            payment: [],
            price: 0.0,
            disable: false
        };

        this.toggle = this.toggle.bind(this);
        this.payment = this.payment.bind(this);
        this.adult = this.adult.bind(this);
        this.child = this.child.bind(this);
        this.finalPurchase = this.finalPurchase.bind(this);
        this.disButton = this.disButton.bind(this);
        
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
    adult(a,){
        
        this.state.payment.push([a,"Adult",10.50]);
        this.setState({tickets:<ModalFooter><Button color="danger" onClick={this.finalPurchase}>Purchase Tickets</Button></ModalFooter>});
    }
    child(a){
        this.state.payment.push([a,"Child",8.80]);
        this.setState({tickets:<ModalFooter><Button color="danger" onClick={this.finalPurchase}>Purchase Tickets</Button></ModalFooter>});
    }
    finalPurchase(){
        let a = [];
         for(let i =0; i<this.state.payment.length;i++){
            this.state.price = this.state.price + this.state.payment[i][2];
            a.push(<tr><td>{this.state.payment[i][0]}</td><td>{this.state.payment[i][1]}</td><td>{`£${this.state.payment[i][2]}`}</td></tr>);
         }
         a.push(<tr><td></td><td><strong>Total:</strong></td><td><strong>{`£${this.state.price}`}</strong></td></tr>)
         console.log(a);
        const product = ({
            name: "Cinema Tickets",
            price: this.state.price,
        });
        console.log(product);
        async function handleToken(token) {
            const response = await axios.post(
                "http://localhost:8081/checkout",
                { token, product }
            );
            const { status } = response.data;
            console.log("Response:", response.data);
            if (status === "success") {
                console.log("yay")
    
    
            } else {
                console.log("Wahh")
            }
        }
    this.setState({table: <><Table dark responsive><tbody>{a}</tbody></Table>
        <StripeCheckout
            stripeKey="pk_test_51HKitMDLu2BN2qWaeD9Weuh6ic8EKHj6OfKtSsdKhd5254dHydrqaDYIZvcM4CF54pD63LMtgOJm5vVqAy2hFWAt00SuKjrBqD"
            // token={handleToken}
            amount={product.price}
            name="Tesla Roadster"
            billingAddress
            shippingAddress
        /></>})
    this.setState({tickets: null})
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
                seats.push(<td><Seat row={b} num={a} data={occu[c].seatOccupied} pay={this.payment} dis={this.state.disable} disFunct={this.disButton} /></td>)
                c++;
            }
            seatTable.push(<tr>{seats}</tr>)
        }
        this.setState({table: <Table dark responsive><tbody>{seatTable}</tbody></Table>});
    }else{
        return <h1>Loading...</h1>
    }}
    disButton(){
        this.setState({disable:true});
    };
    
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
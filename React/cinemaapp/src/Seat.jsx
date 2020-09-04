import React from 'react';
import { Button} from 'reactstrap';
class MyClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            colour: "danger",
            disabled: true
        };
        
        this.seatPurchase = this.seatPurchase.bind(this);
        this.tempDis = this.tempDis.bind(this);

    }
    componentDidMount(){
        if(this.props.data !== "0"){
           this.setState({colour: "danger",
           disabled: true})
        }
        else{
            this.setState({colour: "success" ,
           disabled: this.props.dis})
        }
    }
    seatPurchase(){
        let a = `${this.props.row}${this.props.num}`;
        if(this.state.colour === "success"){
        this.setState({colour: "primary"})
        this.props.pay(a);
        }else{
        this.setState({colour: "success"})
        
        }
    }
    tempDis(){

    }
    render() {
        return (
        <Button size="sm" color={this.state.colour} onClick={this.seatPurchase} disabled={this.state.disabled}>{this.props.row}{this.props.num}</Button>
        );
    }
    
};

export default MyClassComponent;
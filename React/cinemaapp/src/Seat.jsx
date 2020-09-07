import React from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colour: "danger",
            disabled: true,
            name: `${this.props.row}${this.props.num}`,
            active: false,
            button: null,
            drop: null
        };

        this.seatPurchaseChild = this.seatPurchaseChild.bind(this);
        this.seatPurchaseAdult = this.seatPurchaseAdult.bind(this);
        this.tempDis = this.tempDis.bind(this);

    }
    componentDidMount() {
        if (this.props.data !== "0") {
            this.setState({
                colour: "danger",
                disabled: true, 
            })
        }
        else {
            this.setState({
                colour: "success",
                disabled: false,
                active: false,

                button: <><DropdownMenu disabled={this.state.disabled}>
                <DropdownItem onClick={this.seatPurchaseChild}>Child</DropdownItem>
                <DropdownItem onClick={this.seatPurchaseAdult}>Adult</DropdownItem>
            </DropdownMenu></>
            })
        }
    }
    seatPurchaseChild() {
        this.setState({ colour: "primary" })
        this.setState({active:true})
            this.props.chi(this.state.name);

        
    }
    seatPurchaseAdult(){
        
            this.setState({ colour: "primary" })
            this.setState({active:true})
            this.props.adult(this.state.name);
    }
    tempDis() {
        if(this.state.active === false){
        this.setState({ btnDropright: !this.state.btnDropright })
        }
        else{
            this.setState({colour: "success"})
            this.props.delete(this.state.name);
            this.setState({active:false})
        }
    }
    render() {
        return (
            <Dropdown size="sm" direction="right" isOpen={this.state.btnDropright} onClick={this.tempDis} toggle={() => this.tempDis}>
            <DropdownToggle disabled={this.state.disabled} color={this.state.colour}>
            {this.state.name}
            </DropdownToggle>
            {this.state.button}
            </Dropdown>
        );
    }

};

export default MyClassComponent;
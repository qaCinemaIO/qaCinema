import React from 'react';
import { Button} from 'reactstrap';
class MyClassComponent extends React.Component{
    constructor(props) {
        super(props);
        if(this.props.data === "0"){
            this.state = {
                colour: "danger"
            };
        }
        else{
            this.state = {
                colour: "success"
            };
        }
        

    }
    render() {
        return (
        <Button size="sm" color={this.state.colour}>{this.props.row}{this.props.num}</Button>
        );
    }
    
};

export default MyClassComponent;
import React from 'react';
import { Button} from 'reactstrap';
class MyClassComponent extends React.Component{
    render() {
        return (
        <Button size='sm'>{this.props.row}{this.props.num}</Button>
        );
    }
};

export default MyClassComponent;
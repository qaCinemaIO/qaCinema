import React,{Component} from 'react';
// import { Alert } from 'reactstrap';
import {Alert} from 'react-bootstrap';

export default class Discussions extends Component {

    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            text: "",
            boolForShould: true
        }
        console.log("Constructor sets the time as : "+ this.state.date);
    }


    render() {
        return (
            <div  style={{
                backgroundColor: '#303030',
                width: "auto",
                height: "auto"
            }}>
                <h1 style={{ color: 'white' }}>Displaying all posts</h1>
                <br/>

                <div className={'container'}>
                <Alert variant={'light'}>
                    This is a light alert — check it out!
                </Alert>
            </div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }



}

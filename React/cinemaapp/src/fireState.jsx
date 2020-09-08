import React, { Component } from 'react';
import fire from './config/Fire';
import Homepage from './Homepage';
import Login from './Login';
import FindUs from './findUs';
import About from './About';
import AdminLogin from './Administrators';

class FireState extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        user:{},
        }
    }

   

    

    componentDidMount(){
        this.authListener();
    }

authListener(){
    fire.auth().onAuthStateChanged((user) => {
        if (user){
            this.setState({ user });
        }else{
            this.setState({ user: null });
        }
         
    });
}

render(){
    return (
        <div className="fireState">
            {this.state.user ? (<AdminLogin/>) : (<AdminLogin/>)}
        </div>
    );
}}

export default FireState;
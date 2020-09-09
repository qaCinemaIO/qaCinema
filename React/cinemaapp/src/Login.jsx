import React, { Component } from 'react';
import fire from './config/Fire';



class Login extends React.Component{

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            password:''
        }
    }

     

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{ 
            this.props.modal()
        }).catch((error) => {
            console.log(error);
            this.props.error()

            
        });
        

    }
   

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        return(
            <div className="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="EmailInput">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                        class="form-control" id="EmailInput" aria-describedby="emailHelp"
                        placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                    <label for="PasswordInput">password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                        class="form-control" id="PasswordInput" aria-describedby="passwordHelp"
                        placeholder="Enter Password" />
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
export default Login;
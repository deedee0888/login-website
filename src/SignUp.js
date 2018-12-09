import React, { Component } from 'react';

import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import './App.css';


export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state= {
      email: "",
      password: "",
      confirmPassword: "",
      error: false,
      submited: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 5 &&
      this.state.password === this.state.confirmPassword
    );
  }


    render() {
        return(
          <div className="signup">
            <form onSubmit={this.handleSubmit}>
           <FormGroup controlId="email" >
            <ControlLabel>e-mail:</ControlLabel>
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />        
           </FormGroup>
           <FormGroup controlId="password" >
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" >
            <ControlLabel>Confirm password:</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            bsSize="large"
            onSubmit={!this.validateForm()}
            type="submit"
            text="Signup"
          >
          Register
          </Button>  
        </form>        
      
        </div>
            
          
      )
      
        
    }

}
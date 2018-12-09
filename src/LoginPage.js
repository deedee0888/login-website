import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import './App.css';


class Auth {
  constructor() {

  }
  
  static USERS = {
    'admin@admin.com': 'admin'
  }

  static signIn(email, password) {
    const userPassword = Auth.USERS[email];

    if (!userPassword) {
      return {
        success: false,
        message: 'No user in database'
        
      }
    }

    if (userPassword === password) {
      return {
        success: true,
        user: {
          email: email, 
          name: 'example',
          id: 123

        }
      }
    } else {
      return {
        success: false,
        message: 'Wrong credentials'
        
      }
    }
  }
}

export default class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state= {
      email: "",
      password: "",
      error: false,
      loggedIn: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let response = Auth.signIn(this.state.email, this.state.password);

    if (!response.success) {
      this.setState({
        error: true, 
        loggedIn: false       
      })
    } else {
      this.setState({
        error: false,
        loggedIn: true    
      })
    }
  }
  render() {
    return (      
      <div className="login">
        {
          this.state.error ? (
            <Alert bsStyle="warning">No user in database!</Alert>)
           : null
        }
        {
          this.state.loggedIn ? <Redirect to='./loggedIn'/> : null
        }
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" >
          <ControlLabel>e-mail</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />        
          </FormGroup>
          <FormGroup controlId="password" >
            <ControlLabel>password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            disable={!this.validateForm()}
            type="submit"
          >
          login
          </Button>  
        </form>        
      </div>
    );
  }
}



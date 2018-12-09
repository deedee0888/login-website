import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Navbar } from "react-bootstrap";
import './App.css';

class Header extends Component {

    render() {
        return(
            <Navbar className="navigation">
                <Navbar.Header className="logo">My Login Page</Navbar.Header>
                <div className="btn">
                    <Button>
                        <Link className="link" to="/signUp">Signup</Link>
                    </Button>
                    <Button>
                        <Link className="link" to="/loginPage">Login</Link>
                    </Button>
                </div>                    
            </Navbar>
        )
    }
}

export default Header
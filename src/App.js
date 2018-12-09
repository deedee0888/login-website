import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import RenderRoutes from './Route.js';


export default class App extends Component {
    render() {
        return(
            <Router>
                <React.Fragment>
                    <Header />
                    <RenderRoutes />
                </React.Fragment>
            </Router>
        )
    }
}

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import LoggedIn from './LoggedIn.js';
import SignUp from './SignUp.js';

 const RenderRoutes = () => (
        <React.Fragment>
            <Route path="/loginPage" render={match => <LoginPage />} />
            <Route path="/loggedIn" render={match => <LoggedIn />} />
            <Route path="/signUp" render={match => <SignUp />} />
        </React.Fragment>
  )

  export default RenderRoutes;
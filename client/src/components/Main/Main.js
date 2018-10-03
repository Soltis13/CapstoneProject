import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Landing from '../layout/Landing';
import Register from '../auth/Register';
import Login from '../auth/Login';
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
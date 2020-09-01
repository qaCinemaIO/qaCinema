import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contactform.js'

import About from './About'
import Homepage from './Homepage'
import {BrowserRouter, Switch,Route, Link } from "react-router-dom"

import Seat from './SeatSelector.jsx'

function HomePage() {
  return <HomePage/>
}

function SeatSelectPage() {
  return <Seat />
}

function ContactPage() {
  return <Contact />
}

function AboutPage() {
  return <About />
}
function App() {
  return (
    <BrowserRouter>
    
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/seatselect">Select a Seat</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/about">About iO </Link>
            </li>
          </ul>
        </nav>
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/seatselect/" component={SeatSelectPage} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/about/" component={AboutPage} />

        </Switch>

      </div>
    
</BrowserRouter>
  );
}
export default App;

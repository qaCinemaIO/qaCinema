import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contactform.js'
import {BrowserRouter, Switch,Route, Link } from "react-router-dom"
import FilmClass from './filmClassifications.js'
import Seat from './SeatSelector.jsx'
import FindUs from './findUs.jsx';

function HomePage() {
  return <h1>This is a placeholder for the Home page.</h1>
}

function SeatSelectPage() {
  return <Seat />
}

function ContactPage() {
  return <Contact />
}

function FindUsPage() {
  return <FindUs />
}

function filmClassPage() {
  return <FilmClass />
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
              <Link className="navbar-brand" to="/findus">Find Us</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/film-classifications">Classification Guide</Link>
            </li>
          </ul>
        </nav>
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/seatselect/" component={SeatSelectPage} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/findus/" component={FindUsPage} />
          <Route exact path="/film-classifications" component={filmClassPage} />
        </Switch>

      </div>
    
</BrowserRouter>
  );
}
export default App;
import React from 'react';
import logo from './images/logo2.png';
import './App.css';
import Contact from './contactform.js'
import {BrowserRouter, Switch,Route, Link} from "react-router-dom"
import FilmClass from './filmClassifications.js'
import FindUs from './findUs.jsx';
import TheTeam from './theTeam.js';
import Homepage from './Homepage';
import AdminLogin from './Administrators.jsx';
import AddMovie from './addMovie.jsx';
import About from './About'
import Nearby from './ToDoNearby.jsx';

import FireState from './fireState';
import Login from './Login';



import Discussion from './discussions';



function HomePage() {
  return <Homepage />
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


function adminMode() {
  return <FireState/>
  }
 

function AboutPage() {
  return <About/>
}


function toDoNearby() {
  return <Nearby />
}

function teamPage() {
  return <TheTeam />
}

function discussionPage() {
  return <Discussion />
}

function App() {
  return (

    
    <BrowserRouter>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link className="navbar-brand" to="/">
            <img src={logo} class="img-fluid logo" alt="Loading..." height="100" />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/findus">Find Us</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/film-classifications">Classification Guide</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/discussions">Discussions</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/about">About iO</Link>
            </li>
            
            <li className="nav-item">
              <Link id="FireStates" className="navbar-brand" to="/admin">Admin</Link>
            </li>

          </ul>
        </nav>
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/findus/" component={FindUsPage} />
          <Route exact path="/film-classifications" component={filmClassPage} />
          <Route exact path="/aboutTeam" component={teamPage} />
          <Route exact path="/admin/" component={adminMode} />

          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/places" component={toDoNearby} />
          <Route exact path="/discussions" component={discussionPage} />

        </Switch>
    </div>
        </BrowserRouter>

  );
}
export default App;

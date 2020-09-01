import React from 'react';
import logo from './logo.svg';
import './App.jsx';
import Seat from './SeatSelector'
import About from './About';
function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="IOHome."><img src="/Ima" alt="Logo" style={{ widows: "80px;px" }} href="IOHome.html" /></a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">Hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">About iO</a>
            </li>
          </ul>
        </nav>
        
        
      </div>
      {/* <Seat /> */}
      <About/>

    </div>



  );
}

export default App;
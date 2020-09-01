import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contactform.js'

import Seat from './SeatSelector.jsx'
function App() {
  return (
    <BrowserRouter>
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/">Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">Hello</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=""></a>
            </li>
          </ul>
        </nav>
        
        <header className="App-header">
        <Contact />
      </header>
      </div>
    </div>
</BrowserRouter>
  );
}
export default App;

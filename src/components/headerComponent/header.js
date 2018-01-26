import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>


        <div className="logo">
          <h1>ian.culley</h1>
        </div>
        <nav>
         <ul>
          <li>NYC</li>
         </ul>
        </nav>
        <div className="ring-container">
          <div className="ringring"></div>
          <div className="circle"></div>
        </div>

      </header>


    );
  }
}

export default Header;

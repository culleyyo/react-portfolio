import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Bkvideo from './components/bkvideoComponent/bkVideo';
//includes
import './Assets/CSS/default.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <Homepage />

          <Bkvideo />

        <Footer />

      </div>
    );
  }
}

export default App;

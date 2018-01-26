import React, { Component } from 'react';

class Bkvideo extends Component {
  render() {
    return (
      <div className="vHeader container">
        <div className="videoWrap">
        <video id="background-video" className="fullVid" loop autoPlay muted >
          <source src="http://ianculley.com/test_videos/test_bg_vid.mp4" type="video/mp4" />
          <source src="http://ianculley.com/test_videos/test_bg_vid.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        </div>
          <div className="headerOverlay"></div>
      </div>
    );
  }
}

export default Bkvideo;

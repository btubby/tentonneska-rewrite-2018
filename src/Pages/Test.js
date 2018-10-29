import React, { Component } from "react";

import backgroundImage from "../Assets/will.jpeg";
// import logo from "../Assets/fuse.mp4";

// const Fuse = styled.div`
//   position: absolute;
//   top: 30%;
//   left: 30%;
//   z-index: 200;
// `;

class Test extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }
  render() {
    return (
      <div>
      <center>
        <div className="image_wrapper">
        
          <div className="events_container" />
          <img
            src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
            class="responsive"
            alt=""
          />
          
        </div>
      </center>
    </div>

    );
  }
}
export default Test;

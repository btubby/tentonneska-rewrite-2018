import React from "react";
// import ReactPlayer from "react-player";
// import styled from "styled-components";

import backgroundImage from "../Assets/will.jpeg";
// import logo from "../Assets/fuse.mp4";

// const Fuse = styled.div`
//   position: absolute;
//   top: 30%;
//   left: 30%;
//   z-index: 200;
// `;

class Test extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }

  render() {
    return (
      <div>
        <center>
          <div className="events_container" />
        </center>
      </div>
    );
  }
}
export default Test;

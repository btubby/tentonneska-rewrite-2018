import React from "react";
// import backgroundImage from "../Assets/ttsBomb.jpg";
// import Iframe from "react-iframe";

import will1 from "../Assets/tts_will_1.jpg";

class Geezer extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "black";
    // document.body.style.backgroundImage = `url(${backgroundImage})`;
  }
  render() {
    return (
      <div className="events_container">
        <div className="swatch">GEEZER</div>
        <img src={will1} width="20%" alt="" />
        <p>
          <div>
            <audio
              ref="audio_tag"
              src="http://tubbycreative.com/sounds/sounds/PeteSamples/Growl02.wav"
              controls
            />
          </div>
        </p>
        {/* https://stackoverflow.com/questions/33913737/inserting-the-iframe-into-react-component  */}
        {/* <Iframe
          url="http://tubbycreative.com/sounds/"
          width="84%"
          height="1000px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        /> */}
      </div>
    );
  }
}

export default Geezer;

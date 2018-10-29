import React, { Component } from "react";
import { database } from "../firebase";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";

class Newsletter extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
          <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        </Helmet>
        <center>
        <div className="events_container">
          <div className="swatch">
<p>
  <img width='90%' src='http://tubbycreative.com/tts/headers/Bookdaband.png' />
<br/>
OR GET IN TOUCH VIA OUR <a target='_blank' href='https://www.facebook.com/TenTonneSka'>FACEBOOK PAGE
</a></p>
          <div className="image_wrapper">
            {/* <img
            src="http://tubbycreative.com/tts/img/TTS1640.jpg"
            class="responsive"
            alt=""
            /> */}

            </div>
        
            <div className="fuse-wrapper">
              <ReactPlayer
                src="http://tubbycreative.com/tts/img/TTS1640.jpg"
                class="responsive"
                loop
                width="40%"
                height="40%"
              />
            </div>
          </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Newsletter;

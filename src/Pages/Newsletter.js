import React, { Component } from "react";
//import { database } from "../firebase";
import ReactPlayer from "react-player";

class Newsletter extends Component {
  render() {
    return (
      <div>
        <center>
          <div className="image_wrapper">
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <img
              src="http://tubbycreative.com/tts/img/TTS1640Old.jpg"
              class="responsive"
            />
            <div className="fuse-wrapper">
              <ReactPlayer
                url="http://tubbycreative.com/tts/fuse.mp4" // url="../Assets/fuse.mp4"
                playing
                loop
                width="40%"
                height="40%"
              />
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Newsletter;

import React, { Component } from "react";
import ReactPlayer from "react-player";

class Newsletter extends Component {
  componentDidMount() {
    console.log("mounted");
  }
  onDuration() {
    console.log("video ready");
  }
  render() {
    return (
      <div>
        <center>
          <div className="media_container">
            <div className="player-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=o8QYcI6x6M0"
                // playing
                className="react-player"
                width="100%"
                height="100%"
                onReady={this.onDuration}
              />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=3U0X5fQUBF8"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=tYUKrGvnQ7E"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://soundcloud.com/willtubby/here-i-come-ten-tonne-dub"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://vimeo.com/80788400"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://vimeo.com/78549816"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
            {/* <div className="player-wrapper">
              <ReactPlayer
                url="https://www.facebook.com/TenTonneSka/videos/1505168612872119/"
                className="react-player"
                width="100%"
                height="100%"
              />
            </div> */}
          </div>
        </center>
      </div>
    );
  }
}

export default Newsletter;

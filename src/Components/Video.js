import React from "react";
import ReactPlayer from "react-player";
import Loader from "../Components/Loader";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.successState = this.successState.bind(this);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : null}

        <div className="player-wrapper">
          <ReactPlayer
            onReady={this.successState}
            url={this.props.url}
            className="react-player"
            width="100%"
            height="100%"
            // preload='true'
          />
        </div>
      </div>
    );
  }

  successState() {
    this.setState({ loading: false });
  }
}

export default Video;

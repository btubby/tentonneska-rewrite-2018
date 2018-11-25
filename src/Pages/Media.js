import React, { Component } from "react";
import Loader from "../Assets/TTSTurntable.png";
import Video from "../Components/Video";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    // this.setState({ loading: false });
  }

  render() {
    return this.state.loading ? (
      <div class="loading">
        <img id="spinner" alt="" src={Loader} />
      </div>
    ) : (
      <div>
        <center>
          <div className="media_container">
            <Video url="https://www.youtube.com/watch?v=o8QYcI6x6M0" />
            <Video url="https://www.youtube.com/watch?v=1IetxWvCFd4" />
            <Video url="https://www.youtube.com/watch?v=Y7cyD3hL3Kc" />
          </div>
        </center>
      </div>
    );
  }
}

export default Newsletter;

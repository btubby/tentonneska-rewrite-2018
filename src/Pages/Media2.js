import React, { Component } from "react";
import Loader from "../Assets/TTSTurntable.png";
// import Video from "../Components/Video";
import styled from "styled-components";
// import ReactGA from "react-ga";

import ReactPlayer from "react-player";

// import screenfull from "screenfull";

// function initializeReactGA() {
//   ReactGA.initialize("UA-131014502-1");
//   ReactGA.pageview("/media");
// }

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
  color: black;
  padding-top: 2vw;
`;

class Newsletter extends Component {
  state = {
    loading: false,
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };
  playPause = () => {
    this.setState({ playing: !this.state.playing });
  };
  stop = () => {
    this.setState({ url: null, playing: false });
  };
  toggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };
  toggleLight = () => {
    this.setState({ light: !this.state.light });
  };
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };
  togglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };
  onPlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };
  onEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };
  onDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };
  onPause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };
  onSeekMouseDown = e => {
    this.setState({ seeking: true });
  };
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };
  onSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };
  onProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  onEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };
  onDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };
  onClickFullscreen = () => {
    // screenfull.request(findDOMNode(this.player));
  };
  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };
  ref = player => {
    this.player = player;
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: false
  //   };
  // }
  // componentDidMount() {
  //   initializeReactGA();
  // }

  render() {
    console.log("MEDIA2");
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      playbackRate,
      pip
    } = this.state;

    return this.state.loading ? (
      <div class="loading">
        <img id="spinner" alt="" src={Loader} />
      </div>
    ) : (
      <div>
        <center>
          <Container>
            <div className="player-wrapper">
              <ReactPlayer
                ref={this.ref}
                className="react-player"
                width="100%"
                height="100%"
                url={url}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log("onReady")}
                onStart={() => console.log("onStart")}
                onPlay={this.onPlay}
                onEnablePIP={this.onEnablePIP}
                onDisablePIP={this.onDisablePIP}
                onPause={this.onPause}
                onBuffer={() => console.log("onBuffer")}
                onSeek={e => console.log("onSeek", e)}
                onEnded={this.onEnded}
                onError={e => console.log("onError", e)}
                onProgress={this.onProgress}
                onDuration={this.onDuration}
              />
            </div>
          </Container>
        </center>
      </div>
    );
  }
}

export default Newsletter;

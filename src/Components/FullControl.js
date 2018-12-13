import React from "react";
import ReactHowler from "react-howler";

import raf from "raf"; // requestAnimationFrame polyfill
// import Button from "../components/Button";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default class FullControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
  }

  componentWillUnmount() {
    this.clearRAF();
  }

  handleToggle() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handleOnLoad() {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  }

  handleOnPlay() {
    this.setState({
      playing: true
    });
    this.renderSeekPos();
  }

  handleOnEnd() {
    this.setState({
      playing: false
    });
    this.clearRAF();
  }

  handleStop() {
    this.player.stop();
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    });
    this.renderSeekPos();
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute
    });
  }

  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  clearRAF() {
    raf.cancel(this._raf);
  }

  render() {
    return (
      <div className="full-control">
        <ReactHowler
          src={this.props.src}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={ref => (this.player = ref)}
        />
        <p>{this.state.loaded ? "Loaded" : "Loading"}</p>

        <div className="toggles">
          <label>
            Loop:
            <input
              type="checkbox"
              checked={this.state.loop}
              onChange={this.handleLoopToggle}
            />
          </label>
          <label>
            Mute:
            <input
              type="checkbox"
              checked={this.state.mute}
              onChange={this.handleMuteToggle}
            />
          </label>
        </div>

        <p>
          {"Status: "}
          {this.state.seek !== undefined ? this.state.seek.toFixed(2) : "0.00"}
          {" / "}
          {this.state.duration ? this.state.duration.toFixed(2) : "NaN"}
        </p>

        <div className="volume">
          <label>
            Volume:
            <span className="slider-container">
              <input
                type="range"
                min="0"
                max="1"
                step=".05"
                value={this.state.volume}
                onChange={e =>
                  this.setState({ volume: parseFloat(e.target.value) })
                }
                style={{ verticalAlign: "bottom" }}
              />
            </span>
            {this.state.volume.toFixed(2)}
          </label>
        </div>

        <Button onClick={this.handleToggle}>
          {this.state.playing ? "Pause" : "Play"}
        </Button>
        <Button onClick={this.handleStop}>Stop</Button>
      </div>
    );
  }
}

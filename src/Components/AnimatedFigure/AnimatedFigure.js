import React from "react";
import GifPlayer from "react-gif-player";
import styled from "styled-components";

import ReactHowler from "react-howler";

import LoaderImg from "../../Assets/TTSTurntable.png";

//https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.js
import raf from "raf"; // requestAnimationFrame polyfill

const FigureContainer = styled.div`
  // border: 1px solid black;
  // width: 30%;
`;

export default class AnimatedFigure extends React.Component {
  // on click, toggle the state of the animation AND the sound
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.playOnLoad ? true : false
    };
  }

  handlePlayToggle = () => {
    const newState = !this.state.playing;
    console.log(`LOOP:${this.props.loop}
      ${this.props.animation} handlePlayToggle -> ${
      this.state.playing
    } -> ${newState}`);

    this.setState({ playing: newState });
  };
  handleOnLoad = () => {
    console.log("sample loaded");
    this.setState({
      loaded: true
      // duration: this.player.duration()
    });
  };
  handleOnPlay = () => {
    // console.log(`START ${this.props.sample}`);
    // this.setState({
    //   playing: true
    // });
    this.renderSeekPos();
  };
  handleOnStop = () => {
    this.setState({
      playing: false
    });
  };
  handleOnEnd = () => {
    if (!this.props.loop) {
      this.setState({
        playing: false
      });
      this.pauseGif();
    }
  };
  renderSeekPos = () => {
    this.setState({
      seek: this.player.seek()
    });
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  };
  render() {
    // if (!this.state.loaded) {
    // return <div>LOADING</div>;
    // } else {
    return (
      <FigureContainer>
        {/* <p>
          <br />
          {"Status: "}
          {this.state.seek !== undefined ? this.state.seek.toFixed(2) : "0.00"}
          {" / "}
          {this.state.duration ? this.state.duration.toFixed(2) : "NaN"}
        </p> */}
        <ReactHowler
          src={this.props.sample}
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          playing={this.props.loop ? true : this.state.playing}
          volume={this.props.volume || 1}
          mute={!this.state.playing}
          loop={this.props.loop}
          preload={true}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onStop={this.handleOnStop}
          onEnd={this.handleOnEnd}
          ref={ref => (this.player = ref)}
        />
        <GifPlayer
          gif={this.state.loaded ? this.props.animation : LoaderImg}
          still={this.props.stillFrame}
          width={this.props.width}
          onClick={this.handlePlayToggle}
          pauseRef={pause => (this.pauseGif = pause)}
          autoplay={this.props.playOnLoad}
        />
      </FigureContainer>
    );
    // }
  }
}

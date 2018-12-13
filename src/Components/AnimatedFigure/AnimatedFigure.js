import React from "react";
import GifPlayer from "react-gif-player";
import styled from "styled-components";

import ReactHowler from "react-howler";
//https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.js

const FigureContainer = styled.div`
  border: 1px solid black;
  width: 30%;
`;

export default class AnimatedFigure extends React.Component {
  // on click, toggle the state of the animation AND the sound
  constructor(props) {
    super(props);
    this.state = {
      play: true
    };
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleOnPause = this.handleOnPause.bind(this);
    this.handleOnStop = this.handleOnStop.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);

    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
  }
  // componentDidMount() {
  //   this.sample = this.props.sample
  //     ? this.props.sample
  //     : "http://tubbycreative.com/sounds/sounds/PeteBest/" +
  //       Images[Math.floor(Math.random() * Images.length)] +
  //       ".wav";
  //   // console.log("passed in:", this.props.sample);
  //   console.log("sample:", this.sample);
  // }
  toggleAnimation() {
    // console.log("toggleAnimation, state:", this.state.play);
    this.player.stop();
    this.setState({ play: !this.state.play });
  }
  handleOnPlay() {
    // this.setState({
    //   play: true
    // });
    this.renderSeekPos();
  }
  handleOnPause() {
    console.log("PAUSE");
  }
  handleOnStop() {
    console.log("STOP");
  }
  handleOnEnd() {
    if (!this.props.loop) {
      console.log("Sample END");
      this.pauseGif();
      this.toggleAnimation();
    }
  }
  renderSeekPos() {
    this.setState({
      seek: this.player.seek()
    });
    // if (this.state.playing) {
    //   this._raf = raf(this.renderSeekPos);
    // }
  }
  render() {
    return (
      <FigureContainer>
        <ReactHowler
          src={this.props.sample}
          // src="http://goldfirestudios.com/proj/howlerjs/sound.ogg"
          playing={!this.state.play}
          loop={this.props.loop}
          preload={true}
          onPlay={this.handleOnPlay}
          // onPause={this.handleOnPause}
          // onStop={this.handleOnStop}
          onEnd={this.handleOnEnd}
          // sprite={[100, 1000, true]}
          ref={ref => (this.player = ref)}
        />
        <GifPlayer
          gif={this.props.animation}
          still={this.props.stillFrame}
          width={this.props.width}
          onClick={this.toggleAnimation}
          pauseRef={pause => (this.pauseGif = pause)}
        />
      </FigureContainer>
    );
  }
}

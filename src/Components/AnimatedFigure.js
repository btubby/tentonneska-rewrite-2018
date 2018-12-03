import React from "react";
import GifPlayer from "react-gif-player";
import styled from "styled-components";

const Images = [
  "aaaah02",
  "AhAoow01",
  "BBQ01",
  "Bim01",
  "Bim03",
  "Bo01",
  "Charliesays01",
  "Chicadomloop2",
  "Exterminate02",
  "Growl04",
  "Hahaha02",
  "Hueh01",
  "Huthuthut",
  "Letitgo01",
  "Lithium",
  "Magnificent03",
  "Model01",
  "Nyahhuhah01",
  "Ofra01",
  "Ohnono",
  "OnlyOne03",
  "Ooooo02",
  "Revival02",
  "Ribbit01",
  "Rise01",
  "Runin03",
  "ThisGeneration01",
  "TTSka02",
  "TTSkaDalek",
  "Uhaow01",
  "Waah01",
  "Wicked03",
  "Yeah02",
  "Yoot11"
];
const FigureContainer = styled.div`
  // border: 1px solid black;
  flex-grow: 2;
`;

export default class AnimatedFigure extends React.Component {
  // on click, toggle the state of the animation AND the sound
  constructor(props) {
    super(props);
    this.state = { play: true };
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }
  componentDidMount() {
    this.url =
      "http://tubbycreative.com/sounds/sounds/PeteBest/" +
      Images[Math.floor(Math.random() * Images.length)] +
      ".wav";

    // this.audio = new Audio(this.url);
    this.audio = new Audio(this.props.sample ? this.props.sample : this.url);
    this.audio.volume = this.props.volume ? this.props.volume : 1.0;
    console.log("sample:", this.props.sample);
    this.audio.load(this.props.sample);

    var self = this;
    this.audio.onended = event => {
      console.log("finished plackback ", self.url);

      if (this.props.loop) {
        self.audio.currentTime = 0;
        self.audio.play();
      } else {
        this.pauseGif(true);
        this.setState({ play: !this.state.play });
      }
    };

    // this.audio.onerror = () => {
    //   console.log("Sound file SoundFileURL.mp3 failed to load.");
    // };
  }
  toggleAnimation() {
    console.log("toggleAnimation, state:", this.state.play);
    this.setState({ play: !this.state.play });

    if (this.state.play) {
      console.log("playing");
      this.audio.play();
    } else {
      console.log("stopped");
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    // this.state.play ? this.audio.play() : this.audio.pause();
  }
  render() {
    return (
      <FigureContainer>
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

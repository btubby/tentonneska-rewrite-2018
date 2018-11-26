import React from "react";
import Peter from "../Assets/pete_animated.gif";
import Still from "../Assets/pete_still.gif";

import styled from "styled-components";
import GifPlayer from "react-gif-player";

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
class Pete extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }

  constructor(props) {
    super(props);
    this.state = { play: true };
    this.url = "http://tubbycreative.com/sounds/sounds/PeteSamples/Growl02.wav";
    this.audio = new Audio(this.url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
    console.log("CLICK");
  }

  render() {
    return (
      <Container>
        <GifPlayer
          gif={Peter}
          still={Still}
          width="30%"
          onClick={this.togglePlay}
        />
      </Container>
    );
  }
}
export default Pete;

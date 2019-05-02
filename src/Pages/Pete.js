import React from "react";

import AnimatedFigure from "../Components/AnimatedFigure/AnimatedFigure";

import Pete from "../Assets/TTSWODPete.png";
import PeteStill from "../Assets/TTSWODPete_still.png";


import Will from "../Assets/TTSWODWill.png";
import WillStill from "../Assets/TTSWODWill_still.png";

import Luke from "../Assets/TTSWODLuke.png";
import LukeStill from "../Assets/TTSWODLuke_still.png";

  
import Clive from "../Assets/TTSWODClive.png";
import CliveStill from "../Assets/TTSWODClive_still.png";

import ButtonImage from "../Assets/TTSWODbutton.png";


import Drums from "../Assets/wodd.wav";
import Guitar from "../Assets/wodg.wav";
import Bass from "../Assets/wodb.wav";
import Vocal from "../Assets/peyta.wav";

import styled from "styled-components";
// import Video from "../Components/Video";
import ReactGA from "react-ga";


import { Animated } from "react-animated-css";


function initializeReactGA() {
  ReactGA.initialize("UA-131014502-1");
  ReactGA.pageview("/geezer");
}
const ButtonContainer = styled.div`
  width: 50%;
  // border: 1px solid red;
`;
export const Button = styled.button`
  height: 3rem;
  font-size: 2rem;
  width: 40vw;
  border-radius: 30px;
  background-image: {ButtonImage}
`;
const ColouredBackround = styled.div`
  overflow: auto;
  padding-top: 5vw;
  background-image: url("http://tubbycreative.com/FigGIFs/Geeza1back.jpg");
  background-size: cover;
  height:50%;
 
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  height:50%
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const PeteSamples = [
  // "aaaah02",
  // "AhAoow01",
  // "BBQ01",
  "Bim01",
  "Bim03",
  // "Bo01",
  // "Charliesays01",
  // "Chicadomloop2",
  "Exterminate02",
  "Growl04",
  "Hahaha02",
  "Hueh01",
  "Huthuthut",
  "Letitgo01",
  "Lithium",
  // "Magnificent03",
  "Model01",
  "Nyahhuhah01",
  "Ofra01",
  "Ohnono",
  // "OnlyOne03",
  // "Ooooo02",
  // "Revival02",
  "Ribbit01",
  "Rise01",
  "Runin03",
  // "ThisGeneration01",
  "TTSka02",
  "TTSkaDalek",
  "Uhaow01",
  "Waah01",
  "Wicked03",
  "Yeah02",
  "Yoot11"
];

export default class Geezer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing_bass: false,
      playing_guitar: false,
      playing_drums: false,
    };
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url('www.tubbycreative.com/FigGIFs/TTSWODBeach.png')";
    document.body.style.backgroundImage = "url('http://tubbycreative.com/FigGIFs/Geeza1back.jpg')";
    
    initializeReactGA();

    var that = this;
    document.getElementById("butt").addEventListener('click', that.togglePlaying, false);
  }


  togglePlaying = (e) => {
    /* get the element id and do the enum things here */
    this.setState({playing_bass: !this.state.playing_bass});       
    this.setState({playing_guitar: !this.state.playing_guitar}); 
    this.setState({playing_drums: !this.state.playing_drums}); 
    
  }

  render() {
    return (
      <ColouredBackround>
          <Animated
            animationIn="slideInUp"
            animationOut="fadeOut"
            isVisible={true}
          >
         
        <FlexCol>
          <ButtonContainer>
            <img src={ButtonImage} id="butt" />
          </ButtonContainer>
          <FlexContainer>

          <AnimatedFigure
              animation={Will}
              stillFrame={WillStill}
              // width={"70%"}
              sample={Bass}
              loop={true}
              playOnLoad={this.state.playing_bass}
            />
            <AnimatedFigure
              animation={Luke}
              stillFrame={LukeStill}
              // width={"70%"}
              sample={Guitar}
              loop={true}
              playOnLoad={this.state.playing_guitar}
            />

            <AnimatedFigure
              animation={Clive}
              stillFrame={CliveStill}
              // width={"70%"}
              sample={Drums}
              loop={true}
              playOnLoad={this.state.playing_drums}
            />
          </FlexContainer>
          <FlexContainer>
            <AnimatedFigure
              animation={Pete}
              stillFrame={PeteStill}
              // width={"80%"}
              sample={Vocal}
              volume={0.3}
              loop={false}
              playOnLoad={false}
            />
            {/* {[...Array(10)].map((x, i) => (
              <AnimatedFigure
                animation={Pete}
                stillFrame={PeteStill}
                width={"80%"}
                sample={
                  "http://tubbycreative.com/sounds/sounds/PeteBest/" +
                  PeteSamples[Math.floor(Math.random() * PeteSamples.length)] +
                  ".wav"
                }
                volume={0.3}
                loop={false}
                playOnLoad={false}
              />
            ))} */}
          </FlexContainer>
        </FlexCol>
        </Animated>
        {/* <Video url="https://www.youtube.com/watch?v=5xVymfmXKko" /> */}
      </ColouredBackround>
    );
  }
}

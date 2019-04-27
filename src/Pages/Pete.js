import React from "react";

import AnimatedFigure from "../Components/AnimatedFigure/AnimatedFigure";

import Pete from "../Assets/TTSAnimationColPete.gif";
import PeteStill from "../Assets/TTSAnimationColPete_still.gif";

import Will from "../Assets/TTSAnimationColWill.gif";
import WillStill from "../Assets/TTSAnimationColWill_still.gif";

import Luke from "../Assets/TTSAnimationColLuke.gif";
import LukeStill from "../Assets/TTSAnimationColLuke_still.gif";

import Clive from "../Assets/clive2.gif";
import CliveStill from "../Assets/clive2_still.gif";

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

const ColouredBackround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: #ffc703;
  padding-top: 20vw;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
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
  componentDidMount() {
    initializeReactGA();
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
          <FlexContainer>
            <AnimatedFigure
              animation={Will}
              stillFrame={WillStill}
              width={"50%"}
              sample={Bass}
              loop={true}
              playOnLoad={true}
            />
            <AnimatedFigure
              animation={Luke}
              stillFrame={LukeStill}
              width={"50%"}
              sample={Guitar}
              loop={true}
              playOnLoad={true}
            />

            <AnimatedFigure
              animation={Clive}
              stillFrame={CliveStill}
              width={"100%"}
              sample={Drums}
              loop={true}
              playOnLoad={true}
            />
          </FlexContainer>
          <FlexContainer>
            <AnimatedFigure
              animation={Pete}
              stillFrame={PeteStill}
              width={"80%"}
              sample={Vocal}
              volume={0.3}
              loop={false}
              playOnLoad={false}
            />
            {[...Array(10)].map((x, i) => (
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
            ))}
          </FlexContainer>
        </FlexCol>
        </Animated>
        {/* <Video url="https://www.youtube.com/watch?v=5xVymfmXKko" /> */}
      </ColouredBackround>
    );
  }
}

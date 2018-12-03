import React from "react";

import AnimatedFigure from "../Components/AnimatedFigure";
import Peter from "../Assets/pete_animated.gif";
import PeterStill from "../Assets/pete_still.gif";

import Will from "../Assets/will_animated.gif";
import WillStill from "../Assets/will_still2.gif";

import Luke from "../Assets/luke2.gif";
import LukeStill from "../Assets/luke2_still.gif";

import Clive from "../Assets/clive.gif";
import CliveStill from "../Assets/clive_still.gif";

//import Bass from "../Assets/WODloopBASS.mp3";
import Bass from "../Assets/wodbass.mp3";

import Drums from "../Assets/fulldrums.mp3";

import Guitar from "../Assets/wodguit.mp3";

import styled from "styled-components";
import Video from "../Components/Video";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: lime;
  padding-top: 20vw;
`;
const FlexContainer = styled.div`
  display: flex;
  width: 80%;
  // padding-left: 10%;
  padding-right: 10%;
  // background: red;
`;

class Pete extends React.Component {
  render() {
    return (
      <Container>
        <FlexContainer>
          <AnimatedFigure
            animation={Will}
            stillFrame={WillStill}
            sample={Bass}
            width={"150%"}
            loop={true}
          />
          <AnimatedFigure
            animation={Peter}
            stillFrame={PeterStill}
            width={"130%"}
            volume={0.3}
          />

          <AnimatedFigure
            animation={Luke}
            stillFrame={LukeStill}
            width={"150%"}
            sample={Guitar}
            loop={true}
          />
          <AnimatedFigure
            animation={Clive}
            stillFrame={CliveStill}
            width={"180%"}
            sample={Drums}
            loop={true}
          />
        </FlexContainer>
        {/* <Video url="https://www.youtube.com/watch?v=5xVymfmXKko" /> */}
      </Container>
    );
  }
}
export default Pete;

//   -rw----r--. 1 user_1081867768 vweb 158170 Nov 28  2017 Aay01.wav
// -rw----r--. 1 user_1081867768 vweb 211574 Nov 28  2017 AhAoow01.wav
// -rw----r--. 1 user_1081867768 vweb 155334 Nov 28  2017 Bim01.wav
// -rw----r--. 1 user_1081867768 vweb 129254 Nov 28  2017 Bim02.wav
// -rw----r--. 1 user_1081867768 vweb 210528 Nov 28  2017 Bo01.wav
// -rw----r--. 1 user_1081867768 vweb 177412 Nov 28  2017 Growl01.wav
// -rw----r--. 1 user_1081867768 vweb 886550 Nov 28  2017 Chikidup01.wav
// -rw----r--. 1 user_1081867768 vweb 260206 Nov 28  2017 Growl02.wav
// -rw----r--. 1 user_1081867768 vweb 206670 Nov 28  2017 Growl03.wav
// -rw----r--. 1 user_1081867768 vweb 285734 Nov 28  2017 Growl04.wav
// -rw----r--. 1 user_1081867768 vweb 297562 Nov 28  2017 Number101.wav
// -rw----r--. 1 user_1081867768 vweb 464436 Nov 28  2017 Ohnono.wav
// -rw----r--. 1 user_1081867768 vweb 158176 Nov 28  2017 Ribbit01.wav
// -rw----r--. 1 user_1081867768 vweb 464436 Nov 28  2017 Ohnono02.wav
// -rw----r--. 1 user_1081867768 vweb 137756 Nov 28  2017 Wicked01.wav
// -rw----r--. 1 user_1081867768 vweb 609326 Nov 28  2017 Rise01.wav
// -rw----r--. 1 user_1081867768 vweb 190798 Nov 28  2017 Yeah01.wav
// -rw----r--. 1 user_1081867768 vweb 174096 Nov 28  2017 Yeah02.wav
// -rw----r--. 1 user_1081867768 vweb 166376 Nov 28  2017 Yeah03.wav
// -rw----r--. 1 user_1081867768 vweb 199492 Nov 28  2017 Yeah04.wav
// -rw----r--. 1 user_1081867768 vweb 303474 Nov 28  2017 Yeah05.wav
// -rw----r--. 1 user_1081867768 vweb 297562 Nov 28  2017 Yoot01.wav
// -rw----r--. 1 user_1081867768 vweb 438998 Nov 28  2017 Yoot02.wav

//////sounds/sounds/PeteBest
// -rw----r--. 1 user_1081867768 vweb  211574 Dec  1  2017 AhAoow01.wav
// -rw----r--. 1 user_1081867768 vweb 1303704 Dec  1  2017 aaaah02.wav
// -rw----r--. 1 user_1081867768 vweb  718344 Dec  1  2017 BBQ01.wav
// -rw----r--. 1 user_1081867768 vweb  155334 Dec  1  2017 Bim01.wav
// -rw----r--. 1 user_1081867768 vweb  166924 Dec  1  2017 Bim03.wav
// -rw----r--. 1 user_1081867768 vweb  210528 Dec  1  2017 Bo01.wav
// -rw----r--. 1 user_1081867768 vweb  431182 Dec  1  2017 Chicadomloop2.wav
// -rw----r--. 1 user_1081867768 vweb  353580 Dec  1  2017 Exterminate02.wav
// -rw----r--. 1 user_1081867768 vweb 1380700 Dec  1  2017 Charliesays01.wav
// -rw----r--. 1 user_1081867768 vweb  285734 Dec  1  2017 Growl04.wav
// -rw----r--. 1 user_1081867768 vweb  436470 Dec  1  2017 Hahaha02.wav
// -rw----r--. 1 user_1081867768 vweb  195538 Dec  1  2017 Hueh01.wav
// -rw----r--. 1 user_1081867768 vweb  343006 Dec  1  2017 Letitgo01.wav
// -rw----r--. 1 user_1081867768 vweb  436476 Dec  1  2017 Huthuthut.wav
// -rw----r--. 1 user_1081867768 vweb  861852 Dec  1  2017 Lithium.wav
// -rw----r--. 1 user_1081867768 vweb  986046 Dec  1  2017 Model01.wav
// -rw----r--. 1 user_1081867768 vweb  436470 Dec  1  2017 Nyahhuhah01.wav
// -rw----r--. 1 user_1081867768 vweb 2451520 Dec  1  2017 Magnificent03.wav
// -rw----r--. 1 user_1081867768 vweb  464436 Dec  1  2017 Ohnono.wav
// -rw----r--. 1 user_1081867768 vweb  928088 Dec  1  2017 Ofra01.wav
// -rw----r--. 1 user_1081867768 vweb  820874 Dec  1  2017 OnlyOne03.wav
// -rw----r--. 1 user_1081867768 vweb 1026894 Dec  1  2017 Revival02.wav
// -rw----r--. 1 user_1081867768 vweb  158176 Dec  1  2017 Ribbit01.wav
// -rw----r--. 1 user_1081867768 vweb 1450114 Dec  1  2017 Ooooo02.wav
// -rw----r--. 1 user_1081867768 vweb  609326 Dec  1  2017 Rise01.wav
// -rw----r--. 1 user_1081867768 vweb  219498 Dec  1  2017 Runin03.wav
// -rw----r--. 1 user_1081867768 vweb 1491098 Dec  1  2017 ThisGeneration01.wav
// -rw----r--. 1 user_1081867768 vweb  823216 Dec  1  2017 TTSka02.wav
// -rw----r--. 1 user_1081867768 vweb  686574 Dec  1  2017 TTSkaDalek.wav
// -rw----r--. 1 user_1081867768 vweb  298848 Dec  1  2017 Uhaow01.wav
// -rw----r--. 1 user_1081867768 vweb  157388 Dec  1  2017 Waah01.wav
// -rw----r--. 1 user_1081867768 vweb  500314 Dec  1  2017 Wicked03.wav
// -rw----r--. 1 user_1081867768 vweb  174096 Dec  1  2017 Yeah02.wav
// -rw----r--. 1 user_1081867768 vweb  580350 Dec  1  2017 Yoot11.wav

import React from "react";
import styled from "styled-components";
import FullControl from "../Components/FullControl";

const ColouredBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: red;
  padding-top: 20vw;
`;

export default class Pete2 extends React.Component {
  render() {
    return (
      <ColouredBack>
        <FullControl src="http://tubbycreative.com/loops/wodguit.mp3" />
        <hr />
        <FullControl src="http://goldfirestudios.com/proj/howlerjs/sound.ogg" />
      </ColouredBack>
    );
  }
}

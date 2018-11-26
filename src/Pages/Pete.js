import React from "react";
import Peter from "../Assets/pete_animated.gif";

import styled from "styled-components";

const LightContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 4px;
  padding-top: 10px;
  padding-right: 30px;
  padding-bottom: 10px;
  padding-left: 30px;
  color: white;
  background-color: white;
  width: 80%;
`;
class Pete extends React.Component {
  render() {
    return (
      <div className="events_container">
        <LightContainer>
          <img src={Peter} alt="" width="50%" />
        </LightContainer>
        <div />
      </div>
    );
  }
}
export default Pete;

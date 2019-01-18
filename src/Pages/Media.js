import React, { Component } from "react";
import Loader from "../Assets/TTSTurntable.png";
import Video from "../Components/Video";
import styled from "styled-components";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-131014502-1");
  ReactGA.pageview("/media");
}

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
  color: black;
  padding-top: 2vw;
`;

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    initializeReactGA();
  }

  render() {
    return this.state.loading ? (
      <div class="loading">
        <img id="spinner" alt="" src={Loader} />
      </div>
    ) : (
      <div>
        <center>
          <Container>
            {/* <Animated
              animationIn="slideInUp"
              animationOut="fadeOut"
              isVisible={true}
            > */}
            <Video url="https://www.youtube.com/watch?v=o8QYcI6x6M0" />
            <Video url="https://www.youtube.com/watch?v=1IetxWvCFd4" />
            <Video url="https://www.youtube.com/watch?v=V_8X1cfaI0o" />
            {/* </Animated> */}
          </Container>
        </center>
      </div>
    );
  }
}

export default Newsletter;

import React, { Component } from "react";
import Loader from "../Assets/TTSTurntable.png";
import Video from "../Components/Video";
import styled from "styled-components";
// import { Animated } from "react-animated-css";

const Container = styled.div`
  margin: auto;
  width: 80%;
  /* border: 7px solid red; */
  padding: 10px;
  /* background-color: white; */
  color: black;
  padding-top: 200px;
`;

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    // this.setState({ loading: false });
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
            <Video url="https://www.youtube.com/watch?v=Y7cyD3hL3Kc" />
            {/* </Animated> */}
          </Container>
        </center>
      </div>
    );
  }
}

export default Newsletter;

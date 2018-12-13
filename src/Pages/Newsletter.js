import React, { Component } from "react";
import { Helmet } from "react-helmet";
import CaptureEmailAddress from "../Components/CaptureEmailAddress";
import styled from "styled-components";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-131014502-1");
  ReactGA.pageview("/contact");
}

const Red = styled.div`
  color: red;
  font-size: 85%;
  padding-bottom: 30px;
`;
const Yellow = styled.div`
  color: #ffc703;
  font-size: 75%;
`;
const Green = styled.span`
  color: green;
  font-size: 75%;
`;
const FB = styled.a`
  text-decoration: none;
  color: #ffc703;
  font-size: 75%;
`;
const Wrapper = styled.div`
  // border: 1px solid white;
  padding-top: 30px;
  padding-bottom: 50px;
`;

class Newsletter extends Component {
  componentDidMount() {
    initializeReactGA();
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska</title>
        </Helmet>

        <center>
          <div className="events_container">
            <div className="next swatch">
              <Red>BOOKINGS 07980 743077</Red>
              <Wrapper>
                <Yellow>ENTER YOUR EMAIL TO KEEP IN TOUCH</Yellow>
                <CaptureEmailAddress />
                {/* <img width='70%' src='http://tubbycreative.com/tts/headers/Bookdaband.png' /> */}
              </Wrapper>
              <Green>FIND US ON </Green>
              <FB
                target="_blank"
                href="https://www.facebook.com/TenTonneSka"
                rel="noopener noreferrer"
              >
                FACEBOOK
              </FB>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Newsletter;

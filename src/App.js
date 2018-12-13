import React, { Component } from "react";
import { Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Newsletter from "./Pages/Newsletter";
import Geezer from "./Pages/Geezer";
import Pete from "./Pages/Pete";
import Pete2 from "./Pages/Pete2";

import styled from "styled-components";
import { Helmet } from "react-helmet";

const Header = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  height: 77px;
  width: 100%;
  z-index: 100;
  opacity: 1;
`;
const PageContainer = styled.div`
  position: relative;
  top: 78px;
  width: 100%;
  border: red;
`;
const BestBand = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  position: absolute;
  top: 27px;
  left: 20px;
  z-index: 200;
  font-weight: bold;
  color: white;
  @media (min-width: 768px) {
    /* background: mediumseagreen; */
    color: white;
    font-size: 25px;
  }
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: yellow;
    }
  }
`;

const Images = [
  "http://tubbycreative.com/TTSbacking0.jpg",
  "http://tubbycreative.com/TTSbacking1.jpg",
  "http://tubbycreative.com/TTSbacking2.jpg",
  "http://tubbycreative.com/TTSbacking3.jpg",
  "http://tubbycreative.com/TTSbacking4.jpg",
  "http://tubbycreative.com/TTSbacking5.jpg",
  "http://tubbycreative.com/TTSbacking6.jpg",
  "http://tubbycreative.com/TTSbacking7.jpg",
  "http://tubbycreative.com/tts/TTSTuesFin.jpg"
];

const Container = styled.div`
  // background-image: url('${
    Images[Math.floor(Math.random() * Images.length)]
  }');
`;

export default class App extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${
      Images[Math.floor(Math.random() * Images.length)]
    })`;
    document.title = "Ten Tonne Ska - THE BEST SKA AND REGGAE IN SE26";
  }

  render() {
    return (
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ten Tonne Ska - THE BEST SKA AND REGGAE IN SE26</title>
          <link
            href="https://fonts.googleapis.com/css?family=Oswald"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Helmet>

        <Sidebar />
        <main id="page-wrap">
          <Header>
            <BestBand>
              <a href="/">THE BEST SKA AND REGGAE IN SE26</a>
            </BestBand>
          </Header>
          <PageContainer>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/media"} component={Media} />
            <Route exact path={"/news"} component={Newsletter} />
            <Route exact path={"/geezer"} component={Geezer} />
            <Route exact path={"/pete"} component={Pete} />
            <Route exact path={"/pete2"} component={Pete2} />
          </PageContainer>
        </main>
      </Container>
    );
  }
}
